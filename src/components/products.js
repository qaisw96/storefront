import '../css/products.scss'
import {useEffect} from 'react';
import { incrementStock, addToCard, getAllProducts } from "../store/actions";
import { useSelector, useDispatch } from 'react-redux';
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

    useEffect(() => {
       dispatch(getAllProducts())
       
    }, [] )

    const dispatch = useDispatch()

    const state = useSelector(state => {
        return {
            products: state.products,
        }
    })
    console.log(state.products)
    const classes = useStyles();

    let results= state.products.activeProducts

    return (
        <section>

        <div className="products">
            {results.map((product, inx) => 
            <Card key={inx} className={classes.root}>
                <CardActionArea>
        
                    <CardMedia 
                        className={classes.media}
                        image={product.Image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  gutterBottom variant="h5" component="h2">
                    <div className="name-price">
                        <span>
                            {product.name}
                        </span> 
                        <span className="price">
                            {`${product.price} $`}
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
                    <Button onClick={() =>{ 
                        dispatch(incrementStock(product.name))
                        dispatch(addToCard(product.name))
                    }}
                     size="small" color="primary">
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



export default Products;
