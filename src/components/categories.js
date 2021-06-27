import { connect } from "react-redux";
import { seCategory } from "../store/categories";
import { setProducts } from "../store/products";
import Button from '@material-ui/core/Button'


const Category = (props) => {
    // console.log(props.setProducts());
    return (
        <div>
            { props.category.categories.map((category, inx) => 
                <Button key={inx} onClick={() =>props.setProducts(category.name)} >{ category.name }</Button>
                ) }
        </div>
    )
}

const mapStateToProps = (state) => ({
    category: state.catagories,
    products: state.products
})

const mapDispatchToProps = {seCategory, setProducts};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
