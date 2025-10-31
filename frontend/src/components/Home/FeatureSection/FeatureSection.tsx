import React from "react";
import "./FeaturesSection.scss";

interface Feature {
  Icon: string;
  title: string;
  description: string;
  highlight: string;
}

const features: Feature[] = [
  {
    Icon: "../../../assets/logo/Enterprise-Grade-Cybersecurity.svg",
    title: "Enterprise-Grade Cybersecurity",
    description:
      "We architect resilient digital infrastructures with advanced threat detection, penetration testing, SOC automation, and compliance frameworks. Our solutions protect governments, startups, and Fortune 500s alike — built for scale, speed, and zero compromise.",
    highlight: "Zero Compromise Security",
  },
  {
    Icon: "../../../assets/logo/brain.svg",
    title: "AI-Driven Intelligence Systems",
    description:
      "CyberFort integrates artificial intelligence into every layer of security and operations. From anomaly detection and predictive analytics to NLP-based automation, our AI engines power smarter, faster, and more secure decision-making across industries.",
    highlight: "Smarter, Faster Decisions",
  },
  {
    Icon: "../../../assets/logo/chain.svg",
    title: "Blockchain for Secure Digital Trust",
    description:
      "We deploy blockchain technologies that redefine transparency and integrity. Whether it’s smart contract auditing, decentralized identity, or secure data exchange, our solutions bring cryptographic trust to enterprise ecosystems.",
    highlight: "Cryptographic Trust",
  },
  {
    Icon: "../../../assets/logo/chart.svg",
    title: "Data Science for Risk & Resilience",
    description:
      "Our data science models decode complex threat landscapes, predict vulnerabilities, and optimize security posture. We build custom dashboards, fraud detection systems, and real-time analytics that turn data into strategic advantage.",
    highlight: "Strategic Insights",
  },
  {
    Icon: "../../../assets/logo/code.svg",
    title: "Full Stack Development with Built-In Security",
    description:
      "We engineer scalable platforms with security embedded from day one. From SaaS products to mission-critical web apps, our full stack teams deliver clean, resilient code with DevSecOps baked into every sprint.",
    highlight: "Secure by Design",
  },
  {
    Icon: "../../../assets/logo/analysis.svg",
    title: "CyberFort Labs: Innovation at the Core",
    description:
      "Our R&D division pushes boundaries in cybersecurity, AI, and blockchain. We prototype new technologies, contribute to open-source, and collaborate globally to shape the future of secure digital transformation.",
    highlight: "Innovation Hub",
  },
];

const FeaturesSection: React.FC = () => (
  <section className="features-section">
    <div className="section-title">
      <h1>
        SECURITY <br />
        THAT SCALES <br />
        WITH YOU.
      </h1>
      <p>Every feature. Effortless, adaptive, and always reliable cybersecurity.</p>
    </div>

    <div className="features-grid">
      {features.map((f, i) => (
        <React.Fragment key={f.title}>
          <div className={`feature-card card-${i + 1}`}>
            <div className="card-glow" />

            <div className="card-icon-wrapper">
              <img src={f.Icon} alt={f.title} className="card-icon" />
            </div>

            <div className="card-highlight">
              <span className="blob" />
              <span>{f.highlight}</span>
            </div>

            <h3 className="card-title">{f.title}</h3>

            <p className="card-desc">{f.description}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default FeaturesSection;