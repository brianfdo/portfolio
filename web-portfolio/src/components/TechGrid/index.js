import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPython, faRProject, faJava, faJs, faHtml5, faCss3, faCss3Alt } from '@fortawesome/free-brands-svg-icons'


const TechGrid = () => {


    return (
        
        <div className="container" >
            <div className="container tech" >
                <div className="text-zone">
                    <h1>Languages, Technologies, and Tools</h1>
                </div>
            </div>
            <div className="container grid">
            <div class="row">
                <div class="column">
                    <div class="card">
                        <FontAwesomeIcon icon={faPython} color="#4d4d4e" size='5x' />
                        <p class="p">Python</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <FontAwesomeIcon icon={faRProject} color="#4d4d4e" size='5x' />
                        <p class="p">R</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <FontAwesomeIcon icon={faJava} color="#4d4d4e" size='5x' />
                        <p class="p">Java</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <FontAwesomeIcon icon={faHtml5} color="#4d4d4e" size='5x' />
                        <p class="p">HTML</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <FontAwesomeIcon icon={faCss3Alt} color="#4d4d4e" size='5x' />
                        <p class="p">CSS</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <FontAwesomeIcon icon={faJs} color="#4d4d4e" size='5x' />
                        <p class="p">Javascript</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default TechGrid