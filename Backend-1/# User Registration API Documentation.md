# User Registration API

## Endpoint

**POST** `/users/register`

Registers a new user in the system.

## Request Body

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