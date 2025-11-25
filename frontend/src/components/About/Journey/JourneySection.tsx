import { useState } from 'react';
import './JourneySection.scss';

const timelineData = {
  2023: 'Founded with a vision to revolutionize cybersecurity education and establish industry best practices.',
  2024: 'Expanded our services with advanced cybersecurity training programs and launched enterprise security solutions',
  2025: 'Pioneering the future of cybersecurity education with cutting-edge AI and emerging threat analysis.',
};

const years = [2023, 2024, 2025];

const JourneySection = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <div className="journey-timeline">
      <div className="journey-timeline__content">
        <div className="journey-timeline__circle-container">
          <div className="journey-timeline__arc-year journey-timeline__arc-year--left">
            2023
          </div>
          <div className="journey-timeline__arc-year journey-timeline__arc-year--right">
            2025
          </div>

          <svg
            className="journey-timeline__svg"
            viewBox="0 0 1400 600"
            width="100%"
            height="auto"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="arcGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(34,211,238,0.3)" />
                <stop offset="50%" stopColor="rgba(168,85,247,0.2)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>

              <linearGradient id="arcMainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="75%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>

              <filter id="arcBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
              </filter>

              <filter id="arcInnerGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <ellipse
              cx="700"
              cy="300"
              rx="550"
              ry="280"
              fill="url(#arcGlow)"
              opacity="0.5"
            />

            <path
              d="M 200 150 Q 700 500 1200 150"
              fill="none"
              stroke="url(#arcMainGradient)"
              strokeWidth="4"
              opacity="0.2"
              filter="url(#arcBlur)"
            />

            <path
              d="M 220 150 Q 700 480 1180 150"
              fill="none"
              stroke="url(#arcMainGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              filter="url(#arcInnerGlow)"
            />

            <path
              d="M 240 150 Q 700 460 1160 150"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="3"
              strokeDasharray="20 15"
              strokeLinecap="round"
              opacity="0.6"
            />

            <path
              d="M 260 150 Q 700 440 1140 150"
              fill="none"
              stroke="url(#arcMainGradient)"
              strokeWidth="2"
              opacity="0.15"
            />
          </svg>

          <div className="journey-timeline__arc-heading">
            <span className="journey-timeline__arc-heading-our">OUR</span>{' '}
            <span className="journey-timeline__arc-heading-journey">JOURNEY</span>
          </div>

          <div className="journey-timeline__arc-year journey-timeline__arc-year--center">
            2024
          </div>

          <p className="journey-timeline__description">{timelineData[selectedYear]}</p>

          <div className="journey-timeline__year-selectors">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`journey-timeline__year-btn ${
                  selectedYear === year ? 'journey-timeline__year-btn--active' : ''
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
