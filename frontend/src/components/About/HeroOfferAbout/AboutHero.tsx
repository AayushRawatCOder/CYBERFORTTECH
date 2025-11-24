// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
// import './AboutHero.scss';

// interface CardData {
//   icon: string;
//   title: string;
//   titleHighlight: string;
//   subtitle: string;
//   description: string;
//   cardClass: string; // Used for color themes (vision, mission, value)
// }

// const cardsData: CardData[] = [
//   {
//     icon: '/logo/vision.svg',
//     title: 'OUR',
//     titleHighlight: 'VISION',
//     subtitle: 'SECURE. ACCESS. EMPOWER',
//     description:
//       'To build a future where technology feels secure, accessible, and empowering for everyone — from startups to enterprises.',
//     cardClass: 'card-vision',
//   },
//   {
//     icon: '/logo/mission.svg',
//     title: 'OUR',
//     titleHighlight: 'MISSION',
//     subtitle: 'SIMPLIFY. SECURE. SCALE',
//     description:
//       "At CyberFort Tech, we're on a mission to make cutting-edge technology simple, safe, and scalable. We protect digital assets, bridge skill gaps, and fuel innovation.",
//     cardClass: 'card-mission',
//   },
//   {
//     icon: '/logo/value.svg',
//     title: 'OUR',
//     titleHighlight: 'VALUE',
//     subtitle: 'PRECISION. TRUST. PROGRESS',
//     description:
//       'We safeguard what matters, innovate fearlessly, and keep technology human — reliable, affordable, and built for tomorrow.',
//     cardClass: 'card-value',
//   },
// ];

// // --- 1. The Icon Stack Visual (Same as Features) ---
// const IconStack = ({ icon, title, customClass }: { icon: string, title: string, customClass: string }) => (
//   <div className={`icon-wrapper ${customClass}`}>
//     {/* The fading floor light */}
//     <div className="light-beam"></div>
    
//     {/* The Glass Stack */}
//     <div className="rhombus-stack">
//       <div className="rhombus-layer"></div>
//       <div className="rhombus-layer"></div>
//       <div className="rhombus-layer"></div>
//     </div>
    
//     <img className="icon" src={icon} alt={title} />
//   </div>
// );

// // --- 2. Desktop Grid View ---
// const DesktopCardsView: React.FC = () => {
//   return (
//     <div className="about-grid">
//       {cardsData.map((card, i) => (
//         <div key={`desktop-${i}`} className={`about-card ${card.cardClass}`}>
//           <div className="card-inner">
//             <div className="card-highlight">
//               <span>{card.subtitle}</span>
//             </div>
//             <IconStack icon={card.icon} title={card.titleHighlight} customClass={card.cardClass} />
//             <div className="text-content">
//               <h3 className="card-title">
//                 {card.title} <span className="highlight-text">{card.titleHighlight}</span>
//               </h3>
//               <p className="card-desc">{card.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // --- 3. Mobile Stacking Logic (The "Stack Feature") ---
// interface CardProps {
//   i: number;
//   card: CardData;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
// }

// const Card: React.FC<CardProps> = ({ i, card, progress, range, targetScale }) => {
//   const container = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start'],
//   });

//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div ref={container} className="card-container">
//       <motion.div 
//         className={`about-card ${card.cardClass}`}
//         style={{ 
//           scale,
//           // STACKING LOGIC: Same calculation as FeaturesSection
//           top: `calc(10vh + ${i * 80}px)`, 
//         }}
//       >
//         <div className="card-inner">
//           <div className="card-highlight">
//             <span>{card.subtitle}</span>
//           </div>
//           <IconStack icon={card.icon} title={card.titleHighlight} customClass={card.cardClass} />
//           <div className="text-content">
//             <h3 className="card-title">
//                 {card.title} <span className="highlight-text">{card.titleHighlight}</span>
//             </h3>
//             <p className="card-desc">{card.description}</p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const MobileCardsView: React.FC = () => {
//   const container = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   return (
//     <div ref={container} className="about-grid-mobile">
//       {cardsData.map((card, i) => {
//         // Gentle scaling for the stack effect
//         const targetScale = 1 - (cardsData.length - i) * 0.05;
//         return (
//           <Card
//             key={`mobile-${i}`}
//             i={i}
//             card={card}
//             progress={scrollYProgress}
//             range={[i * (1 / cardsData.length), 1]}
//             targetScale={targetScale}
//           />
//         );
//       })}
//     </div>
//   );
// };

// // --- 4. Main Component ---
// const AboutHero: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 1024);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   if (!isClient) return null;

//   return (
//     <section className="about-hero-section">
//       {/* Optional Title Area if you need it */}
//       {/* <div className="section-header">...</div> */}

//       {isMobile ? <MobileCardsView /> : <DesktopCardsView />}
//     </section>
//   );
// };

// export default AboutHero;
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './AboutHero.scss';

interface CardData {
  icon: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  cardClass: string;
}

const cardsData: CardData[] = [
  {
    icon: '/logo/vision.svg',
    title: 'OUR',
    titleHighlight: 'VISION',
    subtitle: 'SECURE. ACCESS. EMPOWER',
    description:
      'To build a future where technology feels secure, accessible, and empowering for everyone — from startups to enterprises.',
    cardClass: 'card-vision',
  },
  {
    icon: '/logo/mission.svg',
    title: 'OUR',
    titleHighlight: 'MISSION',
    subtitle: 'SIMPLIFY. SECURE. SCALE',
    description:
      "At CyberFort Tech, we're on a mission to make cutting-edge technology simple, safe, and scalable. We exist to protect digital assets, bridge skill gaps, and fuel innovation across cybersecurity, AI, and blockchain.",
    cardClass: 'card-mission',
  },
  {
    icon: '/logo/value.svg',
    title: 'OUR',
    titleHighlight: 'VALUE',
    subtitle: 'PRECISION. TRUST. PROGRESS',
    description:
      'We safeguard what matters, innovate fearlessly, and keep technology human — reliable, affordable, and built for tomorrow.',
    cardClass: 'card-value',
  },
];

// --- Icon Stack Component ---
const IconStack = ({ icon, title, customClass }: { icon: string, title: string, customClass: string }) => (
  <div className={`icon-wrapper ${customClass}`}>
    <div className="light-beam"></div>
    <div className="rhombus-stack">
      <div className="rhombus-layer"></div>
      <div className="rhombus-layer"></div>
      <div className="rhombus-layer"></div>
    </div>
    <img className="icon" src={icon} alt={title} />
  </div>
);

// --- Desktop View (Grid with Stagger) ---
const DesktopCardsView: React.FC = () => {
  return (
    <div className="about-grid">
      {cardsData.map((card, i) => (
        <div key={`desktop-${i}`} className={`about-card ${card.cardClass}`}>
          <div className="card-inner">
            {/* Icon stays centered */}
            <IconStack icon={card.icon} title={card.titleHighlight} customClass={card.cardClass} />
            
            {/* Text content aligns left */}
            <div className="text-content">
              <h3 className="card-title">
                {card.title} <span className="highlight-text">{card.titleHighlight}</span>
              </h3>
              <div className="subtitle-wrapper">
                <span className="card-subtitle">{card.subtitle}</span>
              </div>
              <p className="card-desc">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Mobile View (Stacked Scroll) ---
interface CardProps {
  i: number;
  card: CardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, card, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="card-container">
      <motion.div 
        className={`about-card ${card.cardClass}`}
        style={{ 
          scale,
          top: `calc(10vh + ${i * 60}px)`, 
        }}
      >
        <div className="card-inner">
          <IconStack icon={card.icon} title={card.titleHighlight} customClass={card.cardClass} />
          <div className="text-content">
            <h3 className="card-title">
                {card.title} <span className="highlight-text">{card.titleHighlight}</span>
            </h3>
            <div className="subtitle-wrapper">
               <span className="card-subtitle">{card.subtitle}</span>
            </div>
            <p className="card-desc">{card.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const MobileCardsView: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="about-grid-mobile">
      {cardsData.map((card, i) => {
        const targetScale = 1 - (cardsData.length - i) * 0.05;
        return (
          <Card
            key={`mobile-${i}`}
            i={i}
            card={card}
            progress={scrollYProgress}
            range={[i * (1 / cardsData.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

const AboutHero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isClient) return null;

  return (
    <section className="about-hero-section">
      {/* --- NEW HERO HEADER CONTENT --- */}
      <div className="hero-header">
        <div className="ambient-glow"></div>
        <h1 className="hero-title">WE ARE MAKING TECHNOLOGY</h1>
        <h1 className="hero-title">
          <span className="gradient-text">SIMPLE, SECURE, AND</span>
          <br />
          <span className="gradient-text">SCALABLE</span>
        </h1>
      </div>

      {isMobile ? <MobileCardsView /> : <DesktopCardsView />}
    </section>
  );
};

export default AboutHero;