import '../css/footer.scss'
import {Navbar} from 'react-bootstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

const Footer = () => {

    return (
        <Navbar className="footer" bg="light" expand="lg">

            <FacebookIcon className="icon"  color="primary">star</FacebookIcon>
            <LinkedInIcon className="icon"  color="primary">star</LinkedInIcon>
            <LocalPhoneIcon className="icon"  color="primary">star</LocalPhoneIcon>
        </Navbar>

    )
}

export default Footer