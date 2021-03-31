import { Action } from '@interfaces/action';

import { TypeBook, actions } from './actions';

const initialState = () => {
  return [];
};

function reducer(state = initialState(), { type, payload }: Action<any, any>) {
  switch (type) {
    case TypeBook.ADD: {
      return [payload].concat(state);
    }
    case TypeBook.STARTLIST: {
      return state;
    }
    case TypeBook.LIST: {
      return payload;
    }
    case actions.GET_BOOKS: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
