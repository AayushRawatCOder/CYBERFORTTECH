import React, { useState } from 'react';
import './JourneySection.scss';

interface JourneyMilestone {
  year: string;
  description: string;
}

const JourneySection: React.FC = () => {
  const milestones: JourneyMilestone[] = [
    {
      year: '2020',
      description: 'CyberFort Tech was established with a vision to revolutionize cybersecurity education and training.'
    },
    {
      year: '2021',
      description: 'Launched our first comprehensive cybersecurity training platform with strategic industry partnerships.'
    },
    {
      year: '2022',
      description: 'Expanded operations globally, reaching students and professionals across 50+ countries worldwide.'
    },
    {
      year: '2023',
      description: 'Integrated advanced AI-powered learning tools and personalized adaptive training modules for enhanced learning.'
    },
    {
      year: '2024',
      description: 'Expanded our services with advanced cybersecurity training programs and launched enterprise security solutions.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(4); // Start with 2024

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : milestones.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
  };

  const currentMilestone = milestones[currentIndex];

  // Get year positions for display
  const getYearPosition = (index: number) => {
    const diff = index - currentIndex;
    return diff;
  };

  return (
    <section className="journey-section">
      <div className="journey-section__container">
        {/* Header */}
        <div className="journey-section__header">
          <h2 className="journey-section__title">
            OUR <span className="text-cyan">JOURNEY</span>
          </h2>
          <p className="journey-section__subtitle">
            From inception to becoming a leading<br />cybersecurity education platform.
          </p>
        </div>

        {/* Journey Arc Visualization */}
        <div className="journey-arc">
          {/* SVG Arc with glow */}
          <div className="journey-arc__glow-container">
            <svg className="journey-arc__svg" viewBox="0 0 1000 550" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="75%" stopColor="#d946ef" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="arcGlow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main glowing arc */}
              <path
                className="journey-arc__path"
                d="M 50 500 Q 500 50, 950 500"
                fill="none"
                stroke="url(#arcGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                filter="url(#arcGlow)"
              />
            </svg>
          </div>

          {/* Year markers on the arc */}
          <div className="journey-arc__years">
            {milestones.map((milestone, index) => {
              const position = getYearPosition(index);
              const isCenter = position === 0;
              const isLeft = position < 0;
              const isRight = position > 0;
              const absPosition = Math.abs(position);
              
              let className = 'journey-arc__year';
              if (isCenter) className += ' journey-arc__year--center';
              else if (Math.abs(position) === 1) className += ' journey-arc__year--adjacent';
              else className += ' journey-arc__year--far';
              
              if (isLeft) className += ' journey-arc__year--left';
              if (isRight) className += ' journey-arc__year--right';

              return (
                <div
                  key={milestone.year}
                  className={className}
                  style={{
                    '--position': position,
                    '--abs-position': absPosition
                  } as React.CSSProperties}
                >
                  {milestone.year}
                </div>
              );
            })}
          </div>

          {/* Center content - Active year and description */}
          <div className="journey-arc__content" key={currentMilestone.year}>
            <h3 className="journey-arc__active-year">{currentMilestone.year}</h3>
            <p className="journey-arc__description">{currentMilestone.description}</p>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="journey-navigation">
          <button 
            className="journey-navigation__arrow journey-navigation__arrow--left"
            onClick={handlePrev}
            aria-label="Previous year"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            className="journey-navigation__arrow journey-navigation__arrow--right"
            onClick={handleNext}
            aria-label="Next year"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;