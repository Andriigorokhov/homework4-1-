import React, { useState } from 'react';

const Homework4_14 = () => {
  const [results, setResults] = useState([]);

  const logToScreen = (msg) => setResults(prev => [...prev, msg]);

 
  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ms), ms);
    });
  };

  const runTask1 = async () => {
    try {
      const ms1 = await delay(2000);
      logToScreen(`✅ Resolved after ${ms1}ms`);
      
      const ms2 = await delay(1000);
      logToScreen(`✅ Resolved after ${ms2}ms`);
    } catch (error) {
      logToScreen(`❌ Помилка в Task 1: ${error}`);
    }
  };
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
  ];

  const toggleUserState = async (allUsers, userName) => {
    await delay(500); 
    return allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
  };

  const runTask2 = async () => {
    try {
      const updatedMango = await toggleUserState(users, 'Mango');
      logToScreen("✅ Статус Mango змінено (див. консоль)");
      console.table(updatedMango);

      const updatedAjax = await toggleUserState(users, 'Ajax');
      logToScreen("✅ Статус Ajax змінено (див. консоль)");
      console.table(updatedAjax);
    } catch (error) {
      logToScreen(`❌ Помилка в Task 2: ${error}`);
    }
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

  const runTask3 = async () => {
    logToScreen("⏳ Обробка транзакцій...");
    const transactionData = [
      { id: 70, amount: 150 },
      { id: 71, amount: 230 },
      { id: 72, amount: 500 }
    ];

    for (const trans of transactionData) {
      try {
        const result = await makeTransaction(trans);
        logToScreen(`✅ Транзакція ${result.id} оброблена за ${result.time}ms`);
      } catch (errorId) {
        logToScreen(`❌ Помилка транзакції ${errorId}. Спробуйте пізніше.`);
      }
    }
  };

  return (
    <div style={{ padding: '80px 20px', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <h1>4(14): Async / Await & Try...Catch</h1>
      <p>Переписані функції зі старої ДЗ</p>
      
      <div style={cardStyle}>
        <h3>1. Delay (Послідовно)</h3>
        <button onClick={runTask1} style={btnStyle}>Запустити</button>
      </div>

      <div style={cardStyle}>
        <h3>2. Toggle User State</h3>
        <button onClick={runTask2} style={btnStyle}>Запустити</button>
      </div>

      <div style={cardStyle}>
        <h3>3. Transactions (Обробка помилок)</h3>
        <button onClick={runTask3} style={btnStyle}>Запустити</button>
      </div>

      <div style={{ background: '#222', padding: '20px', borderRadius: '10px', marginTop: '20px', minHeight: '150px' }}>
        <h4>Лог операцій:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((res, i) => <li key={i} style={{ color: res.includes('❌') ? '#ff4d4d' : '#4dff88', borderBottom: '1px solid #444', padding: '5px 0' }}>{res}</li>)}
        </ul>
      </div>
    </div>
  );
};

const cardStyle = { background: 'white', color: '#333', padding: '20px', borderRadius: '10px', marginBottom: '15px' };
const btnStyle = { padding: '10px 20px', cursor: 'pointer', background: '#6f42c1', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' };

export default Homework4_14;