// import React from 'react';
// import './AboutHero.scss';

// const AboutHero: React.FC = () => {
//   return (
//     <section className="about-hero">
//       <div className="about-hero__container">
//         <div className="about-hero__header">
//           <h1 className="about-hero__title">
//             WE ARE MAKING TECHNOLOGY
//           </h1>
//           <h2 className="about-hero__subtitle">
//             SIMPLE, SECURE, AND
//             <br />
//             SCALABLE
//           </h2>
//         </div>

//         <div className="about-hero__cards">
//           <div className="card-outer card-outer--vision">
//             <div className="card card--vision">
//               <div className="card__icon-wrapper">
//                 <img 
//                   src="/logo/vision.svg" 
//                   alt="Vision Icon" 
//                   className="card__icon"
//                 />
//               </div>
              
//               <div className="card__content">
//                 <h3 className="card__title">
//                   OUR <span className="text-purple">VISION</span>
//                 </h3>
//                 <p className="card__subtitle">SECURE. ACCESS. EMPOWER</p>
//                 <p className="card__description">
//                   To build a future where technology 
//                   feels secure, accessible, and 
//                   empowering for everyone — from 
//                   startups to enterprises.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="card-outer card-outer--mission">
//             <div className="card card--mission">
//               <div className="card__icon-wrapper">
//                 <img 
//                   src="/logo/mission.svg" 
//                   alt="Mission Icon" 
//                   className="card__icon"
//                 />
//               </div>
              
//               <div className="card__content">
//                 <h3 className="card__title">
//                   OUR <span className="text-cyan">MISSION</span>
//                 </h3>
//                 <p className="card__subtitle">SIMPLIFY. SECURE. SCALE</p>
//                 <p className="card__description">
//                   At CyberFort Tech, we're on a 
//                   mission to make cutting-edge 
//                   technology simple, safe, and 
//                   scalable. We exist to protect digital 
//                   assets, bridge skill gaps, and fuel 
//                   innovation across cybersecurity, 
//                   AI, blockchain, and data science 
//                   empowering businesses to grow 
//                   with confidence and clarity.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="card-outer card-outer--value">
//             <div className="card card--value">
//               <div className="card__icon-wrapper">
//                 <img 
//                   src="/logo/value.svg" 
//                   alt="Value Icon" 
//                   className="card__icon"
//                 />
//               </div>
              
//               <div className="card__content">
//                 <h3 className="card__title">
//                   OUR <span className="text-cyan">VALUE</span>
//                 </h3>
//                 <p className="card__subtitle">PRECISION. TRUST. PROGRESS</p>
//                 <p className="card__description">
//                   We safeguard what matters, 
//                   innovate fearlessly, and keep 
//                   technology human — reliable, 
//                   affordable, and built for tomorrow.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import './AboutHero.scss';

interface CardData {
  icon: string;
  title: string;
  titleHighlight: string;
  titleColor: string;
  subtitle: string;
  subtitleColor: string;
  description: string;
  cardClass: string;
  outerClass: string;
}

const cardsData: CardData[] = [
  {
    icon: '/logo/vision.svg',
    title: 'OUR',
    titleHighlight: 'VISION',
    titleColor: 'text-purple',
    subtitle: 'SECURE. ACCESS. EMPOWER',
    subtitleColor: 'text-cyan',
    description: 'To build a future where technology feels secure, accessible, and empowering for everyone — from startups to enterprises.',
    cardClass: 'card--vision',
    outerClass: 'card-outer--vision',
  },
  {
    icon: '/logo/mission.svg',
    title: 'OUR',
    titleHighlight: 'MISSION',
    titleColor: 'text-cyan',
    subtitle: 'SIMPLIFY. SECURE. SCALE',
    subtitleColor: 'text-purple',
    description: 'At CyberFort Tech, we\'re on a mission to make cutting-edge technology simple, safe, and scalable. We exist to protect digital assets, bridge skill gaps, and fuel innovation across cybersecurity, AI, blockchain, and data science empowering businesses to grow with confidence and clarity.',
    cardClass: 'card--mission',
    outerClass: 'card-outer--mission',
  },
  {
    icon: '/logo/value.svg',
    title: 'OUR',
    titleHighlight: 'VALUE',
    titleColor: 'text-cyan',
    subtitle: 'PRECISION. TRUST. PROGRESS',
    subtitleColor: 'text-cyan',
    description: 'We safeguard what matters, innovate fearlessly, and keep technology human — reliable, affordable, and built for tomorrow.',
    cardClass: 'card--value',
    outerClass: 'card-outer--value',
  },
];

// Desktop Grid View
const DesktopCardsView: React.FC = () => {
  return (
    <div className="about-hero__cards">
      {cardsData.map((card, index) => (
        <div key={index} className={`card-outer ${card.outerClass}`}>
          <div className={`card ${card.cardClass}`}>
            <div className="card__icon-wrapper">
              <img 
                src={card.icon} 
                alt={`${card.titleHighlight} Icon`} 
                className="card__icon"
              />
            </div>
            
            <div className="card__content">
              <h3 className="card__title">
                {card.title} <span className={card.titleColor}>{card.titleHighlight}</span>
              </h3>
              <p className={`card__subtitle ${card.subtitleColor}`}>{card.subtitle}</p>
              <p className="card__description">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Mobile Stacking Cards - Simplified
const MobileCardsView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Spring config — this is the magic for buttery feel
  const springConfig = { stiffness: 300, damping: 35 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <div ref={containerRef} className="about-hero__cards-mobile">
      {cardsData.map((card, index) => {
        const length = cardsData.length;

        // Overlapping ranges + graduated scale (top card = biggest)
        const start = index * 0.22;        // Earlier start for more overlap
        const end = 1;
        const targetScale = shouldReduceMotion ? 1 : 1 - (length - 1 - index) * 0.055; // 1 → 0.945 → 0.89

        const scale = useTransform(smoothProgress, [start, end], [1, targetScale]);
        const y = useTransform(smoothProgress, [start, end], [0, -100]);

        // Spring everything
        const smoothScale = useSpring(scale, springConfig);
        const smoothY = useSpring(y, springConfig);

        return (
          <motion.div
            key={index}
            className="mobile-card-wrapper"
            style={{
              position: 'sticky',
              top: `${40 + index * 30}px`, // Slightly more spacing = premium feel
              zIndex: length - index,
            }}
          >
            <motion.div
              style={{
                scale: shouldReduceMotion ? 1 : smoothScale,
                y: shouldReduceMotion ? 0 : smoothY,
                // Force GPU layers
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
              className={`card-outer ${card.outerClass} mobile-card-gpu`}
            >
              <div className={`card ${card.cardClass}`}>
                <div className="card__icon-wrapper">
                  <img
                    src={card.icon}
                    alt={`${card.titleHighlight} Icon`}
                    className="card__icon"
                  />
                </div>

                <div className="card__content">
                  <h3 className="card__title">
                    {card.title}{' '}
                    <span className={card.titleColor}>{card.titleHighlight}</span>
                  </h3>
                  <p className={`card__subtitle ${card.subtitleColor}`}>
                    {card.subtitle}
                  </p>
                  <p className="card__description">{card.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Invisible spacer so last card can fully reveal */}
      <div style={{ height: '120vh' }} />
    </div>
  );
};
const AboutHero: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__header">
          <h1 className="about-hero__title">
            WE ARE MAKING TECHNOLOGY
          </h1>
          <h2 className="about-hero__subtitle">
            SIMPLE, SECURE, AND
            <br />
            SCALABLE
          </h2>
        </div>

        {!isClient ? (
          <DesktopCardsView />
        ) : isMobile ? (
          <MobileCardsView />
        ) : (
          <DesktopCardsView />
        )}
      </div>
    </section>
  );
};

export default AboutHero;