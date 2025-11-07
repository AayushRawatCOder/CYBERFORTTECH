import React from 'react';
import styles from './PartnershipWorks.module.scss';
import InitialConsultationIcon from "../../../assets/icons/InitialConsultation.png";
import PartnerAgreementIcon from "../../../assets/icons/PartnerAgreement.png";
import OnboardingProcessIcon from "../../../assets/icons/OnboardingProcess.png";
import LaunchGrowthIcon from "../../../assets/icons/Launch&Growth.png";

const PartnershipWorks: React.FC = () => {
  const steps = [
    {
      title: 'Initial Consultation',
      description: 'We start with a conversation to understand your business, goals, and how we might work together.',
      icon: InitialConsultationIcon,
      color: '#8B7355',
      position: 'right'
    },
    {
      title: 'Partner Agreement',
      description: 'Once we identify mutual opportunities, we formalize our partnership with clear terms.',
      icon: PartnerAgreementIcon,
      color: '#7B5A9E',
      position: 'left'
    },
    {
      title: 'Onboarding Process',
      description: 'Our dedicated team will guide you through the integration process, providing all necessary resources.',
      icon: OnboardingProcessIcon,
      color: '#8B5A6F',
      position: 'right'
    },
    {
      title: 'Launch & Growth',
      description: 'With everything in place, we launch and implement strategies for mutual growth.',
      icon: LaunchGrowthIcon,
      color: '#2F7B7B',
      position: 'left'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}> How Our 
            <br/>
            <span className={styles.titleHighlight}>PARTNERSHIP WORKS</span>
        </h1>
        <p className={styles.subtitle}>A simple process to establish a successful collaboration.</p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.leftCard}>
              {step.position === 'left' && (
                <div className={styles.cardOuter}>
                  <div className={styles.cardInner}>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <p className={styles.cardText}>{step.description}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.centerLine}>
              <div className={styles.iconBox}>
                <img src={step.icon} alt={step.title} className={styles.icon} />
              </div>
              {index < steps.length - 1 && <div className={styles.dashedLine}></div>}
            </div>

            <div className={styles.rightCard}>
              {step.position === 'right' && (
                <div className={styles.cardOuter}>
                  <div className={styles.cardInner}>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <p className={styles.cardText}>{step.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipWorks;
