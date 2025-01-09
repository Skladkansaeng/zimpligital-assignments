## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

- ### Using Host Running
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
- ### Using Docker Compose
```bash
$  docker-compose up
```
## Postman collection
```json
{
	"info": {
		"_postman_id": "d7f7dcbf-027e-4b2a-93b1-9e8fd09f904d",
		"name": "Zimpligital Assignment",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "19425260"
	},
	"item": [
		{
			"name": "Get Current Price",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{hostname}}/price?symbol=TSLA",
					"host": [
						"{{hostname}}"
					],
					"path": [
						"price"
					],
					"query": [
						{
							"key": "symbol",
							"value": "TSLA"
						},
						{
							"key": "companyName",
							"value": "nvidia",
							"disabled": true
						}
					]
				}
			},
			"response": []
		}
	],
	"variable": [
		{
			"key": "hostname",
			"value": "http://localhost:3000",
			"type": "default"
		}
	]
}
```
# API Endpoint: Get Stock Price

## Endpoint Overview

- **Method**: `GET`
- **URL**: `/price`
- **Query Parameters**:
  - `symbol`: The stock symbol (e.g., `TSLA`, `AAPL`).
  - `companyName`: The name of the company (e.g., `Tesla`, `Apple`).

This endpoint allows users to fetch the stock price for a specific company using the stock symbol and company name as query parameters.<br/>
You can use either a symbol or a company name in a single selection.
