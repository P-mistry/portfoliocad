import './App.css';
import { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <IntroAnimation />;

  return (
    <>
      <Hero />
      {/*<Projects />*/}
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
