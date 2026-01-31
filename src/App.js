
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homework4_1 from './pages/Homework4_1';
import Homework4_2 from './pages/Homework4_2'; 
import Homework4_3 from './pages/Homework4_3'; 
import './App.css';

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (!isHome) {
    return (
      <Link to="/" className="back-button">
        <span>←</span> Назад до меню
      </Link>
    );
  }

  return (
    <div className="menu-container">
      <div className="glass-card">
        <h1>Мій Навчальний Хаб</h1>
        <nav className="menu-nav">
          <Link to="/hw4-1" className="menu-link">
            <span className="icon">🖼️</span> Завдання 4(1): Галерея
          </Link>
          <Link to="/hw4-2" className="menu-link"> 
            <span className="icon">📝</span> Завдання 4(2): Debounce
          </Link>
          <Link to="/hw4-3" className="menu-link">
            <span className="icon">🚀</span> Завдання 4(3): Скролл
          </Link>
        </nav>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="background-overlay"></div>
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={null} />
            <Route path="/hw4-1" element={<Homework4_1 />} />
            <Route path="/hw4-2" element={<Homework4_2 />} /> 
            <Route path="/hw4-3" element={<Homework4_3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;