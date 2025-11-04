import React from 'react';
import styles from './ServiceHeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          POWERING THE FUTURE WITH<br />
          <span className={styles.technology}>TECHNOLOGY</span>
          <span className={styles.ampersand}> & </span>
          <span className={styles.security}>SECURITY</span>
        </h1>
        <p className={styles.subtitle}>
          From AI to Blockchain, Development to Cloud, and Cybersecurity to Infrastructure –<br />
          we provide complete digital transformation with security at the core.
        </p>
        <button className={styles.exploreButton}>EXPLORE OUR SERVICES</button>
      </div>
    </section>
  );
};

export default HeroSection;