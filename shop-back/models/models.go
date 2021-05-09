package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Customer struct {
	gorm.Model
	Name      string  `json:"name" sql:"-"`
	FirstName string  `gorm:"column:firstname" json:"firstname"`
	LastName  string  `gorm:"column:lastname" json:"lastname"`
	Email     string  `gorm:"column:email" json:"email"`
	Pass      string  `json:"password"`
	LoggedIn  bool    `gorm:"column:loggedin" json:"loggedin"`
	Orders    []Order `json:"orders"`
}

func (Customer) TableName() string {
	return "customers"
}

type Product struct {
	gorm.Model
	Image       string  `json:"img"`
	ImageAlt    string  `gorm:"column:imgalt" json:"imgalt"`
	Price       float64 `json:"price"`
	Promotion   float64 `json:"promotion"`
	ProductName string  `gorm:"column:name" json:"name"`
	Description string
}

func (Product) TableName() string {
	return "products"
}

type Order struct {
	gorm.Model
	Product
	Customer
	CustomerID   int       `gorm:"column:customer_id" json:"customer_id"`
	ProductID    int       `gorm:"column:product_id" json:"product_id"`
	Price        float64   `gorm:"column:price" json:"sell_price"`
	PurchaseDate time.Time `gorm:"column:purchase_date" json:"purchase_date"`
}

func (Order) TableName() string {
	return "orders"
}

type Post struct {
	gorm.Model
	Customer
	CustomerID   int       `gorm:"column:customer_id" json:"customer_id"`
	CustomerName string    `gorm:"column:customer_name" json:"customer_name"`
	Title        string    `gorm:"column:title" json:"title"`
	Contents     string    `gorm:"column:contents" json:"contents"`
	Image        string    `json:"img"`
	ImageAlt     string    `gorm:"column:imgalt" json:"imgalt"`
	Tags         string    `gorm:"column:tags" json:"tags"`
	LikeCount    int       `gorm:"column:like_count" json:"like_count"`
	ViewCount    int       `gorm:"column:view_count" json:"view_count"`
	Show         bool      `gorm:"column:show" json:"show"`
	CreatedDate  time.Time `gorm:"column:created_date" json:"created_date"`
	DeletedDate  time.Time `gorm:"column:deleted_date" json:"deleted_date"`
}

func (Post) TableName() string {
	return "posts"
}
