import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let particles = [];
    const particleCount = 3;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      
      // Random position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      // Random size
      const size = Math.random() * 200 + 100;
      
      particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${Math.random() * 5}s;
      `;

      return particle;
    };

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle();
      particles.push(particle);
      container.appendChild(particle);
    }

    // Cleanup
    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.background} />
  );
}

export default AnimatedBackground; 