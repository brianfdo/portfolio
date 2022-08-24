import { Link } from "react-router-dom";
import './index.scss'

const Home = () => {


    return (
        <div className="container home-page" >
            <div className="text-zone">
                <h1>Hello, <br /> I'm Brian Fernando!</h1>
                <h2>Student at Purdue University</h2>
                <a className="flat-button" href='mailto:brianfdo3@gmail.com'>CONTACT ME</a>
            </div>
        </div>
        
    );
}

export default Home