import React, { useState } from 'react';
import { add, multiply, getRandomNumber } from './utils/mathHelper';

const Homework4_5 = () => {
  const [num, setNum] = useState(0);

  const handleRandom = () => {
    const random = getRandomNumber(100);
    setNum(random);
  };

  return (
    <div className="hw-container">
      <div className="hw-card">
        <h2>Завдання 4(5): Parcel & Modules</h2>
        <div className="math-demo">
          <p>Поточне число: <strong>{num}</strong></p>
          <div className="button-group">
            <button className="new-game-btn" onClick={handleRandom}>Випадкове число</button>
            <button className="new-game-btn" onClick={() => setNum(add(num, 10))}>+10</button>
            <button className="new-game-btn" onClick={() => setNum(multiply(num, 2))}>x2</button>
          </div>
        </div>
        <p className="hint">Код розділений на модулі за допомогою import/export</p>
      </div>
    </div>
  );
};

export default Homework4_5;