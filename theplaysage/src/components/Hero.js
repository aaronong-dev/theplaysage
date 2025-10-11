import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h3> Sports. Skills. Reels.</h3>
        <h1>ThePlaySage</h1>
        <button className="hero-button" onClick={scrollToAbout}>See More</button>
      </div>
    </section>
  );
};

export default Hero;
