import { combineReducers } from 'redux';
import wishlistReducer from './bookReducer';

export default combineReducers({ wishlist: wishlistReducer });
