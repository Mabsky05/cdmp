const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    long: Float
    lat: Float
    pins: [Pin]!
  }

  type Pin {
    _id: ID
    title: String
    desc: String
    rating: Float
    long: Float
    lat: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    pins(username:String): [Pin]
    pin(pinId: ID!): Pin
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPin(username: String!): Pin
  }
`;

module.exports = typeDefs;
