import React from 'react';
import styles from './WhyPartnerwithUs.module.scss';
import EnhancedSolutionsIcon from "../../../assets/icons/Enhanced Solutions.png";
import CoMarketingIcon from "../../../assets/icons/CoMarketing.png";
import ReachExpansionIcon from "../../../assets/icons/ReachExpansion.png";
import GlobalExposureIcon from "../../../assets/icons/GlobalExposure.png";
import RevenueGrowthIcon from "../../../assets/icons/RevenueGrowth.png";
import IndustryRecognitionIcon from "../../../assets/icons/IndustryRecognition.png";

const WhyPartner: React.FC = () => {
  const benefits = [
    {
      icon: EnhancedSolutionsIcon,
      title: 'Enhanced Solutions',
      description: 'Combine our expertise with your offerings to create more comprehensive security solutions.'
    },
    {
      icon: CoMarketingIcon,
      title: 'Co-Marketing',
      description: 'Participate in joint marketing campaigns, webinars, and events to increase brand visibility.'
    },
    {
      icon: ReachExpansionIcon,
      title: 'Reach Expansion',
      description: 'Gain access to new customer segments and markets through our established network and channels.'
    },
    {
      icon: GlobalExposureIcon,
      title: 'Global Exposure',
      description: 'Leverage our international presence to expand your solution\'s footprint across borders.'
    },
    {
      icon: RevenueGrowthIcon,
      title: 'Revenue Growth',
      description: 'Create new revenue streams through referrals, reselling opportunities and joint solutions.'
    },
    {
      icon: IndustryRecognitionIcon,
      title: 'Industry Recognition',
      description: 'Gain credibility and trust through association with CyberFort\'s established reputation.'
    }
  ];

  return (
    <section className={styles.whyPartnerSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.colorful}>WHY PARTNER</span> 
            <br/>
            <span className={styles.highlight}>WITH US?</span>
          </h2>
          <p className={styles.subtitle}>
            Why partnering with CyberFort is a smart business decision
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.cardOuter}>
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <img src={benefit.icon} alt={benefit.title} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDescription}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
