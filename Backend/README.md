# User Registration API

## Endpoint

**POST** `/users/register`

Registers a new user in the system.

## Request Body

<!--
This section of the README.md provides instructions for sending a JSON object.
It specifies the required structure for the JSON payload, which is likely used for API requests or data exchange in the Uber Clone Backend project.
-->
Send a JSON object with the following structure:

{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}

## Status Codes

- **201 Created**: User successfully registered.
- **400 Bad Request**: Invalid input data.
- **409 Conflict**: User already exists.

## Example Success Response

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## User Login

**POST** `/users/login`

Authenticates a user and returns a JWT token.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "string",
  "password": "string"
}
```

### Status Codes

- **200 OK**: Login successful.
- **400 Bad Request**: Invalid input data.
- **401 Unauthorized**: Invalid email or password.

### Example Success Response

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## Get User Profile

**GET** `/users/profile`

Returns the authenticated user's profile information.

### Headers

- `Authorization: Bearer <jwt_token>` (or cookie with `token`)

### Status Codes

- **200 OK**: Returns user profile.
- **401 Unauthorized**: Invalid or missing token.

### Example Success Response

```json
{
  "_id": "<user_id>",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

---

## User Logout

**GET** `/users/logout`

Logs out the authenticated user by blacklisting the current token.

### Headers

- `Authorization: Bearer <jwt_token>` (or cookie with `token`)

### Status Codes

- **200 OK**: Logout successful.
- **401 Unauthorized**: Invalid or missing token.

### Example Success Response

```json
{
  "message": "Logged out successfully"
}
```

## Captain Registration

**POST** `/captains/register`

Registers a new captain (driver) in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": 1,
    "vehicleType": "car" // or "motorcycle", "auto"
  }
}
```

### Field Requirements

- `fullname.firstname` (string, required, min 3 characters)
- `fullname.lastname` (string, optional, min 3 characters if provided)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)
- `vehicle.color` (string, required, min 3 characters)
- `vehicle.plate` (string, required, min 3 characters)
- `vehicle.capacity` (integer, required, min 1)
- `vehicle.vehicleType` (string, required, one of: "car", "motorcycle", "auto")

### Status Codes

- **201 Created**: Captain successfully registered.
- **400 Bad Request**: Invalid input data or captain already exists.

### Example Success Response

```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```