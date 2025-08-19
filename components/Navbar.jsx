import '../src/styling/Navbar.css'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
const Navbar = ({ 
  isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* You can add a logo or site name here if desired */}
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href= "#about" onClick={handleLinkClick}>About</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
        <a href="#hack" onClick={handleLinkClick}>Hackathons</a>
      </div>
      <div className="navbar-actions">
        <a href="https://drive.google.com/file/d/1kzXfUu3wq2S7wJOCOmY-DfDd4gydci3m/view?usp=drivesdk" className="resume-btn" target="_blank" rel="noopener noreferrer">Resume</a>
        <button className="dark-mode-toggle" aria-label="Toggle dark mode" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="navbar-hamburger" aria-label="Toggle menu" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          <a href="#hack" onClick={handleLinkClick}>Hackathons</a>
          <a href="https://drive.google.com/file/d/1kzXfUu3wq2S7wJOCOmY-DfDd4gydci3m/view?usp=drivesdk" className="resume-btn" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 