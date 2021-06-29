
let initialState = {
    products:[],
    activeProducts: []
}

const products =(state = initialState, action ) => {
    let {type, payload} = action
    console.log("products reducer")
    switch(type) {
        case "GET" :
            console.log(payload);
            let list = [...state.products, ...payload]
            return { products:list, activeProducts: state.activeProducts}
        case "ACTION" :
            let activeProducts =  state.products.filter(product => product.category === payload )
            console.log("active P", activeProducts);
            return { products: state.products , activeProducts };
        case "STOCK" :
            console.log("state", initialState);
            let newState = state.products.filter(product => product.name === payload ? product.inStock = product.inStock-1 : product)
            return {products: state.products, newState, activeProducts: state.activeProducts}
        default : 
            return state
    }
}

export default products

