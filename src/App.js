
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homework4_1 from './pages/Homework4_1';
import Homework4_2 from './pages/Homework4_2';
import Homework4_3 from './pages/Homework4_3';
import Homework4_4 from './pages/Homework4_4';
import Homework4_5 from './pages/Homework4_5';
import Homework4_6 from './pages/Homework4_6';
import Homework4_7 from './pages/Homework4_7';
import Homework4_8 from './pages/Homework4_8';
import Homework4_9 from './pages/Homework4_9';
import Homework4_10 from './pages/Homework4_10';
import Homework4_11 from './pages/Homework4_11';
import './App.css';
import Homework4_12 from './pages/Homework4_12';
import Homework4_13 from './pages/Homework4_13';
import Homework4_14 from './pages/Homework4_14';


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
        <h1>Модуль 4</h1>
        <nav className="menu-nav">
          <Link to="/hw4-1" className="menu-link">
            Завдання 4(1): Gallery
          </Link>
          <Link to="/hw4-2" className="menu-link">
            Завдання 4(2): Debounce
          </Link>
          <Link to="/hw4-3" className="menu-link">
            Завдання 4(3): Lazy Load
          </Link>
          <Link to="/hw4-4" className="menu-link">
            Завдання 4(4): Game & Chart
          </Link>
          <Link to="/hw4-5" className="menu-link">Завдання 4(5): Модульність коду. Бандлер JS-модулів Parcel
          </Link>
          <Link to="/hw4-6" className="menu-link">
             Завдання 4(6): Handlebars
          </Link>
          <Link to="/hw4-7" className="menu-link">
           Завдання 4(7): LocalStorage
          </Link>
          <Link to="/hw4-8" className="menu-link">Завдання 4(8): Таймери
          </Link>
          <Link to="/hw4-9" className="menu-link">
           Завдання 4(9): Countdown Timer
         </Link>
         <Link to="/hw4-10" className="menu-link"> Завдання 4(10): Promises
         </Link>
         <Link to="/hw4-11" className="menu-link"> 4(11): Promise All/Race
         </Link>
         <Link to="/hw4-12" className="menu-link"> 4(12): Pixabay API
         </Link>
         <Link to="/hw4-13" className="menu-link"> 4(13): CRUD Students
         </Link>
         <Link to="/hw4-14" className="menu-link"> 4(14): Async/Await
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
            <Route path="/hw4-4" element={<Homework4_4 />} />
            <Route path="/hw4-5" element={<Homework4_5 />} />
            <Route path="/hw4-6" element={<Homework4_6 />} />
            <Route path="/hw4-7" element={<Homework4_7 />} />
            <Route path="/hw4-8" element={<Homework4_8 />} />
            <Route path="/hw4-9" element={<Homework4_9 />} />
            <Route path="/hw4-10" element={<Homework4_10 />} />
            <Route path="/hw4-11" element={<Homework4_11 />} />
            <Route path="/hw4-12" element={<Homework4_12 />} />
            <Route path="/hw4-13" element={<Homework4_13 />} />
             <Route path="/hw4-14" element={<Homework4_14 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;