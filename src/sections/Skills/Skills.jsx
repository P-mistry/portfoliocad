import { useTheme } from '../../common/ThemeContext';
import styles from './SkillsStyles.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1 });

  const skills = [
    { name: "HTML", level: "Expert", icon: "🌐" },
    { name: "CSS", level: "Expert", icon: "🎨" },
    { name: "JavaScript", level: "Advanced", icon: "⚡" },
    { name: "React", level: "Advanced", icon: "⚛️" },
    { name: "Node.js", level: "Intermediate", icon: "🟢" },
    { name: "Python", level: "Intermediate", icon: "🐍" },
    { name: "SQL", level: "Intermediate", icon: "🗄️" },
    { name: "Git", level: "Advanced", icon: "📦" },
    { name: "Figma", level: "Advanced", icon: "🎯" },
    { name: "Tailwind CSS", level: "Advanced", icon: "💨" }
  ];

  return (
    <section id="skills" className={styles.container}>
      <div 
        ref={headerRef}
        className={`${styles.skillsHeader} ${isHeaderVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        <h1 className="sectionTitle">Skills & Technologies</h1>
        <p className={styles.skillsSubtitle}>
          A comprehensive toolkit for building modern, scalable applications with focus on user experience and performance.
        </p>
      </div>
      <div 
        ref={gridRef}
        className={`${styles.skillsGrid} ${isGridVisible ? 'animate-fade-in-up animate-delay-200' : 'animate-on-scroll'}`}
      >
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className={`${styles.skillBadge} ${isGridVisible ? `animate-scale-in animate-delay-${(index % 5 + 1) * 100}` : 'animate-on-scroll'}`}
          >
            <div className={styles.skillIcon}>
              <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
            </div>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillLevel}>{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
