import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Experience from './Experience'
function App() {

  return (
    <>
    <Navbar/>
     <div id="home"><Home /></div>
     <div id="projects"><Projects /></div>
     <div id="skills"><Skills /></div>
     <div id="about"><About /> </div>
     <div id="experience"><Experience /> </div>
    </>
  )
}

export default App
