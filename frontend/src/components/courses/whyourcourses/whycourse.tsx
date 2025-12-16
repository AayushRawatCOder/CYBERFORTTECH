import React from 'react';
import styles from './WhyCourses.module.scss';
import EnterpriseCurriculum from '../../../assets/icons/Enterprise-Curriculum.png';
import MissionCritical from '../../../assets/icons/Training.png';
import OffensiveLabs from '../../../assets/icons/ExpertTeam.png';
import DPIITCredentials from '../../../assets/icons/DPIIT-Credentials.png';
import MentorLed from '../../../assets/icons/AIPowerdTEch.png';
import Innovation from '../../../assets/icons/Innovation.png';
import MultiModal from '../../../assets/icons/Cloud.png';
import AlumniAccess from '../../../assets/icons/OnboardingProcess.png';

interface Feature {
  iconClass: string;
  title: string;
  description: string;
  iconSrc: string;
}

const features: Feature[] = [
  {
    iconClass: styles.iconYellow,
    title: 'Enterprise Curriculum',
    description: 'Future-ready cybersecurity leader training.',
    iconSrc: EnterpriseCurriculum,
  },
  {
    iconClass: styles.iconCyan,
    title: 'Mission-Critical Training',
    description: 'Instructor-led with real-world simulations.',
    iconSrc: MissionCritical,
  },
  {
    iconClass: styles.iconGreen,
    title: 'Offensive & Defensive Labs',
    description: 'Hands-on mastery with real-world labs.',
    iconSrc: OffensiveLabs,
  },
  {
    iconClass: styles.iconOrange,
    title: 'DPIIT Credentials',
    description: 'Industry-recognized for global mobility.',
    iconSrc: DPIITCredentials,
  },
  {
    iconClass: styles.iconPink,
    title: 'Mentor-Led Excellence',
    description: 'Deep dives and career enablement.',
    iconSrc: MentorLed,
  },
  {
    iconClass: styles.iconAqua,
    title: 'Innovation & R&D',
    description: 'Next-gen security solutions integration.',
    iconSrc: Innovation,
  },
  {
    iconClass: styles.iconPurple,
    title: 'Multi-Modal Delivery',
    description: 'Secure cloud lab access infrastructure.',
    iconSrc: MultiModal,
  },
  {
    iconClass: styles.iconRed,
    title: 'Perpetual Alumni Access',
    description: 'Continuous skill and network growth.',
    iconSrc: AlumniAccess,
  },
];

const WhyCourse: React.FC = () => {
  return (
    <section className={styles.whyPartnerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.cardOuter}>
              <div className={styles.cardInner}>
                <div className={`${styles.iconWrapper} ${feature.iconClass}`}>
                  <img src={feature.iconSrc} alt={feature.title} className={styles.iconSvg} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCourse;
