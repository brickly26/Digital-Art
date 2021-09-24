const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
