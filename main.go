package main

import (
	"ReactGo/src/database"
	"ReactGo/src/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {

	database.Connect()
	database.AutoMigration()

	app := fiber.New()
	routes.Setup(app) //From routes.go

	err := app.Listen(":8000")
	if err != nil {
		return
	}
}
