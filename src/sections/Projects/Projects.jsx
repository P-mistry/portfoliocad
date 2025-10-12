import styles from './ProjectsStyles.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function Projects() {
  const [listRef, isListVisible] = useScrollAnimation({ threshold: 0.1 });

  const projectEntries = [
    {
      title: 'Ai Resume',
      href: 'https://github.com/P-mistry/Ai-Resume',
      dateLabel: 'Jun. 2025',
      roleLabel: 'Dev',
      designCreditLabel: 'Design: Parth MIstry',

    },
    {
      title: 'Travel UI/UX',
      href: 'https://github.com/P-mistry/Travel_UI-UX',
      dateLabel: 'Apr. 2025',
      roleLabel: 'Dev',
      designCreditLabel: 'Design: Parth MIstry',

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
      designCreditLabel: 'Design: Parth MIstry',
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <ul 
        ref={listRef}
        className={`${styles.list} ${isListVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        {projectEntries.map((project, index) => (
          <li 
            key={project.title} 
            className={`${styles.item} ${isListVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : 'animate-on-scroll'}`}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.title}
            >
              {project.title}
            </a>
            <div className={styles.meta}>
              <span>{project.dateLabel}</span>
              <span className={styles.separator}>/</span>
              <span>{project.roleLabel}</span>
              {project.designCreditLabel && (
                <>
                  <span className={styles.separator}>/</span>
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
