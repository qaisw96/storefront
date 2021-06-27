import { connect } from "react-redux";
import { setProducts } from "../store/products";

const Products = (props) => {
    console.log(props.products);
    console.log(props.products.activeProducts);
    let results= props.products.activeProducts
    if(!props.products.activeProducts) results = []

    return (
        <div>
            {results.map((product, inx) => 
                <p key={inx} >{product.name}</p>
            )}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products,
    category: state.catagories
})

const mapDispatchToProps = {setProducts};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
