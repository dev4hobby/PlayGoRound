package dblayer

import (
	"errors"

	"github.com/dev4hobby/PlayGoRound/shop-back/models"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
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

func (db *DBORM) GetAllProducts() (products []models.Product, err error) {
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

func (db *DBORM) GetProduct(id int) (product models.Product, err error) {
	return product, db.First(&product, id).Error
}

func (db *DBORM) AddUser(customer models.Customer) (models.Customer, error) {
	// 사용자 등록, 비밀번호는 hashing
	hashPassword(&customer.Pass)
	customer.LoggedIn = true
	return customer, db.Create(&customer).Error
}

func hashPassword(s *string) error {
	if s == nil {
		return errors.New("reference provided for hashing password is null")
	}
	sByte := []byte(*s)
	hashedBytes, err := bcrypt.GenerateFromPassword(sByte, bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	*s = string(hashedBytes[:])
	return nil
}

func (db *DBORM) SignInUser(email, pass string) (customer models.Customer, err error) {
	// 사용자 행을 나타내는 *gorm.DB 타입 할당
	result := db.Table("customers").Where(&models.Customer{Email: email})
	err = result.First(&customer).Error
	if err != nil {
		return customer, err
	}

	// 패스워드 체킹
	if !checkPassword(customer.Pass, pass) {
		return customer, ErrINVALIDPASSWORD
	}

	// loggedin 필드 업데이트
	err = result.Update("loggedin", 1).Error
	if err != nil {
		return customer, err
	}
	// customer row 내어줌
	return customer, result.Find(&customer).Error
}

func checkPassword(existingHash, incomingPass string) bool {
	return bcrypt.CompareHashAndPassword([]byte(existingHash), []byte(incomingPass)) == nil
}

func (db *DBORM) SignOutUserById(id int) error {
	// ID에 해당하는 user struct 생성
	customer := models.Customer{
		Model: gorm.Model{
			ID: uint(id),
		},
	}
	return db.Table("Customers").Where(&customer).Update("loggedin", 0).Error
}

func (db *DBORM) GetCustomerOrdersByID(id int) (orders []models.Order, err error) {
	// 요청한 사용자의 주문내역 조회
	return orders, db.Table("orders").Select("*").Joins("join customers on customers.id = customer_id").Joins("join products on products.id = product_id").Where("customer_id=?", id).Scan(&orders).Error
}

func (db *DBORM) AddOrder(order models.Order) error {

	return db.Create(&order).Error
}

func (db *DBORM) GetCreditCardCID(id int) (string, error) {

	cusomterWithCCID := struct {
		models.Customer
		CCID string `gorm:"column:cc_customerid"`
	}{}

	return cusomterWithCCID.CCID, db.First(&cusomterWithCCID, id).Error
}

func (db *DBORM) SaveCreditCardForCustomer(id int, ccid string) error {
	result := db.Table("customers").Where("id=?", id)
	return result.Update("cc_customerid", ccid).Error
}
