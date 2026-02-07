import React, { useState } from 'react';

const Homework4_11 = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs(prev => [...prev, `> ${msg}`]);

 
  const delayedPromise = (value, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });
  };

  const runTask1 = () => {
    addLog("Запуск Promise.all (чекаємо на всіх)...");
    
   
    const promises = [
      delayedPromise("Результат A", 1000),
      delayedPromise("Результат B", 3000),
      delayedPromise("Результат C", 500),
      delayedPromise("Результат D", 2000),
      delayedPromise("Результат E", 1500),
    ];

    Promise.all(promises)
      .then(results => {
        addLog(`Успішно! Отримано масив: [${results.join(', ')}]`);
        console.log("Promise.all results:", results);
      })
      .catch(error => addLog(`Помилка: ${error}`));
  };

 
  const randomDelay = (value) => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve({ value, delay }), delay);
    });
  };

  const runTask2 = () => {
    addLog("Запуск Promise.race (хто швидше?)...");

    const promises = [
      randomDelay("Гравець 1"),
      randomDelay("Гравець 2"),
      randomDelay("Гравець 3"),
      randomDelay("Гравець 4"),
      randomDelay("Гравець 5"),
    ];

    Promise.race(promises)
      .then(winner => {
        addLog(`Переміг: ${winner.value} (час: ${winner.delay}ms)`);
        console.log("Promise.race winner:", winner);
      })
      .catch(error => addLog(`Помилка: ${error}`));
  };

  return (
    <div style={{ padding: '80px 20px', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Завдання 11: Методи промісів</h1>

      <div style={cardStyle}>
        <h3>1. Promise.all</h3>
        <p style={{fontSize: '14px', color: '#666'}}>Чекає на виконання всіх промісів у масиві.</p>
        <button onClick={runTask1} style={btnStyle}>Виконати все одночасно</button>
      </div>

      <div style={cardStyle}>
        <h3>2. Promise.race</h3>
        <p style={{fontSize: '14px', color: '#666'}}>Повертає результат першого виконаного промісу.</p>
        <button onClick={runTask2} style={btnStyle}>Почати змагання</button>
      </div>

      <div style={{ background: '#111', padding: '20px', borderRadius: '10px', marginTop: '20px', fontFamily: 'monospace' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
           <span>Консоль результатів:</span>
           <button onClick={() => setLogs([])} style={{background: 'none', border: '1px solid #555', color: '#888', cursor: 'pointer'}}>Очистити</button>
        </div>
        <div style={{ height: '200px', overflowY: 'auto' }}>
          {logs.map((log, i) => <div key={i} style={{ color: log.includes('Переміг') ? '#00ff15' : '#ccc', marginBottom: '5px' }}>{log}</div>)}
        </div>
      </div>
    </div>
  );
};

const cardStyle = { background: 'white', color: '#333', padding: '20px', borderRadius: '12px', marginBottom: '20px' };
const btnStyle = { padding: '12px 24px', cursor: 'pointer', background: '#e67e22', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' };

export default Homework4_11;