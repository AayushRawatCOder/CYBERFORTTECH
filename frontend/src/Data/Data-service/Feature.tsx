// featuresData.ts
// This file exports a structured object containing feature data for various services.
// Each service key (e.g., 'cybersecurity') maps to an array of plan objects similar to the provided structure.
// In your React app, you can use React Router to detect the route (e.g., /services/cybersecurity) and render the corresponding array:
// Example in a component:
// const { service } = useParams(); // Assuming route param 'service'
// const currentFeatures = featuresData[service as keyof typeof featuresData] || [];
// Then map over currentFeatures to render the plans.

import { Shield, Settings, Award, Target, Brain, Database, Cloud, Code2 } from 'lucide-react'; // Assuming lucide-react for icons; adjust as needed

export const featuresData = {
  cybersecurity: [
    {
      id: "discovery-starter",
      icon: <Shield size={28} />,
      name: "Discovery Starter",
      description: "Basic cyber visibility & threat scanning for small organizations",
      badges: ["Free Forever", "₹0"],
      features: [
        {
          category: "Core Security",
          items: [
            "Basic Vulnerability Scanning",
            "Web L7/L1 Pentesting (Basic Report)",
            "SIEM/SOC (Email & WhatsApp)",
            "Basic Security Monitoring",
          ],
        },
        {
          category: "Compliance & Intel",
          items: [
            "Compliance Toolkit (ISO27001/2022)",
            "Threat Intel (Basic)",
            "Security Posture Report",
            "Quarterly Threat Intelligence",
          ],
        },
      ],
      cta: "Get Started",
    },
    {
      id: "essential-endpoint",
      icon: <Shield size={28} />,
      name: "Essential + Endpoint",
      description: "Comprehensive security coverage with advanced monitoring",
      badges: ["Most Popular", "₹18,999/Month"],
      features: [
        {
          category: "Core Security",
          items: [
            "Everything in Discovery Starter",
            "Advanced Endpoint Detection & Response",
            "Real-time threat intelligence Report (Monthly)",
            "Vulnerability Scanning (Detailed)",
            "Network Security Monitoring",
          ],
        },
        {
          category: "Support & Training",
          items: [
            "Email Security Gateway",
            "Extended EDR (20 endpoints)",
            "SOC Service (Phone + Email)",
            "Incident Response (Email)",
            "Phishing awareness program",
          ],
        },
      ],
      cta: "Choose Plan",
    },
    {
      id: "pro-defense-suite",
      icon: <Settings size={28} />,
      name: "Pro Defense Suite",
      description: "Robust cybersecurity for mid-sized organizations with growing needs",
      badges: ["Professional", "₹45,000/Month"],
      features: [
        {
          category: "Security Features",
          items: [
            "Advanced Threat Detection",
            "Proactive Threat Hunting",
            "Managed Firewall Services",
            "Continuous Vulnerability Assessment",
          ],
        },
        {
          category: "Support & Extras",
          items: [
            "24/7 SOC Support",
            "Incident Response Team",
            "Monthly Security Reports",
            "Security Awareness Training",
          ],
        },
      ],
      cta: "Get Professional",
    },
    {
      id: "enterprise-shield",
      icon: <Award size={28} />,
      name: "Enterprise Shield",
      description: "Secure large identity, compliance & governance across multiple sites",
      badges: ["Enterprise", "₹1.25L–₹2.5L/Month"],
      features: [
        {
          category: "Enterprise Security",
          items: [
            "Everything in Growth Security Bundle",
            "24/7 SOC Monitoring (Custom SLA)",
            "AI-Enhanced Vulnerability Monitoring",
            "Enterprise Asset Discovery",
          ],
        },
        {
          category: "Governance & Risk",
          items: [
            "Regulatory Risk Monitoring for CFOs",
            "Cyber Insurance & claim assistance",
            "Executive Risk Briefings",
            "Custom Risk Dashboards",
            "Priority technical support (Phone + WhatsApp + Email)",
            "Dedicated Risk Professional",
          ],
        },
      ],
      cta: "Contact Sales",
    },
    {
      id: "elite-cyber-command",
      icon: <Target size={28} />,
      name: "Elite Cyber Command",
      description:
        "Full-scale cybersecurity operations for critical infrastructure and enterprises",
      badges: ["Elite", "₹3L+/Month"],
      features: [
        {
          category: "Elite Security",
          items: [
            "Nation-State Threat Protection",
            "AI-driven Intrusion Prevention",
            "Full Red & Blue Team Simulations",
            "Custom Threat Modelling",
          ],
        },
        {
          category: "Strategic Services",
          items: [
            "On-site Cybersecurity Officers",
            "Custom Security Infrastructure",
            "24/7 Global Threat Monitoring",
            "High-Availability Incident Response",
          ],
        },
      ],
      cta: "Exclusive Access",
    },
  ],
  ai: [
    {
      id: "ai-starter",
      icon: <Brain size={28} />,
      name: "AI Starter",
      description: "Basic AI model deployment and data processing for small teams",
      badges: ["Free Forever", "₹0"],
      features: [
        {
          category: "Core AI",
          items: [
            "Pre-trained Model Access",
            "Basic Data Annotation Tools",
            "Simple Inference API",
            "AI Ethics Checklist",
          ],
        },
        {
          category: "Analytics & Insights",
          items: [
            "Basic Predictive Analytics",
            "Data Visualization Dashboard",
            "Monthly AI Usage Report",
            "Introductory AI Tutorials",
          ],
        },
      ],
      cta: "Get Started",
    },
    {
      id: "ai-essential",
      icon: <Brain size={28} />,
      name: "AI Essential",
      description: "Scalable AI solutions with custom model training",
      badges: ["Most Popular", "₹15,999/Month"],
      features: [
        {
          category: "Core AI",
          items: [
            "Everything in AI Starter",
            "Custom Model Fine-Tuning",
            "Advanced NLP/Computer Vision",
            "Real-time AI Inference",
          ],
        },
        {
          category: "Support & Integration",
          items: [
            "API Integrations (REST/GraphQL)",
            "Data Pipeline Automation",
            "Email Support + AI Chatbot",
            "AI Model Monitoring",
          ],
        },
      ],
      cta: "Choose Plan",
    },
    {
      id: "ai-pro-suite",
      icon: <Settings size={28} />,
      name: "AI Pro Suite",
      description: "Advanced AI for mid-sized enterprises with MLOps",
      badges: ["Professional", "₹35,000/Month"],
      features: [
        {
          category: "AI Features",
          items: [
            "Generative AI Workflows",
            "Automated Hyperparameter Tuning",
            "Multi-Modal AI Models",
            "Bias Detection & Mitigation",
          ],
        },
        {
          category: "Support & Extras",
          items: [
            "24/7 AI Ops Support",
            "Custom AI Consulting",
            "Quarterly Model Audits",
            "Team Training Workshops",
          ],
        },
      ],
      cta: "Get Professional",
    },
    {
      id: "ai-enterprise",
      icon: <Award size={28} />,
      name: "AI Enterprise",
      description: "Enterprise-grade AI with governance and scalability",
      badges: ["Enterprise", "₹1L–₹2L/Month"],
      features: [
        {
          category: "Enterprise AI",
          items: [
            "Everything in AI Pro Suite",
            "Federated Learning Capabilities",
            "AI Governance Framework",
            "Scalable GPU Clusters",
          ],
        },
        {
          category: "Governance & Risk",
          items: [
            "AI Regulatory Compliance",
            "Custom AI Dashboards",
            "Executive AI Briefings",
            "Priority Support (Multi-Channel)",
            "Dedicated AI Architect",
          ],
        },
      ],
      cta: "Contact Sales",
    },
    {
      id: "ai-elite",
      icon: <Target size={28} />,
      name: "AI Elite",
      description: "Cutting-edge AI for innovation leaders and R&D",
      badges: ["Elite", "₹2.5L+/Month"],
      features: [
        {
          category: "Elite AI",
          items: [
            "Quantum-Ready AI Models",
            "Edge AI Deployment",
            "Advanced Reinforcement Learning",
            "Custom AI Research Support",
          ],
        },
        {
          category: "Strategic Services",
          items: [
            "On-site AI Experts",
            "Bespoke AI Infrastructure",
            "Global AI Threat Monitoring",
            "Rapid Prototyping Lab",
          ],
        },
      ],
      cta: "Exclusive Access",
    },
  ],
  blockchain: [
    {
      id: "blockchain-starter",
      icon: <Database size={28} />,
      name: "Blockchain Starter",
      description: "Basic smart contract development for small projects",
      badges: ["Free Forever", "₹0"],
      features: [
        {
          category: "Core Blockchain",
          items: [
            "Ethereum/Solana Testnet Access",
            "Basic Smart Contract Templates",
            "Wallet Integration Basics",
            "Transaction Monitoring",
          ],
        },
        {
          category: "Security & Compliance",
          items: [
            "Basic Audit Checklist",
            "Token Standards Guide (ERC-20)",
            "Monthly Blockchain News",
            "Introductory Web3 Tutorials",
          ],
        },
      ],
      cta: "Get Started",
    },
    {
      id: "blockchain-essential",
      icon: <Database size={28} />,
      name: "Blockchain Essential",
      description: "Full-stack blockchain with dApp development",
      badges: ["Most Popular", "₹20,000/Month"],
      features: [
        {
          category: "Core Blockchain",
          items: [
            "Everything in Blockchain Starter",
            "Custom Smart Contract Development",
            "Multi-Chain Support",
            "NFT Marketplace Integration",
          ],
        },
        {
          category: "Support & Tools",
          items: [
            "DeFi Protocol Setup",
            "Oracle Integrations",
            "Email + Discord Support",
            "Gas Optimization Tools",
          ],
        },
      ],
      cta: "Choose Plan",
    },
    {
      id: "blockchain-pro-suite",
      icon: <Settings size={28} />,
      name: "Blockchain Pro Suite",
      description: "Enterprise blockchain for scalable decentralized apps",
      badges: ["Professional", "₹50,000/Month"],
      features: [
        {
          category: "Blockchain Features",
          items: [
            "Layer-2 Scaling Solutions",
            "DAO Governance Tools",
            "Advanced Security Audits",
            "Cross-Chain Bridges",
          ],
        },
        {
          category: "Support & Extras",
          items: [
            "24/7 Blockchain Monitoring",
            "Compliance Consulting",
            "Quarterly Security Reviews",
            "Web3 Training Programs",
          ],
        },
      ],
      cta: "Get Professional",
    },
    {
      id: "blockchain-enterprise",
      icon: <Award size={28} />,
      name: "Blockchain Enterprise",
      description: "Institutional-grade blockchain with regulatory focus",
      badges: ["Enterprise", "₹1.5L–₹3L/Month"],
      features: [
        {
          category: "Enterprise Blockchain",
          items: [
            "Everything in Blockchain Pro Suite",
            "Private Chain Deployment",
            "Tokenization Services",
            "Enterprise Wallet Management",
          ],
        },
        {
          category: "Governance & Risk",
          items: [
            "Regulatory Compliance (KYC/AML)",
            "Custom Analytics Dashboards",
            "Executive Blockchain Reports",
            "Priority Multi-Channel Support",
            "Dedicated Blockchain Advisor",
          ],
        },
      ],
      cta: "Contact Sales",
    },
    {
      id: "blockchain-elite",
      icon: <Target size={28} />,
      name: "Blockchain Elite",
      description: "Pioneering blockchain for global-scale innovations",
      badges: ["Elite", "₹4L+/Month"],
      features: [
        {
          category: "Elite Blockchain",
          items: [
            "Zero-Knowledge Proofs Implementation",
            "Custom Consensus Protocols",
            "Interoperable Ecosystem Building",
            "R&D Blockchain Labs",
          ],
        },
        {
          category: "Strategic Services",
          items: [
            "On-site Blockchain Architects",
            "Bespoke Infrastructure",
            "Global Network Monitoring",
            "Crisis Response for Chains",
          ],
        },
      ],
      cta: "Exclusive Access",
    },
  ],
  cloud: [
    {
      id: "cloud-starter",
      icon: <Cloud size={28} />,
      name: "Cloud Starter",
      description: "Basic cloud migration and storage for small businesses",
      badges: ["Free Forever", "₹0"],
      features: [
        {
          category: "Core Cloud",
          items: [
            "AWS/Azure Basic Tier Access",
            "File Storage (10GB)",
            "Simple Backup Tools",
            "Cloud Cost Calculator",
          ],
        },
        {
          category: "Monitoring & Insights",
          items: [
            "Basic Performance Metrics",
            "Monthly Usage Reports",
            "Introductory Cloud Guides",
            "Security Best Practices",
          ],
        },
      ],
      cta: "Get Started",
    },
    {
      id: "cloud-essential",
      icon: <Cloud size={28} />,
      name: "Cloud Essential",
      description: "Scalable cloud infrastructure with hybrid support",
      badges: ["Most Popular", "₹12,999/Month"],
      features: [
        {
          category: "Core Cloud",
          items: [
            "Everything in Cloud Starter",
            "Virtual Machines (5 instances)",
            "Load Balancing Setup",
            "Database as a Service",
          ],
        },
        {
          category: "Support & Integration",
          items: [
            "CI/CD Pipeline Basics",
            "Multi-Cloud Management",
            "Email Support",
            "Cloud Migration Assistance",
          ],
        },
      ],
      cta: "Choose Plan",
    },
    {
      id: "cloud-pro-suite",
      icon: <Settings size={28} />,
      name: "Cloud Pro Suite",
      description: "Advanced cloud operations for mid-sized ops",
      badges: ["Professional", "₹30,000/Month"],
      features: [
        {
          category: "Cloud Features",
          items: [
            "Serverless Computing",
            "Container Orchestration (Kubernetes)",
            "Advanced Networking",
            "Auto-Scaling Policies",
          ],
        },
        {
          category: "Support & Extras",
          items: [
            "24/7 Cloud Monitoring",
            "DevOps Consulting",
            "Quarterly Optimization Reviews",
            "Team Cloud Training",
          ],
        },
      ],
      cta: "Get Professional",
    },
    {
      id: "cloud-enterprise",
      icon: <Award size={28} />,
      name: "Cloud Enterprise",
      description: "Global cloud strategy with compliance",
      badges: ["Enterprise", "₹80K–₹1.5L/Month"],
      features: [
        {
          category: "Enterprise Cloud",
          items: [
            "Everything in Cloud Pro Suite",
            "Multi-Region Deployment",
            "Cloud Governance Tools",
            "Disaster Recovery Planning",
          ],
        },
        {
          category: "Governance & Risk",
          items: [
            "Compliance Auditing (GDPR/SOX)",
            "Custom Cost Dashboards",
            "Executive Cloud Reports",
            "Priority Support",
            "Dedicated Cloud Engineer",
          ],
        },
      ],
      cta: "Contact Sales",
    },
    {
      id: "cloud-elite",
      icon: <Target size={28} />,
      name: "Cloud Elite",
      description: "Elite cloud for mission-critical workloads",
      badges: ["Elite", "₹2L+/Month"],
      features: [
        {
          category: "Elite Cloud",
          items: [
            "Edge Computing Integration",
            "AI-Optimized Cloud",
            "Custom Hybrid Architectures",
            "Sustainability Tracking",
          ],
        },
        {
          category: "Strategic Services",
          items: [
            "On-site Cloud Specialists",
            "Bespoke Cloud Builds",
            "Global Latency Optimization",
            "High-Availability Engineering",
          ],
        },
      ],
      cta: "Exclusive Access",
    },
  ],
  development: [
    {
      id: "dev-starter",
      icon: <Code2 size={28} />,
      name: "Dev Starter",
      description: "Basic development tools for solo developers",
      badges: ["Free Forever", "₹0"],
      features: [
        {
          category: "Core Development",
          items: [
            "Code Editor Access",
            "Version Control (Git Basics)",
            "Basic CI/CD",
            "Bug Tracking Templates",
          ],
        },
        {
          category: "Collaboration & Insights",
          items: [
            "Shared Repos (2 users)",
            "Code Review Guidelines",
            "Monthly Dev Tips",
            "Introductory Coding Workshops",
          ],
        },
      ],
      cta: "Get Started",
    },
    {
      id: "dev-essential",
      icon: <Code2 size={28} />,
      name: "Dev Essential",
      description: "Full dev lifecycle with team collaboration",
      badges: ["Most Popular", "₹10,000/Month"],
      features: [
        {
          category: "Core Development",
          items: [
            "Everything in Dev Starter",
            "Advanced IDE Integrations",
            "Automated Testing Suite",
            "API Development Tools",
          ],
        },
        {
          category: "Support & Workflow",
          items: [
            "Agile Project Boards",
            "Code Quality Scans",
            "Email + Slack Support",
            "Deployment Automation",
          ],
        },
      ],
      cta: "Choose Plan",
    },
    {
      id: "dev-pro-suite",
      icon: <Settings size={28} />,
      name: "Dev Pro Suite",
      description: "Professional dev ops for growing teams",
      badges: ["Professional", "₹25,000/Month"],
      features: [
        {
          category: "Dev Features",
          items: [
            "Microservices Architecture",
            "Performance Profiling",
            "Security Code Scans",
            "DevSecOps Pipeline",
          ],
        },
        {
          category: "Support & Extras",
          items: [
            "24/7 Dev Support",
            "Custom Workflow Consulting",
            "Quarterly Code Audits",
            "Team Skill Development",
          ],
        },
      ],
      cta: "Get Professional",
    },
    {
      id: "dev-enterprise",
      icon: <Award size={28} />,
      name: "Dev Enterprise",
      description: "Enterprise software dev with scalability",
      badges: ["Enterprise", "₹60K–₹1.2L/Month"],
      features: [
        {
          category: "Enterprise Dev",
          items: [
            "Everything in Dev Pro Suite",
            "Low-Code Platforms",
            "Legacy Migration Tools",
            "Global Team Sync",
          ],
        },
        {
          category: "Governance & Risk",
          items: [
            "Code Compliance Checks",
            "Custom Dev Dashboards",
            "Executive Tech Reports",
            "Priority Support",
            "Dedicated Dev Lead",
          ],
        },
      ],
      cta: "Contact Sales",
    },
    {
      id: "dev-elite",
      icon: <Target size={28} />,
      name: "Dev Elite",
      description: "Elite development for innovative products",
      badges: ["Elite", "₹1.8L+/Month"],
      features: [
        {
          category: "Elite Dev",
          items: [
            "R&D Prototyping Lab",
            "Cross-Platform Frameworks",
            "AI-Assisted Coding",
            "Custom Toolchains",
          ],
        },
        {
          category: "Strategic Services",
          items: [
            "On-site Dev Architects",
            "Bespoke Dev Environments",
            "Innovation Monitoring",
            "Rapid Delivery Teams",
          ],
        },
      ],
      cta: "Exclusive Access",
    },
  ],
} as const;

export type ServiceKey = keyof typeof featuresData;
export type FeaturePlan = (typeof featuresData)[ServiceKey][number];