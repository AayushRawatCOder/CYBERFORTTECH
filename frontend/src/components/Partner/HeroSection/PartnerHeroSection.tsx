import React from 'react';
import styles from './PartnerHeroSection.module.scss';

const PartnerHeroSection: React.FC = () => {
  return (
    <section className={styles.partnerHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          OUR TRUSTED<br />
          <span className={styles.highlight}>PARTNERS</span>
        </h1>
        <p className={styles.subtitle}>
          Collaborating with industry leaders to deliver<br />
          exceptional cybersecurity solutions.
        </p>
        <button className={styles.contactBtn}>CONTACT US</button>
      </div>
    </section>
  );
};

export default PartnerHeroSection;
