import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      const userData = JSON.parse(localStorage.getItem(`user_${user.id}`) || '{}');
      setVisited(userData[place.id]?.visited || false);
    }
  }, [place.id]);

  return (
    <Link to={`/place/${place.id}`} className="place-card">
      <img src={place.image} alt={place.name} />
      <div className="place-info">
        <h4>{place.name}</h4>
        <p className="place-category">{place.category}</p>
        <div className="place-status">
          {visited ? (
            <span className="visited-badge">✓ Посещено</span>
          ) : (
            <span className="not-visited">Еще не посещал</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;