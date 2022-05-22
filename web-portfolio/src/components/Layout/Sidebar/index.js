import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../../assets/images/elmo.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = function () {
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={Logo} alt="logo"/>
            {/* <img src={LogoSubtitle} alt="fern"/> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

        </nav>
    </div>
}

export default Sidebar