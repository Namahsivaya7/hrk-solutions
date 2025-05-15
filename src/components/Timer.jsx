import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>
    <h3>Fixed version of Timer</h3>
    <strong>Seconds:</strong> {seconds}
    </div>;
}
