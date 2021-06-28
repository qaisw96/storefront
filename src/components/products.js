import '../css/products.scss'
import { connect } from "react-redux";
import { setProducts } from "../store/products";
import { incrementStock } from "../store/products";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      maxHeight: 350,
    },
    media: {
      height: 170,
    },
    description: {
        height: 70,
    }
  });
  


const Products = (props) => {
    const classes = useStyles();
    console.log(props.products);

    let results= props.products.activeProducts
    if(!props.products.activeProducts) results = []

    return (
        <section>

        <div className="products">
            {results.map((product, inx) => 
            <Card key={inx} className={classes.root}>
                <CardActionArea>
        
                    <CardMedia 
                        className={classes.media}
                        image={product.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  gutterBottom variant="h5" component="h2">
                    <div className="name-price">
                        <span>
                            {product.name}
                        </span> 
                        <span className="price">
                            {product.price}
                        </span> 
                    </div>
                    </Typography>
                    <Typography className={classes.description} variant="body1" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() =>props.incrementStock(product.name)} size="small" color="primary">
                        Add To Cart
                    </Button>
                    <Button size="small" color="primary">
                        View Details
                    </Button>
                </CardActions>
            </Card>
              
            )}
            
        </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    products: state.products,
    category: state.catagories
})

const mapDispatchToProps = {setProducts, incrementStock};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
