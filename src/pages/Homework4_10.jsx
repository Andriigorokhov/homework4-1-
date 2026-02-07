import React, { useState } from 'react';

const Homework4_10 = () => {
  const [results, setResults] = useState([]);

  const logToScreen = (msg) => setResults(prev => [...prev, msg]);

  
  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ms), ms);
    });
  };

  const runTask1 = () => {
    delay(2000).then(ms => logToScreen(`Resolved after ${ms}ms`));
    delay(1000).then(ms => logToScreen(`Resolved after ${ms}ms`));
    delay(1500).then(ms => logToScreen(`Resolved after ${ms}ms`));
  };

 
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
      resolve(updatedUsers);
    });
  };

  const runTask2 = () => {
    toggleUserState(users, 'Mango').then(updated => {
        logToScreen("Updated Mango state");
        console.table(updated);
    });
    toggleUserState(users, 'Lux').then(updated => {
        logToScreen("Updated Lux state");
        console.table(updated);
    });
  };

 
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeTransaction = (transaction) => {
    const delayTime = randomIntegerFromInterval(200, 500);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        if (canProcess) {
          resolve({ id: transaction.id, time: delayTime });
        } else {
          reject(transaction.id);
        }
      }, delayTime);
    });
  };

  const runTask3 = () => {
    const logSuccess = ({ id, time }) => logToScreen(`Transaction ${id} processed in ${time}ms`);
    const logError = (id) => logToScreen(`Error processing transaction ${id}. Try again later.`);

    makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
    makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
  };

  return (
    <div style={{ padding: '80px 20px', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Завдання 10: Проміси</h1>
      
      <div style={cardStyle}>
        <h3>Завдання 1: Затримка (delay)</h3>
        <button onClick={runTask1} style={btnStyle}>Запустити Task 1</button>
      </div>

      <div style={cardStyle}>
        <h3>Завдання 2: Користувачі (Promise.resolve)</h3>
        <button onClick={runTask2} style={btnStyle}>Запустити Task 2</button>
      </div>

      <div style={cardStyle}>
        <h3>Завдання 3: Транзакції (Random Delay)</h3>
        <button onClick={runTask3} style={btnStyle}>Запустити Task 3</button>
      </div>

      <div style={{ background: '#222', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <h4>Лог результатів:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((res, i) => <li key={i} style={{ borderBottom: '1px solid #444', padding: '5px 0' }}>{res}</li>)}
        </ul>
      </div>
    </div>
  );
};

const cardStyle = { background: 'white', color: '#333', padding: '20px', borderRadius: '10px', marginBottom: '15px' };
const btnStyle = { padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' };

export default Homework4_10;