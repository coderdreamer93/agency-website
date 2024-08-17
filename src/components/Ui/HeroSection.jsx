


import React, { useState } from 'react';
import '../../Style/HeroSection.css';
import heroDarkImg from '../../images/1.jpeg';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="hero-section">
      <div className="container">
        <nav className={`navbar  ${isOpen ? 'open' : ''}`}>
          <div className="logo">
            <h1>AGENCY</h1>
          </div>
          <div className={`toggle-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#Blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Strategic Perspective</h1>
            <p>We build delightful, consumer-grade experiences. We're a creative design agency in San Francisco.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src={heroDarkImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

