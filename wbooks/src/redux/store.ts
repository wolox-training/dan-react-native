import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from '@redux/auth/reducer';
import book from '@redux/book/reducer';

// state main with 2 state
const reducer = combineReducers({ auth, library: book });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
