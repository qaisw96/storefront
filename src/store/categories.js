
const initialCategories = {
    categories: [
        {name: 'lab-top', displayName: '', description: ''},
        {name: 'phone', displayName: '', description: ''}
    ],
    activeCategory: {}
}



 const catagories = (state = initialCategories, action) => {
    let { type, payload } = action;
    switch(type) {
        case 'ACTIVE' :
            let activeCategory = state.categories.find((category) => category.name === payload)
            console.log('active C', activeCategory);

            return {categories: state.categories, activeCategory}
        default: 
            return state
        }
}

export default catagories

export const seCategory = (name) => {
    console.log(name);
    console.log("inside our increment function for the action");
    return {
        type: 'ACTIVE',
        payload: name
    }
}



