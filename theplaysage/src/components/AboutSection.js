import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">

          </div>
          <div className="about-video">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="about-video-player"
              poster="/Pictures/HeroPicture.jpg"
            >
              <source src="/Pictures/Videos/AboutVideo.MOV" type="video/quicktime" />
              <source src="/Pictures/Videos/AboutVideo.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
