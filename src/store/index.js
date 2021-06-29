import { createStore, combineReducers, applyMiddleware } from 'redux';
import catagories from './categories';
import products from './products';
import cart from './simple-cart';
import thunk from './middleware/thunk'

let reducers = combineReducers({catagories, products, cart})


const store = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default store()