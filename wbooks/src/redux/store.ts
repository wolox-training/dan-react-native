import { createStore, combineReducers } from 'redux';
import auth from '@redux/auth/reducer';
import book from '@redux/book/reducer';

// state main with 2 state
const reducer = combineReducers({ auth, book });

const store = createStore(reducer);

export default store;
