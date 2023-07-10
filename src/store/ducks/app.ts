import { Directions, Languages } from '../../constants/enums';

// actions
const SET_DIRECTION = 'app/SET_DIRECTION';
const SET_LANGUAGE = 'app/SET_LANGUAGE';

const DEFAULT_STATE = {
  direction: Directions.LTR,
  language: Languages.ENGLISH,
};

// reducer
const appReducer = (state = DEFAULT_STATE, action: any = {}) => {
  switch (action.type) {
    case SET_DIRECTION:
      return Object.assign({}, state, { direction: action.direction });
    case SET_LANGUAGE:
      return Object.assign({}, state, { language: action.language });
    default:
      return state;
  }
};

export default appReducer;

// action creators
export const setDirection = (direction: string) => {
  return { direction, type: SET_DIRECTION };
};

export const setLanguage = (language: string) => {
  return { language, type: SET_DIRECTION };
};

