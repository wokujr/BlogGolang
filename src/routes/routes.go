package routes

import (
	"ReactGo/src/controllers"
	"ReactGo/src/middlewares"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	var api = app.Group("api") //base api prefix (/api/...

	//Admin API
	var admin = api.Group("admin") //the route will be api/admin/...
	admin.Post("register", controllers.Register)
	admin.Post("login", controllers.Login)

	adminAuthenticated := admin.Use(middlewares.IsAuthenticated) //middleware
	//API that need to be authenticated
	adminAuthenticated.Get("user", controllers.User)
	adminAuthenticated.Post("logout", controllers.Logout)
	adminAuthenticated.Put("user/info", controllers.UpdateInfo)
	adminAuthenticated.Put("user/password", controllers.UpdatePassword)

	//only admin that can post, delete, update, // /admin/blog/...
	adminAuthenticated.Post("blog/create", controllers.CreatePost)
	adminAuthenticated.Delete("blog/post/:id", controllers.SoftDelete)
	adminAuthenticated.Delete("blog/post/:id/permanent", controllers.PermanentDeletePost)
	adminAuthenticated.Post("blog/post/restore/:id", controllers.RestorePost)
	adminAuthenticated.Put("blog/post/update/:id", controllers.UpdatePost)
	adminAuthenticated.Post("blog/category", controllers.CreateCategory)

	//Blog public API
	var blog = api.Group("blog") //so it will be api/blog/
	blog.Get("posts", controllers.Posts)
	blog.Get("post/:id", controllers.GetPost)
	blog.Get("/search", controllers.SearchPost)
	blog.Get("/categories", controllers.GetAllCategoriesWithBlogs)
}
