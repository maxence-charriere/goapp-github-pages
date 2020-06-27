package main

import (
	"fmt"

	"github.com/maxence-charriere/go-app/v7/pkg/app"
)

func main() {
	err := app.GenerateStaticWebsite("", &app.Handler{
		Name:      "Github Pages Hello",
		Title:     "Github Pages Hello",
		Resources: app.GitHubPages("goapp-github-pages"),
	})

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println("static website generated")
}
