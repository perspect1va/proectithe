import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { places, regions } from '../data/mockData';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [photoFilter, setPhotoFilter] = useState('all');
  const [placesSort, setPlacesSort] = useState('recent');
  
  const stats = useMemo(() => {
    if (!user) return {};
    
    const userData = JSON.parse(localStorage.getItem(`user_${user.id}`) || '{}');
    const visited = [];
    const postponed = [];
    const photos = [];
    const tier = [];
    const regionStats = {};
    const categoryStats = {};

    places.forEach(place => {
      const placeData = userData[place.id];
      
      if (placeData) {
        // Отложенные места
        if (placeData.postponed === true) {
          postponed.push({
            ...place,
            ...placeData,
            postponedDate: placeData.postponedDate || new Date().toISOString()
          });
        }
        
        // Посещенные места
        if (placeData.visited === true) {
          visited.push({
            ...place,
            ...placeData,
            visitedDate: placeData.visitedDate || new Date().toISOString()
          });

          // Фото
          if (placeData.photos && Array.isArray(placeData.photos)) {
            placeData.photos.forEach(photo => {
              photos.push({
                ...photo,
                placeName: place.name,
                placeId: place.id,
                placeRegion: place.region
              });
            });
          }

          // Тир-лист (4-5 звёзд)
          if (placeData.rating >= 4) {
            tier.push({
              ...place,
              ...placeData
            });
          }

          // Статистика по регионам
          regionStats[place.region] = (regionStats[place.region] || 0) + 1;
          
          // Статистика по категориям
          categoryStats[place.category] = (categoryStats[place.category] || 0) + 1;
        }
      }
    });

    // Сортируем тир-лист
    const sortedTier = tier.sort((a, b) => b.rating - a.rating);
    
    // Сортируем посещенные места
    const sortedVisited = visited.sort((a, b) => {
      if (placesSort === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      } else if (placesSort === 'name') {
        return a.name.localeCompare(b.name);
      } else { // recent - по дате посещения
        return new Date(b.visitedDate) - new Date(a.visitedDate);
      }
    });
    
    // Сортируем отложенные места
    const sortedPostponed = postponed.sort((a, b) => {
      return new Date(a.postponedDate) - new Date(b.postponedDate);
    });

    // Статистика регионов
    const regionProgress = regions.map(region => {
      const totalInRegion = places.filter(p => p.region === region.id).length;
      const visitedInRegion = regionStats[region.id] || 0;
      const percentage = totalInRegion > 0 ? Math.round((visitedInRegion / totalInRegion) * 100) : 0;
      
      return {
        ...region,
        visited: visitedInRegion,
        total: totalInRegion,
        percentage,
        progressColor: percentage === 100 ? '#4CAF50' : 
                       percentage >= 50 ? '#2196F3' : 
                       percentage >= 25 ? '#FF9800' : '#F44336'
      };
    }).sort((a, b) => b.percentage - a.percentage);

    // Статистика категорий
    const categoryList = Object.entries(categoryStats).map(([category, count]) => {
      const totalInCategory = places.filter(p => p.category === category).length;
      const percentage = Math.round((count / totalInCategory) * 100);
      
      return {
        category,
        count,
        total: totalInCategory,
        percentage
      };
    }).sort((a, b) => b.count - a.count);

    return {
      visitedCount: visited.length,
      postponedCount: postponed.length,
      totalPlaces: places.length,
      photoCount: photos.length,
      tierCount: sortedTier.length,
      visitedPlaces: sortedVisited,
      postponedPlaces: sortedPostponed,
      tierList: sortedTier,
      allPhotos: photos,
      regionProgress,
      categoryStats: categoryList,
      completionPercentage: Math.round((visited.length / places.length) * 100)
    };
  }, [user, placesSort]);

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  if (!user) {
    return (
      <div className="profile-page">
        <div className="auth-required">
          <h2>Требуется авторизация</h2>
          <p>Пожалуйста, войдите в систему чтобы увидеть свой профиль</p>
          <Link to="/login" className="auth-btn">Войти</Link>
        </div>
      </div>
    );
  }

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U';
  };

  const getRegionName = (regionId) => {
    const region = regions.find(r => r.id === regionId);
    return region ? region.name : 'Неизвестно';
  };

  const filteredPhotos = photoFilter === 'all' 
    ? stats.allPhotos 
    : stats.allPhotos.filter(photo => photo.placeRegion === photoFilter);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {getInitials(user.displayName)}
          </div>
        </div>
        <div className="profile-info">
          <h1>{user.displayName}</h1>
          <p className="profile-username">@{user.username}</p>
          <div className="profile-stats-summary">
            <div className="stat-summary">
              <span className="stat-number">{stats.visitedCount}</span>
              <span className="stat-label">посещено</span>
            </div>
            <div className="stat-summary">
              <span className="stat-number">{stats.postponedCount}</span>
              <span className="stat-label">отложено</span>
            </div>
            <div className="stat-summary">
              <span className="stat-number">{stats.photoCount}</span>
              <span className="stat-label">фото</span>
            </div>
            <div className="stat-summary">
              <span className="stat-number">{stats.tierCount}</span>
              <span className="stat-label">в избранном</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Обзор
        </button>
        <button 
          className={`tab-btn ${activeTab === 'places' ? 'active' : ''}`}
          onClick={() => setActiveTab('places')}
        >
          Места ({stats.visitedCount})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'postponed' ? 'active' : ''}`}
          onClick={() => setActiveTab('postponed')}
        >
          Отложенные ({stats.postponedCount})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
          onClick={() => setActiveTab('photos')}
        >
          Фото ({stats.photoCount})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Статистика
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="progress-card">
              <div className="progress-header">
                <h3>Общий прогресс</h3>
                <span className="progress-percent">{stats.completionPercentage}%</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${stats.completionPercentage}%` }}
                ></div>
              </div>
              <p className="progress-text">
                Посещено {stats.visitedCount} из {stats.totalPlaces} мест
              </p>
            </div>

            {stats.postponedCount > 0 && (
              <div className="postponed-overview">
                <h3>Отложенные места ({stats.postponedCount})</h3>
                <div className="postponed-preview">
                  {stats.postponedPlaces.slice(0, 3).map(place => (
                    <div key={place.id} className="postponed-preview-item">
                      <Link to={`/place/${place.id}`} className="postponed-link">
                        <span className="postponed-name">{place.name}</span>
                        <span className="postponed-date">
                          отложено {new Date(place.postponedDate).toLocaleDateString('ru-RU')}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {stats.tierList.length > 0 && (
              <div className="top-places">
                <h3>Лучшие места</h3>
                <div className="top-places-grid">
                  {stats.tierList.slice(0, 3).map((place, index) => (
                    <div key={place.id} className="top-place-card">
                      <div className="place-rank">#{index + 1}</div>
                      <Link to={`/place/${place.id}`} className="place-link">
                        <img src={place.image} alt={place.name} />
                        <div className="place-info">
                          <h4>{place.name}</h4>
                          <div className="place-rating">
                            <span className="rating-stars">
                              {'★'.repeat(place.rating)}
                            </span>
                            <span className="rating-value">{place.rating}.0</span>
                          </div>
                          <p className="place-category">{place.category}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="recent-photos">
              <h3>Последние фото</h3>
              {stats.allPhotos.length > 0 ? (
                <div className="photos-grid">
                  {stats.allPhotos.slice(0, 6).map(photo => (
                    <div key={photo.id} className="photo-thumbnail">
                      <img src={photo.url} alt={`Фото ${photo.placeName}`} />
                      <div className="photo-overlay">
                        <Link to={`/place/${photo.placeId}`} className="photo-place-link">
                          {photo.placeName}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-data">Нет загруженных фотографий</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'places' && (
          <div className="places-content">
            <div className="places-header">
              <h3>Посещенные места ({stats.visitedCount})</h3>
              <div className="places-filter">
                <select 
                  className="filter-select"
                  value={placesSort}
                  onChange={(e) => setPlacesSort(e.target.value)}
                >
                  <option value="recent">Последние посещения</option>
                  <option value="rating">По рейтингу</option>
                  <option value="name">По названию</option>
                </select>
              </div>
            </div>

            {stats.visitedPlaces.length > 0 ? (
              <div className="visited-places-grid">
                {stats.visitedPlaces.map(place => (
                  <div key={place.id} className="visited-place-card">
                    <div className="place-image-container">
                      <img src={place.image} alt={place.name} />
                      {place.rating && (
                        <div className="place-rating-badge">
                          {place.rating}.0
                        </div>
                      )}
                    </div>
                    <div className="place-details">
                      <h4>{place.name}</h4>
                      <p className="place-location">{place.address}</p>
                      <p className="place-category">{place.category}</p>
                      {place.visitedDate && (
                        <p className="place-date">
                          Посетили: {new Date(place.visitedDate).toLocaleDateString('ru-RU')}
                        </p>
                      )}
                      {place.review && (
                        <p className="place-review-preview">
                          {place.review.substring(0, 100)}...
                        </p>
                      )}
                      <div className="place-actions">
                        <Link to={`/place/${place.id}`} className="place-detail-link">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data-message">
                <p>Вы еще не посетили ни одного места</p>
                <Link to="/" className="explore-btn">
                  Начать исследовать
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'postponed' && (
          <div className="postponed-content">
            <div className="postponed-header">
              <h3>Отложенные места ({stats.postponedCount})</h3>
              <p className="postponed-subtitle">
                Места, которые вы планируете посетить в ближайшее время
              </p>
            </div>

            {stats.postponedPlaces.length > 0 ? (
              <div className="postponed-places-grid">
                {stats.postponedPlaces.map(place => (
                  <div key={place.id} className="postponed-place-card">
                    <div className="place-image-container">
                      <img src={place.image} alt={place.name} />
                      <div className="postponed-badge">Отложено</div>
                    </div>
                    <div className="place-details">
                      <h4>{place.name}</h4>
                      <p className="place-location">{place.address}</p>
                      <p className="place-category">{place.category}</p>
                      {place.postponedDate && (
                        <p className="postponed-date">
                          Отложено: {new Date(place.postponedDate).toLocaleDateString('ru-RU')}
                        </p>
                      )}
                      <div className="place-actions">
                        <Link to={`/place/${place.id}`} className="place-detail-link">
                          Подробнее
                        </Link>
                        <button 
                          className="remove-postponed-btn"
                          onClick={() => handleRemovePostponed(place.id)}
                        >
                          Убрать из отложенных
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data-message">
                <p>У вас нет отложенных мест</p>
                <p className="no-data-hint">
                  На странице места нажмите кнопку "Отложить" чтобы добавить его сюда
                </p>
                <Link to="/" className="explore-btn">
                  Найти места
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="photos-content">
            <div className="photos-header">
              <h3>Фотогалерея ({stats.allPhotos.length})</h3>
              <div className="photo-filters">
                <select 
                  className="filter-select"
                  value={photoFilter}
                  onChange={(e) => setPhotoFilter(e.target.value)}
                >
                  <option value="all">Все регионы</option>
                  {regions.map(region => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredPhotos.length > 0 ? (
              <div className="photo-library-grid">
                {filteredPhotos.map(photo => (
                  <div key={photo.id} className="library-photo-item">
                    <div className="photo-container">
                      <img src={photo.url} alt={`Фото ${photo.placeName}`} />
                      <div className="photo-info-overlay">
                        <Link to={`/place/${photo.placeId}`} className="photo-place-link">
                          {photo.placeName}
                        </Link>
                        <p className="photo-date">
                          {new Date(photo.date).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data-message">
                <p>Нет фотографий для выбранного фильтра</p>
                <button 
                  className="explore-btn"
                  onClick={() => setPhotoFilter('all')}
                >
                  Показать все фото
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="stats-content">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Прогресс по регионам</h3>
                <div className="regions-progress">
                  {stats.regionProgress.map(region => (
                    <div key={region.id} className="region-progress-item">
                      <div className="region-header">
                        <span className="region-name">{region.name}</span>
                        <span className="region-count">
                          {region.visited}/{region.total}
                        </span>
                      </div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar"
                          style={{ 
                            width: `${region.percentage}%`,
                            backgroundColor: region.progressColor
                          }}
                        ></div>
                      </div>
                      <div className="region-percentage">
                        {region.percentage}% завершено
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stat-card">
                <h3>Посещения по категориям</h3>
                <div className="categories-stats">
                  {stats.categoryStats.map(cat => (
                    <div key={cat.category} className="category-item">
                      <div className="category-header">
                        <span className="category-name">{cat.category}</span>
                        <span className="category-count">
                          {cat.count}/{cat.total}
                        </span>
                      </div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar"
                          style={{ width: `${cat.percentage}%` }}
                        ></div>
                      </div>
                      <div className="category-percentage">
                        {cat.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
