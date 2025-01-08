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

# API Endpoint: Get Stock Price

## Endpoint Overview

- **Method**: `GET`
- **URL**: `/price`
- **Query Parameters**:
  - `symbol`: The stock symbol (e.g., `TSLA`, `AAPL`).
  - `companyName`: The name of the company (e.g., `Tesla`, `Apple`).

This endpoint allows users to fetch the stock price for a specific company using the stock symbol and company name as query parameters.<br/>
You can use either a symbol or a company name in a single selection.
