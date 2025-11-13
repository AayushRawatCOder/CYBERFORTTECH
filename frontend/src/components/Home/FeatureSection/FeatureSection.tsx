import React from "react";
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
      "We architect resilient digital infrastructures with advanced threat detection, penetration testing, SOC automation, and compliance frameworks. Our solutions protect governments, startups, and Fortune 500s, all built for scale, speed, and zero compromise.",
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
      "Our R&D division pushes boundaries in cybersecurity, AI, and blockchain. We prototype new technologies, contribute to open-source, and collaborate globally to shape the future of secure digital transformation. We engineer scalable platforms with security embedded from day one.",
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

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="section-title">
        <h1>
          <span className="line-1">SECURITY</span>
          <span className="line-2">THAT SCALES WITH YOU.</span>
        </h1>
        <p>
          Every feature at CyberFort Tech is built with one goal: making cybersecurity effortless, adaptive, and always reliable.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${feature.cardClass}`}
          >
            <div className="card-inner">
              <div className="card-highlight">
                <span>{feature.highlight}</span>
              </div>
              <div className="icon-wrapper">
                <div className="triangle-shadow"></div>
                <img src={feature.Icon} alt={feature.title} className="icon" />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-desc">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;