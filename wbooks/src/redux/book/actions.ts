import { Dispatch } from 'redux';
import { Book } from '@interfaces/bookInterface';
import { BOOKS_MOCK } from '@constants/mockBooks';

export enum TypeBook {
  ADD = 'Add',
  DELETE = 'Delete',
  STARTLIST = 'StartList',
  LIST = 'List',
  ERRORLIST = 'ErrorList'
}

export const bookAdd = (payload: Book) => ({
  type: TypeBook.ADD,
  payload
});

export const bookList = (payload: Book[]) => ({
  type: TypeBook.LIST,
  payload
});

export const startList = () => ({
  type: TypeBook.STARTLIST
});

export const errorList = (error: any) => ({
  type: TypeBook.ERRORLIST,
  error
});

export const getList = () => async (dispatch: Dispatch) => {
  // console.log('entro en el getList de actions');
  dispatch(startList());
  try {
    // endpoint para traer lista
    // const response = await fetch('url', { method: 'GET', body: JSON.stringify('')});
    const list = await BOOKS_MOCK;
    dispatch(bookList(list));
  } catch (e) {
    dispatch(errorList(e));
  }
};

export const actions = {
  GET_BOOKS: '@@BOOKS/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOKS/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOKS/GET_BOOKS_FAILURE'
} as const;

export const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = { ok: true, data: BOOKS_MOCK, problem: '' };
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;
