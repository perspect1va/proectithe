import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import { places } from '../data/mockData';

const RegionDetail = () => {
  const { regionId } = useParams();
  const regionPlaces = places.filter(p => p.region === regionId);

  return (
    <div className="region-detail">
      <Link to="/" className="back-link">← Назад к регионам</Link>
      
      <div className="region-header">
        <h2>Достопримечательности региона</h2>
        <p>Количество мест: {regionPlaces.length}</p>
      </div>
      
      <div className="places-list">
        {regionPlaces.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default RegionDetail;