import React from 'react';
import './LandingPage.css';  // make sure this path matches your project

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <h2>Studly</h2> {/* replace with <img src="logo.png" alt="Studly" /> if you have a logo */}
      </div>

      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#faqs">FAQs</a>
      </nav>

      <div className="header-actions">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Register</button>
      </div>
    </header>
  );
};

export default Header;
