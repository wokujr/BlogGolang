package main

import (
	"ReactGo/src/database"
	"ReactGo/src/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	database.Connect()
	database.AutoMigration()

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	routes.Setup(app) //From routes.go

	// Serve static files
	app.Static("/uploadImage", "./uploadImage")

	// Start the server
	port := os.Getenv("PORT")
	log.Fatal(app.Listen(":" + port))
}
