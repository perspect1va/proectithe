import React from 'react';
import { Link } from 'react-router-dom';

const RegionCard = ({ region }) => {
  return (
    <Link to={`/region/${region.id}`} className="region-card">
      <div 
        className="region-image"
        style={{ backgroundImage: `url(${region.image})` }}
      >
        <div className="region-overlay">
          <h3>{region.name}</h3>
          <p>{region.placesCount} мест</p>
        </div>
      </div>
    </Link>
  );
};

export default RegionCard;