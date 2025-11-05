import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CoreTechnologies.module.scss';

// Assets
import cybersecurityIcon from "../../../assets/icons/Cybersecurity.png";
import aiIcon from "../../../assets/icons/AI.png";
import blockchainIcon from "../../../assets/icons/BlockChain.png";
import developmentIcon from "../../../assets/icons/Development.png";
import cloudIcon from "../../../assets/icons/Cloud.png";

// Types
export interface Technology {
  id: number;
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  iconBg: string;
  borderColor: string;
}

interface CoreTechnologiesProps {
  technologies?: Technology[]; // Made optional with fallback
}

// Constants - moved outside component to prevent recreation on every render
const DEFAULT_TECHNOLOGIES: Technology[] = [
  {
    id: 1,
    slug: 'cybersecurity',
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
    iconBg: '#10b981',
    borderColor: '#10b981',
  },
  {
    id: 2,
    slug: 'ai',
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
    iconBg: '#a855f7',
    borderColor: '#a855f7',
  },
  {
    id: 3,
    slug: 'blockchain',
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
    iconBg: '#f59e0b',
    borderColor: '#f59e0b',
  },
  {
    id: 4,
    slug: 'cloud',
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
    iconBg: '#8b5cf6',
    borderColor: '#8b5cf6',
  },
  {
    id: 5,
    slug: 'development',
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
    iconBg: '#06b6d4',
    borderColor: '#06b6d4',
  },
];

const CoreTechnologies: React.FC<CoreTechnologiesProps> = ({ 
  technologies = DEFAULT_TECHNOLOGIES 
}) => {
  const navigate = useNavigate();

  const handleViewDetails = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  // Memoized technology card component for better performance
  const TechnologyCard = React.useMemo(() => {
    return ({ tech }: { tech: Technology }) => (
      <div 
        className={styles.glassCard}
        style={{ '--border-color': tech.borderColor } as React.CSSProperties}
      >
        <div className={styles.cardInner}>
          <div
            className={styles.iconWrapper}
            style={{ background: tech.iconBg }}
            role="img"
            aria-label={`${tech.title} icon`}
          >
            <img 
              src={tech.icon} 
              alt={`${tech.title} icon`} 
              className={styles.icon}
              loading="lazy" // Better performance
            />
          </div>
          
          <h3 className={styles.techTitle}>{tech.title}</h3>
          
          <p className={styles.techDescription}>{tech.description}</p>
          
          <ul className={styles.featuresList}>
            {tech.features.map((feature, index) => (
              <li 
                key={`${tech.id}-feature-${index}`} 
                className={styles.featureItem}
              >
                {feature}
              </li>
            ))}
          </ul>
          
          <button 
            className={styles.detailsButton}
            onClick={() => handleViewDetails(tech.slug)}
            aria-label={`View details about ${tech.title}`}
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    );
  }, []);

  return (
    <section 
      className={styles.coreTechnologies}
      aria-labelledby="core-technologies-heading"
    >
      <h2 id="core-technologies-heading" className="visually-hidden">
        Our Core Technologies
      </h2>
      
      <div className={styles.technologiesGrid}>
        {technologies.map((tech) => (
          <TechnologyCard key={tech.id} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default CoreTechnologies;