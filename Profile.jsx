import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { places, regions } from '../data/mockData';

const Profile = ({ user }) => {
  const [visitedPlaces, setVisitedPlaces] = useState([]);
  const [tierList, setTierList] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [stats, setStats] = useState({
    visited: 0,
    notVisited: 0
  });

  useEffect(() => {
    if (user) {
      console.log('Загружаем данные для пользователя:', user.id);
      
      const userData = JSON.parse(localStorage.getItem(`user_${user.id}`) || '{}');
      console.log('Данные пользователя из localStorage:', userData);
      
      const visited = [];
      const photos = [];
      const tier = [];
      let totalVisited = 0;

      // Перебираем ВСЕ места из mockData
      places.forEach(place => {
        const placeData = userData[place.id];
        console.log(`Место ${place.id}:`, placeData);
        
        if (placeData?.visited === true) {
          totalVisited++;
          visited.push({
            ...place,
            ...placeData
          });

          if (placeData.photos && Array.isArray(placeData.photos)) {
            placeData.photos.forEach(photo => {
              photos.push({
                ...photo,
                placeName: place.name,
                placeId: place.id
              });
            });
          }

          if (placeData.rating >= 4) {
            tier.push({
              ...place,
              ...placeData
            });
          }
        }
      });

      console.log('Посещённые места:', visited);
      console.log('Фото:', photos);
      console.log('Тир-лист:', tier);

      setVisitedPlaces(visited);
      setAllPhotos(photos);
      setTierList(tier.sort((a, b) => b.rating - a.rating));
      
      setStats({
        visited: totalVisited,
        notVisited: places.length - totalVisited
      });
    }
  }, [user]);

  // Простая проверка данных в консоли
  console.log('Текущие состояния:');
  console.log('visitedPlaces:', visitedPlaces);
  console.log('tierList:', tierList);
  console.log('allPhotos:', allPhotos);
  console.log('stats:', stats);

  return (
    <div className="profile-page">
      <h2>👤 Профиль пользователя</h2>
      
      <div className="user-info">
        <h3>{user?.displayName || 'Пользователь'}</h3>
        <p>📧 Логин: {user?.username || 'неизвестно'}</p>
        {user?.id && <div className="user-id">🆔 ID: {user.id}</div>}
      </div>

      {/* Простая статистика */}
      <div className="stats">
        <div className="stat-card">
          <h4>✅ Посещено мест</h4>
          <p className="stat-number">{stats.visited}</p>
          <p className="stat-detail">из {places.length} всего</p>
        </div>
        
        <div className="stat-card">
          <h4>⭐ В избранном</h4>
          <p className="stat-number">{tierList.length}</p>
          <p className="stat-detail">оценка 4-5 звёзд</p>
        </div>
        
        <div className="stat-card">
          <h4>📸 Фото</h4>
          <p className="stat-number">{allPhotos.length}</p>
          <p className="stat-detail">в вашей библиотеке</p>
        </div>
      </div>

      {/* Тир-лист */}
      <div className="tier-list">
        <h3>⭐ Мой Тир-лист</h3>
        {tierList.length > 0 ? (
          <div className="tier-items">
            {tierList.map((item, index) => (
              <div key={item.id} className="tier-item">
                <div className="tier-rank">#{index + 1}</div>
                <Link to={`/place/${item.id}`} className="tier-content">
                  <img src={item.image} alt={item.name} />
                  <div className="tier-info">
                    <h4>{item.name}</h4>
                    <div className="tier-rating">
                      {"★".repeat(item.rating)}
                      <span className="rating-value">{item.rating}.0</span>
                    </div>
                    <p className="tier-description">{item.description.substring(0, 100)}...</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-message">
            <p>Пока нет мест в тир-листе 🥲</p>
            <p>Посетите места и оцените их 4-5 звёздами!</p>
            <Link to="/" className="explore-btn">Начать исследовать →</Link>
          </div>
        )}
      </div>

      {/* Библиотека фото */}
      <div className="photo-library">
        <h3>📸 Библиотека фото ({allPhotos.length})</h3>
        
        {allPhotos.length > 0 ? (
          <div className="photo-grid">
            {allPhotos.map(photo => (
              <div key={photo.id} className="photo-item">
                <img src={photo.url} alt={`Фото ${photo.placeName}`} />
                <div className="photo-info">
                  <Link to={`/place/${photo.placeId}`} className="photo-place">
                    {photo.placeName}
                  </Link>
                  <p className="photo-date">
                    📅 {new Date(photo.date).toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-message">
            <p>Пока нет загруженных фото 📸</p>
            <p>Добавляйте фотографии к посещённым местам!</p>
            <Link to="/" className="explore-btn">Добавить фото →</Link>
          </div>
        )}
      </div>

      {/* Дебаг информация (только в разработке) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="debug-info" style={{ 
          background: '#f5f5f5', 
          padding: '1rem', 
          marginTop: '2rem',
          borderRadius: '5px',
          fontSize: '0.8rem'
        }}>
          <h4>Отладочная информация:</h4>
          <p>Всего мест в базе: {places.length}</p>
          <p>Посещено: {stats.visited}</p>
          <p>Фото в библиотеке: {allPhotos.length}</p>
          <p>Места в тир-листе: {tierList.length}</p>
          <p>ID пользователя: {user?.id}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;