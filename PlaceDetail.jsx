import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';
import { places } from '../data/mockData';

const PlaceDetail = () => {
  const { placeId } = useParams();
  const place = places.find(p => p.id === placeId);
  const [visited, setVisited] = useState(false);
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
    saveUserData({ visited: newVisited });
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
    return <div>Место не найдено</div>;
  }

  return (
    <div className="place-detail">
      <Link to={`/region/${place.region}`} className="back-link">
        ← Назад к списку мест
      </Link>

      <div className="place-header">
        <img src={place.image} alt={place.name} className="place-image" />
        <div className="place-info">
          <h2>{place.name}</h2>
          <p className="place-category">{place.category}</p>
          <p className="place-address">{place.address}</p>
          <p className="place-description">{place.description}</p>
        </div>
      </div>

      <div className="place-actions">
        <button 
          className={`visit-btn ${visited ? 'visited' : ''}`}
          onClick={handleVisitToggle}
        >
          {visited ? '✓ Вы посетили это место' : 'Отметить посещение'}
        </button>

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
              <h3>Ваши фото:</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="photo-upload"
              />
              <PhotoGallery photos={photos} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceDetail;