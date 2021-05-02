package main

import (
	"log"
	"os"

	"github.com/dev4hobby/PlayGoRound/shop-back/rest"
)

func main() {
	log.Println("Main log...")
	log.Fatal(rest.RunAPI(":" + os.Getenv("GO_PORT")))
}
