import portImage from"./assets/file_00000000e28881f4ae835ab615bc4c4b.png"
import {FaLinkedin,FaGithub,FaFacebook,FaWhatsapp } from "react-icons/fa"
function Home(){
    return(
        <div className="home">
            <div className="port">
            <div className="name">
                <h2>Hello, I'm</h2>
                <h1>ESLAM <span>MOHAMED</span></h1>
                <h2>Front-End Developer | React Developer</h2>
                <p>I build modern,responsive and user-friendly web applications. <br/>  I love turning ideas real projects and I'm always eager to learn new technologies</p>
            </div>
            <div className="contact">
                <a href="https://solom-store.vercel.app" target="blank" className="con-1">View My Projects</a>
                <a href="tel:01033294185" target="blank" className="con-2">Contact Me</a>
            </div>
            <div className="media">
                <a href="https://www.linkedin.com/in/eslam-elnewahy-0ab695418/" target="blank"> <FaLinkedin/> </a>
                <a href="https://github.com/elnewahyeslam-lang" target="blank"> <FaGithub/> </a>
                <a href="https://www.facebook.com/eslam.elnewahy.2025" target="blank"> <FaFacebook/> </a>
                <a href="https://wa.me/201033294185" target="blank"> <FaWhatsapp/> </a>
            </div>
            </div>
            <div className="img">
                <img src={portImage}/>
            </div>
        </div>
    )
}
export default Home