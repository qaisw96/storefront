import '../css/category.scss'
import {useSelector, useDispatch} from 'react-redux';
import { seCategory } from "../store/categories";
import { setProducts } from "../store/products";
import Button from '@material-ui/core/Button'


const Category = (props) => {
    // to give me the state
    const state = useSelector((state)=> {
        return {
            catagories: state.catagories.categories
        }
    });
    console.log(state.catagories);

    // to fire the actions/hit functions
    const dispatch = useDispatch();

    return (
        <div className="categories" >
            { state.catagories.map((category, inx) => 
                <Button className="btn" key={inx} onClick={() =>dispatch(setProducts(category.name))} >{ category.name }</Button> 
                ) }
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     category: state.catagories,
//     products: state.products
// })

// const mapDispatchToProps = {seCategory, setProducts};

export default Category ;
