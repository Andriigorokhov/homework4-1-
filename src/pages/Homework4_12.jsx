import React, { useState, useEffect } from 'react';

const Homework4_12 = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

 
  const API_KEY = '9yry_RsQjTTn8BKZnBBOgsSVxVDVoFrhzvUz9CtgryU'; 
  const PER_PAGE = 12;

  const fetchImages = async (pageNum) => {
    setIsLoading(true);
    try {
     
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${API_KEY}&page=${pageNum}&per_page=${PER_PAGE}`
      );
      
      if (!response.ok) {
        throw new Error('Помилка авторизації або ліміту запитів');
      }

      const data = await response.json();
      
    
      setImages(prev => [...prev, ...data]);
    } catch (error) {
      console.error("Помилка завантаження з Unsplash:", error);
    } finally {
      setIsLoading(false);
    }
  };

 
  useEffect(() => {
    fetchImages(page);
  }, [page]);

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '30px' }}>Unsplash Gallery</h1>

     
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px',
        marginBottom: '40px'
      }}>
        {images.map((img, index) => (
          <div key={`${img.id}-${index}`} style={cardStyle}>
            <img 
              src={img.urls.small} 
              alt={img.alt_description} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} 
            />
            <div style={{ padding: '15px', color: '#333', textAlign: 'left', fontSize: '14px' }}>
              <p style={{ margin: '0 0 5px 0' }}>👤 <b>{img.user.name}</b></p>
              <p style={{ margin: '0', color: '#666' }}>❤️ {img.likes} likes</p>
            </div>
          </div>
        ))}
      </div>

    
      {isLoading ? (
        <p style={{ color: 'white' }}>Завантаження фото...</p>
      ) : (
        <button 
          onClick={() => setPage(prev => prev + 1)} 
          style={loadMoreBtnStyle}
        >
          Завантажити ще
        </button>
      )}
    </div>
  );
};

const cardStyle = { 
  background: 'white', 
  borderRadius: '12px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.4)', 
  overflow: 'hidden',
  transition: 'transform 0.3s ease'
};

const loadMoreBtnStyle = {
  padding: '15px 50px',
  fontSize: '18px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 5px 15px rgba(0,123,255,0.4)',
  transition: 'background 0.3s'
};

export default Homework4_12;