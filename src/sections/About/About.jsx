import styles from './AboutStyles.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function About() {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className={styles.container}>
      <header className={styles.sectionHead}>
        <p className={styles.eyebrow}>About:</p>
        <h2 className={styles.title}>What I do</h2>
      </header>
      <div
        ref={contentRef}
        className={`${styles.content} ${isContentVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        <p>
          I&apos;m Parth Mistry — a software developer who turns ideas into fast, accessible, and delightful
          products. I build modern web apps with React and Vite, and I care deeply about clean code, crisp UI,
          and thoughtful micro-interactions.
        </p>
        <p>
          Recently, I&apos;ve been exploring AI-assisted workflows (AI Resume), polished travel UI/UX concepts,
          and practical ML like handwriting digit recognition. I love shipping, learning, and making pixels feel
          great.
        </p>
        <div
          ref={gridRef}
          className={`${styles.grid} ${isGridVisible ? 'animate-fade-in-up animate-delay-200' : 'animate-on-scroll'}`}
        >
          <div className={styles.card}>
            <h3>Focus</h3>
            <p>Frontend (React), UI engineering, performance</p>
          </div>
          <div className={styles.card}>
            <h3>Currently</h3>
            <p>Shipping projects, learning system design, open source</p>
          </div>
          <div className={styles.card}>
            <h3>Interests</h3>
            <p>Design systems, animations (GSAP), developer experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
