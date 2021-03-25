import { Action } from '@interfaces/action';

import { TypeBook } from './actions';

const initialState = () => {
  return [];
};

function reducer(state = initialState(), { type, payload }: Action<TypeBook, any>) {
  switch (type) {
    case TypeBook.ADD: {
      return [payload].concat(state);
    }
    case TypeBook.LIST: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
