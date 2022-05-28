const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    longitude: Float
    latitude: Float
    pins: [Pin]!
  }

  type Pin {
    _id: ID
    title: String
    desc: String
    rating: Float
    longitude: Float
    latitude: Float
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
    addUser(username: String!, email: String!, longitude: Float!, latitude: Float!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPin(username: String!): Pin
  }
`;

module.exports = typeDefs;
