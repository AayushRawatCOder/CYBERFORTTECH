import React from 'react';
import styles from './Solutions.module.scss';
import aiPoweredTech from "../../../assets/icons/AIPowerdTEch.png";
import advancedTools from "../../../assets/icons/AdvancedTools.png";
import expertTeam from "../../../assets/icons/ExpertTeam.png";
import process from "../../../assets/icons/Process.png";

interface Solution {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  features: string[];
}

const SecuritySolutions: React.FC = () => {
  const solutions: Solution[] = [
    {
      icon: expertTeam,
      title: 'Expert Team',
      description: 'Our skilled professionals ensure top-tier security and compliance.',
      iconBg: 'rgba(0, 255, 136, 0.15)',
      iconColor: '#00ff88',
      features: [
        'SOC Analysts',
        'Penetration Testers',
        'CISO-level strategists',
        '24/7 Monitoring',
        '50+ Certifications',
        '10+ Years Experience',
      ],
    },
    {
      icon: process,
      title: 'Processes and Standards',
      description: 'Our skilled professionals ensure top-tier security and compliance.',
      iconBg: 'rgba(123, 104, 238, 0.15)',
      iconColor: '#7b68ee',
      features: [
        'SOC Analysts',
        'Penetration Testers',
        'CISO-level strategists',
        '24/7 Monitoring',
        '50+ Certifications',
        '10+ Years Experience',
      ],
    },
    {
      icon: aiPoweredTech,
      title: 'AI-Powered Tech',
      description: 'Our skilled professionals ensure top-tier security and compliance.',
      iconBg: 'rgba(255, 0, 255, 0.15)',
      iconColor: '#ff00ff',
      features: [
        'SOC Analysts',
        'Penetration Testers',
        'CISO-level strategists',
        '24/7 Monitoring',
        '50+ Certifications',
        '10+ Years Experience',
      ],
    },
    {
      icon: advancedTools,
      title: 'Advanced Tools',
      description: 'Our skilled professionals ensure top-tier security and compliance.',
      iconBg: 'rgba(255, 215, 0, 0.15)',
      iconColor: '#ffd700',
      features: [
        'SOC Analysts',
        'Penetration Testers',
        'CISO-level strategists',
        '24/7 Monitoring',
        '50+ Certifications',
        '10+ Years Experience',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleWhite}>SOLUTIONS DESIGNED</span>
          <span className={styles.titleGradient}>TO KEEP YOUR DATA SAFE</span>
        </h1>
        <p className={styles.description}>
          Advanced threat protection with AI-powered monitoring
          <br />
          and expert-led security services.
        </p>
      </header>

      <div className={styles.grid}>
        {solutions.map((solution, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <div
                className={styles.iconWrapper}
                style={{
                  background: solution.iconBg,
                }}
              >
                <img 
                  src={solution.icon} 
                  alt={solution.title}
                  style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                />
              </div>
              <h3 className={styles.cardTitle}>{solution.title}</h3>
              <p className={styles.cardDescription}>{solution.description}</p>
              <ul className={styles.featureList}>
                {solution.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SecuritySolutions;
