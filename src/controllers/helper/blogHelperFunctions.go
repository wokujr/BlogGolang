package helper

import (
	"ReactGo/src/database"
	"ReactGo/src/models"
	"github.com/gofiber/fiber/v2"
	"strconv"
)

// ParsePostID parses the post ID from the request parameters
func ParsePostID(c *fiber.Ctx) (int, error) {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return 0, err
	}
	return id, nil
}

// GetPostByID retrieves a post by ID from the database
func GetPostByID(id int) (models.Blog, error) {
	var post models.Blog
	if err := database.DB.Unscoped().First(&post, id).Error; err != nil {
		return post, err
	}
	return post, nil
}

func ErrorResponse(c *fiber.Ctx, status int, err error, errorMessage string) error {
	return c.Status(status).JSON(fiber.Map{
		"error":   errorMessage,
		"message": err.Error(),
		"status":  status,
	})
}
