import React, { useEffect, useRef } from 'react';

const imagesList = [
  { id: 1, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000" },
  { id: 2, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000" },
  { id: 3, src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000" },
  { id: 4, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000" },
  { id: 5, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000" },
  { id: 6, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000" },
];

const Homework4_3 = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
   
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
         
          img.src = img.dataset.src;
          img.classList.add('fade-in'); 
          observer.unobserve(img); 
        }
      });
    }, { rootMargin: '50px' }); 

   
    imagesRef.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hw-container">
      <div className="hw-card" style={{ maxWidth: '900px' }}>
        <h2>Завдання 4(3): Lazy Loading</h2>
        <p className="hint">Картинки завантажуються лише під час скролу</p>
        
        <div className="lazy-grid">
          {imagesList.map((img, index) => (
            <div key={img.id} className="lazy-item">
              <img
                ref={el => imagesRef.current[index] = el}
                data-src={img.src} 
                src="https://via.placeholder.com/400x250?text=Loading..." 
                alt="Nature"
                className="lazy-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homework4_3;