
export const setProducts = (name) => {
    return {
        type: 'ACTION',
        payload: name
    }
}

export const incrementStock = (name) => {
    console.log( 'from incrementStock' ,name);
    return {
        type: 'STOCK',
        payload: name
    }
}

export const seCategory = (name) => {
    console.log('seCategory', name);
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const addToCard = (name) => {
    console.log('addToCart', name);
    return {
        type: 'ADDTOCART',
        payload: name
    }
}
