package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", mainPage)

	port := ":9090"
	println("server is listening on port:", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("ListenAndServe", err)
	}

}

func mainPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("public/index.html")
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, err.Error(), 400)
		return
	}
}
