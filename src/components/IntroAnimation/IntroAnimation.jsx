import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './IntroAnimation.css';

const IntroAnimation = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 5000); // Adjusted to 7 seconds to account for the logo and name animation
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-animation">
      <div className="intro-logo">
        <div className="m-part m-left"></div>
        <div className="m-part m-middle"></div>
        <div className="m-part m-right"></div>
      </div>
      <div className="intro-name">
        <span>P</span>
        <span>A</span>
        <span>R</span>
        <span>T</span>
        <span>H</span>
        <span> </span>
        <span>M</span>
        <span>I</span>
        <span>S</span>
        <span>T</span>
        <span>R</span>
        <span>Y</span>
        {Array.from("PARTH MISTRY").map((letter, index) => (
          <div
            key={index}
            className="line"
            style={{
              left: `${(index * 20) + 10}px`, // Adjust position based on letter index
              top: '100%', // Position below the letter
              width: '20px', // Adjust width as needed
              animationDelay: `${2 + index * 0.2}s`, // Stagger the animation to start after 3 seconds
            }}
          />
        ))}
      </div>
    </div>
  );
};

IntroAnimation.propTypes = {
  onFinish: PropTypes.func,
};

export default IntroAnimation;
