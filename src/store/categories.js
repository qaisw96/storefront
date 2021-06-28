
const initialCategories = {
    categories: [
        {name: 'lab-top', displayName: '', description: ''},
        {name: 'phone', displayName: '', description: ''}
    ],
    activeCategory: {}
}



 const catagories = (state = initialCategories, action) => {
     let { type, payload } = action;
     console.log('catagories Reducer', payload);
     switch(type) {
         case 'ACTIVE' :
             let activeCategory = state.categories.find((category) => category.name === payload)

            return {categories: state.categories, activeCategory}
        default: 
            return state
        }
}

export default catagories



