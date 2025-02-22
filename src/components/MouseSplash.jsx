import { useEffect, useState, useCallback } from 'react';
import styles from './MouseSplash.module.css';

function MouseSplash() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    
    const throttledMouseMove = (e) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleMouseMove(e);
          timeoutId = null;
        }, 16); // Approximately 60fps
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  return (
    <div 
      className={`${styles.splash} ${isVisible ? styles.visible : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        willChange: 'transform',
      }}
    />
  );
}

export default MouseSplash; 