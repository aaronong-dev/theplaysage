import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolledPastAbout, setIsScrolledPastAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const scrollPosition = window.scrollY;
        const navbarHeight = 100; // Approximate navbar height with margin
        
        // Check if we've scrolled close to the about section (accounting for navbar)
        setIsScrolledPastAbout(scrollPosition >= aboutTop - navbarHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants for navbar
  const navbarVariants = {
    hidden: { 
      opacity: 0, 
      y: -100 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolledPastAbout ? 'navbar-solid' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
            <button onClick={scrollToTop} className="nav-link-button">Home</button>
          </li>
          <li>
            <button onClick={scrollToAbout} className="nav-link-button">About</button>
          </li>
          <li>
            <button onClick={scrollToContact} className="nav-link-button">Contact</button>
          </li>
        </ul>
        <div className="navbar-social-links">
          <a href="https://www.instagram.com/theplaysage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@theplaysage" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/@theplaysage" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
