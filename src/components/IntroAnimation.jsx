import React from 'react';
import './IntroAnimation.css';
import heroImg from '../assets/hero-img.png';

const IntroAnimation = () => {
  return (
    <div className="intro-animation">
      <img src={heroImg} alt="Logo" className="intro-logo" />
      <h1 className="intro-title">Parth Mistry</h1>
    </div>
  );
};

export default IntroAnimation; 