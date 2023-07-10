import {
  ApolloError,
  FetchMoreQueryOptions,
  OperationVariables,
} from '@apollo/client';

export type Characters = {
  info: Info;
  results: Character[];
};

export type FetchMoreVariables = {
  variables: { page: OperationVariables };
  updateQuery: (args: any) => void;
};

export type CharactersResponse = {
  data?: Characters;
  error?: ApolloError;
  loading: boolean;
  fetchMore: ({ ...FetchMoreVariables }) => Promise<CharactersResponse | any>;
  getCharactersSearched?: () => any;
  called?: boolean;
};

export type CharacterResponse = {
  data?: Character;
  error?: ApolloError;
  loading: boolean;
};

export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
  created: string;
};

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
};

export type Location = {
  id: string;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

