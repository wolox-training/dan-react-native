import { Action } from '@interfaces/action';
import { BOOKS_MOCK } from '@constants/mockBooks';

import { TypeBook } from './actions';

const initialState = () => {
  return [...BOOKS_MOCK];
};

function reducer(state = initialState(), { type, payload }: Action<TypeBook, any>) {
  switch (type) {
    case TypeBook.ADD: {
      return [...state, payload];
    }
    case TypeBook.LIST: {
      return [...BOOKS_MOCK];
    }
    default:
      return state;
  }
}

export default reducer;
