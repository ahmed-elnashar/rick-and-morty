import { useDispatch, useSelector } from 'react-redux';
import { list, get, searchByName } from '../services/character';
import { setSearchText } from '../store/ducks/character';
import { Entities } from '../constants/enums';
import { Character, CharacterResponse, CharactersResponse } from '../model/api';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  GET_CHARACTER,
  GET_CHARACTERS,
  SEARCH_CHARACTER_BY_NAME,
} from '../graphql/queries';

export const useCharacter = () => {
  const dispatch = useDispatch();
  const charactersSearchText = useSelector(
    (state: any) => state[`${Entities.CHARACTERS}`]['searchText']
  );

  const charactersGetAll = (page: number = 1): CharactersResponse => {
    try {
      const { data, error, loading, fetchMore } = useQuery(GET_CHARACTERS, {
        variables: { page },
      });
      return {
        data: data?.characters,
        error,
        loading,
        fetchMore,
      };
    } catch (err: Error | any) {
      console.log(`Error fetching ${Entities.CHARACTERS} ${err}`);
      throw err;
    }
  };

  const charactersGetById = (id: string): CharacterResponse => {
    try {
      const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: { id },
      });
      return { data: data?.character, error, loading };
    } catch (err: Error | any) {
      console.log(`Error fetching ${Entities.CHARACTERS} ${err}`);
      throw err;
    }
  };

  const charactersSearchByNameLazy = (page: number = 1): CharactersResponse => {
    try {
      const [
        getCharactersSearched,
        { data, error, loading, called, fetchMore },
      ] = useLazyQuery(SEARCH_CHARACTER_BY_NAME, {
        variables: {
          name: charactersSearchText,
          page,
        },
      });

      return {
        getCharactersSearched,
        fetchMore,
        called,
        data: data?.characters,
        error,
        loading,
      };
    } catch (err: Error | any) {
      console.log(`Error fetching ${Entities.CHARACTERS} ${err}`);
      throw err;
    }
  };

  const charactersSearchByName = (page: number = 1): CharactersResponse => {
    try {
      const { data, error, loading, called, fetchMore } = useQuery(
        SEARCH_CHARACTER_BY_NAME,
        {
          variables: { page, name: charactersSearchText },
        }
      );
      return {
        data: data?.characters,
        error,
        loading,
        fetchMore,
        called,
      };
    } catch (err: Error | any) {
      console.log(`Error fetching ${Entities.CHARACTERS} ${err}`);
      throw err;
    }
  };

  return {
    charactersGetAll,
    charactersGetById,
    charactersSearchByName,
    charactersSearchText,
    charactersSetSearchText: (searchText: string) =>
      dispatch(setSearchText(searchText)),
  };
};

