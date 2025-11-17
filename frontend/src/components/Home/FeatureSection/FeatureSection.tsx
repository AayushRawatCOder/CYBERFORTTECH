"use client";

import React, { useRef, useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "motion/react";
import "./FeaturesSection.scss";

interface Feature {
  Icon: string;
  title: string;
  description: string;
  highlight: string;
  cardClass: string;
}

const features: Feature[] = [
  {
    Icon: "logo/Enterprise-Grade-Cybersecurity.svg",
    title: "Enterprise-Grade Cybersecurity",
    description:
      "We architect resilient digital infrastructures with advanced threat detection, penetration testing, SOC automation, and compliance frameworks. Our solutions protect governments, startups, and Fortune500s, all built for scale, speed, and zero compromise.",
    highlight: "Zero Compromise Security",
    cardClass: "card-1",
  },
  {
    Icon: "logo/brain.svg",
    title: "AI-Driven Intelligence Systems",
    description:
      "From anomaly detection and predictive analytics to NLP-based automation, our AI engines power smarter, faster, and more secure decision-making across industries.",
    highlight: "Smarter, Faster Decisions",
    cardClass: "card-2",
  },
  {
    Icon: "logo/chain.svg",
    title: "Blockchain for Secure Digital Trust",
    description:
      "We deploy blockchain technologies that redefine transparency and integrity. Whether it's smart contract auditing, decentralized identity, or secure data exchange, our solutions bring cryptographic trust to enterprise ecosystems.",
    highlight: "Cryptographic Trust",
    cardClass: "card-3",
  },
  {
    Icon: "logo/code.svg",
    title: "Full Development with Built-in Security",
    description:
      "From SaaS products to mission-critical web apps, our full stack teams deliver clean, resilient code with DevSecOps baked into every sprint.",
    highlight: "Secure by Design",
    cardClass: "card-4",
  },
  {
    Icon: "logo/analysis.svg",
    title: "CyberFort Labs: Innovation at Core",
    description:
      "Our R&D division pushes boundaries in cybersecurity, AI, and blockchain. We prototype new technologies, contribute to open-source, and collaborate globally to shape the future of secure digital transformation.",
    highlight: "Innovation Hub",
    cardClass: "card-5",
  },
  {
    Icon: "logo/chart.svg",
    title: "Data Science for Risk & Resilience",
    description:
      "Our data science models predict vulnerabilities, detect fraud, and deliver real-time analytics through custom dashboards—turning complex threats into strategic advantage.",
    highlight: "Strategic Insights",
    cardClass: "card-6",
  },
];

const DesktopFeaturesView: React.FC = () => (
  <div className="features-grid">
    {features.map((feature, i) => (
      <div key={`desktop_${i}`} className={`feature-card ${feature.cardClass}`}>
        <div className="card-inner">
          <div className="card-highlight">
            <span>{feature.highlight}</span>
          </div>
          <div className="icon-wrapper">
            <div className="rhombus-stack">
              <div className="rhombus-layer"></div>
              <div className="rhombus-layer"></div>
              <div className="rhombus-layer"></div>
            </div>
            <img src={feature.Icon} alt={feature.title} className="icon" loading="lazy" />
          </div>
          <h3 className="card-title">{feature.title}</h3>
          <p className="card-desc">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
);

interface MobileCardProps {
  feature: Feature;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: number[];
  targetScale: number;
}

const MobileCard: React.FC<MobileCardProps> = ({ feature, index, progress, range, targetScale }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="card-container-sticky">
      <motion.div
        className={`feature-card ${feature.cardClass}`}
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <div className="card-inner">
          <div className="card-highlight">
            <span>{feature.highlight}</span>
          </div>
          <div className="icon-wrapper">
            <div className="rhombus-stack">
              <div className="rhombus-layer"></div>
              <div className="rhombus-layer"></div>
              <div className="rhombus-layer"></div>
            </div>
            <img src={feature.Icon} alt={feature.title} className="icon" loading="lazy" />
          </div>
          <h3 className="card-title">{feature.title}</h3>
          <p className="card-desc">{feature.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const MobileFeaturesView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="features-grid-mobile">
      {features.map((feature, i) => {
        const targetScale = 1 - (features.length - 1 - i) * 0.05;
        return (
          <MobileCard
            key={`mobile_${i}`}
            feature={feature}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.1, 1]}
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
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <section className="features-section">
        <div className="section-title">
          <h1>
            <span className="line-1">SECURITY</span>
            <span className="line-2">THAT SCALES WITH YOU.</span>
          </h1>
          <p>
            Every feature at CyberFort Tech is built with one goal: making cybersecurity effortless, adaptive, and
            always reliable.
          </p>
        </div>

        {!isClient || !isMobile ? <DesktopFeaturesView /> : <MobileFeaturesView />}
      </section>
    </ReactLenis>
  );
};

export default FeaturesSection;
