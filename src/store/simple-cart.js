let initialState = {
    cart: [],
    count: 0,
    show: false,
};

const cart = (state=initialState, action) => {
    const {type, payload} = action
    console.log('from cart reducer', payload);

    switch(type) {
        case 'GETCARTITEMS' :
            console.log('ADDTOCART',payload);
            
            let newList = [...state.cart, ...payload ]
            // if(!state.cart.includes(payload))  state.count+=1
            return {cart: newList , display: uniqueArr(newList), count: uniqueArr(newList).length, show: !state.show}
        case 'ADDTOCART' :
            const list = [...state.cart, payload ]
            return {cart: list,  display: uniqueArr(list), count: uniqueArr(list).length}
        case 'DELETEFROMCART' :
            console.log('DELETEFROMCART', state.cart);
            const updatedList = state.cart.filter(item => item._id !== payload)
            return {cart: updatedList,  display: uniqueArr(updatedList),  count: uniqueArr(updatedList).length, show: !state.show }
        default : 
            return state
    }
}


function uniqueArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.map(item => item.name).includes(arr[i].name)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

export default cart