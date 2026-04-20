import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from '../common/ThemeContext';
import styles from './FrameHeader.module.css';

function FrameHeader() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.brand}>
        Parth Mistry
      </a>
      <div className={styles.actions}>
        <button type="button" className={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
          <img src={themeIcon} alt="" width={18} height={18} />
        </button>
        <a href="#contact" className={styles.cta}>
          Book a call
        </a>
      </div>
    </header>
  );
}

export default FrameHeader;
