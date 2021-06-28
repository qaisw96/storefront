import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './categories'
import Products from './products'
import Header from './header'
import Footer from './footer'
import SimpleCart from './simple-cart'

function App() {
    return (
        <>
            <Header />
            <SimpleCart/>
            <Category />
            <Products />
            <Footer />
        </>
    )
}

export default App