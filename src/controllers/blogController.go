package controllers

import (
	"ReactGo/src/database"
	"ReactGo/src/models"
	"errors"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
	"math"
	"strconv"
	"time"
)

func CreatePost(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	post := models.Blog{
		Title: data["title"],
		Post:  data["post"],
		Image: data["image"],
	}
	post.CreateAt = time.Now()

	database.DB.Create(&post)

	return c.Status(200).JSON(fiber.Map{
		"message": "Created Successfully",
		"post":    post,
		"status":  200,
	})

}

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

	return c.Status(200).JSON(fiber.Map{
		"data": blogs,
		"meta": fiber.Map{
			"page":       page,
			"total_post": total,
			"last_page":  lastPage,
		},
	})
}

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
