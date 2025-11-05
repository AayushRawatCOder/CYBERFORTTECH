import { Shield, Settings, Activity, Award, Users, Wrench, Cloud, FileText, Target } from 'lucide-react';
import { JSX } from 'react';

export interface Feature {
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

export interface SuiteData {
  title: string;
  icon: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  cta: string;
}

export interface SolutionData {
  icon: string;
  title: string;
  price: string;
  period: string;
  altPrice?: string;
  target: string;
  shortDescription: string;
  fullDescription: string;
  features?: string[];
  phases?: {
    title: string;
    features: string[];
  }[];
  delivery: string;
  cta: string;
  gradient: string;
}

export interface InfrastructureItem {
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

interface Addon{
    title: string,
    price: string,
    description: string,
    icon: string,
    color: string,
  }

// Static data: Features
export const featuresData = [
  {
    id: "discovery-starter",
    icon: <Shield size={28} />,
    name: "Discovery Starter",
    description: "Basic cyber visibility & threat scanning for small organizations",
    color: "Emerald",
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
    color: "Orange",
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
    color: "Blue",
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
    color: "Purple",
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
    color: "Red",
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
];

// Static data: Highlights
export const highlightsData: Feature[] = [
  {
    id: "expert-team",
    icon: <Shield size={32} />,
    name: "Expert Team",
    description: "SOC Analysts, Penetration Testers, and CISO-level strategists.",
    color: "Emerald",
    badges: ["24/7 Monitoring", "50+ Certifications", "10+ Years Experience"],
    features: [
      {
        category: "Team Expertise",
        items: [
          "Certified SOC Analysts with 10+ years experience",
          "CISSP and CEH certified penetration testers",
          "CISO-level strategic security consultants",
          "Dedicated incident response specialists",
        ],
      },
      {
        category: "Monitoring & Response",
        items: [
          "24/7/365 security operations center",
          "Real-time threat detection and analysis",
          "Immediate incident response protocols",
          "Continuous security posture assessment",
        ],
      },
    ],
    cta: "Get Expert Support",
  },
  {
    id: "ai-powered-tech",
    icon: <Settings size={32} />,
    name: "AI-Powered Tech",
    description: "Advanced threat detection with real-time monitoring and analytics.",
    color: "Blue",
    badges: ["99.9% Uptime", "Sub-second Detection", "ML-Powered Analytics"],
    features: [
      {
        category: "AI Technology",
        items: [
          "Machine learning threat detection algorithms",
          "Behavioral analysis and anomaly detection",
          "Automated threat correlation and prioritization",
          "Predictive security analytics",
        ],
      },
      {
        category: "Performance",
        items: [
          "99.9% system uptime guarantee",
          "Sub-second threat detection capability",
          "Real-time dashboard and reporting",
          "Scalable cloud-native architecture",
        ],
      },
    ],
    cta: "Experience AI Security",
  },
  {
    id: "proactive-monitoring",
    icon: <Activity size={32} />,
    name: "Proactive Monitoring",
    description: "Continuous surveillance with instant alerts and automated responses.",
    color: "Purple",
    badges: ["Real-time Alerts", "Automated Response", "360° Coverage"],
    features: [
      {
        category: "Monitoring Capabilities",
        items: [
          "360-degree network and endpoint monitoring",
          "Real-time threat intelligence integration",
          "Continuous vulnerability assessment",
          "Advanced persistent threat (APT) detection",
        ],
      },
      {
        category: "Response System",
        items: [
          "Instant alert notifications via multiple channels",
          "Automated threat containment and isolation",
          "Orchestrated incident response workflows",
          "Real-time forensic analysis capabilities",
        ],
      },
    ],
    cta: "Start Monitoring",
  },
  {
    id: "proven-results",
    icon: <Award size={32} />,
    name: "Proven Results",
    description: "Zero breaches across 500+ organizations with 97% success rate.",
    color: "Orange",
    badges: ["0 Breaches", "500+ Clients", "97% Detection Rate"],
    features: [
      {
        category: "Track Record",
        items: [
          "Zero successful breaches across 500+ clients",
          "97% threat detection and prevention rate",
          "Average 15-minute incident response time",
          "99.8% client retention rate over 5 years",
        ],
      },
      {
        category: "Industry Recognition",
        items: [
          "ISO 27001 certified security processes",
          "SOC 2 Type II compliance verified",
          "Industry-leading security frameworks",
          "Recognized cybersecurity excellence awards",
        ],
      },
    ],
    cta: "View Case Studies",
  },
  {
    id: "rapid-response",
    icon: <Activity size={32} />,
    name: "Rapid Response",
    description: "Swift incident response with 24/7 support and mitigation.",
    color: "Red",
    badges: ["24/7 Support", "15-Min Response", "Global Coverage"],
    features: [
      {
        category: "Response Capabilities",
        items: [
          "24/7 incident response team",
          "15-minute average response time",
          "Global support across time zones",
          "Automated mitigation workflows",
        ],
      },
      {
        category: "Support Services",
        items: [
          "Dedicated incident coordinators",
          "Post-incident analysis and reporting",
          "Custom mitigation strategies",
          "Real-time communication channels",
        ],
      },
    ],
    cta: "Get Rapid Response",
  },
];

// Static data: Suite
export const suiteData: SuiteData = {
  title: "Comprehensive Security Suite",
  icon: "🛡️",
  description:
    "Our flagship security solution provides complete protection for your digital infrastructure with advanced AI-powered threat detection, real-time monitoring, and expert-led incident response.",
  features: [
    "24/7 SOC monitoring with expert analysts",
    "AI-powered threat detection and response",
    "Real-time vulnerability scanning and assessment",
    "Automated incident response and containment",
    "Dedicated security expert support",
    "Comprehensive compliance reporting",
    "Advanced threat intelligence integration",
    "Custom security policy development",
    "Network segmentation and monitoring",
    "Endpoint detection and response (EDR)",
    "Security awareness training programs",
    "Regular penetration testing",
  ],
  metrics: [
    { label: "System Uptime", value: "99.9%" },
    { label: "Threat Detection Speed", value: "<1 sec" },
    { label: "Response Time", value: "<15 min" },
    { label: "Client Satisfaction", value: "98%" },
  ],
  gradient: "blue",
  cta: "Get Complete Protection",
};

// Static data: Special Solutions
export const specialSolutions: SolutionData[] = [
  {
    icon: "🏭",
    title: "OT Sentinel",
    price: "₹1.2L",
    period: "/month",
    target: "Manufacturing & Critical Infrastructure",
    shortDescription: "Industrial cybersecurity with OT visibility and anomaly detection.",
    fullDescription:
      "Comprehensive OT/ICS security solution for industrial systems with specialized monitoring and threat detection capabilities designed for operational technology environments.",
    features: [
      "Passive Asset Discovery (ICS-safe)",
      "Network Segmentation Audit",
      "Quarterly Firmware Review",
      "Continuous Monitoring (ICS + IT)",
      "Protocol-Specific Threat Detection",
      "Industrial Cyber Insurance Consultation",
      "HMI Security Assessment",
      "SCADA Network Analysis",
      "OT Incident Response Planning",
    ],
    delivery: "Ruggedized sensors + dashboard",
    cta: "Request Demo",
    gradient: "emerald",
  },
  {
    icon: "🔒",
    title: "Physical Red Team",
    price: "₹2.25L",
    period: "/project",
    altPrice: "₹49K/month",
    target: "High-Security Organizations",
    shortDescription: "Physical penetration testing with surveillance optimization.",
    fullDescription:
      "Physical security assessment combining red team exercises with surveillance system optimization to identify vulnerabilities in physical security controls.",
    phases: [
      {
        title: "Phase I: Recon & Breach Simulation",
        features: [
          "Covert Access Attempts",
          "Trash Intelligence Analysis",
          "Badge & RFID Testing",
          "Social Engineering Assessment",
          "Perimeter Security Evaluation",
        ],
      },
      {
        title: "Phase II: Surveillance Audit",
        features: [
          "CCTV Placement Optimization",
          "24/7 Feed Monitoring Setup",
          "Access Control Review",
          "Blind Spot Analysis",
          "Camera Quality Assessment",
        ],
      },
      {
        title: "Phase III: Convergence Testing",
        features: [
          "Insider Threat Scenarios",
          "Phishing + Physical Blend",
          "Asset Tamper Simulation",
          "Emergency Response Testing",
          "Security Guard Assessment",
        ],
      },
    ],
    delivery: "Comprehensive security assessment report",
    cta: "Get Assessment",
    gradient: "blue",
  },
];

// Static data: Infrastructure
export const infrastructureData: InfrastructureItem[] = [
  {
    id: "expert-team",
    icon: <Users size={28} />,
    title: "Expert Team",
    description: "Our skilled professionals ensure top-tier security and compliance.",
    color: "Emerald",
    sections: [
      {
        title: "",
        color: "#10b981",
        items: [
          "SOC Analysts (L1, L2, L3) – 24/7 monitoring",
          "Incident Response Specialists",
          "Penetration Testers / Red Teamers",
          "Blue Team / Threat Hunters",
          "Digital Forensics Experts",
          "GRC Consultants – ISO 27001, NIST, GDPR",
          "OT/ICS Security Engineers",
          "Physical Security Consultants",
          "Cyber Insurance Analysts",
          "AI/ML Engineers",
          "CISO-as-a-Service / vCISO",
        ],
      },
    ],
  },
  {
    id: "advanced-tools",
    icon: <Wrench size={28} />,
    title: "Advanced Tools",
    description: "Cutting-edge tools for robust monitoring and threat detection.",
    color: "Blue",
    sections: [
      {
        title: "Monitoring & Detection",
        color: "#3b82f6",
        items: [
          "SIEM: Wazuh, AlienVault, Splunk",
          "EDR/XDR: SentinelOne, CrowdStrike",
          "Firewall/IPS Logs Integration",
        ],
      },
      {
        title: "Pentesting & VAPT",
        color: "#3b82f6",
        items: [
          "Burp Suite Pro, Nessus, Nuclei",
          "SAST/DAST: SonarQube, OWASP ZAP",
          "Cloud Security: ScoutSuite, Prowler, Wiz",
        ],
      },
      {
        title: "Threat Intel & Risk",
        color: "#3b82f6",
        items: [
          "TIP: MISP, Recorded Future",
          "Dark Web: SpyCloud, HaveIBeenPwned API",
          "Custom Risk Scoring Engine",
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for your enterprise.",
    color: "Purple",
    sections: [
      {
        title: "Cloud Environment",
        color: "#8b5cf6",
        items: [
          "AWS/Azure/GCP hosting",
          "Client dashboards & SOC infrastructure",
        ],
      },
      {
        title: "",
        color: "#8b5cf6",
        items: ["AWS GuardDuty, Azure Defender integration"],
      },
      {
        title: "On-Premises Hardware",
        color: "#8b5cf6",
        items: [
          "Client-specific ICS/OT engagements",
          "Rugged portable assessment kits",
          "Remote physical security tools",
        ],
      },
      {
        title: "Management Systems",
        color: "#8b5cf6",
        items: [
          "Ticketing: Jira Service Desk, Freshdesk",
          "CRM: HubSpot, Zoho",
          "Lead and account tracking",
        ],
      },
    ],
  },
  {
    id: "processes-standards",
    icon: <FileText size={28} />,
    title: "Processes & Standards",
    description: "Streamlined processes aligned with industry standards.",
    color: "Orange",
    sections: [
      {
        title: "Playbooks",
        color: "#f59e0b",
        items: [
          "Incident Response (MITRE-aligned)",
          "Pentest Methodology (OWASP/NIST)",
          "Compliance Prep Flowcharts",
        ],
      },
      {
        title: "SLAs & Reporting",
        color: "#f59e0b",
        items: [
          "Service Level Agreements per tier",
          "Risk Heatmaps & Executive Summaries",
          "Compliance Dashboards",
          "Cyber Insurance Dossiers",
        ],
      },
      {
        title: "Compliance & Audit",
        color: "#f59e0b",
        items: [
          "Data, Vanta, custom ISO toolkits",
          "AI Policy Generator (GPT-4)",
          "Physical Security Audit Toolkits",
          "ICS Testing Frameworks",
        ],
      },
    ],
  },
];

// Static data: Comparison
export const comparisonData: ComparisonData[] = [
  {
    feature: "Entry Price",
    ourService: "₹0",
    competitorA: "₹25,000",
    competitorB: "₹60,000+",
    localFirms: "₹10,000-₹20,000",
  },
  {
    feature: "AI Pentesting",
    ourService: true,
    competitorA: false,
    competitorB: false,
    localFirms: false,
  },
  {
    feature: "OT/ICS Support",
    ourService: true,
    competitorA: false,
    competitorB: "Enterprise only",
    localFirms: false,
  },
  {
    feature: "Physical Red Team",
    ourService: true,
    competitorA: false,
    competitorB: false,
    localFirms: false,
  },
  {
    feature: "Compliance Automation",
    ourService: true,
    competitorA: "Tier 3 only",
    competitorB: "Tier 3 only",
    localFirms: "Manual",
  },
  {
    feature: "Threat Intel",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Basic",
  },
  {
    feature: "24/7 Surveillance Add-on",
    ourService: true,
    competitorA: false,
    competitorB: false,
    localFirms: false,
  },
];

export const addonsData: Addon[] = [
    {
      title: "EDR Lite (5 devices)",
      price: "₹3,999/mo",
      description: "Upgrade basic plans with endpoint detection and response",
      icon: "🛡️",
      color: "Emerald",
    },
    {
      title: "Dark Web Brand Monitor",
      price: "₹1,999/mo",
      description: "3 keywords monitoring with weekly alerts",
      icon: "🕷️",
      color: "Blue",
    },
    {
      title: "SOP Generator",
      price: "₹499/use",
      description: "AI-based policy writing and customization",
      icon: "📋",
      color: "Purple",
    },
    {
      title: "Email Phishing Test",
      price: "₹999/campaign",
      description: "Custom templates with detailed reporting",
      icon: "🎣",
      color: "Orange",
    },
    {
      title: "Biometric Assessment",
      price: "₹7,999",
      description: "One-time access point security review",
      icon: "👤",
      color: "Emerald",
    },
    {
      title: "USB Drop Simulation",
      price: "₹4,999",
      description: "Real-world social engineering bait test",
      icon: "💾",
      color: "Blue",
    },
    {
      title: "Awareness Posters Pack",
      price: "Free (Digital)",
      description: "Included with every security plan",
      icon: "🎨",
      highlight: true,
      color: "Purple",
    },
  ];

// Export top-level object
export const cybersecurity = {
  features: featuresData,
  // suite: suiteData,
  solutions: specialSolutions,
  // infrastructure: infrastructureData,
  // comparison: comparisonData,
  // highlights: highlightsData, 
  addons:addonsData,
};