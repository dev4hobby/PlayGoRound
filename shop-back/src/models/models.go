package models

import "time"

type Customer struct {
	gorm.Model
	Name      string  `json:"name"`
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
	ProductName string  `gorm:"productname" json:"productname"`
	Description string
}

func (Customer) TableName() string {
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

func (Customer) TableName() string {
	return "orders"
}
