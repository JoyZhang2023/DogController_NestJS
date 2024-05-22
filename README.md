# Builidng and Exploring Controllers in NestJS
AD 340 Assignment

## Objective
To develop a foundational understanding of controllers in NestJS by creating a simple application with a focus on controllers, routing, and response handling.

## Set up
- Environment Setup: Ensure you have Node.js installed. Install NestJS CLI globally using npm install -g @nestjs/cli.
- Project Initialization: Create a new project by running nest new dogs-service and navigate into your project directory..

## Tasks
### Create a Dog Controller
Generate a new controller using the CLI with `nest g controller dogs`.

### Define Routes
- GET `/dogs`: Return a list of all dogs.
- POST `/dogs`: Create a new dog entry.
- GET `/dogs/:id`: Fetch a single dog by ID.
- PUT `/dogs/:id`: Update a dog entry by ID.
- DELETE `/dogs/:id`: Delete a dog entry by ID.

### Implement Methods in Dog Controller
- Use appropriate decorators like @Get(), @Post(), @Put(), @Delete() to handle different HTTP methods.
- Use @Param(), @Body(), and other necessary decorators to handle route and body parameters.
- Initially, you can use an in-memory array to manage the dogs data. Each "dog" can be an object with properties like id, name, and age.

### Response Handling
Ensure that each route method returns appropriate responses and HTTP status codes. For example, returning status 201 for successful creation, 404 when a dog is not found, etc.

### Erro Handling
Implement basic error handling in the controller. Catch errors and return proper HTTP status codes with error messages.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
