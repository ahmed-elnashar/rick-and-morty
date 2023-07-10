import { Entities } from '../../constants/enums';

// actions
const SET_SEARCH_TEXT = `${Entities.CHARACTERS}/SET_SEARCH_TEXT`;

const DEFAULT_STATE = {
  searchText: '',
};

// reducer
const reducer = (state = DEFAULT_STATE, action: any = {}) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return Object.assign({}, state, { searchText: action.searchText });
    default:
      return state;
  }
};

export default reducer;

// action creators

export const setSearchText = (searchText: string) => {
  return { searchText, type: SET_SEARCH_TEXT };
};

