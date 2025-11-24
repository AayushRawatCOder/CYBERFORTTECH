import React, { useState } from 'react';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@500;600;700;800;900&family=Inter:wght@300;400;500&display=swap');

.journey-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(ellipse at center, #0f1628 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 80px 20px;
}

.journey-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  transform: translateY(-50%);
}

.journey-section::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  transform: translateY(-50%);
}

.journey-section__container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.journey-section__header {
  text-align: center;
  margin-bottom: 120px;
}

.journey-section__title {
  font-family: 'Tomorrow', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-gradient {
  background: linear-gradient(90deg, #22d3ee 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.journey-section__subtitle {
  font-family: 'Inter', sans-serif;
  color: #9ca3af;
  font-size: 1.05rem;
  line-height: 1.7;
  font-weight: 400;
}

.journey-display {
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.journey-curve-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.journey-curve {
  width: 100%;
  height: 100%;
}

.dashed-path {
  animation: dashMove 50s linear infinite;
}

.arc-glow-left {
  position: absolute;
  top: 15%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 60%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

.arc-glow-right {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 60%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

.arc-glow-bottom {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  background: radial-gradient(ellipse, rgba(139, 92, 246, 0.15) 0%, transparent 60%);
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
}

.journey-years {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.year-node {
  position: absolute;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.year-node--left {
  top: 12%;
  left: 10%;
}

.year-node--right {
  top: 12%;
  right: 10%;
}

.year-text {
  font-family: 'Tomorrow', sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  color: rgba(100, 116, 139, 0.5);
  transition: all 0.4s ease;
  letter-spacing: 0.02em;
  text-shadow: 0 0 20px rgba(100, 116, 139, 0.3);
}

.year-node--left:hover .year-text,
.year-node--right:hover .year-text {
  color: rgba(148, 163, 184, 0.8);
  transform: scale(1.05);
}

.year-node--center {
  bottom: 18%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.active-year-text {
  font-family: 'Tomorrow', sans-serif;
  font-size: 7.5rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 30%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.8));
}

.journey-content {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  text-align: center;
  z-index: 5;
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.journey-navigation {
  position: absolute;
  bottom: 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  pointer-events: none;
  z-index: 20;
}

.nav-btn {
  pointer-events: auto;
  width: 56px;
  height: 56px;
  background: rgba(30, 41, 59, 0.4);
  border: 1.5px solid rgba(71, 85, 105, 0.4);
  border-radius: 14px;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-btn:hover {
  background: rgba(51, 65, 85, 0.6);
  border-color: rgba(100, 116, 139, 0.6);
  color: #94a3b8;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
}

@keyframes dashMove {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -1000; }
}

@media (max-width: 1024px) {
  .journey-section__title { font-size: 3rem; }
  .active-year-text { font-size: 6rem; }
  .year-text { font-size: 2.5rem; }
  .journey-display { height: 420px; }
}

@media (max-width: 768px) {
  .journey-section {
    padding: 60px 20px;
  }
  
  .journey-section__header {
    margin-bottom: 80px;
  }
  
  .journey-section__title { 
    font-size: 2.2rem; 
  }
  
  .journey-section__subtitle {
    font-size: 0.95rem;
  }
  
  .journey-display { 
    height: 380px; 
  }
  
  .year-node--left {
    left: 8%;
    top: 15%;
  }
  
  .year-node--right {
    right: 8%;
    top: 15%;
  }
  
  .year-text { 
    font-size: 2rem; 
  }
  
  .year-node--center {
    bottom: 15%;
  }
  
  .active-year-text { 
    font-size: 4.5rem; 
  }
  
  .description-text {
    font-size: 0.9rem;
  }
  
  .nav-btn {
    width: 48px;
    height: 48px;
  }
  
  .journey-navigation {
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .journey-section__title { font-size: 1.8rem; }
  .active-year-text { font-size: 3.5rem; }
  .year-text { font-size: 1.6rem; }
  .journey-display { height: 320px; }
  .description-text { font-size: 0.85rem; }
  .year-node--left { left: 5%; }
  .year-node--right { right: 5%; }
}
`;

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

  const [currentIndex, setCurrentIndex] = useState(1); // Start at 2024 (index 1)

  const getIndex = (offset: number) => {
    const len = milestones.length;
    let index = (currentIndex + offset) % len;
    if (index < 0) index += len;
    return index;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const len = milestones.length;
      return (prev - 1 + len) % len;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const len = milestones.length;
      return (prev + 1) % len;
    });
  };

  const leftItem = milestones[getIndex(-1)];
  const centerItem = milestones[currentIndex];
  const rightItem = milestones[getIndex(1)];

  // Inject styles
  React.useEffect(() => {
    const styleId = 'journey-section-styles';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    <section className="journey-section">
      <div className="journey-section__container">
        
        <div className="journey-section__header">
          <h2 className="journey-section__title">
            OUR <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="journey-section__subtitle">
            From inception to becoming a leading
            <br />
            cybersecurity education platform.
          </p>
        </div>

        <div className="journey-display">
          
          {/* Glow effects around the arc */}
          <div className="arc-glow-left"></div>
          <div className="arc-glow-right"></div>
          <div className="arc-glow-bottom"></div>
          
          {/* SVG Curve - U-shaped (inverted) */}
          <div className="journey-curve-wrapper">
            <svg className="journey-curve" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="70%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* U-shaped curve - inverted from before */}
              <path 
                d="M 150 80 Q 500 320, 850 80" 
                fill="none" 
                stroke="url(#curveGradient)" 
                strokeWidth="2" 
                strokeDasharray="12 8"
                className="dashed-path"
                filter="url(#glow)"
              />
            </svg>
          </div>

          {/* Years positioned at arc ends and center bottom */}
          <div className="journey-years">
            <div 
              key={`left-${leftItem.year}`} 
              className="year-node year-node--left" 
              onClick={handlePrev}
            >
              <span className="year-text">{leftItem.year}</span>
            </div>

            <div 
              key={`right-${rightItem.year}`} 
              className="year-node year-node--right" 
              onClick={handleNext}
            >
              <span className="year-text">{rightItem.year}</span>
            </div>

            <div 
              key={`center-${centerItem.year}`} 
              className="year-node year-node--center"
            >
              <h3 className="active-year-text">{centerItem.year}</h3>
            </div>
          </div>

          {/* Description at bottom */}
          <div className="journey-content">
            <p className="description-text">
              {centerItem.description}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="journey-navigation">
          <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;