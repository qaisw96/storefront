import superagent from 'superagent'
const api = 'https://api-server402.herokuapp.com'


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


export const getAllProducts = () => async (dispatch, state) => {

    const res = await superagent.get(`${api}/store`)
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

////////////////// cart actions ////////////////

export const getAllItems = () => async (dispatch, state) => {
    const res = await superagent.get(`${api}/cart`)
    const list = res.body

   const get =(list) => {
       return {
           type: 'GETCARTITEMS',
           payload: list
       }
   }
   dispatch(get(list))
}


export const addToCard = (item) => async(dispatch, state) => {
    const newItem = {name: item}
    const res =  await superagent.post(`${api}/cart`).send(newItem)
    const addedItem = res.body
    console.log(addedItem);
    const post = (addedItem) => {
        return {
            type: 'ADDTOCART',
            payload: addedItem
        }
    }
    dispatch(post(addedItem))
}


export const deleteItemFromCart = (id) =>  async(dispatch, state) => {
    await superagent.delete(`${api}/cart/${id}`)
    
    const deleteItem = (id) => {
        return {
            type: 'DELETEFROMCART',
            payload: id
        }
    }
    dispatch(deleteItem(id))

}

// export const addToCard = (name) => {
//     // console.log('addToCart', name);
//     return {
//         type: 'ADDTOCART',
//         payload: name
//     }
// }
