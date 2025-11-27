import React from 'react';
import styles from './IndustryImmersionHeroSection.module.scss';

const IndustryImmersionHeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          <span className={styles.cyberElite}>CYBER ELITE TRAINING</span><br />
          AND INTERNSHIP PROGRAM
        </h1>
        <p className={styles.subtitle}>
          Launch your career in cybersecurity with hands-on training, real-world projects, and<br />
          expert mentorship. Join a community of ethical hackers and security professionals.
        </p>
        <button className={styles.exploreButton}>EXPLORE PROGRAMS</button>
      </div>
    </section>
  );
};

export default IndustryImmersionHeroSection;
