import { useState } from "react"
function Navbar(){
    const[active,setActive]=useState("home")
    return(
        <div className="navbar">
            <div className="span">
            <span>Eslam</span>
            </div>
            <div className="links-1">
                <a href="#home" className={active==="home"? "active":""} onClick={()=>setActive("home")}>Home</a>
                <a href="#projects" className={active==="projects"? "active":""} onClick={()=>setActive("projects")}>Projects</a>
                <a href="#skills" className={active==="skills"? "active":""} onClick={()=>setActive("skills")}>Skills</a>
                <a href="#about" className={active==="about"? "active":""} onClick={()=>setActive("about")} >About</a>
                <a href="#experience" className={active==="experience"? "active":""} onClick={()=>setActive("experience")} >Experience</a>
            </div>
            <div className="talk">
                <a href="tel:01033294185">Contact</a>
            </div>
        </div>
    )
}
export default Navbar