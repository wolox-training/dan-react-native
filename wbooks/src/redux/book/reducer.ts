import { actions } from './actions';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: null
};

function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_BOOKS: {
      return { ...state, booksLoading: true };
    }
    case actions.GET_BOOKS_SUCCESS: {
      return { ...state, books: payload, booksLoading: false };
    }
    case actions.GET_BOOKS_FAILURE: {
      return { ...state, booksLoading: false, booksError: payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
