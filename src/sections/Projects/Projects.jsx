import styles from './ProjectsStyles.module.css';

function Projects() {
  const projectEntries = [
    {
      title: 'Project One',
      href: 'https://example.com',
      dateLabel: 'Jun. 2025',
      roleLabel: 'Dev',
      designCreditLabel: 'Design: Your Designer',
    },
    {
      title: 'Project Two',
      href: 'https://example.com',
      dateLabel: 'Apr. 2025',
      roleLabel: 'Dev',
      designCreditLabel: 'Design: Your Designer',
    },
    {
      title: 'Project Three',
      href: 'https://example.com',
      dateLabel: 'Oct. 2024',
      roleLabel: 'Design & Dev',
      designCreditLabel: '',
    },
    {
      title: 'Project Four',
      href: 'https://example.com',
      dateLabel: 'Jul. 2024',
      roleLabel: 'Dev',
      designCreditLabel: 'Design: Your Designer',
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <ul className={styles.list}>
        {projectEntries.map((project) => (
          <li key={project.title} className={styles.item}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.title} hover`}
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

