import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending…');
    const formData = new FormData(event.target);
    formData.append('access_key', '23320d82-e7c0-4658-8f08-1550f6ad0797');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Thanks — I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult(data.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResult('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.frame}>
        <span className={styles.cornerTL} aria-hidden />
        <span className={styles.cornerTR} aria-hidden />
        <span className={styles.cornerBL} aria-hidden />
        <span className={styles.cornerBR} aria-hidden />

        <header className={styles.sectionHead}>
          <p className={styles.eyebrow}>Contact:</p>
          <h2 className={styles.title}>Got questions ?</h2>
          <p className={styles.lede}>Leave a message below and I&apos;ll get right back to you.</p>
        </header>

        <form id="contact-form" onSubmit={onSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">
              Name<span className={styles.req}>*</span>
            </label>
            <input type="text" name="name" id="name" placeholder="Your Name" required autoComplete="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">
              Email<span className={styles.req}>*</span>
            </label>
            <input type="email" name="email" id="email" placeholder="Your Email" required autoComplete="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">
              Message<span className={styles.req}>*</span>
            </label>
            <textarea name="message" id="message" placeholder="Your Message" required rows={5} />
          </div>
          <button type="submit" className="btnSend">
            Submit
          </button>
        </form>

        {result && (
          <p className={`${styles.result} ${result.includes('Thanks') ? styles.success : styles.error}`}>{result}</p>
        )}

        <div className={styles.consultBlock}>
          <p className={styles.consultText}>
            If you are looking for personal consulting for business, click below.
          </p>
          <a href="#contact-form" className="btnConsult">
            Book a consulting slot
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
