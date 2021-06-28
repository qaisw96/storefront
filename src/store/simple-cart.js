let initialState = {
    cart: [],
    count: 0,
    show: false,
};

const cart = (state=initialState, action) => {
    const {type, payload} = action
    console.log('from cart reducer', payload);

    switch(type) {
        case 'ADDTOCART' :
            const newList = [...state.cart, payload ]
            return {cart: newList , display: uniqueArr(newList), count: state.count + 1, show: !state.show}
        default : 
            return state
    }
}

function uniqueArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    
    return newArr
}

export default cart