package main

import (
	"ReactGo/src/database"
	"ReactGo/src/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	database.Connect()
	database.AutoMigration()

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	routes.Setup(app) //From routes.go

	err := app.Listen(":8000")
	if err != nil {
		return
	}
}
