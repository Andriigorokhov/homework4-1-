import React, { useState, useEffect } from 'react';

const Homework4_9 = () => {
 
  const targetDate = new Date('Dec 31, 2026 23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, mins: 0, secs: 0
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const time = targetDate - now;

      if (time <= 0) {
        clearInterval(timerId);
        return;
      }

     
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

 
  const pad = (value) => String(value).padStart(2, '0');

  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', color: 'white' }}>
      <h1>Зворотний відлік до події</h1>
      <div className="timer" id="timer-1" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '30px' 
      }}>
        <div className="field" style={fieldStyle}>
          <span className="value" style={valueStyle}>{pad(timeLeft.days)}</span>
          <span className="label" style={labelStyle}>Days</span>
        </div>
        <div className="field" style={fieldStyle}>
          <span className="value" style={valueStyle}>{pad(timeLeft.hours)}</span>
          <span className="label" style={labelStyle}>Hours</span>
        </div>
        <div className="field" style={fieldStyle}>
          <span className="value" style={valueStyle}>{pad(timeLeft.mins)}</span>
          <span className="label" style={labelStyle}>Minutes</span>
        </div>
        <div className="field" style={fieldStyle}>
          <span className="value" style={valueStyle}>{pad(timeLeft.secs)}</span>
          <span className="label" style={labelStyle}>Seconds</span>
        </div>
      </div>
    </div>
  );
};


const fieldStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const valueStyle = { fontSize: '48px', fontWeight: 'bold', background: '#333', padding: '10px 20px', borderRadius: '8px', minWidth: '80px' };
const labelStyle = { fontSize: '14px', textTransform: 'uppercase', marginTop: '5px', color: '#ccc' };

export default Homework4_9;