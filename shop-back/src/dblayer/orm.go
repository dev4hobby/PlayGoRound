package dblayer

import (
	_ "github.com/go-sql-driver/mysql"
	"gorm.io/gorm"
)

type DBORM struct {
	*gorm.DB
}

func NewORM(dbname, con string) (*DBORM, error) {
	db, err := gorm.Open(dbname, con)
	return &DBORM{
		DB: db,
	}, err
}

func (db *DBORM) GetAllProducts() ([]models.Product, err error) {
	return products, db.Find(&products).Error
}

func (db *DBORM) GetPromos() (products []models.Product, err error) {
	return products, db.Where("promotion IS NOT NULL").Find(&products).Error
}

func (db *DBORM) GetCustomerByName(firstname string, lastname string) (customer models.Customer, err error) {
	return customer, db.Where(&models.Customer{FirstName: firstname, LastName: lastname}).Find(&customer).Error
}

func (db *DBORM) GetCustomerByID(id int) (customer models.Customer, err error) {
	return customer, db.First(&customer, id).Error
}

func (db *DBORM) GetProduct(id int) (product models.Product, error) {
	return product, db.First(&product, id).Error
}

func (db *DBORM) AddUser(customer models.Customer) (models.Customer, err error) {
	// 사용자 등록, 비밀번호는 hashing
	hashPassword(&customer.Pass)
	customer.LoggedIn = true
	return customer, db.Create(&customer).Error
}

func (db *DBORM) SignInUser(email, pass string) (customer models.Customer, err error) {
	// 패스워드 체킹
	if !checkPassword(pass) {
		return customer, errors.New("Invalid password")
	}
	
	result := db.Table("Customers").Where(&models.Customer{Email: email})
	err = result.Update("loggedin", 1).Error
	if err != nil {
		return customer, err
	}
	return customer, result.Find(&customer).Error
	
}

func (db *DBORM) SignOutUserById(int) error {
	// ID에 해당하는 user struct 생성
	customer := models.Customer{
		Model: gorm.Model{
			ID: uint(id),
		},
	}
	return db.Table("Customers").Where(&customer).Update("loggedin", 0).Error
}

func (db *DBORM) GetCustomerOrdersByID(int) ([]models.Order, error) {
	// 요청한 사용자의 주문내역 조회
	return orders, db.Table("orders").Select("*")
	.Joins("join customers on customers.id = customer_id")
	.Joins("join products on products.id = product_id")
	.Where("customer_id=?", id).Scan(&orders).Error
}
