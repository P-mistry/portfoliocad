import styles from './ProjectsStyles.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const projectEntries = [
  {
    title: 'Ai Resume',
    href: 'https://github.com/P-mistry/Ai-Resume',
    dateLabel: 'Jun. 2025',
    roleLabel: 'Dev',
    designCreditLabel: 'Design: Parth Mistry',
  },
  {
    title: 'Travel UI/UX',
    href: 'https://github.com/P-mistry/Travel_UI-UX',
    dateLabel: 'Apr. 2025',
    roleLabel: 'Dev',
    designCreditLabel: 'Design: Parth Mistry',
  },
  {
    title: 'Login App',
    href: 'https://github.com/P-mistry/Login-App-AndroidStudio',
    dateLabel: 'Oct. 2024',
    roleLabel: 'Design & Dev',
  },
  {
    title: 'Handwriting Digit Recognition',
    href: 'https://github.com/P-mistry/Handwriting-Digit-Recognition',
    dateLabel: 'Jul. 2024',
    roleLabel: 'Dev',
    designCreditLabel: 'Design: Parth Mistry',
  },
];

function Projects() {
  const [headRef, headVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="projects" className={styles.container}>
      <div
        ref={headRef}
        className={`${styles.sectionHead} ${headVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        <p className={styles.eyebrow}>Portfolio:</p>
        <h2 className={styles.title}>Selected work</h2>
        <p className={styles.lede}>Recent builds — open the repo for code and details.</p>
      </div>

      <ul className={styles.grid}>
        {projectEntries.map((project) => (
          <li key={project.title} className={styles.card}>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.cardTitle}>
              {project.title}
            </a>
            <div className={styles.meta}>
              <span>{project.dateLabel}</span>
              <span className={styles.sep}>/</span>
              <span>{project.roleLabel}</span>
              {project.designCreditLabel && (
                <>
                  <span className={styles.sep}>/</span>
                  <span>{project.designCreditLabel}</span>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
