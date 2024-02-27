# backend-restaurant-task
# Restaurants CRUD Operations

This is a RESTful API for performing CRUD operations on restaurants. It provides endpoints for creating, reading, updating, and deleting restaurants, along with additional functionalities for retrieving restaurants based on location.

## Getting Started

1. Clone the repository:


2. Install dependencies:


3. Set up MongoDB  and provide the connection URI in `db.js`.

4. Run the server: npm start


5. Access the API endpoints using a tool like Postman.

## API Endpoints

- `POST /restaurants`: Create a new restaurant.
- `GET /restaurants/nearby`: Get restaurants within a specified radius.
- `GET /restaurants/range`: Get restaurants within a specified radius range.
- `GET /protected`: Example protected route (authentication required).

## Authentication

This API uses JWT (JSON Web Token) for user authentication. To access protected routes, include a valid JWT token in the Authorization header of your request.

## Docker

To run the application using Docker, build the Docker image and run the container:

