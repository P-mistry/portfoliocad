import styles from './FooterStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

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

function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    { href: 'https://x.com/parth200510', icon: theme === 'light' ? twitterLight : twitterDark, alt: 'Twitter' },
    { href: 'https://github.com/P-mistry', icon: theme === 'light' ? githubLight : githubDark, alt: 'GitHub' },
    { href: 'https://www.linkedin.com/in/parthmistry7/', icon: theme === 'light' ? linkedinLight : linkedinDark, alt: 'LinkedIn' },
    { href: 'https://www.instagram.com/parrth.5/', icon: theme === 'light' ? instagramDark : instagramLight, alt: 'Instagram' },
    { href: 'https://www.vwcindia.com/', icon: theme === 'light' ? websiteDark  : websiteLight, alt: 'Website' },
  ];

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.socialRow}>
        {socialLinks.map((social, i) => (
          <a
            key={social.alt}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label={social.alt}
            style={i > 0 ? { borderLeft: '1px solid var(--border-color)' } : undefined}
          >
            <img src={social.icon} alt="" aria-hidden />
          </a>
        ))}
      </div>
      <div className={styles.lines}>
        <p className={styles.line}>Proudly built with React &amp; Vite</p>
        <p className={styles.sub}>&copy; {new Date().getFullYear()} Parth Mistry</p>
      </div>
    </footer>
  );
}

export default Footer;
