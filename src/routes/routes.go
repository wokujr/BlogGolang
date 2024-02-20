package routes

import (
	"ReactGo/src/controllers"
	"ReactGo/src/middlewares"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	var api fiber.Router = app.Group("api") //base api prefix (/api/...

	//Admin API
	var admin fiber.Router = api.Group("admin") //the route will be api/admin/...
	admin.Post("register", controllers.Register)
	admin.Post("login", controllers.Login)

	adminAuthenticated := admin.Use(middlewares.IsAuthenticated) //middleware
	//API that need to be authenticated
	adminAuthenticated.Get("user", controllers.User)
	adminAuthenticated.Post("logout", controllers.Logout)
	adminAuthenticated.Put("user/info", controllers.UpdateInfo)
	adminAuthenticated.Put("user/password", controllers.UpdatePassword)
}
