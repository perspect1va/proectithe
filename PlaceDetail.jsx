import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';
import { places } from '../data/mockData';

const PlaceDetail = () => {
  const { placeId } = useParams();
  const place = places.find(p => p.id === placeId);
  const [visited, setVisited] = useState(false);
  const [postponed, setPostponed] = useState(false);
  const [rating, setRating] = useState(0);
  const [wouldReturn, setWouldReturn] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [review, setReview] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      const userData = JSON.parse(localStorage.getItem(`user_${user.id}`) || '{}');
      const placeData = userData[placeId] || {};
      
      setVisited(placeData.visited || false);
      setPostponed(placeData.postponed || false);
      setRating(placeData.rating || 0);
      setWouldReturn(placeData.wouldReturn || null);
      setPhotos(placeData.photos || []);
      setReview(placeData.review || '');
    }
  }, [placeId]);

  const saveUserData = (data) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;

    const userData = JSON.parse(localStorage.getItem(`user_${user.id}`) || '{}');
    userData[placeId] = { ...userData[placeId], ...data };
    localStorage.setItem(`user_${user.id}`, JSON.stringify(userData));
  };

  const handleVisitToggle = () => {
    const newVisited = !visited;
    setVisited(newVisited);
    
    if (newVisited) {
      setPostponed(false);
      saveUserData({ 
        visited: newVisited, 
        visitedDate: new Date().toISOString(),
        postponed: false 
      });
    } else {
      saveUserData({ visited: newVisited });
    }
  };

  const handlePostponeToggle = () => {
    const newPostponed = !postponed;
    setPostponed(newPostponed);
    
    if (newPostponed) {
      setVisited(false);
      saveUserData({ 
        postponed: newPostponed, 
        postponedDate: new Date().toISOString(),
        visited: false,
        rating: 0,
        wouldReturn: null,
        review: '',
        photos: []
      });
    } else {
      saveUserData({ postponed: newPostponed });
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    saveUserData({ rating: newRating });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = {
          id: Date.now(),
          url: e.target.result,
          date: new Date().toISOString()
        };
        const newPhotos = [...photos, newPhoto];
        setPhotos(newPhotos);
        saveUserData({ photos: newPhotos });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewSave = () => {
    saveUserData({ review });
  };

  if (!place) {
    return (
      <div className="place-not-found">
        <h2>Место не найдено</h2>
        <Link to="/" className="back-link">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className="place-detail">
      <Link to={`/region/${place.region}`} className="back-link">
        ← Назад к списку мест
      </Link>

      <div className="place-header">
        <div className="place-image-container">
          <img 
            src={place.image} 
            alt={place.name} 
            className="place-image"
            onClick={() => window.open(place.image, '_blank')}
          />
        </div>
        <div className="place-info">
          <h2>{place.name}</h2>
          <p className="place-category">{place.category}</p>
          <p className="place-address">{place.address}</p>
          <p className="place-description">{place.description}</p>
          <div className="place-meta">
            <div className="meta-item">
              <span className="meta-label">Рейтинг:</span>
              <span className="meta-value">{place.rating}/5</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Категория:</span>
              <span className="meta-value">{place.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="place-actions">
        <div className="action-buttons">
          <button 
            className={`visit-btn ${visited ? 'visited' : ''}`}
            onClick={handleVisitToggle}
          >
            {visited ? '✓ Посещено' : 'Отметить посещение'}
          </button>

          <button 
            className={`postpone-btn ${postponed ? 'active' : ''}`}
            onClick={handlePostponeToggle}
          >
            {postponed ? '✓ Отложено' : 'Отложить'}
          </button>
        </div>

        {visited && (
          <div className="user-feedback">
            <div className="rating-section">
              <h3>Ваша оценка:</h3>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'active' : ''}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="rating-hint">Нажмите звезду для оценки</p>
            </div>

            <div className="return-section">
              <h3>Вернётесь сюда?</h3>
              <div className="return-btns">
                <button
                  className={`return-btn ${wouldReturn === true ? 'active' : ''}`}
                  onClick={() => {
                    setWouldReturn(true);
                    saveUserData({ wouldReturn: true });
                  }}
                >
                  Да
                </button>
                <button
                  className={`return-btn ${wouldReturn === false ? 'active' : ''}`}
                  onClick={() => {
                    setWouldReturn(false);
                    saveUserData({ wouldReturn: false });
                  }}
                >
                  Нет
                </button>
              </div>
            </div>

            <div className="review-section">
              <h3>Ваш отзыв:</h3>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                onBlur={handleReviewSave}
                placeholder="Поделитесь своими впечатлениями..."
                rows="4"
              />
            </div>

            <div className="photos-section">
              <h3>Ваши фотографии:</h3>
              <div className="photo-upload-container">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="photo-upload"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="upload-label">
                  Загрузить фотографию
                </label>
              </div>
              <PhotoGallery photos={photos} />
            </div>
          </div>
        )}

        {postponed && !visited && (
          <div className="postponed-notice">
            <div className="notice-icon">⏱</div>
            <div className="notice-content">
              <h3>Место отложено</h3>
              <p>Вы планируете посетить его в ближайшее время.</p>
            </div>
            <button 
              className="cancel-postpone-btn"
              onClick={handlePostponeToggle}
            >
              Отменить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceDetail;
