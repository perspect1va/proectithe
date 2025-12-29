import React from 'react';
import RegionCard from '../components/RegionCard';
import { regions } from '../data/mockData';

const Main = () => {
  return (
    <div className="main-page">
      <h2>Выберите область</h2>
      <div className="regions-grid">
        {regions.map(region => (
          <RegionCard key={region.id} region={region} />
        ))}
      </div>
    </div>
  );
};

export default Main;