'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './AboutHero.module.scss';

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
    description: 'To build a future where technology feels secure, accessible, and empowering for everyone — from startups to enterprises.',
    cardClass: 'card-vision',
  },
  {
    icon: '/logo/mission.svg',
    title: 'OUR',
    titleHighlight: 'MISSION',
    subtitle: 'SIMPLIFY. SECURE. SCALE',
    description: "At CyberFort Tech, we're on a mission to make cutting-edge technology simple, safe, and scalable. We exist to protect digital assets, bridge skill gaps, and fuel innovation across cybersecurity, AI, and blockchain.",
    cardClass: 'card-mission',
  },
  {
    icon: '/logo/value.svg',
    title: 'OUR',
    titleHighlight: 'VALUE',
    subtitle: 'PRECISION. TRUST. PROGRESS',
    description: 'We safeguard what matters, innovate fearlessly, and keep technology human — reliable, affordable, and built for tomorrow.',
    cardClass: 'card-value',
  },
];

const IconStack = ({ icon, title, customClass }: { icon: string; title: string; customClass: string }) => (
  <div className={`${styles['icon-wrapper']} ${styles[customClass]}`}>
    <div className={styles['light-beam']}></div>
    <div className={styles['about-rhombus-stack']}>
      <div className={styles['about-rhombus-layer']}></div>
      <div className={styles['about-rhombus-layer']}></div>
      <div className={styles['about-rhombus-layer']}></div>
    </div>
    <img className={styles.icon} src={icon} alt={title} />
  </div>
);

const DesktopCardsView: React.FC = () => {
  return (
    <div className={styles['about-grid']}>
      {cardsData.map((card, i) => (
        <div key={`desktop-${i}`} className={`${styles['about-card']} ${styles[card.cardClass]}`}>
          <div className={styles['about-card-inner']}>
            <IconStack icon={card.icon} title={card.titleHighlight} customClass={card.cardClass} />
            <div className={styles['text-content']}>
              <h3 className={styles['card-title']}>
                {card.title} <span className={styles['highlight-text']}>{card.titleHighlight}</span>
              </h3>
              <div className={styles['subtitle-wrapper']}>
                <span className={styles['card-subtitle']}>{card.subtitle}</span>
              </div>
              <p className={styles['card-desc']}>{card.description}</p>
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
    <div ref={container} className={styles['card-container']}>
      <motion.div
        className={`${styles['about-card']} ${styles[card.cardClass]}`}
        style={{
          scale,
          top: `calc(10vh + ${i * 60}px)`,
        }}
      >
        <div className={styles['about-card-inner']}>
          <IconStack icon={card.icon} title={card.titleHighlight} customClass={card.cardClass} />
          <div className={styles['text-content']}>
            <h3 className={styles['card-title']}>
              {card.title} <span className={styles['highlight-text']}>{card.titleHighlight}</span>
            </h3>
            <div className={styles['subtitle-wrapper']}>
              <span className={styles['card-subtitle']}>{card.subtitle}</span>
            </div>
            <p className={styles['card-desc']}>{card.description}</p>
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
    <div ref={container} className={styles['about-grid-mobile']}>
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
    <section className={styles['about-hero-section']}>
      <div className={styles['hero-header']}>
        <div className={styles['ambient-glow']}></div>
        <h1 className={styles['hero-title']}>WE ARE MAKING TECHNOLOGY</h1>
        <h1 className={styles['hero-title']}>
          <span className={styles['gradient-text']}>SIMPLE, SECURE, AND</span>
          <br />
          <span className={styles['gradient-text']}>SCALABLE</span>
        </h1>
      </div>

      {isMobile ? <MobileCardsView /> : <DesktopCardsView />}
    </section>
  );
};

export default AboutHero;
