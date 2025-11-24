'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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
    titleColor: 'about-text-purple',
    subtitle: 'SECURE. ACCESS. EMPOWER',
    subtitleColor: 'about-text-cyan',
    description:
      'To build a future where technology feels secure, accessible, and empowering for everyone — from startups to enterprises.',
    cardClass: 'about-card--vision',
    outerClass: 'about-card-outer--vision',
  },
  {
    icon: '/logo/mission.svg',
    title: 'OUR',
    titleHighlight: 'MISSION',
    titleColor: 'about-text-cyan',
    subtitle: 'SIMPLIFY. SECURE. SCALE',
    subtitleColor: 'about-text-purple',
    description:
      "At CyberFort Tech, we're on a mission to make cutting-edge technology simple, safe, and scalable. We exist to protect digital assets, bridge skill gaps, and fuel innovation across cybersecurity, AI, blockchain, and data science — empowering businesses to grow with confidence and clarity.",
    cardClass: 'about-card--mission',
    outerClass: 'about-card-outer--mission',
  },
  {
    icon: '/logo/value.svg',
    title: 'OUR',
    titleHighlight: 'VALUE',
    titleColor: 'about-text-purple',
    subtitle: 'PRECISION. TRUST. PROGRESS',
    subtitleColor: 'about-text-cyan',
    description:
      'We safeguard what matters, innovate fearlessly, and keep technology human — reliable, affordable, and built for tomorrow.',
    cardClass: 'about-card--value',
    outerClass: 'about-card-outer--value',
  },
];

const DesktopCardsView: React.FC = () => {
  return (
    <div className="about-hero__cards">
      {cardsData.map((card, index) => (
        <div key={index} className={`about-card-outer ${card.outerClass}`}>
          <div className={`about-card ${card.cardClass}`}>
            <div className="about-card__icon-wrapper">
              <div className="about-rhombus-stack">
                <div className="about-rhombus-layer"></div>
                <div className="about-rhombus-layer"></div>
                <div className="about-rhombus-layer"></div>
              </div>
              <img src={card.icon} alt={`${card.titleHighlight} Icon`} className="about-card__icon" />
            </div>

            <div className="about-card__content">
              <h3 className="about-card__title">
                {card.title} <span className={card.titleColor}>{card.titleHighlight}</span>
              </h3>
              <p className={`about-card__subtitle ${card.subtitleColor}`}>{card.subtitle}</p>
              <p className="about-card__description">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
    <div ref={container} className="about-card-container">
      <motion.div 
        className={`about-card-outer ${card.outerClass}`}
        style={{ 
          scale,
          top: `calc(5vh + ${i * 60}px)`,
        }}
      >
        <div className={`about-card ${card.cardClass}`}>
          <div className="about-card__icon-wrapper">
            <div className="about-rhombus-stack">
              <div className="about-rhombus-layer"></div>
              <div className="about-rhombus-layer"></div>
              <div className="about-rhombus-layer"></div>
            </div>
            <img
              src={card.icon}
              alt={`${card.titleHighlight} Icon`}
              className="about-card__icon"
            />
          </div>

          <div className="about-card__content">
            <h3 className="about-card__title">
              {card.title}{' '}
              <span className={card.titleColor}>{card.titleHighlight}</span>
            </h3>
            <p className={`about-card__subtitle ${card.subtitleColor}`}>{card.subtitle}</p>
            <p className="about-card__description">{card.description}</p>
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
    <div ref={container} className="about-hero__cards-mobile">
      {cardsData.map((card, i) => {
        const targetScale = 1 - (cardsData.length - i) * 0.02;
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
