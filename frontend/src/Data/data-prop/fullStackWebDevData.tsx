import { Award, Cloud, FileText, Server, Shield, Users, Wrench, Code, Rocket, Smartphone, CheckCircle } from "lucide-react";
import { JSX } from "react";

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

interface Addon{
    title: string,
    price: string,
    description: string,
    icon: string,
    color: string,
  }

const featuresData: Feature[] = [
  {
    id: "full-stack-expertise",
    icon: <Users size={28} />,
    name: "Full Stack Expertise",
    description: "End-to-end development with seamless front-to-back integration.",
    color: "Blue",
    badges: ["MERN Stack", "15+ Years Experience", "Agile Teams"],
    features: [
      {
        category: "Team Expertise",
        items: [
          "MERN (MongoDB, Express, React, Node.js) specialists",
          "Full-stack developers with TypeScript expertise",
          "DevOps for automated deployments",
          "Database architects for optimized schemas",
        ],
      },
      {
        category: "Development Practices",
        items: [
          "Agile development with sprint planning",
          "API-first design for scalability",
          "Microservices architecture",
          "Test-driven development (TDD)",
        ],
      },
    ],
    cta: "Hire Our Full Stack Team",
  },
  {
    id: "scalable-architecture",
    icon: <Server size={28} />,
    name: "Scalable Architecture",
    description: "Robust backend systems for high-performance applications.",
    color: "Emerald",
    badges: ["Microservices", "Cloud-Native", "99.99% Uptime"],
    features: [
      {
        category: "Backend Technologies",
        items: [
          "Node.js, Express, and NestJS",
          "MongoDB, PostgreSQL, and MySQL",
          "REST and GraphQL APIs",
          "Serverless architecture with AWS Lambda",
        ],
      },
      {
        category: "Scalability & Performance",
        items: [
          "Horizontal scaling with Kubernetes",
          "Load balancing and caching",
          "99.99% uptime with cloud providers",
          "Real-time data processing",
        ],
      },
    ],
    cta: "Build Scalable Apps",
  },
  {
    id: "secure-development",
    icon: <Shield size={28} />,
    name: "Secure Development",
    description: "Secure coding practices to protect your applications.",
    color: "Purple",
    badges: ["OWASP Compliant", "JWT Auth", "Encrypted Data"],
    features: [
      {
        category: "Security Practices",
        items: [
          "OWASP Top 10 compliance",
          "JWT and OAuth2 authentication",
          "Data encryption at rest and in transit",
          "Regular security audits",
        ],
      },
      {
        category: "Testing & Validation",
        items: [
          "Penetration testing with OWASP ZAP",
          "Automated security scanning",
          "Code vulnerability analysis",
          "Secure CI/CD pipelines",
        ],
      },
    ],
    cta: "Secure Your App",
  },
  {
    id: "proven-results",
    icon: <Award size={28} />,
    name: "Proven Results",
    description: "Trusted by 400+ clients with 96% satisfaction rate.",
    color: "Orange",
    badges: ["400+ Projects", "96% Satisfaction", "10+ Awards"],
    features: [
      {
        category: "Track Record",
        items: [
          "400+ full-stack projects delivered",
          "96% client satisfaction rate",
          "Average 3x performance improvement",
          "98% on-time delivery rate",
        ],
      },
      {
        category: "Recognition",
        items: [
          "Clutch Top Developer Award",
          "Upwork Top-Rated Agency",
          "Featured in TechCrunch",
          "Certified AWS Partner",
        ],
      },
    ],
    cta: "View Case Studies",
  },
];

// Static data: Highlights
const highlightsData: Feature[] = [
  {
    id: "modern-frameworks",
    icon: <Code size={32} />,
    name: "Modern Frameworks",
    description: "Cutting-edge tools for rapid and efficient development.",
    color: "Blue",
    badges: ["React & Next.js", "Node.js & NestJS", "TypeScript"],
    features: [
      {
        category: "Frontend Technologies",
        items: [
          "React and Next.js for dynamic UIs",
          "TypeScript for type-safe coding",
          "Tailwind CSS for rapid styling",
          "State management with Redux or Zustand",
        ],
      },
      {
        category: "Backend Technologies",
        items: [
          "Node.js and NestJS for robust APIs",
          "GraphQL for flexible data queries",
          "Prisma ORM for database integration",
          "Serverless functions for scalability",
        ],
      },
    ],
    cta: "Explore Our Tech Stack",
  },
  {
    id: "rapid-prototyping",
    icon: <Rocket size={32} />,
    name: "Rapid Prototyping",
    description: "Fast MVP development to validate ideas and accelerate launches.",
    color: "Emerald",
    badges: ["MVP in 4 Weeks", "Agile Iterations", "User Feedback"],
    features: [
      {
        category: "Prototyping Process",
        items: [
          "MVP development in 4-6 weeks",
          "Agile sprints for iterative builds",
          "Wireframing and UI/UX design",
          "User feedback integration",
        ],
      },
      {
        category: "Delivery & Validation",
        items: [
          "Functional prototypes for testing",
          "A/B testing integration",
          "Analytics for user behavior tracking",
          "Iterative improvements based on feedback",
        ],
      },
    ],
    cta: "Build Your MVP",
  },
  {
    id: "cross-platform-solutions",
    icon: <Smartphone size={32} />,
    name: "Cross-Platform Solutions",
    description: "Seamless apps for web, mobile, and desktop with one codebase.",
    color: "Purple",
    badges: ["PWA Support", "React Native", "Offline Capabilities"],
    features: [
      {
        category: "Cross-Platform Development",
        items: [
          "Progressive Web Apps (PWAs) with Next.js",
          "React Native for mobile apps",
          "Electron for desktop applications",
          "Single codebase for multiple platforms",
        ],
      },
      {
        category: "User Experience",
        items: [
          "Offline support with Service Workers",
          "Push notifications for engagement",
          "Responsive design for all devices",
          "Cross-browser compatibility",
        ],
      },
    ],
    cta: "Go Cross-Platform",
  },
  {
    id: "reliable-delivery",
    icon: <CheckCircle size={32} />,
    name: "Reliable Delivery",
    description: "On-time delivery with 98% success rate across 500+ projects.",
    color: "Orange",
    badges: ["98% Success", "500+ Projects", "Agile Workflow"],
    features: [
      {
        category: "Project Delivery",
        items: [
          "98% on-time delivery rate",
          "500+ successful full-stack projects",
          "Agile project management with Scrum",
          "Dedicated project managers",
        ],
      },
      {
        category: "Client Support",
        items: [
          "24/7 client communication channels",
          "Post-launch maintenance and updates",
          "Transparent progress reporting",
          "Client training and handover",
        ],
      },
    ],
    cta: "Start Your Project",
  },
];

const suiteData: SuiteData = {
  title: "Full Stack Development Suite",
  icon: "⚙️",
  description:
    "End-to-end full-stack development with modern frameworks, scalable backends, secure APIs, and responsive frontends for enterprise-grade applications.",
  features: [
    "MERN stack development",
    "Scalable microservices architecture",
    "REST and GraphQL API development",
    "Cloud hosting with AWS/GCP",
    "CI/CD pipeline automation",
    "Secure authentication systems",
    "Real-time data processing",
    "Database optimization",
    "Responsive UI/UX design",
    "SEO and performance audits",
    "Dedicated DevOps support",
    "Post-launch maintenance",
  ],
  metrics: [
    { label: "Project Delivery Time", value: "6-12 weeks" },
    { label: "Client Satisfaction", value: "96%" },
    { label: "Uptime Guarantee", value: "99.99%" },
    { label: "API Response Time", value: "<100 ms" },
  ],
  gradient: "blue",
  cta: "Start Your Full Stack Project",
};

const specialSolutions: SolutionData[] = [
  {
    icon: "🛠️",
    title: "Enterprise Web App",
    price: "₹3L",
    period: "/project",
    target: "Large Businesses",
    shortDescription: "Custom enterprise-grade web applications with scalability.",
    fullDescription:
      "Tailored full-stack web applications with microservices, secure APIs, and cloud-native infrastructure for large-scale businesses.",
    features: [
      "Microservices architecture",
      "Custom API development",
      "Cloud hosting (AWS/GCP)",
      "Advanced authentication systems",
      "Real-time analytics dashboard",
      "Scalable database design",
      "CI/CD pipeline setup",
      "Security and compliance audits",
      "Dedicated support team",
    ],
    delivery: "Enterprise-grade web application",
    cta: "Launch Enterprise App",
    gradient: "emerald",
  },
  {
    icon: "📱",
    title: "Progressive Web App (PWA)",
    price: "₹2L",
    period: "/project",
    target: "Mobile-First Businesses",
    shortDescription: "Fast, offline-capable PWAs for mobile and desktop.",
    fullDescription:
      "Progressive Web Apps with offline capabilities, push notifications, and native-like performance for cross-platform accessibility.",
    features: [
      "PWA with Next.js or React",
      "Offline support with Service Workers",
      "Push notifications integration",
      "Cross-platform compatibility",
      "SEO optimization",
      "Performance optimization",
      "App store submission support",
      "Analytics integration",
      "Maintenance and updates",
    ],
    delivery: "Fully functional PWA",
    cta: "Build Your PWA",
    gradient: "blue",
  },
];

const infrastructureData: InfrastructureItem[] = [
  {
    id: "full-stack-team",
    icon: <Users size={28} />,
    title: "Full Stack Team",
    description: "Expert developers for end-to-end application development.",
    color: "Blue",
    sections: [
      {
        title: "",
        color: "#3b82f6",
        items: [
          "Frontend Developers (React, Next.js)",
          "Backend Developers (Node.js, NestJS)",
          "Database Engineers (MongoDB, PostgreSQL)",
          "DevOps Specialists",
          "QA Engineers",
          "UI/UX Designers",
          "Project Managers",
        ],
      },
    ],
  },
  {
    id: "tools-stack",
    icon: <Wrench size={28} />,
    title: "Tools & Stack",
    description: "Modern tools for full-stack development and deployment.",
    color: "Emerald",
    sections: [
      {
        title: "Development Tools",
        color: "#10b981",
        items: [
          "React, Next.js, Node.js",
          "MongoDB, PostgreSQL, MySQL",
          "GraphQL, REST APIs",
          "TypeScript, JavaScript",
        ],
      },
      {
        title: "DevOps & Testing",
        color: "#10b981",
        items: [
          "Docker, Kubernetes",
          "GitHub Actions, Jenkins",
          "Jest, Mocha, Cypress",
          "ESLint, Prettier",
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for full-stack apps.",
    color: "Purple",
    sections: [
      {
        title: "Cloud Platforms",
        color: "#8b5cf6",
        items: [
          "AWS (Lambda, ECS, RDS)",
          "Google Cloud Platform",
          "Azure App Services",
          "Vercel for frontend hosting",
        ],
      },
      {
        title: "Security & Performance",
        color: "#8b5cf6",
        items: [
          "SSL/TLS certificates",
          "DDoS protection",
          "Content Delivery Network (CDN)",
          "Auto-scaling infrastructure",
        ],
      },
    ],
  },
  {
    id: "processes-standards",
    icon: <FileText size={28} />,
    title: "Processes & Standards",
    description: "Best practices for efficient and secure development.",
    color: "Orange",
    sections: [
      {
        title: "Development Processes",
        color: "#f59e0b",
        items: [
          "Agile/Scrum methodology",
          "Test-driven development",
          "Code reviews and linting",
          "OWASP security guidelines",
        ],
      },
      {
        title: "Quality Assurance",
        color: "#f59e0b",
        items: [
          "Automated unit and integration tests",
          "Performance benchmarking",
          "Security vulnerability scans",
          "Post-deployment monitoring",
        ],
      },
    ],
  },
];

const comparisonData: ComparisonData[] = [
  {
    feature: "Entry Price",
    ourService: "₹0 (Basic)",
    competitorA: "₹30,000",
    competitorB: "₹75,000+",
    localFirms: "₹15,000-₹40,000",
  },
  {
    feature: "MERN Stack Support",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Limited",
  },
  {
    feature: "Microservices Architecture",
    ourService: true,
    competitorA: "Optional",
    competitorB: true,
    localFirms: false,
  },
  {
    feature: "Serverless Support",
    ourService: true,
    competitorA: false,
    competitorB: true,
    localFirms: false,
  },
  {
    feature: "Security Audits",
    ourService: true,
    competitorA: "Paid Add-on",
    competitorB: true,
    localFirms: "Basic",
  },
  {
    feature: "Post-Launch Support",
    ourService: true,
    competitorA: "Paid Add-on",
    competitorB: true,
    localFirms: "Limited",
  },
];

const addonsData: Addon[] = [
  {
    title: "Microservices Architecture Setup",
    price: "₹7,999",
    description: "One-time setup for scalable microservices",
    icon: "🛠️",
    color: "Blue",
  },
  {
    title: "API Performance Optimization",
    price: "₹4,999/mo",
    description: "Enhanced API speed and reliability",
    icon: "⚡",
    color: "Emerald",
  },
  {
    title: "Custom Authentication Module",
    price: "₹5,999",
    description: "One-time setup for secure JWT/OAuth",
    icon: "🔐",
    color: "Purple",
  },
  {
    title: "Real-Time Analytics Integration",
    price: "₹3,999/mo",
    description: "Live user behavior tracking dashboard",
    icon: "📊",
    color: "Orange",
  },
  {
    title: "PWA Enhancement Package",
    price: "₹6,999",
    description: "One-time upgrade for offline capabilities",
    icon: "📱",
    color: "Blue",
  },
  {
    title: "DevOps Pipeline Automation",
    price: "₹4,999/mo",
    description: "Automated CI/CD for faster deployments",
    icon: "🚀",
    color: "Emerald",
  },
  {
    title: "Full Stack Starter Template",
    price: "Free (Digital)",
    description: "Included with every full-stack plan",
    icon: "📄",
    highlight: true,
    color: "Purple",
  },
];

export const fullStackData = {
  features: featuresData,
  suite: suiteData,
  solutions: specialSolutions,
  infrastructure: infrastructureData,
  comparison: comparisonData,
  highlights: highlightsData, 
  addons:addonsData,
};