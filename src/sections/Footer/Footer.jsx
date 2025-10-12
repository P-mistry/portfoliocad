import styles from './FooterStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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
  const [footerRef, isFooterVisible] = useScrollAnimation({ threshold: 0.1 });

  const socialLinks = [
    { href: "https://x.com/parth200510", icon: theme === 'light' ? twitterLight : twitterDark, alt: "Twitter" },
    { href: "https://github.com/P-mistry", icon: theme === 'light' ? githubLight : githubDark, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/parthmistry7/", icon: theme === 'light' ? linkedinLight : linkedinDark, alt: "LinkedIn" },
    { href: "https://www.instagram.com/parrth.5/", icon: theme === 'light' ? instagramDark : instagramLight, alt: "Instagram" },
    { href: "https://www.vwcindia.com/", icon: theme === 'light' ? websiteDark : websiteLight, alt: "Website" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className={styles.container}>
      <div 
        ref={footerRef}
        className={`${styles.content} ${isFooterVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        <div className={styles.footerMain}>
          <h2 className={styles.footerTitle}>Let's Build Something Amazing</h2>
          <p className={styles.footerSubtitle}>
            Ready to turn your ideas into reality? Let's collaborate and create something extraordinary together.
          </p>
          
          <div className={styles.ctaSection}>
            <div className={styles.ctaText}>Ready to get started?</div>
            <a href="#contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a 
                key={social.alt}
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={social.icon} alt={`${social.alt} icon`} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; 2025 Parth Mistry. All rights reserved.
          </p>
          <div className={styles.footerLinks}>
            <a href="#about" className={styles.footerLink}>About</a>
            <a href="#projects" className={styles.footerLink}>Projects</a>
            <a href="#skills" className={styles.footerLink}>Skills</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
            <button onClick={scrollToTop} className={styles.footerLink} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
