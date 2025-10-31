import React from 'react';
import './SecuritySolutions.scss';

interface Service {
  iconSrc: string;
  title: string;
  description: string;
  iconColor: string;
}

const SecuritySolutions: React.FC = () => {
  const services: Service[] = [
    {
      iconSrc: '/logo/development.svg',
      title: 'Development',
      description: 'End-to-end application development with modern frameworks and scalable architectures.',
      iconColor: 'cyan',
    },
    {
      iconSrc: '/logo/cloud.svg',
      title: 'Cloud Services',
      description: 'Scalable cloud data solutions for storage, management, and processing, leveraging platforms like AWS S3, Azure Data Lake, and Google BigQuery for efficient data workflows.',
      iconColor: 'purple',
    },
    {
      iconSrc: '/logo/cybersecurity.svg',
      title: 'Cybersecurity',
      description: 'Advanced threat detection, penetration testing, and enterprise security solutions to protect against evolving cyber threats.',
      iconColor: 'green',
    },
    {
      iconSrc: '/logo/Ai.svg',
      title: 'Artificial Intelligence',
      description: 'Machine learning algorithms, neural networks, and AI-driven automation to transform business processes.',
      iconColor: 'pink',
    },
    {
      iconSrc: '/logo/blockchain.svg',
      title: 'Block Chain',
      description: 'Decentralized applications, smart contracts, and blockchain infrastructure for secure transactions.',
      iconColor: 'yellow',
    },
  ];

  return (
    <section className="security-solutions">
      <div className="security-solutions__container">
        <div className="security-solutions__header">
          <h2 className="security-solutions__title">
            COMPREHENSIVE<br />
            <span className="security-solutions__title--gradient">SECURITY SOLUTIONS</span>
          </h2>
          <p className="security-solutions__subtitle">
            Protecting your digital assets with cutting-edge cybersecurity services.
          </p>
        </div>

        <div className="security-solutions__grid">
          {services.map((service, index) => (
            <div key={index} className="security-solutions__card">
              <div className={`security-solutions__icon security-solutions__icon--${service.iconColor}`}>
                <img src={service.iconSrc} alt={service.title} />
              </div>
              <h3 className="security-solutions__card-title">{service.title}</h3>
              <p className="security-solutions__card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;