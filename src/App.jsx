import './App.css';
import { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import AnimatedBackground from './components/AnimatedBackground'; // Import the AnimatedBackground component

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <IntroAnimation />;

  return (
    <>
      <AnimatedBackground /> {/* Add the AnimatedBackground component here */}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
