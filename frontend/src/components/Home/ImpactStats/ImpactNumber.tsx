import React from 'react';
import './ImpactNumbers.scss';

interface StatBlockProps {
  number: string;
  label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ number, label }) => {
  return (
    <div className="stat-block">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const ImpactNumbers: React.FC = () => {
  const stats = [
    { number: '200+', label: 'Satisfied students' },
    { number: '80+', label: 'Workshops' },
    { number: '85%', label: 'Placement rate' },
    { number: '50+', label: 'Webinars' },
    { number: '10+', label: 'Industry Partners' },
  ];

  return (
    <div className="impact-numbers">
      <h1 className="impact-title">OUR IMPACT IN NUMBERS</h1>
      <p className="impact-subtitle">
        Our journey in transforming Cyber Security education and building industry partnerships worldwide.
      </p>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatBlock number={stat.number} label={stat.label} />
            {index < stats.length - 1 && <div className="stat-separator"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ImpactNumbers;


