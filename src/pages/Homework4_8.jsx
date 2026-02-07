import React, { useState, useEffect, useRef } from 'react';

const Homework4_8 = () => {
 
  const [messages, setMessages] = useState([]);
  const startIntervalTask = () => {
    setMessages([]);
    let count = 0;
    const id = setInterval(() => {
      count++;
      setMessages(prev => [...prev, `Повідомлення #${count}`]);
      if (count === 5) clearInterval(id);
    }, 1000);
  };

 
  const [boxState, setBoxState] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setBoxState(prev => !prev), 2000);
    return () => clearInterval(id);
  }, []);

  
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const startGame = () => {
    setScore(0); setGameTime(10); setIsActive(true);
    const id = setInterval(() => {
      setGameTime(t => {
        if (t <= 1) { clearInterval(id); setIsActive(false); return 0; }
        return t - 1;
      });
    }, 1000);
  };

 
  const [longTime, setLongTime] = useState(3600); 
  const [longTimerRunning, setLongTimerRunning] = useState(false);
  
  useEffect(() => {
    let id;
    if (longTimerRunning && longTime > 0) {
      id = setInterval(() => {
        setLongTime(t => {
          if (t === 1801) alert("Залишилось менше половини часу!");
          return t - 60;
        });
      }, 60000);
    }
    return () => clearInterval(id);
  }, [longTimerRunning, longTime]);

  const formatTime = (s) => `${Math.floor(s / 60)} хв`;
  const card = { background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '15px', color: '#333' };

  return (
    <div style={{ padding: '80px 20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>ДЗ: Таймери та Інтервали</h1>

      <div style={card}>
        <h3>1. Повідомлення раз на секунду</h3>
        <button onClick={startIntervalTask} style={{ padding: '10px' }}>Запустити</button>
        <ul>{messages.map((m, i) => <li key={i}>{m}</li>)}</ul>
      </div>

      <div style={card}>
        <h3>2. Проста анімація (2 сек)</h3>
        <div style={{ 
          width: boxState ? '150px' : '100px', 
          height: '100px', 
          background: 'chocolate', 
          transition: '0.5s',
          borderRadius: '10px' 
        }}></div>
      </div>

      <div style={card}>
        <h3>3. Гра: Клікер (10 сек)</h3>
        <p>Час: {gameTime} | Очки: {score}</p>
        <button onClick={isActive ? () => setScore(s => s + 1) : startGame} style={{ padding: '20px', width: '100%' }}>
          {isActive ? "КЛІКАЙ!" : "Почати гру"}
        </button>
      </div>

      <div style={card}>
        <h3>4. Таймер на 1 годину</h3>
        <p>Залишилось: {formatTime(longTime)}</p>
        <button onClick={() => setLongTimerRunning(true)} disabled={longTimerRunning}>Запустити відлік</button>
      </div>
    </div>
  );
};

export default Homework4_8;