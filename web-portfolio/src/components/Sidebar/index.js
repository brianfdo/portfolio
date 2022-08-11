import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './index.scss'
// import Elmo from '../../../assets/images/elmo.png'
import "aos/dist/aos.css";
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faXbox } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar' data-aos="fade-right"
    data-aos-easing="ease-in-out"
    data-aos_duration="10000">
        <Link className="logo" to="/">
            {/* <img src={Elmo} alt="logo"/> */}
            {/* <img src={LogoSubtitle} alt="fern"/> */}
        </Link>
        <nav>
            <HashLink exact="true" activeclassname="active" smooth to="/#top">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </HashLink>
            <HashLink exact="true" activeclassname="active" className="about-link" to="/#about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </HashLink>
            <HashLink exact="true" activeclassname="active" className="contact-link" to="/#contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </HashLink>

        </nav>


        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brianfdo">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/brianfdo">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="http://live.xbox.com/Profile?Gamertag=KingNinja333">
                    <FontAwesomeIcon icon={faXbox} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar