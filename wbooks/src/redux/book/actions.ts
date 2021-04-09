import BookService from '@services/bookService';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes({ primaryActions: ['GET_BOOKS'] }), '@@BOOKS');

const TARGETS = { BOOKS: 'books' };

const actionCreators = {
  getBooks: () => ({ type: actions.GET_BOOKS, target: TARGETS.BOOKS, service: BookService.getBooks })
};

export default actionCreators;
