import { createStore, combineReducers } from 'redux';
import catagories from './categories';
import products from './products';
import cart from './simple-cart';

let reducers = combineReducers({catagories, products, cart})


const store = () => {
    return createStore(reducers)
}

export default store()