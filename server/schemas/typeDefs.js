const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    sold: Boolean
    category: Category
  }

  type Category {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    categories: [Category]
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
