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
      color: 'cyan'
    },
    {
      icon: '/logo/skill-emp.svg',
      title: 'Skill Empowerment',
      description: 'Equipping thousands of learners and professionals with real-world expertise in Cybersecurity and AI.',
      color: 'purple'
    },
    {
      icon: '/logo/Institutional-Partners.svg',
      title: 'Institutional Partners',
      description: 'Collaborating with universities and government bodies to build future-ready infrastructures.',
      color: 'green'
    },
    {
      icon: '/logo/national-rec.svg',
      title: 'National Recognition',
      description: "Startup India & DPIIT recognized for driving India's digital transformation through cutting-edge training, research, and product innovation.",
      color: 'pink'
    },
    {
      icon: '/logo/global-footprint.svg',
      title: 'Global Footprint',
      description: 'Expanding our reach to influence global tech standards while staying rooted in local impact.',
      color: 'yellow'
    }
  ];

  return (
    <section className="impact-hero">
      <div className="impact-hero__container">
        <div className="impact-hero__header">
          <h2 className="impact-hero__title">
            OUR <span className="impact-hero__title--gradient">IMPACT</span>
          </h2>
          <p className="impact-hero__subtitle">
            Powering secure digital futures with measurable results.
            Discover what makes our approach to cybersecurity
            education unique
          </p>
        </div>

        <div className="impact-hero__grid">
          {impactCards.map((card, index) => (
            <div key={index} className="impact-hero__card-outer">
              <div className="impact-hero__card-inner">
                <div className={`impact-hero__icon impact-hero__icon--${card.color}`}>
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3 className="impact-hero__card-title">{card.title}</h3>
                <p className="impact-hero__card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
