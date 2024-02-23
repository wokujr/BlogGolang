package controllers

import (
	"ReactGo/src/controllers/helper"
	"ReactGo/src/database"
	"ReactGo/src/models"
	"errors"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
	"math"
	"math/rand"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

var baseURL string

func generateRandomName() string {
	randomByte := make([]byte, 16)
	_, err := rand.Read(randomByte)
	if err != nil {
		return fmt.Sprintf("random%d", time.Now().UnixNano())
	}
	return fmt.Sprintf("%x", randomByte)
}

func CreatePost(c *fiber.Ctx) error {
	form, err := c.MultipartForm()
	if err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid request")
	}

	files := form.File["image"]
	var posts []models.Blog // slice to hold created posts

	// Check if the directory exists, create it if not
	uploadDir := "./uploadImage"
	if _, err := os.Stat(uploadDir); os.IsNotExist(err) {
		err := os.Mkdir(uploadDir, 0755) // adjust permissions as needed
		if err != nil {
			return helper.ErrorResponse(c, 500, err, "Failed to create upload directory")
		}
	}

	for _, file := range files {
		// Generate unique name
		randomName := generateRandomName() + filepath.Ext(file.Filename)
		if err != nil {
			return helper.ErrorResponse(c, 500, err, "Failed to generate random name")
		}

		fileName := filepath.Join(uploadDir, randomName) // corrected directory name
		// Save the file to imageUpload directory
		if err := c.SaveFile(file, fileName); err != nil {
			return helper.ErrorResponse(c, 400, err, "Failed to upload")
		}

		// Create new post
		post := models.Blog{
			Title:    form.Value["title"][0],
			Post:     form.Value["post"][0],
			Image:    fileName,
			CreateAt: time.Now(),
			UpdateAt: time.Now(),
		}
		database.DB.Create(&post)
		posts = append(posts, post) // append created post to slice
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Post created successfully",
		"status":  200,
		"data":    posts,
	})
}

// Posts get all blog post with 5 max per page
func Posts(c *fiber.Ctx) error {
	var limit = 5
	page, _ := strconv.Atoi(c.Query("page", "1"))
	var blogs []models.Blog
	offset := (page - 1) * limit
	var total int64

	//retrieve records
	result := database.DB.Offset(offset).Limit(limit).Find(&blogs)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": result.Error.Error(),
			"status":  500,
		})
	}

	//count total records
	database.DB.Model(&models.Blog{}).Count(&total)
	lastPage := int(math.Ceil(float64(total) / float64(limit)))

	//check if next page beyond limit
	nextPageEmpty := len(blogs) < limit
	if nextPageEmpty && page > lastPage {
		return c.Status(404).JSON(fiber.Map{
			"message": "Page not found",
			"status":  400,
		})
	}

	// Update each blog Image field with the full image URL
	for i := range blogs {
		blogs[i].Image = baseURL + "/" + blogs[i].Image
	}

	return c.Status(200).JSON(fiber.Map{
		"data": blogs,
		"meta": fiber.Map{
			"page":       page,
			"total_post": total,
			"last_page":  lastPage,
		},
	})
}

// GetPost get a single blog post
func GetPost(c *fiber.Ctx) error {
	var post models.Blog

	//Parse post ID from request parameter
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error":   "Invalid Post Id",
			"message": err.Error(),
		})
	}

	//Find post by id in the database
	if err := database.DB.First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// Post not found, return 404 Not Found response
			return c.Status(404).JSON(fiber.Map{
				"error":   "Post not found",
				"message": err.Error(),
			})
		}
		// if another database error, it will return 500
		return c.Status(500).JSON(fiber.Map{
			"error":   "Failed to fetch",
			"message": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data":   post,
		"status": 200,
	})
}

// UpdatePost update blog posts
func UpdatePost(c *fiber.Ctx) error {
	id, err := helper.ParsePostID(c)
	if err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid post Id")
	}

	//Retrieve post by id
	post, err := helper.GetPostByID(id)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return helper.ErrorResponse(c, 404, err, "Post not found")
		}
		return helper.ErrorResponse(c, 500, err, "Failed to fetch post data")
	}

	var postData models.Blog
	if err := c.BodyParser(&postData); err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid request")
	}

	post.Title = postData.Title
	post.Post = postData.Post
	post.Image = postData.Image
	post.Tags = postData.Tags

	if err := database.DB.Save(&post).Error; err != nil {
		return helper.ErrorResponse(c, 500, err, "Internal server error")
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Update successfully",
		"status":  200,
		"data":    post,
	})
}

// SearchPost function that look for post that match from title and post body
func SearchPost(c *fiber.Ctx) error {
	//get the search query from request query parameter
	query := c.Query("s") //s, stand for search
	if query == "" {
		return helper.ErrorResponse(c, 400, nil, "Search query is required")
	}

	//Perform a case-sensitive post that containing search query string
	var posts []models.Blog
	if err := database.DB.Where("title ILIKE ? OR post ILIKE ?", "%"+query+"%", "%"+query+"%").Find(&posts).Error; err != nil {
		return helper.ErrorResponse(c, 404, err, "Failed to search post")
	}
	return c.Status(200).JSON(fiber.Map{
		"message": "Search result",
		"status":  200,
		"data":    posts,
	})
}

// SoftDelete blog post
func SoftDelete(c *fiber.Ctx) error {
	var post models.Blog

	//parse post id from request parameters
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid Id")
	}

	//First post ID in the database
	if err := database.DB.First(&post, id).Error; err != nil {
		// if post not found
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return helper.ErrorResponse(c, 404, err, "Post not found")
		}
		return helper.ErrorResponse(c, 500, err, "Failed to Fetch data")
	}

	//soft delete the post by setting DeletedAt field
	if err := database.DB.Delete(&post).Error; err != nil {
		return helper.ErrorResponse(c, 500, err, "Failed to delete data")
	}

	//Return success response
	return c.Status(200).JSON(fiber.Map{
		"message": "Delete successfully",
		"status":  200,
	})
}

// PermanentDeletePost permanently delete post
func PermanentDeletePost(c *fiber.Ctx) error {
	var post models.Blog

	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid Id")
	}

	if err := database.DB.Unscoped().First(&post, id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// Post not found, return 404 Not Found response
			return helper.ErrorResponse(c, 404, err, "Post not found")
		}
		// Other database error occurred, return 500 Internal Server Error
		return helper.ErrorResponse(c, 500, err, "Failed to fetch data")
	}
	if err := database.DB.Unscoped().Delete(&post).Error; err != nil {
		return helper.ErrorResponse(c, 400, err, "Failed to delete data")
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Post deleted Permanently",
		"status":  200,
	})
}

// RestorePost restore post that deleted with softdelete
func RestorePost(c *fiber.Ctx) error {
	id, err := helper.ParsePostID(c)
	if err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid Post id")
	}

	post, err := helper.GetPostByID(id)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return helper.ErrorResponse(c, 404, err, "Post not found")
		}
		return helper.ErrorResponse(c, 500, err, "Failed to retrieve data from database")
	}

	//check if post already restored
	if !post.DeletedAt.Valid {
		return helper.ErrorResponse(c, 400, nil, "Post Already restored")
	}

	//Restore post by clearing DeletedAt field
	if err := database.DB.Unscoped().Model(&post).Update("deleted_at", nil).Error; err != nil {
		return helper.ErrorResponse(c, 500, err, "Failed to restore data from database")
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Post restored successfully",
		"status":  200,
		"data":    post,
	})
}

func CreateCategory(c *fiber.Ctx) error {
	var category models.Category
	if err := c.BodyParser(&category); err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid category")
	}

	if err := database.DB.Create(&category).Error; err != nil {
		return helper.ErrorResponse(c, 500, err, "Failed to create Category")
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Category created successfully",
		"status":  200,
		"data":    category,
	})
}

func CreateTag(c *fiber.Ctx) error {
	var tag models.Tag
	if err := c.BodyParser(&tag); err != nil {
		return helper.ErrorResponse(c, 400, err, "Invalid Tags")
	}
	if err := database.DB.Create(&tag).Error; err != nil {
		return helper.ErrorResponse(c, 500, err, "Failed to create Tag")
	}
	return c.Status(200).JSON(fiber.Map{
		"message": "Tag created successfully",
		"status":  200,
		"data":    tag,
	})
}
