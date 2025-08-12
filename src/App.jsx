import './App.css';
import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import AnimatedBackground from './components/AnimatedBackground'; // Import the AnimatedBackground component
import About from './sections/About/About';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroAnimation onFinish={() => setShowIntro(false)} />;

  return (
    <>
      <AnimatedBackground /> {/* Add the AnimatedBackground component here */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
