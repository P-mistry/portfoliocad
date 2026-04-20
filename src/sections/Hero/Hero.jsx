import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
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
import TypeWriter from '../../components/TypeWriter';

const linkRows = [
  {
    title: 'My Projects',
    body: 'Check out my projects and see what I have been working on.',
    href: '#projects',
  },
  {
    title: 'My Skills',
    body: 'Check out my skills and see what I can do.',
    href: '#skills',
  },
  {
    title: 'My Contact',
    body: 'Get in touch with me and see what I can do for you.',
    href: '#contact',
  },
];

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

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
    transform: `translateY(${isVisible ? 0 : '20px'})`,
    transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <section id="hero" className={styles.page}>
      <div className={styles.heroCard}>
        <div className={styles.heroTop} style={{ ...fadeInUp, transitionDelay: '0.05s' }}>
          <span className={styles.cornerTL} aria-hidden />
          <span className={styles.cornerTR} aria-hidden />
          <div className={styles.heroTopGrid}>
            <div className={styles.introBlock}>
              <p className={styles.internetName}>Internet name:</p>
              <h1 className={styles.displayName}>
                <span className={styles.displayLine}>Parth</span>
                <span className={styles.displayLineAccent}>Mistry</span>
              </h1>
              <p className={styles.roleLine}>
                <TypeWriter text="Software developer" delay={42} />
              </p>
            </div>
            <div className={styles.profileColumn}>
              <div className={styles.photoFrame}>
                <img src={heroImg} className={styles.heroImg} alt="Parth Mistry" />
              </div>
              <div className={styles.idStrip}>
                <div className={styles.idLeft}>
                  <p className={styles.profileName}>Parth Mistry</p>
                  <p className={styles.profileRole}>Software developer</p>
                </div>
                <span className={styles.yearBadge}>2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroBio} style={{ ...fadeInUp, transitionDelay: '0.1s' }}>
          <p className={styles.description}>
            I build fast, accessible React experiences for real businesses — clean UI, sharp interactions, and code you
            can grow with.
          </p>
          <div className={styles.bioFooter}>
            <span className={styles.cornerBL} aria-hidden /> 
            <span className={styles.cornerBR} aria-hidden /> 
            <div className={styles.location}>Based in India · Remote worldwide</div>
          </div>
        </div>

        <div className={styles.socialStrip} style={{ ...fadeInUp, transitionDelay: '0.12s' }}>
          {[
            { href: 'https://x.com/parth200510', icon: twitterIcon, alt: 'Twitter' },
            { href: 'https://github.com/P-mistry', icon: githubIcon, alt: 'Github' },
            { href: 'https://www.linkedin.com/in/parthmistry7/', icon: linkedinIcon, alt: 'LinkedIn' },
            { href: 'https://www.instagram.com/parrth.5/', icon: instagramIcon, alt: 'Instagram' },
            { href: 'https://www.vwcindia.com/', icon: websiteIcon, alt: 'Website' },
          ].map((social, i) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCell}
              aria-label={social.alt}
              style={i > 0 ? { borderLeft: '1px solid var(--border-color)' } : undefined}
            >
              <img src={social.icon} alt="" aria-hidden className={styles.socialIcon} />
            </a>
          ))}
        </div>

        <ul className={styles.linkRows} style={{ ...fadeInUp, transitionDelay: '0.18s' }}>
          {linkRows.map((row) => (
            <li key={row.title} className={styles.linkRow}>
              <a href={row.href} className={styles.linkRowInner}>
                <div className={styles.linkRowText}>
                  <span className={styles.linkRowTitle}>{row.title}</span>
                  <span className={styles.linkRowBody}>{row.body}</span>
                </div>
                <span className={styles.linkRowArrow} aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.ctaRow} style={{ ...fadeInUp, transitionDelay: '0.24s' }}>
          <a href={CV} download className="btnBook btnBookFilled">
            Download resume
          </a>
          <a href="#projects" className="btnBook">
            View work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
