import { ReactNode } from "react";

export type HeroRoute =
  | "/services"
  | "/services/cybersecurity"
  | "/services/cloud-&-infrastructure"
  | "/services/development"
  | "/services/artificial-intelligence"
  | "/services/blockchain-solutions";

type HeroItem = {
  title: ReactNode;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const heroData: Record<HeroRoute, HeroItem> = {
  "/services": {
    title: (
      <>
        <span>CyberFort Tech</span> <br /> Powering the Future with Technology &
        Security
      </>
    ),
    subtitle:
      "From AI to Blockchain, Development to Cloud, and Cybersecurity to Infrastructure – we provide complete digital transformation with security at the core.",
    ctaPrimary: "Explore Our Services",
    ctaSecondary: "Contact Us",
  },

  "/services/cybersecurity": {
    title: (
      <>
        Cybersecurity, OT Security &amp; Physical Protection
        <br /> End-to-End Security by <span>CyberFort</span>
      </>
    ),
    subtitle:
      "AI-powered cyber defense, compliance automation, OT protection, and physical security in one package.",
    ctaPrimary: "Get Free Security Scan",
    ctaSecondary: "See Our Services",
  },

  "/services/cloud-&-infrastructure": {
    title: (
      <>
        Cloud &amp; Infrastructure Solutions
        <br /> Scalable &amp; Secure with <span>CyberFort</span>
      </>
    ),
    subtitle:
      "End-to-end cloud migration, optimization, and infrastructure security to power your business.",
    ctaPrimary: "Instant Migration",
    ctaSecondary: "Explore Cloud Services",
  },

  "/services/development": {
    title: (
      <>
        Full-Cycle Development Services
        <br /> Build Smarter with <span>CyberFort</span>
      </>
    ),
    subtitle:
      "From web to mobile apps, get robust and scalable solutions with integrated security.",
    ctaPrimary: "Get Free Quote",
    ctaSecondary: "View Our Work",
  },

  "/services/artificial-intelligence": {
    title: (
      <>
        Artificial Intelligence Solutions
        <br /> Smarter Decisions with <span>CyberFort</span>
      </>
    ),
    subtitle:
      "Harness AI-driven insights, automation, and machine learning to revolutionize your business operations.",
    ctaPrimary: "Start AI Integration",
    ctaSecondary: "Explore AI Solutions",
  },

  "/services/blockchain-solutions": {
    title: (
      <>
        Blockchain &amp; Decentralized Applications
        <br /> Secure &amp; Transparent with <span>CyberFort</span>
      </>
    ),
    subtitle:
      "From smart contracts to enterprise blockchain, we build secure, scalable, and decentralized systems.",
    ctaPrimary: "Launch Blockchain Project",
    ctaSecondary: "See Blockchain Services",
  },
};