import loginImage from"./assets/login.png"
import landingImage from"./assets/Screenshot 2026-06-13 193259.png"
import portfolioImage from"./assets/Screenshot 2026-06-16 225832.png"
import profileImage from"./assets/Screenshot 2026-06-12 193856.png"
import burgerImage from"./assets/Screenshot 2026-06-13 190009.png"
import dashboardImage from"./assets/Screenshot 2026-09-10 221614.png"
import storeImage from"./assets/Screenshot 2026-09-16 214428.png"
function Projects(){
    return(
        <>
        <div className="my">
        <h1 className="h-1"> My Projects</h1>
        <h1 className="h-2">Some Of My <span>Recent Projects</span></h1>
        </div>
                <div className="page-project">
            <div className="table-project">
                <img src={dashboardImage} />
                <div className="descript">
                <h1> Dashboard Tasks</h1>
                <p>A smart task manager dashboard Dynamic Featuring state cards,task progress charts, and a recent tasks overview . Built with React and modern UI design </p>
                </div>
                <div className="tags">
                    <h2>React</h2>
                    <h2>CSS</h2>
                    <h2>Hooks</h2>
                    <div className="links">
                    <a href="https://dashboard-nu-nine-45.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Dashboard" target="blank">GitHub</a>
                </div>
            </div>
            </div>

            <div className="table-project">
                <img src={storeImage} />
                <div className="descript">
                <h1>E-Commerce</h1>
                <p>A premium e-commerce experience with React and Api and elegant design, smooth animations, and seamless shopping flow dynamic cart functionality and responsive</p>
                </div>
                <div className="tags">
                    <h2>React</h2>
                    <h2>API</h2>
                    <h2>CSS</h2>
                    <div className="links">
                    <a href="https://solom-store.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Solom-Store" target="blank">GitHub</a>
                </div>
            </div>
            </div>

            <div className="table-project">
                <img src={loginImage} />
                <div className="descript">
                <h1>Login page</h1>
                <p> A responsive login form with form validation and local storage Functionality, built with HTML,CSS,and JavaScript,featuring a clean Ui and smooth user experience</p>
                </div>
                <div className="tags">
                    <h2>Local Storage</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://login-page-iota-gilt.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Login-page" target="blank">GitHub</a>
                </div>
            </div>
            </div>
        
        
            <div className="table-project">
                <img src={landingImage} />
                <div className="descript">
                <h1>Landing page</h1>
                <p>A responsive personal landing page featuring a bold 3D geometric design and bilingual layout built with HTML,CSS,and JavaScript focused on clean presentation </p>
                </div>
                <div className="tags">
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://landing-page-gamma-eight-10.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Landing-page" target="blank">GitHub</a>
                </div>
            </div>
            </div>


            <div className="table-project">
                <img src={portfolioImage}/>
                <div className="descript">
                <h1>Portfolio</h1>
                <p> prtfolio website to showcase my skills and projects with a modern dark theme and interactive sections. Built with HTML,CSS,JavaScript,featuring smooth animation</p>
                </div>
                <div className="tags">
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://my-protfolio-ashen-one.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/my-protfolio" target="blank">GitHub</a>
                </div>
            </div>
            </div>


            <div className="table-project">
                <img src={profileImage} />
                <div className="descript">
                <h1>Profile</h1>
                <p>A personal profile website for Eslam , a Front-End Developer from Tanta. I built modern and responsive and user-friendly websites Built with HTML,CSS,JavaScript </p>
                </div>
                <div className="tags">
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://eslam-profile-rho.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Eslam-Profile" target="blank">GitHub</a>
                </div>
            </div>
            </div>


            <div className="table-project">
                <img src={burgerImage } />
                <div className="descript">
                <h1>Burger Dream</h1>
                <p> A vibrant and responsive landing page for a Burger Dream restaurant featuring a bold hero design and Arabic RTL layout Built with HTML,CSS,JavaScript user-friendly experience  </p>
                </div>
                <div className="tags">
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <div className="links">
                    <a href="https://burger-dream.vercel.app" target="blank">View project</a>
                    <a href="https://github.com/elnewahyeslam-lang/Burger-Dream" target="blank">GitHub</a>
                </div>
            </div>
            </div>
            </div>
            </>
    )
}
export default Projects