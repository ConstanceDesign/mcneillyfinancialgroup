import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">McNeilly Financial</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`} role="navigation">
        <ul>
          <li><a href="/" aria-label="Home">Home</a></li>
          <li><a href="/about" aria-label="About">About</a></li>
          <li><a href="/business" aria-label="Business">Business</a></li>
          <li><a href="/personal" aria-label="Personal">Personal</a></li>
          <li><a href="/wealth" aria-label="Wealth">Wealth</a></li>
          <li><a href="/links" aria-label="Links">Links</a></li>
          <li><a href="/contact" aria-label="Contact">Contact</a></li>
 {/* Sterling Mutuals Login as a button */}
 <li>
          <a
            href="https://www.sterlingmutuals.com/repweb/client/login.xhtml"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sterling-login"
          >
            Sterling Mutuals Login
          </a>
        </li>
        </ul>
      </div>
      <div
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen ? 'true' : 'false'}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;