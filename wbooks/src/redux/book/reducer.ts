import { createReducer, completeState, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = completeState({
  books: []
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
