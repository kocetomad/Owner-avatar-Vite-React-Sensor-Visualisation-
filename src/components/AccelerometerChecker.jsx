import { useEffect, useState } from 'react';
import React from 'react'; // Make sure this line is at the top of your file

const AccelerometerChecker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia('(pointer: coarse)');
        setIsMobile(mediaQuery.matches);
      }
    };

    checkMobile(); // Initial check

    // Listen for changes in the media query (e.g., when a device orientation changes)
    const mediaQueryListener = (event) => setIsMobile(event.matches);
    window.addEventListener('orientationchange', checkMobile);
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <p>Accelerometer present</p>
      ) : (
        <p>Accelerometer not available on desktop</p>
      )}
    </div>
  );
};

export default AccelerometerChecker;
