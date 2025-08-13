import './App.css';
import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
// Removed AnimatedBackground in favor of a global background video
import About from './sections/About/About';
import BackgroundVideo from './components/BackgroundVideo.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroAnimation onFinish={() => setShowIntro(false)} />;

  return (
    <>
      <BackgroundVideo />
      <div className="pageContent">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
