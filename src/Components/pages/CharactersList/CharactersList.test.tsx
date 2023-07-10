import { render, screen, user } from '../../../tests/testUtils';
import App from '../../../App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MockedProvider } from '@apollo/client/testing';
import { SEARCH_CHARACTER_BY_NAME } from '../../../graphql/queries';
import { waitFor } from '@testing-library/react';
import { InMemoryCache } from '@apollo/client';

describe('CharactersList.test', () => {
  user.setup();
  const initialState = {
    app: { direction: 'ltr', language: 'en' },
    characters: { searchText: '' },
  };
  const mockStore = configureStore();
  const cache = new InMemoryCache();
  let store;
  const mocks: any[] = [
    {
      request: {
        query: SEARCH_CHARACTER_BY_NAME,
        variables: {
          name: '',
          page: 1,
        },
      },
      result: {
        data: {
          characters: {
            results: [
              {
                id: '19',
                name: 'Antenna Rick',
                status: 'unknown',
                species: 'Human',
                type: 'Human with antennae',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                  created: null,
                  __typename: 'Location',
                },
                location: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                  created: null,
                  __typename: 'Location',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
                episode: [
                  {
                    id: '10',
                    name: 'Close Rick-counters of the Rick Kind',
                    air_date: 'April 7, 2014',
                    episode: 'S01E10',
                    created: '2017-11-10T12:56:34.747Z',
                    __typename: 'Episode',
                  },
                ],
                created: '2017-11-04T22:28:13.756Z',
                __typename: 'Character',
              },
            ],
            info: {
              count: 1,
              pages: 1,
              next: null,
              prev: null,
              __typename: 'Info',
            },
            __typename: 'Characters',
          },
        },
      },
    },
  ];

  it('should have a search field', () => {
    store = mockStore(initialState);
    const { getByRole } = render(
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Provider>,
      {
        route: '/',
        initialEntries: [
          {
            pathname: '/',
          },
        ],
      }
    );
    const searchBar = getByRole('search');

    expect(searchBar).toBeVisible();
  });

  it('should have a character with a link', async () => {
    store = mockStore(initialState);
    const { queryAllByRole } = render(
      <Provider store={store}>
        <MockedProvider mocks={mocks} cache={cache}>
          <App />
        </MockedProvider>
      </Provider>,
      {
        route: '/',
        initialEntries: [
          {
            pathname: '/',
          },
        ],
      }
    );

    await waitFor(() => {
      const characterLink = queryAllByRole('link')[1].getAttribute('href');
      expect(characterLink).toEqual('/19');
    });
  });
});

