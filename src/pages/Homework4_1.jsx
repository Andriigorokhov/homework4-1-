import React, { useState, useEffect } from 'react';

const Homework4_1 = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    const ACCESS_KEY = '9yry_RsQjTTn8BKZnBBOgsSVxVDVoFrhzvUz9CtgryU';
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=9`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(img => ({
          id: img.id,
          small: img.urls.small,
          original: img.urls.regular,
          description: img.alt_description || 'Unsplash Image'
        }));
        setImages(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  const openModal = (url, e) => {
    e.preventDefault();
    setActiveImage(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage('');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Завдання 4(1): Галерея</h2>
      <ul className="gallery">
        {images.map((img) => (
          <li key={img.id} className="gallery__item">
            <a className="gallery__link" href={img.original} onClick={(e) => openModal(img.original, e)}>
              <img className="gallery__image" src={img.small} alt={img.description} />
            </a>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="lightbox is-open">
          <div className="lightbox__overlay" onClick={closeModal}></div>
          <div className="lightbox__content">
            {activeImage && <img className="lightbox__image" src={activeImage} alt="Full size" />}
          </div>
          <button type="button" className="lightbox__button" onClick={closeModal}>&times;</button>
        </div>
      )}
    </div>
  );
};

export default Homework4_1;