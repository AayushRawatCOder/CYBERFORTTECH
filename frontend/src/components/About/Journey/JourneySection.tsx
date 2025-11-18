import React, { useState } from 'react';
import './JourneySection.scss';

interface JourneyMilestone {
  year: string;
  description: string;
}

const JourneySection: React.FC = () => {
  const milestones: JourneyMilestone[] = [
    {
      year: '2023',
      description: 'Integrated advanced AI-powered learning tools and personalized adaptive training modules for enhanced learning.'
    },
    {
      year: '2024',
      description: 'Expanded our services with advanced cybersecurity training programs and launched enterprise security solutions.'
    },
    {
      year: '2025',
      description: 'Leading the industry with cutting-edge cybersecurity solutions and global expansion initiatives.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : milestones.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
  };

  const currentMilestone = milestones[currentIndex];

  return (
    <section className="journey-section">
      <div className="journey-section__container">
        <div className="journey-section__header">
          <h2 className="journey-section__title">
            OUR <span className="text-cyan">JOURNEY</span>
          </h2>
          <p className="journey-section__subtitle">
            From inception to becoming a leading<br />
            cybersecurity education platform.
          </p>
        </div>

        <div className="journey-arc">
          <svg className="journey-arc__svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#01E6DD" stopOpacity="0.8" />
                <stop offset="20%" stopColor="#01E6DD" stopOpacity="1" />
                <stop offset="50%" stopColor="#FE8FEB" stopOpacity="1" />
                <stop offset="80%" stopColor="#01E6DD" stopOpacity="1" />
                <stop offset="100%" stopColor="#01E6DD" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <path
              className="journey-arc__path"
              d="M 150 100 Q 600 450, 1050 100"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="4"
              strokeDasharray="10 8"
              filter="url(#glow)"
            />
          </svg>

          <div className="journey-arc__year-label journey-arc__year-label--left">
            2023
          </div>
          <div className="journey-arc__year-label journey-arc__year-label--right">
            2025
          </div>

          <div className="journey-arc__content">
            <h3 className="journey-arc__active-year">{currentMilestone.year}</h3>
            <p className="journey-arc__description">{currentMilestone.description}</p>
          </div>
        </div>

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