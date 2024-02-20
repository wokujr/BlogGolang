package routes

import (
	"ReactGo/src/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	var api fiber.Router = app.Group("api") //base api prefix (/api/...

	var admin fiber.Router = api.Group("admin") //the route will be api/admin/...
	admin.Post("register", controllers.Register)
	admin.Post("login", controllers.Login)
}
