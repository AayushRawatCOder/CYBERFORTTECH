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
      icon: '/logo/skill-emp.svg', // e.g., book icon SVG (white stroke/fill for contrast on colored bg)
      title: 'Skill Empowerment',
      description: 'Equipping thousands of learners and professionals with real-world expertise in Cybersecurity and AI.',
      color: '#9ACD32'
    },
    {
      icon: '/logo/Institutional-Partners.svg', // e.g., group/handshake icon SVG
      title: 'Institutional Partners',
      description: 'Collaborating with universities and government bodies to build future-ready infrastructures.',
      color: '#32CD32'
    },
    {
      icon: '/logo/national-rec.svg', // e.g., medal/trophy icon SVG
      title: 'National Recognition',
      description: "Startup India & DPIIT recognized for driving India's digital transformation through cutting-edge training, research, and product innovation.",
      color: '#DAA520'
    },
    {
      icon: '/logo/global-footprint.svg', // e.g., globe icon SVG
      title: 'Global Footprint',
      description: 'Expanding our reach to influence global tech standards while staying rooted in local impact.',
      color: '#4169E1'
    }
  ];

  return (
    <section className="our-impact">
      <div className="our-impact__container">
        <div className="our-impact__header">
          <h2 className="our-impact__title">
            OUR <span className="our-impact__title--highlight">IMPACT</span>
          </h2>
          <p className="our-impact__subtitle">
            Powering secure, digital futures with measurable results.<br />
            Discover what makes our approach to cybersecurity<br />
            education unique
          </p>
        </div>

        <div className="our-impact__grid">
          {impactCards.map((card, index) => (
            <div 
              key={index} 
              className={`our-impact__card our-impact__card--${index + 1}`}
            >
              <div 
                className="our-impact__icon"
                style={{ backgroundColor: card.color }}
              >
                <img 
                  src={card.icon} 
                  alt={`${card.title} icon`} 
                  className="our-impact__icon-img"
                />
              </div>
              <h3 className="our-impact__card-title">{card.title}</h3>
              <p className="our-impact__card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;