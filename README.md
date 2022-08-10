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
| POST   | /products/add              | Add one new product             |
| PUT   | /products/{id}              | Update one product by id          |
| DELETE   | /products/{id}              | Delete one product by id             |

#### Tenants

| Method | Path                 | Description               |
| -------| ---------------------| --------------------------|
| GET    | /tenants                    | Get all tenants            |
| GET   | /tenants/{id}              | Find one tenant by id        |
| POST   | /tenants/add             | Add one new tenant             |
| PUT   | /tenants/{id}              | Update one tenant by id          |
| DELETE   | /tenant/{id}              | Delete one tenant by id             |

#### Categories

| Method | Path                 | Description               |
| -------| ---------------------| --------------------------|
| GET    | /categories                    | Get all categories            |
| GET   | /categories/{id}              | Find one category by id        |
| POST   | /categories/add             | Add one new category             |
| PUT   | /categories/{id}              | Update one category by id          |
| DELETE   | /category/{id}              | Delete one category by id             |
