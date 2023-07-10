import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        episode {
          id
          name
          air_date
          episode
          created
        }
        created
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      origin {
        id
        name
        type
        dimension
        created
      }
      gender
      location {
        id
        name
        type
        dimension
        created
      }
      image
      episode {
        id
        name
        air_date
        episode
        created
      }
      created
    }
  }
`;

export const SEARCH_CHARACTER_BY_NAME = gql`
  query searchCharacterByName($name: String!, $page: Int!) {
    characters(filter: { name: $name }, page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        episode {
          id
          name
          air_date
          episode
          created
        }
        created
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

