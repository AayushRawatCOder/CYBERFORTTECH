import React from 'react';
import './OurImpact.scss';

interface ImpactCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const OurImpact: React.FC = () => {
  const impactCards: ImpactCard[] = [
    {
      icon: '/logo/operation-exe.svg',
      title: 'Operation Excellence',
      description: 'Setting benchmarks in project delivery, compliance, and team leadership that others aspire.',
      color: '#00CED1'
    },
    {
      icon: '/logo/skill-emp.svg',
      title: 'Skill Empowerment',
      description: 'Equipping thousands of learners and professionals with real-world expertise in Cybersecurity and AI.',
      color: '#9ACD32'
    },
    {
      icon: '/logo/Institutional-Partners.svg',
      title: 'Institutional Partners',
      description: 'Collaborating with universities and government bodies to build future-ready infrastructures.',
      color: '#32CD32'
    },
    {
      icon: '/logo/national-rec.svg',
      title: 'National Recognition',
      description: "Startup India & DPIIT recognized for driving India's digital transformation through cutting-edge training, research, and product innovation.",
      color: '#DAA520'
    },
    {
      icon: '/logo/global-footprint.svg',
      title: 'Global Footprint',
      description: 'Expanding our reach to influence global tech standards while staying rooted in local impact.',
      color: '#4169E1'
    }
  ];

  return (
    <section className="impact-hero">
      <div className="impact-hero__container">
        <div className="impact-hero__header">
          <h2 className="impact-hero__title">
            OUR <span className="text-cyan">IMPACT</span>
          </h2>
          <p className="impact-hero__subtitle">
            Powering secure, digital futures with measurable results.<br />
            Discover what makes our approach to cybersecurity<br />
            education unique
          </p>
        </div>

        <div className="impact-hero__cards">
          {impactCards.map((card, index) => (
            <div 
              key={index} 
              className={`card-outer card-outer--impact-${index + 1}`}
            >
              <div className="card card--impact">
                <div className="card__icon-wrapper">
                  <img 
                    src={card.icon} 
                    alt={`${card.title} icon`} 
                    className="card__icon"
                    style={{ filter: `drop-shadow(0 0 20px ${card.color}40)` }}
                  />
                  <div 
                    className="card__icon-hover"
                    style={{ 
                      background: `radial-gradient(circle, ${card.color}20 0%, transparent 70%)` 
                    }}
                  ></div>
                </div>
                
                <div className="card__content">
                  <h3 className="card__title" style={{ color: card.color }}>
                    {card.title}
                  </h3>
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

export default OurImpact;