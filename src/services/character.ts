import { useQuery } from '@apollo/client';
import {
  GET_CHARACTER,
  GET_CHARACTERS,
  SEARCH_CHARACTER_BY_NAME,
} from '../graphql/queries';

export const list = (page: number = 1) => {
  const { data, error, loading } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });
  return {
    data: data?.characters,
    error,
    loading,
  };
};

export const get = (id: string = '') => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { data: data?.character, error, loading };
};

export const searchByName = (name: string, page: number = 1) => {
  const { data, error, loading } = useQuery(SEARCH_CHARACTER_BY_NAME, {
    variables: {
      name,
      page,
    },
  });

  return {
    data: data?.characters,
    error,
    loading,
  };
};

