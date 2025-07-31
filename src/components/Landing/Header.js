import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src="/studly_new_logo-removebg-preview.png" alt="Studly Logo" height="90" />
      </div>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#faq">FAQs</a>
      </nav>
      <div className="header-actions">
        <a href="/auth?action=signin">
          <button className="btn btn-outline">Login</button>
        </a>
        <a href="/auth">
          <button className="btn btn-primary">Register</button>
        </a>
      </div>
    </header>
  );
};

export default Header;