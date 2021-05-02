package main

import (
	"log"

	"github.com/dev4hobby/PlayGoRound/shop-back/rest"
)

func main() {
	log.Println("Main log...")
	log.Fatal(rest.RunAPI("127.0.0.1:8000"))
}
