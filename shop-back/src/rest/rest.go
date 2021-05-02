package rest

import (
	"github.com/gin-gonic/gin"
)

func RunAPI(address string) error {
	h, err := NewHandler()
	if err != nil {
		return err
	}
	return RunAPIWithHandler(address, h)
}

func RunAPIWithHandler(address string, h HandlerInterface) error {
	// gin 엔진 가져옴
	app := gin.Default()
	app.Use(gin.Logger(), gin.Recovery())

	// root page
	app.GET("/", handler.GetMainPage)
	app.GET("/products", handler.GetProducts)
	app.get("/promos", handler.GetPromos)

	userGroup := app.Group("/user"){
		userGroup.POST("/:id/signout", handler.SignOut)
		userGroup.GET("/:id/orders", handler.GetOrders)
	}

	userGroup := app.Group("/users"){
		userGroup.POST("/charge", handler.Charge)
		userGroup.POST("/signin", handler.SignIn)
		userGroup.POST("", handler.AddUser)
	}

	app.Static("/img", "../public/img")
	return app.Run(address)
	// return app.RunTLS(address, "cert.pem", "key.pem")
}