// src/data/technology.ts (create this file in a data/ or lib/ folder for organization)

export interface Technology {
  id: number;
  slug: string; // URL-friendly identifier for routing (e.g., 'cybersecurity')
  icon: string; // Path to icon, e.g., '/icons/cybersecurity.svg' (update to strings for cleanliness)
  title: string;
  description: string;
  features: string[];
  iconBg: string;
  borderColor: string;
}

export const technologies: Technology[] = [
  {
    id: 1,
    slug: 'cybersecurity',
    icon: '/icons/cybersecurity.svg', // Replace with actual path; previously cybersecurityIcon
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: [
      'Discovery Starter',
      'Essential + Endpoint',
      'Pro Defense Suite',
      'Enterprise Shield',
      'Elite Cyber Command'
    ],
    iconBg: '#10b981',
    borderColor: '#10b981',
  },
  {
    id: 2,
    slug: 'ai',
    icon: '/icons/ai.svg', // Replace with actual path; previously aiIcon
    title: 'Artificial Intelligence',
    description: 'Intelligent AI solutions and machine learning systems to transform your business.',
    features: [
      'AI-Driven Automation',
      'Generative AI Solutions',
      'Real-Time AI Analytics',
      'Client-Centric AI Strategy',
      'Enterprise-Grade Security'
    ],
    iconBg: '#a855f7',
    borderColor: '#a855f7',
  },
  {
    id: 3,
    slug: 'blockchain',
    icon: '/icons/blockchain.svg', // Replace with actual path; previously blockchainIcon
    title: 'Blockchain Solutions',
    description: 'Decentralized applications and blockchain integration services for modern enterprises.',
    features: [
      'Decentralized Infrastructure',
      'Tokenization Expertise',
      'Cross-Chain Interoperability',
      'Reliable Blockchain Delivery',
      'Smart Contract Development'
    ],
    iconBg: '#f59e0b',
    borderColor: '#f59e0b',
  },
  {
    id: 4,
    slug: 'cloud',
    icon: '/icons/cloud.svg', // Replace with actual path; previously cloudIcon
    title: 'Cloud & Infrastructure',
    description: 'End-to-end cloud solutions and infrastructure management for scalable operations.',
    features: [
      'Server Expertise',
      'Scalable Server Infrastructure',
      'Server Security',
      'Proven Server Results',
      'Cost-Effective Servers'
    ],
    iconBg: '#8b5cf6',
    borderColor: '#8b5cf6',
  },
  {
    id: 5,
    slug: 'development',
    icon: '/icons/development.svg', // Replace with actual path; previously developmentIcon
    title: 'Development',
    description: 'Full-cycle software development services across all platforms and technologies.',
    features: [
      'Expert Web Developers',
      'Modern Tech Stack',
      'Responsive Design',
      'Proven Results',
      'Ongoing Support & Maintenance'
    ],
    iconBg: '#06b6d4',
    borderColor: '#06b6d4',
  },
];