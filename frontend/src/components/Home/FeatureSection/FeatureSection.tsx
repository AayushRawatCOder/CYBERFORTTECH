'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './FeaturesSection.module.scss';

interface Feature {
  Icon: string;
  title: string;
  description: string;
  highlight: string;
  cardClass: string;
}

const features: Feature[] = [
  {
    Icon: 'logo/Enterprise-Grade-Cybersecurity.svg',
    title: 'Enterprise-Grade Cybersecurity',
    description: 'We architect resilient digital infrastructures with advanced threat detection, penetration testing, SOC automation, and compliance frameworks. Our solutions protect governments, startups, and Fortune 500s, all built for scale, speed, and zero compromise.',
    highlight: 'Zero Compromise Security',
    cardClass: 'card-1',
  },
  {
    Icon: 'logo/brain.svg',
    title: 'AI-Driven Intelligence Systems',
    description: 'From anomaly detection and predictive analytics to NLP-based automation, our AI engines power smarter, faster, and more secure decision-making across industries.',
    highlight: 'Smarter, Faster Decisions',
    cardClass: 'card-2',
  },
  {
    Icon: 'logo/chain.svg',
    title: 'Blockchain for Secure Digital Trust',
    description: 'We deploy blockchain technologies that redefine transparency and integrity. Whether it’s smart contract auditing, decentralized identity, or secure data exchange, our solutions bring cryptographic trust to enterprise ecosystems.',
    highlight: 'Cryptographic Trust',
    cardClass: 'card-3',
  },
  {
    Icon: 'logo/chart.svg',
    title: 'Full Development with Built-in Security',
    description: 'From SaaS products to mission-critical web apps, our full stack teams deliver clean, resilient code with DevSecOps baked into every sprint.',
    highlight: 'Secure by Design',
    cardClass: 'card-4',
  },
  {
    Icon: 'logo/code.svg',
    title: 'CyberFort Labs: Innovation at Core',
    description: 'Our R&D division pushes boundaries in cybersecurity, AI, and blockchain. We prototype new technologies, contribute to open-source, and collaborate globally to shape the future of secure digital transformation. We engineer scalable platforms with security embedded from day one.',
    highlight: 'Innovation Hub',
    cardClass: 'card-5',
  },
  {
    Icon: 'logo/analysis.svg',
    title: 'Data Science for Risk & Resilience',
    description: 'Our data science models predict vulnerabilities, detect fraud, and deliver real-time analytics through custom dashboards—turning complex threats into strategic advantage.',
    highlight: 'Strategic Insights',
    cardClass: 'card-6',
  },
];

const IconStack = ({ icon, title }: { icon: string, title: string }) => (
  <div className={styles['icon-wrapper']}>
    <div className={styles['light-beam']}></div>
    <div className={styles['rhombus-stack']}>
      <div className={styles['rhombus-layer']}></div>
      <div className={styles['rhombus-layer']}></div>
      <div className={styles['rhombus-layer']}></div>
    </div>
    <img className={styles.icon} src={icon} alt={title} />
  </div>
);

const DesktopFeaturesView: React.FC = () => {
  return (
    <div className={styles['features-grid']}>
      {features.map((feature, i) => (
        <div key={`desktop-${i}`} className={`${styles['feature-card']} ${styles[feature.cardClass]}`}>
          <div className={styles['card-inner']}>
            <div className={styles['card-highlight']}>
              <span>{feature.highlight}</span>
            </div>
            <IconStack icon={feature.Icon} title={feature.title} />
            <div className={styles['text-content']}>
              <h3 className={styles['card-title']}>{feature.title}</h3>
              <p className={styles['card-desc']}>{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface CardProps {
  i: number;
  feature: Feature;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, feature, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles['card-container']}>
      <motion.div
        className={`${styles['feature-card']} ${styles[feature.cardClass]}`}
        style={{
          scale,
          top: `calc(5vh + ${i * 80}px)`,
        }}
      >
        <div className={styles['card-inner']}>
          <div className={styles['card-highlight']}>
            <span>{feature.highlight}</span>
          </div>
          <IconStack icon={feature.Icon} title={feature.title} />
          <div className={styles['text-content']}>
            <h3 className={styles['card-title']}>{feature.title}</h3>
            <p className={styles['card-desc']}>{feature.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const MobileFeaturesView: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className={styles['features-grid-mobile']}>
      {features.map((feature, i) => {
        const targetScale = 1 - (features.length - i) * 0.02;
        return (
          <Card
            key={`mobile-${i}`}
            i={i}
            feature={feature}
            progress={scrollYProgress}
            range={[i * (1 / features.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

const FeaturesSection: React.FC = () => {
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

  if (!isClient) {
    return null;
  }

  return (
    <section className={styles['features-section']}>
      <div className={styles['section-title']}>
        <h1>
          <span className={styles['line-1']}>SECURITY</span>
          <span className={styles['line-2']}>THAT SCALES WITH YOU.</span>
        </h1>
        <p>
          Every feature at CyberFort Tech is built with one goal: making cybersecurity effortless, adaptive, and always reliable.
        </p>
      </div>

      {isMobile ? <MobileFeaturesView /> : <DesktopFeaturesView />}
    </section>
  );
};

export default FeaturesSection;
