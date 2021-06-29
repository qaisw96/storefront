import React from 'react';
import '../css/simple-cart.scss'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { deleteItemFromCart } from '../store/actions';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '180',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 200,
  },
  listSection: {
    backgroundColor: 'rgb(253, 253, 216)',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));


const SimpleCart = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => {
      return {
        cart : state.cart
      }
    })
    let displayList = state.cart.display ? state.cart.display : []
    console.log(displayList);

    const classes = useStyles();
    return (
        <>
          <div className="list">

            <List className={classes.root} subheader={<li />}>
                {displayList.map((item) => (
                    <li key={`section-${item._id}`} className={classes.listSection}>
                    <ul className={`${classes.ul} item` }>
                        <ListSubheader className="ListSubheader">{ item.name}</ListSubheader>
                        <button onClick={() => dispatch(deleteItemFromCart(item._id))}>x</button>
                        {/* {[0, 1, 2].map((item) => (
                        <ListItem key={`item-${sectionId}-${item}`}>
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                        ))} */}
                    </ul>
                    </li>
                ))}
             </List>
          </div>
        </>
    )
} 


export default SimpleCart
