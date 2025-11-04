import React from 'react';
import styles from './CoreTechnologies.module.scss';
import cybersecurityIcon from "../../../assets/icons/Cybersecurity.png";
import aiIcon from "../../../assets/icons/AI.png";
import blockchainIcon from "../../../assets/icons/BlockChain.png";
import developmentIcon from "../../../assets/icons/Development.png";
import cloudIcon from "../../../assets/icons/Cloud.png";

interface Technology {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  iconBg: string;
}

const CoreTechnologies: React.FC = () => {
  const technologies: Technology[] = [
    {
      id: 1,
      icon: cybersecurityIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Discovery Starter',
        'Essential + Endpoint',
        'Pro Defense Suite',
        'Enterprise Shield',
        'Elite Cyber Command'
      ],
      iconBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    },
    {
      id: 2,
      icon: aiIcon,
      title: 'Artificial Intelligence',
      description: 'Intelligent AI solutions and machine learning systems to transform your business.',
      features: [
        'AI-Driven Automation',
        'Generative AI Solutions',
        'Real-Time AI Analytics',
        'Client-Centric AI Strategy',
        'Enterprise-Grade Security'
      ],
      iconBg: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
    },
    {
      id: 3,
      icon: blockchainIcon,
      title: 'Blockchain Solutions',
      description: 'Decentralized applications and blockchain integration services for modern enterprises.',
      features: [
        'Decentralized Infrastructure',
        'Tokenization Expertise',
        'Cross-Chain Interoperability',
        'Reliable Blockchain Delivery',
        'Smart Contract Development'
      ],
      iconBg: 'linear-gradient(135deg, #D97706 0%, #92400E 100%)',
    },
    {
      id: 4,
      icon: cloudIcon,
      title: 'Cloud & Infrastructure',
      description: 'End-to-end cloud solutions and infrastructure management for scalable operations.',
      features: [
        'Server Expertise',
        'Scalable Server Infrastructure',
        'Server Security',
        'Proven Server Results',
        'Cost-Effective Servers'
      ],
      iconBg: 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
    },
    {
      id: 5,
      icon: developmentIcon,
      title: 'Development',
      description: 'Full-cycle software development services across all platforms and technologies.',
      features: [
        'Expert Web Developers',
        'Modern Tech Stack',
        'Responsive Design',
        'Proven Results',
        'Ongoing Support & Maintenance'
      ],
      iconBg: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
    },
  ];

  return (
    <section className={styles.coreTechnologies}>
      <div className={styles.technologiesGrid}>
        {technologies.map((tech) => (
          <div key={tech.id} className={styles.glassCard}>
            <div className={styles.cardInner}>
              <div
                className={styles.iconWrapper}
                style={{ background: tech.iconBg }}
              >
                <img src={tech.icon} alt={tech.title} className={styles.icon} />
              </div>
              
              <h3 className={styles.techTitle}>{tech.title}</h3>
              
              <p className={styles.techDescription}>{tech.description}</p>
              
              <ul className={styles.featuresList}>
                {tech.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>{feature}</li>
                ))}
              </ul>
              
              <button className={styles.detailsButton}>VIEW DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTechnologies;
