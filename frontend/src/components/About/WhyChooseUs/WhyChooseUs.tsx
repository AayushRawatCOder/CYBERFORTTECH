import React from 'react';
import './WhyChooseUs.scss';

interface FeatureCard {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const featureCards: FeatureCard[] = [
    {
      iconSrc: '/logo/innovation.svg',
      iconAlt: 'Innovation Icon',
      title: 'Innovation-First Mindset',
      description: "We build from scratch—no shortcuts. Every framework, protocol, and system is designed in-house. Our R&D-first approach ensures we stay ahead of the curve, not just follow it."
    },
    {
      iconSrc: '/logo/Ai.svg',
      iconAlt: 'AI Icon',
      title: 'Artificial Intelligence That Thinks Ahead',
      description: "We're developing intelligent models that do more than detect—they predict, adapt, and optimize. Our AI engines are trained on synthetic threat data to deliver real-time anomaly detection."
    },
    {
      iconSrc: '/logo/security-core.svg',
      iconAlt: 'Security Icon',
      title: 'Security at the Core',
      description: "Security isn't a just a feature—it's our foundation. Our internal systems simulate attack vectors. From zero-trust architectures to automated, every product we build is hardened against threats."
    },
    {
      iconSrc: '/logo/blockchain.svg',
      iconAlt: 'Blockchain Icon',
      title: 'Blockchain-Enabled Trust',
      description: "We're engineering decentralized identity systems, and smart contract auditing tools that bring cryptographic trust to digital ecosystems from EdTech to FinTech and beyond."
    },
    {
      iconSrc: '/logo/global-impact.svg',
      iconAlt: 'Global Icon',
      title: 'Vision for Global Impact',
      description: "Our systems align with global standards like ISO, NIST, and GDPR, and we're actively building partnerships to co-create solutions that shape the future of secure technology worldwide."
    },
    {
      iconSrc: '/logo/engineering.svg',
      iconAlt: 'Engineering Icon',
      title: 'Full Stack Engineering Excellence',
      description: "We don't just write code—we architect platforms. Our full stack teams build scalable SaaS products with clean, secure codebases, integrated DevSecOps pipelines, and seamless UX."
    }
  ];

  return (
    <section className="why-choose-hero">
      <div className="why-choose-hero__container">
        <div className="why-choose-hero__header">
          <h2 className="why-choose-hero__title">
            WHY <span className="text-cyan">CHOOSE US?</span>
          </h2>
          <p className="why-choose-hero__subtitle">
            Powering secure, digital futures with measurable results.<br />
            Discover what makes our approach to cybersecurity<br />
            education unique
          </p>
        </div>

        <div className="why-choose-hero__cards">
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className={`card-outer card-outer--why-${index + 1}`}
            >
              <div className="card card--why">
                <div className="card__icon-wrapper">
                  <img 
                    src={card.iconSrc} 
                    alt={card.iconAlt}
                    className="card__icon"
                  />
                  <div className="card__icon-hover"></div>
                </div>
                
                <div className="card__content">
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;