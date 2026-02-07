import React, { useState, useEffect } from 'react';

const Homework4_13 = () => {
  const [students, setStudents] = useState([]);
  const API_URL = 'http://localhost:3000/students'; 

 
  const getStudents = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Сервер не відповідає. Запустіть json-server!');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      alert(error.message);
    }
  };
  const addStudent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newStudent = {
      name: formData.get('name'),
      age: parseInt(formData.get('age')),
      course: formData.get('course'),
      skills: formData.get('skills').split(',').map(s => s.trim()),
      email: formData.get('email'),
      isEnrolled: formData.get('isEnrolled') === 'on'
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
      });
      if (response.ok) getStudents(); 
    } catch (error) {
      console.error("Помилка додавання:", error);
    }
    e.target.reset();
  };

 
  const updateStudent = async (id) => {
    const newName = prompt("Введіть нове ім'я:");
    if (!newName) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName })
      });
      getStudents();
    } catch (error) {
      console.error("Помилка оновлення:", error);
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Видалити цього студента?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      getStudents();
    } catch (error) {
      console.error("Помилка видалення:", error);
    }
  };

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', background: '#f9f9f9', color: '#333', borderRadius: '15px' }}>
      <h1>Список студентів (CRUD)</h1>
      <button onClick={getStudents} style={btnStyle}>Отримати студентів</button>

      <table style={tableStyle}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th>ID</th>
            <th>Ім'я</th>
            <th>Курс</th>
            <th>Навички</th>
            <th>Статус</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{Array.isArray(s.skills) ? s.skills.join(', ') : s.skills}</td>
              <td>{s.isEnrolled ? '✅' : '❌'}</td>
              <td>
                <button onClick={() => updateStudent(s.id)} style={{...actionBtn, background: '#ffc107'}}>Оновити</button>
                <button onClick={() => deleteStudent(s.id)} style={{...actionBtn, background: '#dc3545'}}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <h2>Додати нового студента</h2>
      <form onSubmit={addStudent} style={formStyle}>
        <input name="name" placeholder="Ім'я" required style={inputStyle} />
        <input name="age" type="number" placeholder="Вік" required style={inputStyle} />
        <input name="course" placeholder="Курс" required style={inputStyle} />
        <input name="skills" placeholder="Навички (через кому)" required style={inputStyle} />
        <input name="email" type="email" placeholder="Email" required style={inputStyle} />
        <label>
          <input name="isEnrolled" type="checkbox" /> Записаний
        </label>
        <button type="submit" style={{...btnStyle, background: '#28a745', width: '100%' }}>Додати студента</button>
      </form>
    </div>
  );
};
const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '20px' };
const inputStyle = { padding: '10px', marginBottom: '10px', display: 'block', width: '100%', borderRadius: '5px', border: '1px solid #ccc' };
const btnStyle = { padding: '10px 20px', cursor: 'pointer', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' };
const actionBtn = { padding: '5px 10px', margin: '2px', border: 'none', borderRadius: '3px', cursor: 'pointer', color: 'white' };
const formStyle = { background: '#eee', padding: '20px', borderRadius: '10px', marginTop: '20px' };

export default Homework4_13;