import { createStore, combineReducers } from 'redux';
import catagories from './categories';
import products from './products';

let reducers = combineReducers({catagories, products})


const store = () => {
    return createStore(reducers)
}

export default store()