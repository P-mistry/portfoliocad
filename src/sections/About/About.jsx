import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.content}> 
        <p>
          I’m Parth Mistry — a software developer who turns ideas into fast, accessible, and
          delightful products. I build modern web apps with React and Vite, and I care deeply about
          clean code, crisp UI, and thoughtful micro‑interactions.
        </p>
        <p>
          Recently, I’ve been exploring AI‑assisted workflows (AI Resume), polished travel UI/UX
          concepts, and practical ML like handwriting digit recognition. I love shipping, learning,
          and making pixels feel great.
        </p>
        <div className={styles.grid}> 
          <div className={styles.card}>
            <h3>Focus</h3>
            <p>Frontend (React), UI Engineering, Performance</p>
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


