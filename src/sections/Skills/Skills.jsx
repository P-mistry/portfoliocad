import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList';
import styles from './SkillsStyles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node",
    "React",
    "Angular",
    "Vue",
    "Tailwind CSS",
    "Redux",
    "Webpack",
    "Git",
    "Jest",
    "Bootstrap",
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        allowTouchMove={false}
        className={styles.skillSwiper}
      >
        {skills.concat(skills).map((skill, i) => (
          <SwiperSlide key={i} className={styles.skillSlide}>
            <SkillList src={checkMarkIcon} skill={skill} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Skills;
