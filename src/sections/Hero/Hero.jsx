import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import websiteLight from '../../assets/website-light.svg';
import websiteDark from '../../assets/website-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramDark : instagramLight;
  const websiteIcon = theme === 'light' ? websiteDark : websiteLight;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : '30px'})`,
    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <section id="hero" className={`${styles.container} ${styles.gradientBackground}`}>
      <div 
        className={styles.colorModeContainer} 
        style={{
          ...fadeInUp,
          transitionDelay: '0.2s'
        }}
      >
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Parth Mistry"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div 
        className={styles.info} 
        style={{
          ...fadeInUp,
          transitionDelay: '0.4s'
        }}
      >
        <h1>Parth Mistry</h1>
        <h2>Software Developer</h2>
        <span>
          {[
            { href: "https://x.com/parth200510", icon: twitterIcon, alt: "Twitter" },
            { href: "https://github.com/P-mistry", icon: githubIcon, alt: "Github" },
            { href: "https://www.linkedin.com/in/parthmistry7/", icon: linkedinIcon, alt: "LinkedIn" },
            { href: "https://www.instagram.com/parrth.5/", icon: instagramIcon, alt: "Instagram" },
            { href: "https://www.vwcindia.com/", icon: websiteIcon, alt: "Website" }
          ].map((social, index) => (
            <a 
              key={social.alt}
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transitionDelay: `${0.6 + (index * 0.1)}s`
              }}
            >
              <img src={social.icon} alt={`${social.alt} icon`} />
            </a>
          ))}
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a 
          href={CV} 
          download
          style={{
            transitionDelay: '1s'
          }}
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;