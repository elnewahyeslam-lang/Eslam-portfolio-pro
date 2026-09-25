import{FaBriefcase,FaGraduationCap} from "react-icons/fa"
function Experience(){
    return(
        <div className="exper-page">
            <h1 className="exper-title"> My Experience</h1>
            <h1 className="exper-name">Work <span> Experience & Education </span></h1>
            <h1 className="exper"> <FaBriefcase className="exper-icon"/> Experience</h1>
            <hr></hr>
            <div className="exper-table">
                <h2>Micro 1</h2>
                <span>2026 - Offer Accepted</span>
                <p>Officially accepted after passing the interview process. Offer is secured and waiting to complete the legal age requirement to start</p>
                <p>Currently preparing for onboarding and improving my technical skills during the waiting period</p>
            </div>
            <div className="exper-table">
                <h2>Freelance Projects</h2>
                <span>2026-present</span>
                <p>Providing front-end development services on Khamsat</p>
                <p>Building responsive websites using React,JavaScript and TypeScript with focus on clean code and modern UI</p>
            </div>
            <h1 className="exper"><FaGraduationCap className="exper-icon"/> Education</h1>
            <hr></hr>
             <div className="exper-table">
                <h2>Tanta Secondary School</h2>
                <span>2023-2026</span>
                <p>3rd Secondary</p>
                </div>
        </div>
    )
}
export default Experience