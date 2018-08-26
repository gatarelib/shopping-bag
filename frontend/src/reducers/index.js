import { combineReducers } from 'redux';
import Products from './products';


const rootReducer = combineReducers({
  getProducts: Products
});

export default rootReducer;
