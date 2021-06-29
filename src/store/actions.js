import superagent from 'superagent'
const api = 'https://api-server402.herokuapp.com/store'


export const setProducts = (name) => {
    return {
        type: 'ACTION',
        payload: name
    }
}

export const incrementStock = (name) => {
    // console.log( 'from incrementStock' ,name);
    return {
        type: 'STOCK',
        payload: name
    }
}

export const seCategory = (name) => {
    // console.log('seCategory', name);
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const addToCard = (name) => {
    // console.log('addToCart', name);
    return {
        type: 'ADDTOCART',
        payload: name
    }
}

export const getAllProducts = () => async (dispatch, state) => {

    const res = await superagent.get(api)
    const list = res.body

    dispatch(getAction(list))
}


export const getAction = (list) => {
    console.log('list', list)
    return {
        type: 'GET',
        payload: list
    }
}