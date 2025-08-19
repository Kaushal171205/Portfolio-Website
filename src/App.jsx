import { useState } from 'react';
import './styling/App.css';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import { FaLinkedinIn, FaGithub, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import About from '../components/About';
import Hackathons from '../components/Hackathons';
import Contact from '../components/Contact';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'app-dark' : 'app'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="center-content">
        <h1 className="intro-heading">
          Hi, I'm <span className="intro-name">Kaushal Sharma</span>
        </h1>
        <h2 className="intro-role">A Full-Stack Web Developer</h2>
        <div className="intro-desc-bar">
          <p className="intro-desc">
            I’m focused on building responsive front-end web applications integrating back-end technologies.
          </p>
        </div>
        {/* Projects button placeholder */}
        <a className="projects" href="#projects">Projects</a>
        {/* Social icons row */}
        <div className="social-icons-row">
          <a href="https://www.linkedin.com/in/kaushal-sharma-4920ab2a2/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/Kaushal171205" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:ksharma17052005@gmail.com" className="social-icon"><MdEmail /></a>
          <a href="#about" className="social-icon"><FaUserAlt /></a>
        </div>
      </main>
      <About/>
      <div className="page3">
        <span><h1>Languages I Know</h1></span>
        <div className="img-container">
          <li><img src="/assets/Html.jpg"  alt="" /></li>
          <li><img src="/assets/Css.jpg" alt="" /></li>
          <li><img src="/assets/Js.png" alt="" /></li>
          <li><img src="/assets/Tailwind.webp" alt="" /></li>
          <li><img src="/assets/Reactjs.png" alt="" /></li>
          <li><img src="/assets/Expressjs.webp" alt="" /></li>
          <li><img src="/assets/Mongodb.webp" alt="" /></li>
          <li><img src="/assets/Nodejs.jpg"alt="" /></li>
        </div>
      </div>
      <Projects/>
      <Hackathons/>
      <Contact/>
    </div>
  )
}

export default App;
