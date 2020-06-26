build:
	go run main.go

clean:
	@go clean
	@-rm app.wasm
