import React, { useState, useEffect } from 'react';
import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];

const Homework4_4 = () => {
  const [currentKeyIndex, setCurrentKeyIndex] = useState(Math.floor(Math.random() * keys.length));
  
  const newGame = () => {
    setCurrentKeyIndex(Math.floor(Math.random() * keys.length));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Control' || e.key === 'Alt') return;

      if (e.key.toLowerCase() === keys[currentKeyIndex]) {
        success({ text: 'Правильно! 👍', delay: 1000 });
        newGame();
      } else {
        error({ text: `Помилка! Натиснуто "${e.key.toUpperCase()}", треба "${keys[currentKeyIndex].toUpperCase()}"`, delay: 1500 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentKeyIndex]);

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        fill: false,
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="hw-container">
      <div className="hw-card" style={{ maxWidth: '800px' }}>
        <section className="game-section">
          <h2>Натисни правильну клавішу</h2>
          <div className="key-display">
            {keys[currentKeyIndex].toUpperCase()}
          </div>
          <button className="new-game-btn" onClick={newGame}>Нова гра</button>
        </section>

        <hr style={{ margin: '40px 0', opacity: 0.1 }} />

        <section className="chart-section">
          <h2>Статистика продажів</h2>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px' }}>
            <Line data={chartData} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homework4_4;