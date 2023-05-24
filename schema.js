const { gql } = require('@apollo/server');

const typeDefs = `#graphql
  type Product {
    id: String!
    title: String!
    description: String!
  }


  type Query {
    product(id: String!): Product
    products: [Product]

  type Mutation {
    addProduct(id: String!, title: String!, description:String!): Product
    deleteProduct(id: String!): Boolean
    updateProduct(id: String!, title: String!, description: String!): Product
  }
`;

module.exports = typeDefs