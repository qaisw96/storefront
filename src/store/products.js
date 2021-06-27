
let initialState = {
    products:[
        {name:'KEYBOARD' , 
        price: '178.6$', 
        image: 'https://source.unsplash.com/random?Keyboard', 
        inStock:200 ,
        category:'lab-top'
        },
        {name:'Tv' , 
        price: '750$', 
        image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8500-ua55tu8500uxtw-frontblack-229855928?$684_547_PNG$', 
        inStock:300 ,
        category:'lap-top'
        },
        {name:'USB' , 
        price: '13.5$', 
        image: 'https://cdn.shopify.com/s/files/1/0066/3801/0432/products/uni-usb-c-usb-c-8-in-1-hub-15384714739775_2_2048x2048.jpg?v=1624011415', 
        inStock:260 ,
        category:'lab-top'
        },
        {name:'Calzones' , 
        price: '20.3$', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/220px-3-Tasten-Maus_Microsoft.jpg', 
        inStock:500 ,
        category:'phone'
        },
        {name:'Mouse' , 
        price: '30.3$', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCV1nEn29DnjI4Yvdm1hca_eRNuW_OQmoXA&usqp=CAU', 
        inStock:163 ,
        category:'phone'
        },
        {name:'Apple' , 
        price: '6.2$', 
        image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg', 
        inStock:300 ,
        category:'lab-top'
        }
    ],
    count:0
}

const products =(state = initialState, action ) => {
    let {type, payload} = action
    
    switch(type) {
        case 'ACTION' :
            let activeProducts =  state.products.filter(product => product.category === payload )
            console.log('active P', activeProducts);
            return { products: state.products , activeProducts }
        default : 
            return state

    }
}

export default products

export const setProducts = (name) => {
    console.log(name);
    return {
        type: 'ACTION',
        payload: name
    }
}