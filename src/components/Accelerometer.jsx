import { useState, useEffect } from 'react';

const Accelerometer = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleMotion = (event) => {
      const { x, y, z } = event.acceleration;
      setAcceleration({ x, y, z });
    };

    window.addEventListener('devicemotion', handleMotion);

    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, []);

  return (
    <div>
      <h2>Accelerometer Data</h2>
      <p><strong>X:</strong> {acceleration.x}</p>
      <p><strong>Y:</strong> {acceleration.y}</p>
      <p><strong>Z:</strong> {acceleration.z}</p>
    </div>
  );
};

export default Accelerometer;