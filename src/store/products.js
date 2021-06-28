
let initialState = {
    products:[
        {name:'DELL' , 
        price: '178.6$', 
        image: 'https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5508_non-touch/in5508nt_cnb_00055lf110_gr.psd?fmt=pjpg&pscan=auto&scl=1&wid=3475&hei=2090&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=3475,2090', 
        inStock:50 ,
        category:'lab-top'
        },
        {name:'HP' , 
        price: '750$', 
        image: 'https://www.techadvisor.com/cmsdata/reviews/3803826/hp_pavilion_14_laptop02.jpg', 
        inStock:20 ,
        category:'lab-top'
        },
        {name:'LENOVO' , 
        price: '13.5$', 
        image: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/w1600h900crop_wm_brb/public/field/image/2021/01/lenovo-thinkpad-x1-yoga-gen6-6.jpg', 
        inStock:30 ,
        category:'lab-top'
        },
        {name:'APPLE' , 
        price: '20.3$', 
        image: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_lp_us_04202021.jpg.og.jpg?202106011004', 
        inStock:15 ,
        category:'phone'
        },
        {name:'SAMSUNG' , 
        price: '30.3$', 
        image: 'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/mo.jpg', 
        inStock:22 ,
        category:'phone'
        },
        {name:'HUAWEI' , 
        price: '6.2$', 
        image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/sub-banner/huawei-ai-life/ai-life-mob.jpg', 
        inStock:40 ,
        category:'phone'
        }
    ],
    activeProducts: []
}

const products =(state = initialState, action ) => {
    let {type, payload} = action
    console.log('products reducer')
    switch(type) {
        case 'ACTION' :
            let activeProducts =  state.products.filter(product => product.category === payload )
            console.log('active P', activeProducts);
            return { products: state.products , activeProducts };
        case 'STOCK' :
            console.log('state', initialState);
            let newState = state.products.filter(product => product.name === payload ? product.inStock = product.inStock-1 : product)
            return {products: state.products, newState, activeProducts: state.activeProducts}
        default : 
            return state
    }
}

export default products

