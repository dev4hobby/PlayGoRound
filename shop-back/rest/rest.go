package rest

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func RunAPI(address string) error {
	h, err := NewHandler()
	if err != nil {
		return err
	}
	return RunAPIWithHandler(address, h)
}

func RunAPIWithHandler(address string, handler HandlerInterface) error {
	// gin 엔진 가져옴
	app := gin.Default()
	app.Use(gin.Logger(), gin.Recovery())

	app.Use(static.ServeRoot("/", "./public/build"))
	app.Static("/static", "./public/build")
	app.GET("/products", handler.GetProducts)
	app.GET("/promos", handler.GetPromos)

	userGroup := app.Group("/user")
	{
		userGroup.POST("/:id/signout", handler.SignOut)
		userGroup.GET("/:id/orders", handler.GetOrders)
	}

	usersGroup := app.Group("/users")
	{
		usersGroup.POST("/charge", handler.Charge)
		usersGroup.POST("/signin", handler.SignIn)
		usersGroup.POST("", handler.AddUser)
	}

	postGroup := app.Group("/post")
	{
		// need pagination
		postGroup.GET("/:id", handler.GetPosts)
		postGroup.POST("", handler.AddPost)
		postGroup.PATCH("/:id", handler.PatchPost)
		postGroup.DELETE("/:id", handler.DeletePost)
	}

	return app.Run(address)
	// return app.RunTLS(address, "cert.pem", "key.pem")
}
