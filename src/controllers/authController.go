package controllers

import (
	"ReactGo/src/database"
	"ReactGo/src/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}
	if data["password"] != data["password_confirmation"] {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Password does not match",
			"code":    400,
		})
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 12)
	user := models.User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
		Email:     data["email"],
		Password:  password,
		IsAdmin:   false,
	}

	database.DB.Create(&user)

	return c.JSON(user)
}
