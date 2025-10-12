import { useState } from "react";
import confetti from "canvas-confetti";
import styles from './ContactStyles.module.css';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23320d82-e7c0-4658-8f08-1550f6ad0797");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully! I'll get back to you soon.");
        event.target.reset();

        // Fire a celebratory full-screen confetti burst
        const end = Date.now() + 800; // run for 0.8s
        const defaults = { startVelocity: 45, spread: 360, ticks: 200, zIndex: 9999, gravity: 0.9, scalar: 1.1 };

        const frame = () => {
          const timeLeft = end - Date.now();
          if (timeLeft <= 0) return;

          confetti({ ...defaults, particleCount: 30, origin: { x: Math.random(), y: Math.random() - 0.2 } });
          requestAnimationFrame(frame);
        };
        frame();
      } else {
        console.log("Error", data);
        setResult("❌ " + (data.message || "Submission failed. Please try again."));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("❌ An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
      {result && (
        <p className={`${styles.result} ${result.includes('✅') ? styles.success : styles.error}`}>
          {result}
        </p>
      )}
    </section>
  );
}

export default Contact;