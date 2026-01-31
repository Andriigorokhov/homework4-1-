import React, { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';

const Homework4_2 = () => {
  // --- Завдання 1: Слайдер з Debounce ---
  const [imageSize, setImageSize] = useState(300);

  const debouncedSizeChange = useCallback(
    debounce((newSize) => {
      setImageSize(newSize);
    }, 150),
    []
  );

  const handleSliderChange = (e) => {
    const value = e.target.value * 4; 
    debouncedSizeChange(value);
  };

  // --- Завдання 2: Теплий Курсор з Debounce ---
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Встановлюємо затримку 100мс, як просили в завданні
    const updateMousePos = debounce((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 100);

    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, []);

  return (
    <div className="hw-container">
      <div className="hw-card">
        <h2>Завдання 4(2): Робота з Debounce</h2>
        
        {/* Секція Слайдера */}
        <div className="slider-wrapper">
          <p>Перетягніть повзунок, щоб змінити розмір:</p>
          <input 
            type="range" 
            min="30" 
            max="150" 
            className="slider_input" 
            onChange={handleSliderChange} 
          />
          <div className="image-box">
            <img 
              src="https://picsum.photos/600/400" 
              alt="Test" 
              style={{ width: `${imageSize}px` }} 
              className="slider_image"
            />
          </div>
        </div>

        {/* Теплий вказівник */}
        <div 
          className="warm-cursor" 
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px` 
          }}
        ></div>
        
        <p className="hint">Червоне коло наздоганяє вашу мишку із затримкою 100мс</p>
      </div>
    </div>
  );
};

export default Homework4_2;