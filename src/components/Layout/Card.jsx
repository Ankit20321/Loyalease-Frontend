// MediaCard.jsx
import React from 'react';
import './Layout.css';

const MediaCard = ({ image, title, description, onLearnMore, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-media">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-actions">
        <button className="learn-more-button" onClick={onLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MediaCard;