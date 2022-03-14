import { gql } from '@apollo/client';

export const CHARACTERS_PAGE = gql`
  query Characters($page: Int = 1) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        image
        name
        origin {
          name
        }
        status
        species
      }
    }
  }
`;

export const CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      image
      name
      status
      species
    }
  }
`;
