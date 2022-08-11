import { HashLink } from "react-router-hash-link"
import './index.scss'

const Home = () => {


    return (
        <div className="container intro-box" id="about">
            <div className="text-zone" >
                <h1>
                    Welcome to my portfolio website! I am currently a third year undergraduate student <br />
                    studying Computer Science, Data Science, and Statistics at Purdue University.<br />
                    My interests lie at the intersection of ML and Data Science. <br />
                    Currently, I am projected to graduate in May 2024.
                </h1>
            </div>
        </div>
    );
}

export default Home