import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        longitude
        latitude

      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $longitude: Float!, $latitude: Float!, $password: String!) {
    addUser(username: $username, email: $email, longitude: $longitude, latitude: $latitude, password: $password) {
      token
      user {
        _id
        username
        longitude
        latitude
        
      }
    }
  }
`;

