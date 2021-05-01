package rest

import (
	"github.com/gin-gonic/gin"
)

func RunAPI(address string) error {
	// gin 엔진 가져옴
	app := gin.Default()
	// 핸들러 초기화
	handler, _ := NewHandler()
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
	return app.Run(address)
}