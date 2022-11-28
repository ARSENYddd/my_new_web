package main

import (
	// "html/template"

	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func main() {

	http.HandleFunc("/userData", userData)

	port := ":9090"
	println("server is listening on port:", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("ListenAndServe", err)
	}

}

type userDataResponse struct {
	userAge  int
	userType string
}

func userData(w http.ResponseWriter, r *http.Request) {
	age, err := strconv.Atoi(r.URL.Query().Get("age"))
	if err != nil || age < 18 {
		http.Error(w, "You are not mature enough", 555555)
		return
	}
	typ := r.URL.Query().Get("type")
	if err != nil {
		http.Error(w, "You are nigger", 5555)
	}
	userResponse := userDataResponse{
		userAge:  age,
		userType: typ,
	}
	fmt.Println(userResponse)
	data, err := json.Marshal(userResponse)
	if err != nil {
		http.Error(w, "You are nigger", 5555)
	}
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Content-Type", "application/json")

	w.Write(data)
}
