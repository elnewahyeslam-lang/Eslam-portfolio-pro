import{FaHtml5,FaCss3Alt,FaReact,FaGithub,FaFigma} from "react-icons/fa"
import{IoLogoJavascript} from "react-icons/io5"
import{SiTypescript} from "react-icons/si"
import{VscCode} from "react-icons/vsc"
function Skills(){
    return(
        <div className="page-skills">
            <div className="my-skills">
                <h1 className="h-1">My Skills</h1>
                <h1 className="h-2">Technologies <span>I Work With</span></h1>
            </div>
            <div className="tables-skills">
                <div className="table-skills">
                    <FaHtml5 color="#ff6a00" size={70}/>
                    <h1>HTML</h1>
                </div>
                <div className="table-skills">
                    <FaCss3Alt color="#2196f3" size={70}/>
                    <h1>CSS</h1>
                </div>
                <div className="table-skills">
                    <IoLogoJavascript color="#ffeb3b" size={70}/>
                    <h1>JavaScript</h1>
                </div>
                <div className="table-skills">
                    <FaReact color="#00d8ff" size={70}/>
                    <h1>React</h1>
                </div>
                <div className="table-skills">
                    <SiTypescript color="#3178cd" size={70}/>
                    <h1>TypeScript</h1>
                </div>
                <div className="table-skills">
                    <FaGithub color="#ffffff" size={70}/>
                    <h1>GitHub</h1>
                </div>
                <div className="table-skills">
                    <VscCode color="#29b6f6" size={70}/>
                    <h1>Vs Code</h1>
                </div>
                <div className="table-skills">
                    <FaFigma color="#ff4e8b" size={70}/>
                    <h1>Figma</h1>
                </div>
            </div>
        </div>
    )
}
export default Skills