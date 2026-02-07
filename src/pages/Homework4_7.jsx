import React, { useState, useEffect } from 'react';

const Homework4_7 = () => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [url, setUrl] = useState('');

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : { username: '', password: '' };
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = () => {
    if (url.trim()) {
      setBookmarks([...bookmarks, { id: Date.now(), link: url }]);
      setUrl('');
    }
  };

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const saveFormData = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Дані збережено!');
  };

  const cardStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '100%',
    margin: '20px auto',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    color: '#333',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px'
  };

  return (
    <div style={{ padding: '80px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Секція Закладок */}
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '20px', color: '#444' }}>Закладки</h2>
        <input 
          type="text" 
          placeholder="URL" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={inputStyle}
        />
        <button 
          onClick={addBookmark} 
          style={{ background: '#0099ffff', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>
          Додати
        </button>
        <ul style={{ listStyle: 'none', padding: '0', marginTop: '20px' }}>
          {bookmarks.map((b) => (
            <li key={b.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9f9f9', padding: '10px', marginBottom: '8px', borderRadius: '6px', border: '1px solid #eee' }}>
              <a href={b.link} target="_blank" rel="noreferrer" style={{ color: 'chocolate', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80%' }}>{b.link}</a>
              <button onClick={() => deleteBookmark(b.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>X</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Секція Форми */}
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '20px', color: '#444' }}>Форма збереження</h2>
        <input 
          type="text" 
          id="username" 
          placeholder="Логін" 
          value={formData.username}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input 
          type="password" 
          id="password" 
          placeholder="Пароль" 
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <button 
          onClick={saveFormData} 
          style={{ background: '#0056b3', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '10px' }}>
          Зберегти
        </button>
      </div>
      
    </div>
  );
};

export default Homework4_7;