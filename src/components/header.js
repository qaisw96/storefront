import '../css/header.scss'
import { useSelector } from 'react-redux';
import {Navbar,Container,  NavDropdown, Nav} from 'react-bootstrap'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Header = () => {
    const state = useSelector(state => {
        return {
            cart: state.cart.count
        }
    })
    const numberOfItems = state.cart
    console.log(state.cart);

    return (

        <Navbar className="header" bg="light" expand="lg">
        <Container className="container">
            <Navbar.Brand href="#home">Store Front</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <IconButton className="cart" aria-label="cart">
                <StyledBadge  badgeContent={numberOfItems} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header 