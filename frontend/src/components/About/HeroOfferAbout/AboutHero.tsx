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
    description:
      'To build a future where technology feels secure, accessible, and empowering for everyone — from startups to enterprises.',
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
    description:
      "At CyberFort Tech, we're on a mission to make cutting-edge technology simple, safe, and scalable. We exist to protect digital assets, bridge skill gaps, and fuel innovation across cybersecurity, AI, blockchain, and data science — empowering businesses to grow with confidence and clarity.",
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
    description:
      'We safeguard what matters, innovate fearlessly, and keep technology human — reliable, affordable, and built for tomorrow.',
    cardClass: 'card--value',
    outerClass: 'card-outer--value',
  },
];

const DesktopCardsView: React.FC = () => {
  return (
    <div className="about-hero__cards">
      {cardsData.map((card, index) => (
        <div key={index} className={`card-outer ${card.outerClass}`}>
          <div className={`card ${card.cardClass}`}>
            <div className="card__icon-wrapper">
              <img src={card.icon} alt={`${card.titleHighlight} Icon`} className="card__icon" />
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

const MobileCardsView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 250, damping: 35 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <div ref={containerRef} className="about-hero__cards-mobile">
      {cardsData.map((card, index) => {
        const length = cardsData.length;
        const start = index * 0.22;
        const end = 1;
        const targetScale = shouldReduceMotion ? 1 : 1 - (length - 1 - index) * 0.055;

        const scale = useTransform(smoothProgress, [start, end], [1, targetScale]);
        const y = useTransform(smoothProgress, [start, end], [0, -100]);

        const smoothScale = useSpring(scale, springConfig);
        const smoothY = useSpring(y, springConfig);

        return (
          <motion.div
            key={index}
            className="mobile-card-wrapper"
            style={{
              zIndex: length - index,
            }}
          >
            <motion.div
              style={{
                scale: shouldReduceMotion ? 1 : smoothScale,
                y: shouldReduceMotion ? 0 : smoothY,
                top: `calc(-6vh + ${index * 25}px)`, // ✨ MATCHES FEATURESECTION CENTER OFFSET
                position: 'relative',
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
                  <p className={`card__subtitle ${card.subtitleColor}`}>{card.subtitle}</p>
                  <p className="card__description">{card.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      <div style={{ height: '100vh' }} />
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
          <h1 className="about-hero__title">WE ARE MAKING TECHNOLOGY</h1>
          <h2 className="about-hero__subtitle">
            SIMPLE, SECURE, AND <br /> SCALABLE
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
