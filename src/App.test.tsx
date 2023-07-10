import { render, screen, user } from './tests/testUtils';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MockedProvider } from '@apollo/client/testing';

describe('App.test', () => {
  user.setup();
  const initialState = {
    app: { direction: 'ltr', language: 'en' },
    characters: { searchText: '' },
  };
  const mockStore = configureStore();
  let store;
  const mocks: any[] = [];

  it('should have title: Rick and Morty Wiki', () => {
    store = mockStore(initialState);
    const { getByText } = render(
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
    const title = getByText('Rick and Morty Wiki');

    expect(title).toBeVisible();
  });
});

