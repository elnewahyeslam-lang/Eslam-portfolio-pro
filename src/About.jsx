import aboutImg from"./assets/file_0000000077fc81f495e5e51bcaac33d6.png"
import {FaUser,FaMapMarkedAlt,FaEnvelope} from "react-icons/fa"
function About(){
    return(
        <div className="page-about">
            <div className="name-about">
                <h2 className="about-me">About Me</h2>
                <h1>Get To Know  <span>Me</span></h1>
                <p>I'm Eslam Mohamed. a passionate Front-End Developer <br></br>
                    From Egypt. I enjoy building beautiful and functional <br></br>
                    website using modern technologies like React,JavaScript and TypeScript <br></br>
                    <br></br>
                    I'm always curious, love learning new things and I'm <br></br>
                    committed to improving my skills every day.My goal is <br></br>
                    to become a professional developer and work on <br></br>
                    amazing projects that make a real impact. 
                </p>
                <h2 className="local"> <FaUser className="loca"/> <span className="name-loca"> Name:</span>  Eslam Mohamed Ahmed Elnewahy</h2>
                <h2 className="local"> <FaMapMarkedAlt className="loca"/> <span className="name-loca" > Location:</span>  Egypt</h2>
                <h2 className="local"> <FaEnvelope className="loca"/> <span  className="name-loca">Email:  </span> elnewahyeslam@gmail.com</h2>
            </div>
            <div className="img-about">
                <img src={aboutImg}  width="600px" height="600"/>
            </div>
        </div>
    )
}
export default About