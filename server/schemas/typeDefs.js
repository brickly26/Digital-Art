const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String

    password: String
    saveProduct: [Product]
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    sold: Boolean
    category: Category
    image: [Image]
  }

  type Image {
    _id: ID
    path: String!
  }

  type Category {
    _id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Order {
    _id: ID
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, sold: Boolean): Product
  }
`;

module.exports = typeDefs;
