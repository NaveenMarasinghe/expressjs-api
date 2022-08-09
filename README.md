# modern-walk-expressjs-api

REST API for modern walk app.

## Technologies used
TypeScript, Node.js, Express.js

## Architecture

### Entities
- Users
- Products
- Categories
- Tenants

### API Specification

#### Base URL
- `http://{ host }:{ port }/api`

#### Users

| Method | Path                 | Description               |
| -------| ---------------------| --------------------------|
| GET    | /users?email={email}&password={password}| Find a user by email and password             |
| POST   | /users              | Add a new user              |

#### Products

| Method | Path                 | Description               |
| -------| ---------------------| --------------------------|
| GET    | /products                    | Get all products            |
| GET   | /products/{id}              | Find one product by id        |
| POST   | /products/AddNewProduct              | Add one new product             |
| PUT   | /products/{id}              | Update one product by id          |
| DELETE   | /products/{id}              | Delete one product by id             |
