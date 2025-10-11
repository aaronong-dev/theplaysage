import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>The Play Sage</h3>
        <p>Sports. Skills. Reels.</p>
        
        <div className="social-links">
          <a href="https://www.youtube.com/@theplaysage" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/theplaysage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/theplaysage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ThePlaySage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
