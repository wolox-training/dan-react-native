import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import auth from '@redux/auth/reducer';
import book from '@redux/book/reducer';

// Add reducers here
const reducers = combineReducers({
  auth,
  book
});

const enhancer = [applyMiddleware(thunk, fetchMiddleware)];
const store = createStore(reducers, compose(...enhancer));

export default store;
