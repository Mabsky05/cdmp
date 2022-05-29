import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query users {
  users {
    _id
    username
    email
    longitude
    latitude
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
