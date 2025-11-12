import { Award, Cloud, Cpu, Database, FileText, Settings, Users, Wrench, Shield, Activity, Link, Coins, Globe, CheckCircle } from "lucide-react";

interface Feature {
  id: string;
  icon: JSX.Element;
  name: string;
  description: string;
  color: string;
  badges: string[];
  features: {
    category: string;
    items: string[];
  }[];
  cta: string;
}

interface SuiteData {
  title: string;
  icon: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  cta: string;
}

interface SolutionData {
  icon: string;
  title: string;
  price: string;
  period: string;
  target: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  delivery: string;
  cta: string;
  gradient: string;
}

interface InfrastructureItem {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  sections: {
    title: string;
    color: string;
    items: string[];
  }[];
}

interface ComparisonData {
  feature: string;
  ourService: string | boolean;
  competitorA: string | boolean;
  competitorB: string | boolean;
  localFirms: string | boolean;
}

const featuresData: Feature[] = [
  {
    id: "blockchain-expertise",
    icon: <Link size={28} />,
    name: "Blockchain Expertise",
    description: "World-class blockchain developers delivering decentralized solutions.",
    color: "Blue",
    badges: ["Certified Developers", "10+ Years Experience", "Multiple Protocols"],
    features: [
      {
        category: "Team Expertise",
        items: [
          "Certified blockchain architects",
          "Smart contract developers (Solidity, Rust)",
          "Cryptography specialists",
          "DeFi protocol experts",
        ],
      },
      {
        category: "Blockchain Development",
        items: [
          "Custom blockchain development",
          "Smart contract auditing and optimization",
          "Tokenomics design and implementation",
          "Cross-chain interoperability solutions",
        ],
      },
    ],
    cta: "Hire Blockchain Experts",
  },
  {
    id: "smart-contracts",
    icon: <FileText size={28} />,
    name: "Smart Contract Development",
    description: "Secure, audited smart contracts for decentralized applications.",
    color: "Emerald",
    badges: ["Solidity", "Formal Verification", "Gas Optimization"],
    features: [
      {
        category: "Contract Capabilities",
        items: [
          "ERC-20, ERC-721, and ERC-1155 standards",
          "Multi-signature wallet contracts",
          "DAO governance implementations",
          "Upgradeable contract patterns",
        ],
      },
      {
        category: "Security & Audit",
        items: [
          "Comprehensive security audits",
          "Formal verification methods",
          "Gas optimization techniques",
          "Vulnerability testing and mitigation",
        ],
      },
    ],
    cta: "Develop Smart Contracts",
  },
  {
    id: "dapp-development",
    icon: <Globe size={28} />,
    name: "dApp Development",
    description: "Full-stack decentralized applications with intuitive user interfaces.",
    color: "Purple",
    badges: ["Web3 Integration", "User-Friendly", "Cross-Platform"],
    features: [
      {
        category: "Development Stack",
        items: [
          "Web3.js and Ethers.js integration",
          "React/Next.js frontends for dApps",
          "IPFS for decentralized storage",
          "Wallet connectivity (MetaMask, WalletConnect)",
        ],
      },
      {
        category: "User Experience",
        items: [
          "Intuitive UI/UX for blockchain interactions",
          "Gasless transactions with meta-transactions",
          "Mobile-responsive dApp designs",
          "Real-time blockchain data display",
        ],
      },
    ],
    cta: "Build Your dApp",
  },
  {
    id: "proven-results",
    icon: <Award size={28} />,
    name: "Proven Results",
    description: "Trusted by 150+ clients with 95% success rate in blockchain projects.",
    color: "Orange",
    badges: ["150+ Projects", "95% Success", "10+ Protocols"],
    features: [
      {
        category: "Track Record",
        items: [
          "150+ blockchain projects delivered",
          "95% success rate in mainnet deployments",
          "Average 3x ROI for clients",
          "99% client retention rate",
        ],
      },
      {
        category: "Recognition",
        items: [
          "Ethereum Foundation grant recipients",
          "Featured in top blockchain conferences",
          "Certified Polygon developers",
          "Binance Smart Chain ambassadors",
        ],
      },
    ],
    cta: "View Blockchain Case Studies",
  },
  {
    id: "defi-solutions",
    icon: <Coins size={28} />,
    name: "DeFi Solutions",
    description: "Complete decentralized finance protocols and applications.",
    color: "Red",
    badges: ["Yield Farming", "Liquidity Pools", "AMM Development"],
    features: [
      {
        category: "DeFi Offerings",
        items: [
          "Decentralized exchange (DEX) development",
          "Yield farming and staking protocols",
          "Lending and borrowing platforms",
          "Automated market maker (AMM) solutions",
        ],
      },
      {
        category: "Security & Compliance",
        items: [
          "Rug pull prevention mechanisms",
          "Smart contract insurance integrations",
          "Regulatory compliance consulting",
          "Third-party audit coordination",
        ],
      },
    ],
    cta: "Explore DeFi Solutions",
  },
];

// Static data: Highlights
const highlightsData: Feature[] = [
  {
    id: "decentralized-infrastructure",
    icon: <Link size={32} />,
    name: "Decentralized Infrastructure",
    description: "Robust blockchain networks for secure, scalable solutions.",
    color: "Blue",
    badges: ["Ethereum & Solana", "99.99% Uptime", "Scalable"],
    features: [
      {
        category: "Blockchain Networks",
        items: [
          "Ethereum and Solana-based infrastructure",
          "Layer-2 scaling solutions (Polygon, Arbitrum)",
          "Private and public blockchain setups",
          "Node management and deployment",
        ],
      },
      {
        category: "Performance & Reliability",
        items: [
          "99.99% network uptime guarantee",
          "High-throughput transaction processing",
          "Decentralized storage with IPFS",
          "Real-time network monitoring",
        ],
      },
    ],
    cta: "Build Your Blockchain",
  },
  {
    id: "tokenization-expertise",
    icon: <Coins size={32} />,
    name: "Tokenization Expertise",
    description: "Custom tokens and NFTs for diverse use cases.",
    color: "Emerald",
    badges: ["ERC-20 & ERC-721", "NFT Minting", "Secure"],
    features: [
      {
        category: "Token Development",
        items: [
          "ERC-20 and ERC-721 token creation",
          "NFT minting and marketplace integration",
          "Stablecoin development",
          "Smart contract auditing",
        ],
      },
      {
        category: "Applications",
        items: [
          "Digital asset tokenization",
          "Loyalty and reward programs",
          "Decentralized finance (DeFi) tokens",
          "Secure wallet integration",
        ],
      },
    ],
    cta: "Create Your Tokens",
  },
  {
    id: "cross-chain-interoperability",
    icon: <Globe size={32} />,
    name: "Cross-Chain Interoperability",
    description: "Seamless integration across multiple blockchain networks.",
    color: "Purple",
    badges: ["Polkadot & Cosmos", "Bridge Solutions", "Multi-Chain"],
    features: [
      {
        category: "Interoperability Features",
        items: [
          "Cross-chain bridges with Polkadot and Cosmos",
          "Interoperable smart contracts",
          "Multi-chain wallet support",
          "Cross-chain data oracles",
        ],
      },
      {
        category: "Integration Benefits",
        items: [
          "Unified user experience across chains",
          "Reduced transaction costs",
          "Enhanced liquidity for DeFi",
          "Real-time cross-chain analytics",
        ],
      },
    ],
    cta: "Connect Your Chains",
  },
  {
    id: "reliable-delivery",
    icon: <CheckCircle size={32} />,
    name: "Reliable Blockchain Delivery",
    description: "On-time delivery with 98% success rate across 250+ projects.",
    color: "Orange",
    badges: ["98% Success", "250+ Projects", "Agile Workflow"],
    features: [
      {
        category: "Project Delivery",
        items: [
          "98% on-time delivery rate",
          "250+ blockchain projects completed",
          "Agile project management with Scrum",
          "Dedicated blockchain consultants",
        ],
      },
      {
        category: "Client Support",
        items: [
          "24/7 client communication channels",
          "Post-launch maintenance and upgrades",
          "Transparent progress reporting",
          "Client training for blockchain systems",
        ],
      },
    ],
    cta: "Start Your Blockchain Project",
  },
  {
  id: "smart-contracts",
  icon: <FileText size={32} />,
  name: "Smart Contract Development",
  description: "Secure, audited smart contracts for decentralized applications.",
  color: "Red",
  badges: ["Solidity", "Formal Verification", "Gas Optimization"],
  features: [
    {
      category: "Contract Development",
      items: [
        "Solidity and Rust smart contract programming",
        "Formal verification for security",
        "Gas optimization techniques",
        "Upgradeable contract patterns",
      ],
    },
    {
      category: "Security & Audit",
      items: [
        "Comprehensive security audits",
        "Vulnerability testing and mitigation",
        "Third-party audit partnerships",
        "Bug bounty program setup",
      ],
    },
  ],
  cta: "Develop Smart Contracts",
},
];

const suiteData: SuiteData = {

  title: "Comprehensive Blockchain Development Suite",
  icon: "🔗",
  description: "End-to-end blockchain solutions with smart contract development, dApp creation, and decentralized infrastructure for transformative business outcomes.",
  features: [
    "Custom blockchain development",
    "Smart contract auditing and deployment",
    "dApp development with Web3 integration",
    "Tokenization and NFT solutions",
    "DeFi protocol development",
    "Cross-chain interoperability",
    "Decentralized storage solutions",
    "Wallet integration and security",
    "Blockchain consulting and strategy",
    "Cryptographic security implementation",
    "Regulatory compliance guidance",
    "Post-deployment maintenance and upgrades"
  ],
  metrics: [
    { label: "Transaction Speed", value: "2000+ TPS" },
    { label: "Deployment Time", value: "4-8 weeks" },
    { label: "Client Satisfaction", value: "95%" },
    { label: "Network Uptime", value: "99.99%" }
  ],
  gradient: "purple",
  cta: "Start Your Blockchain Project"

};

const specialSolutions: SolutionData[] = [
  {
    icon: "🔗",
    title: "Smart Contract Development",
    price: "₹3L",
    period: "/project",
    target: "Enterprises & Startups",
    shortDescription: "Automated, secure, and transparent contract execution.",
    fullDescription:
      "We build and audit smart contracts on Ethereum, Polygon, and other major blockchains to enable secure, trustless automation of business processes and decentralized applications.",
    features: [
      "Custom smart contract design",
      "ERC-20 / ERC-721 / ERC-1155 token standards",
      "DeFi protocol integration",
      "NFT minting & marketplaces",
      "DAO setup & governance",
      "Contract security auditing",
      "Gas optimization strategies",
      "Cross-chain compatibility",
      "Deployment & maintenance",
    ],
    delivery: "Audited smart contracts ready for deployment",
    cta: "Launch Smart Contracts",
    gradient: "purple",
  },
  {
    icon: "💰",
    title: "Decentralized Finance (DeFi) Solutions",
    price: "₹3.5L",
    period: "/project",
    target: "FinTech & Web3 Innovators",
    shortDescription: "Custom DeFi platforms to unlock new financial models.",
    fullDescription:
      "We design and develop DeFi platforms with features like staking, yield farming, lending, and cross-chain liquidity pools to empower next-gen financial ecosystems.",
    features: [
      "Decentralized exchanges (DEXs)",
      "Liquidity pool & staking",
      "Lending/borrowing protocols",
      "Yield farming strategies",
      "Cross-chain bridges",
      "Tokenomics design",
      "Real-time analytics dashboard",
      "Security-first architecture",
      "Post-deployment support",
    ],
    delivery: "Fully functional DeFi platform",
    cta: "Build Your DeFi App",
    gradient: "indigo",
  },
];


const infrastructureData: InfrastructureItem[] = [
  {
    id: "blockchain-team",
    icon: <Users size={28} />,
    title: "Blockchain Team",
    description: "Expert blockchain professionals for decentralized solutions.",
    color: "Blue",
    sections: [
      {
        title: "",
        color: "#3b82f6",
        items: [
          "Blockchain Developers (Solidity, Rust)",
          "Smart Contract Auditors",
          "Cryptographers",
          "DevOps/SRE Engineers",
          "Network Engineers",
          "Blockchain Architects",
        ],
      },
    ],
  },
  {
    id: "blockchain-tools",
    icon: <Wrench size={28} />,
    title: "Blockchain Tools",
    description: "Advanced tools for dApp development and network management.",
    color: "Emerald",
    sections: [
      {
        title: "Development Frameworks",
        color: "#10b981",
        items: [
          "Hardhat, Truffle",
          "Foundry, Ganache",
          "Web3.js, Ethers.js",
          "Substrate, Hyperledger Fabric",
        ],
      },
      {
        title: "Testing & Oracles",
        color: "#10b981",
        items: [
          "Chai, Mocha",
          "OpenZeppelin Test Helpers",
          "Chainlink for data feeds",
          "The Graph for data indexing",
        ],
      },
    ],
  },
  {
    id: "network-infrastructure",
    icon: <Cloud size={28} />,
    title: "Network Infrastructure",
    description: "Decentralized and scalable networks for blockchain operations.",
    color: "Purple",
    sections: [
      {
        title: "Blockchain Platforms",
        color: "#8b5cf6",
        items: [
          "Ethereum Mainnet, Layer 2s",
          "Polygon, Arbitrum",
          "Solana, Polkadot",
          "IPFS for decentralized storage",
        ],
      },
      {
        title: "Performance & Security",
        color: "#8b5cf6",
        items: [
          "Node hosting and management",
          "Multi-signature wallets",
          "On-chain governance mechanisms",
          "DDoS protection for nodes",
        ],
      },
    ],
  },
  {
    id: "processes-standards",
    icon: <FileText size={28} />,
    title: "Processes & Standards",
    description: "Best practices for smart contract and network security.",
    color: "Orange",
    sections: [
      {
        title: "dApp Development",
        color: "#f59e0b",
        items: [
          "Formal verification for smart contracts",
          "Security audits (internal & external)",
          "Gas optimization techniques",
          "Open-source contribution policies",
        ],
      },
      {
        title: "Governance & QA",
        color: "#f59e0b",
        items: [
          "Upgradeability and versioning",
          "Community consensus protocols",
          "Tokenomics and incentive models",
          "Regulatory compliance (KYC/AML)",
        ],
      },
    ],
  },
];

const comparisonData: ComparisonData[] = [
  {
    feature: "Entry Price",
    ourService: "₹0 (Basic)",
    competitorA: "₹50,000",
    competitorB: "₹1L+",
    localFirms: "₹20,000-₹50,000",
  },
  {
    feature: "Custom Model Development",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Limited",
  },
  {
    feature: "MLOps Support",
    ourService: true,
    competitorA: "Optional",
    competitorB: true,
    localFirms: false,
  },
  {
    feature: "Explainable AI",
    ourService: true,
    competitorA: false,
    competitorB: true,
    localFirms: false,
  },
  {
    feature: "Big Data Integration",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Basic",
  },
  {
    feature: "Post-Deployment Support",
    ourService: true,
    competitorA: "Paid Add-on",
    competitorB: true,
    localFirms: "Limited",
  },
];

const addonsData: Addon[] = [
  {
    title: "Smart Contract Audit",
    price: "₹8,999",
    description: "One-time security audit for smart contracts",
    icon: "🔒",
    color: "Blue",
  },
  {
    title: "NFT Marketplace Integration",
    price: "₹5,999/mo",
    description: "Seamless NFT minting and trading platform",
    icon: "🖼️",
    color: "Emerald",
  },
  {
    title: "Cross-Chain Bridge Setup",
    price: "₹7,999",
    description: "One-time setup for multi-chain interoperability",
    icon: "🌉",
    color: "Purple",
  },
  {
    title: "DeFi Protocol Integration",
    price: "₹6,999/mo",
    description: "Custom DeFi solutions for liquidity and yield",
    icon: "💸",
    color: "Orange",
  },
  {
    title: "Blockchain Analytics Dashboard",
    price: "₹3,999/mo",
    description: "Real-time transaction and network monitoring",
    icon: "📊",
    color: "Blue",
  },
  {
    title: "Tokenomics Consultation",
    price: "₹9,999",
    description: "One-time token economy design session",
    icon: "💰",
    color: "Emerald",
  },
  {
    title: "Blockchain Whitepaper Template",
    price: "Free (Digital)",
    description: "Included with every blockchain plan",
    icon: "📄",
    highlight: true,
    color: "Purple",
  },
];

export const BlockchainData = {
  features: featuresData,
  suite: suiteData,
  solutions: specialSolutions,
  infrastructure: infrastructureData,
  comparison: comparisonData,
  highlights: highlightsData, 
  addons:addonsData,
};