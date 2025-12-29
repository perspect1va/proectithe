import React from 'react';

const PhotoGallery = ({ photos }) => {
  if (photos.length === 0) {
    return (
      <div className="no-photos">
        <p>Пока нет фотографий</p>
      </div>
    );
  }

  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo-item">
          <img src={photo.url} alt="Фото пользователя" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;