Project Name: Product Management API
This project is an API-based solution for managing products. It provides functionality for performing CRUD operations on product entities using both RESTful and GraphQL endpoints.

Features
Create a new product: Allows users to add a new product to the system by providing the necessary details such as name, description, price, and other relevant information.

Retrieve product details: Provides endpoints to retrieve information about a specific product by its unique identifier. Users can access details such as the product titre , description .

Update product information: Allows users to modify the details of an existing product. This includes changing the product titre, description, or any other attributes associated with the product.

Delete a product: Enables users to remove a product from the system using its unique identifier.

Technologies Used
Node.js: The server-side runtime environment used for building the API.

Express.js: A web framework for Node.js that simplifies the process of building RESTful APIs.

GraphQL: A query language for APIs that enables efficient data retrieval based on the client's specific needs.
SqlLite

RESTful API: The traditional approach for building APIs that follows the principles of Representational State Transfer (REST).

Installation
To set up the project locally, follow these steps:


Navigate to the project directory: cd projet_microservice

Install dependencies: npm install

Start the server: npm start

API Documentation
RESTful Endpoints
Create a Product
Endpoint: POST /api/products
Request Body:
json

{
  "titre": "Product Name",
  "description": "Product Description",

  ...
}
Response:
json

{
  "id": "product_id",
  "titre": "Product Name",
  "description": "Product Description",
  ...
}
Retrieve a Product
Endpoint: GET /api/products/:id
Response:
json

{
  "id": "product_id",
  "titre": "Product Name",
  "description": "Product Description",
  ...
}
Update a Product
Endpoint: PUT /api/products/:id
Request Body:
json

{
  "titre": "Updated Name",
  "description": "Updated Description",
  ...
}
Response:
json

{
  "id": "product_id",
  "titre": "Updated Name",
  "description": "Updated Description",
  ...
}
Delete a Product
Endpoint: DELETE /api/products/:id
Response:
json

{
  "message": "Product deleted successfully."
}
GraphQL Endpoint
Endpoint: /graphql
Query Example:
bash

query {
  product(id: "product_id") {
    id
    titre
    description
    ...
  }
}
Mutation Example:

mutation {
  createProduct(input: {
    titre: "Product Name",
    description: "Product Description",
  }
  )
}
