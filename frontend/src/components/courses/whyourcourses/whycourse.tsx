import React from 'react';
import style from './WhyCourses.module.scss';
import EnterpriseCurriculum from '/logo/Enterprise-Curriculum.svg'

// --- IMPORTANT: Replace these placeholders with your actual SVG imports ---
// Example imports (You must create these files or use a function/library to render them):
// import IconM from 'path/to/assets/IconM.svg';
// import IconCap from 'path/to/assets/IconCap.svg';
// ... and so on for all 8 icons.

// Since I cannot import actual files, I'll use a functional component
// that accepts the color property, which mimics how an imported SVG component would be used.
// NOTE: You must ensure your actual SVG files use 'currentColor' for their fill/stroke
// so that the CSS color applied to the parent can change the icon's color.
const DummySvg = ({ color, children }: { color: string, children: React.ReactNode }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 32 32" 
        className={style.iconSvg}
        style={{ color: color }} // Inline style to simulate the color being applied by the parent
    >
        {/* Replace this placeholder with your actual SVG path/shape elements */}
        <rect width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
        <text x="16" y="20" fontSize="16" fill="currentColor" textAnchor="middle">{children}</text>
    </svg>
);
// --------------------------------------------------------------------------


// Define the data for the 8 feature cards
const features = [
  {
    iconClass: style.iconYellow,
    title: 'Enterprise Curriculum',
    description: 'Future-ready cybersecurity leader training.',
    iconSvg: '/logo/Enterprise-Curriculum.svg' // Pass color to maintain glow context
  },
  {
    iconClass: style.iconCyan,
    title: 'Mission-Critical Training',
    description: 'Instructor-led with real-world simulations.',
    iconSvg: <DummySvg color='#22d3ee'>Cap</DummySvg>,
  },
  {
    iconClass: style.iconGreen,
    title: 'Offensive & Defensive Labs',
    description: 'Hands-on mastery with real-world labs.',
    iconSvg: <DummySvg color='#4ade80'>🛡️</DummySvg>,
  },
  {
    iconClass: style.iconOrange,
    title: 'DPIIT Credentials',
    description: 'Industry-recognized for global mobility.',
    iconSvg: <DummySvg color='#fb923c'>Ö</DummySvg>,
  },
  {
    iconClass: style.iconPink,
    title: 'Mentor-Led Excellence',
    description: 'Deep dives and career enablement.',
    iconSvg: <DummySvg color='#e879f9'>🚀</DummySvg>,
  },
  {
    iconClass: style.iconAqua,
    title: 'Innovation & R&D',
    description: 'Next-gen security solutions integration.',
    iconSvg: <DummySvg color='#06b6d4'>✨</DummySvg>,
  },
  {
    iconClass: style.iconPurple,
    title: 'Multi-Modal Delivery',
    description: 'Secure cloud lab access infrastructure.',
    iconSvg: <DummySvg color='#a78bfa'>✅</DummySvg>,
  },
  {
    iconClass: style.iconRed,
    title: 'Perpetual Alumni Access',
    description: 'Continuous skill and network growth.',
    iconSvg: <DummySvg color='#f87171'>🤝</DummySvg>,
  },
];
const WhyCourse = () => {
  return (
     <section className={style.whyPartnerSection}>
      <div className={style.container}>
        <div className={style.grid}>
          {features.map((feature, index) => (
            <div key={index} className={style.cardOuter}>
              <div className={style.cardInner}>
                
                {/* Icon Wrapper with Dynamic Color */}
                <div className={`${style.iconWrapper} ${feature.iconClass}`}>
                  {feature.iconSvg}
                </div>
                
                <div className={style.cardContent}>
                  <h3 className={style.cardTitle}>{feature.title}</h3>
                  <p className={style.cardDescription}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCourse;