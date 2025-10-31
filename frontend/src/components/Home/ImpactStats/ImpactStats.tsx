import React from 'react';
import './ImpactStats.scss';

interface StatItem {
  value: string;
  label: string;
}

const ImpactStats: React.FC = () => {
  const stats: StatItem[] = [
    { value: '200+', label: 'Satisfied students' },
    { value: '80+', label: 'Workshops' },
    { value: '85%', label: 'Placement rate' },
    { value: '50+', label: 'Webinars' },
    { value: '10+', label: 'Industry Partners' },
  ];

  return (
    <section className="impact-stats">
      <div className="impact-stats__container">
        <div className="impact-stats__header">
          <h2 className="impact-stats__title">
            OUR IMPACT <span className="impact-stats__title--white">IN NUMBERS</span>
          </h2>
          <p className="impact-stats__subtitle">
            Our journey in transforming Cyber Security education and building industry partnerships worldwide.
          </p>
        </div>

        <div className="impact-stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact-stats__item">
              <div className="impact-stats__value">{stat.value}</div>
              <div className="impact-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;