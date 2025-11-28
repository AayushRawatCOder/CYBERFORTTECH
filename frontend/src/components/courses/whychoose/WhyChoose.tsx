import React from 'react';
import styles from './WhyChoose.module.scss';
import IndustryGradeContentPng from '../../../assets/icons/Industry-Grade-Content.png';
import PlacementAssistancePng from '../../../assets/icons/100-Placement-Assistance.png';
import ExcellenceCertificationPng from '../../../assets/icons/Excellence-Certification.png';

const WhyChoose: React.FC = () => {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>WHY CHOOSE </span>
            <span className={styles.colorful}>CYBERFORT TECH?</span>
          </h1>
          <p className={styles.subtitle}>
            100% online courses led in a dynamic learning environment
          </p>
        </header>
        <div className={styles.grid}>
          {/* Card 1: Industry Grade Content */}
          <article className={styles.cardOuter}>
            <div className={styles.cardInner}>
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}
              >
                <img 
                  src={IndustryGradeContentPng} 
                  className={styles.icon} 
                  alt="Industry Grade Content"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Industry Grade Content</h3>
                <p className={styles.cardDescription}>
                  Learn from hands-on projects with real-world application
                </p>
              </div>
            </div>
          </article>

          {/* Card 2: 100% Placement Assistance */}
          <article className={styles.cardOuter}>
            <div className={styles.cardInner}>
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)' }}
              >
                <img 
                  src={PlacementAssistancePng} 
                  className={styles.icon} 
                  alt="100% Placement Assistance"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>100% Placement Assistance</h3>
                <p className={styles.cardDescription}>
                  Kickstart your career with personalized job support
                </p>
              </div>
            </div>
          </article>

          {/* Card 3: Excellence Certification */}
          <article className={styles.cardOuter}>
            <div className={styles.cardInner}>
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: 'rgba(128, 0, 128, 0.2)' }}
              >
                <img 
                  src={ExcellenceCertificationPng} 
                  className={styles.icon} 
                  alt="Excellence Certification"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Excellence Certification</h3>
                <p className={styles.cardDescription}>
                  Earn recognitions from 180+ companies worldwide
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;