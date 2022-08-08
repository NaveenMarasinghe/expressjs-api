# modern-walk-expressjs-api

REST API for modern walk app.

## Technologies used
Node.js, Express.js

## Architecture

### Entities
- Users
- Products
- Categories
- Tenants

### API Specification

#### Base URL
- `http://{ host }:{ port }/api`

#### users

| Method | Path                 | Description               |
| -------| ---------------------| --------------------------|
| GET    | /users?email={email}&password={password}| find a user               |
| POST   | /users/              | add new user              |

