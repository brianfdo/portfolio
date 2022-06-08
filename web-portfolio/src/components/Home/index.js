import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import './index.scss'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br /> I'm Brian Fernando!</h1>
                <h2>Student at Purdue University</h2>
                <HashLink smooth to="/#top" className="flat-button">CONTACT ME</HashLink>
            </div>
        </div>
    );
}

export default Home