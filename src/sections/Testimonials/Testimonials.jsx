import styles from './TestimonialsStyles.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const items = [
  {
    quote:
      'Consistent above-expectation delivery on the frontend — clear communication and solid React craftsmanship.',
    name: 'Alex Rivera',
    role: 'Product lead',
    company: 'Northwind Labs',
    country: 'USA',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&size=128&background=e8e8e8&color=111111',
  },
  {
    quote:
      'Reliable partner for shipping UI: responsive, accessible, and thoughtful about the details users notice.',
    name: 'Sam Chen',
    role: 'Founder',
    company: 'Brightstack',
    country: 'Canada',
    avatar: 'https://ui-avatars.com/api/?name=Sam+Chen&size=128&background=e0e0e0&color=111111',
  },
  {
    quote:
      'Turned a vague brief into a polished interface quickly. Would collaborate again without hesitation.',
    name: 'Jordan Lee',
    role: 'Engineering manager',
    company: 'Cloudpath',
    country: 'UK',
    avatar: 'https://ui-avatars.com/api/?name=Jordan+Lee&size=128&background=dedede&color=111111',
  },
];

function Testimonials() {
  const [ref, visible] = useScrollAnimation({ threshold: 0.12 });

  return (
    <section id="testimonials" className={styles.container}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Testimonials:</p>
        <h2 className={styles.title}>Our customers speak</h2>
        <p className={styles.lede}>
          I&apos;ve been working with teams worldwide — here&apos;s what they have to say. Swap in your own quotes anytime.
        </p>
      </header>
      <ul ref={ref} className={`${styles.list} ${visible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}>
        {items.map((t) => (
          <li key={t.name} className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.avatarWrap}>
                <img src={t.avatar} alt="" className={styles.avatar} width={48} height={48} />
              </div>
              <div className={styles.who}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
            <div className={styles.rule} />
            <div className={styles.body}>
              <span className={styles.quoteMark} aria-hidden>
                &ldquo;
              </span>
              <p className={styles.quote}>{t.quote}</p>
            </div>
            <div className={styles.rule} />
            <div className={styles.cardFoot}>
              <span className={styles.company}>{t.company}</span>
              <span className={styles.country}>{t.country}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
