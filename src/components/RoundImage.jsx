// RoundImage.jsx
import React from 'react';
import '../style/RoundImage.css'; // Assuming you have a CSS file for styles

const RoundImage = ({ src, alt }) => {
  return (
    <div className="round-image-wrapper">
      <img src={src} alt={alt} className="round-image" />
    </div>
  );
};

export default RoundImage;
