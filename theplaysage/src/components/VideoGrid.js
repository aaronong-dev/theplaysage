import React from 'react';

const VideoGrid = ({ videos }) => {
  const defaultVideos = [
    {
      id: 1,
      title: "Amazing Goal Compilation",
      description: "Watch the best goals from this season's matches"
    },
    {
      id: 2,
      title: "Defensive Masterclass",
      description: "Incredible saves and defensive plays"
    },
    {
      id: 3,
      title: "Team Highlights",
      description: "Best moments from our recent games"
    }
  ];

  const videoList = videos || defaultVideos;

  return (
    <section className="videos-section">
      <h2>Latest Highlights</h2>
      <div className="video-grid">
        {videoList.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-placeholder">
              Video Placeholder
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
