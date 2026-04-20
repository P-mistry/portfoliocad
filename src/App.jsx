import './App.css';
import FrameHeader from './components/FrameHeader';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Testimonials from './sections/Testimonials/Testimonials';
import About from './sections/About/About';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';

function App() {
  return (
    <div className="viewportFrame">
      <FrameHeader />
      <div className="pageShell">
        <div className="pageContent">
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Skills />
          <Contact />
          <Footer />
          <IntroAnimation />
        </div>
      </div>
    </div>
  );
}

export default App;
