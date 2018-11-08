/* eslint-disable import/no-named-as-default */
import {combineReducers} from 'redux';
import home from './home';
import cart from './cart';

export default combineReducers({
  home,
  cart
});
