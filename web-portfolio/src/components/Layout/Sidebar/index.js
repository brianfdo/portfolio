import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './index.scss'
import Elmo from '../../../assets/images/elmo.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={Elmo} alt="logo"/>
            {/* <img src={LogoSubtitle} alt="fern"/> */}
        </Link>
        <nav>
            <HashLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </HashLink>
            <HashLink exact="true" activeclassname="active" className="about-link" to="/#about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </HashLink>
            <HashLink exact="true" activeclassname="active" className="contact-link" to="/#contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </HashLink>

        </nav>
    </div>
)

export default Sidebar