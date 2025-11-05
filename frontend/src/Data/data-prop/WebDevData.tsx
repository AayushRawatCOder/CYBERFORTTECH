import {
  Award,
  Cloud,
  Code,
  FileText,
  Monitor,
  Users,
  Wrench,
  Rocket,
  BarChart,
  ShoppingCart,
  CheckCircle,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";
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
// src/types/serviceTypes.ts
export interface ServiceHeroContent {
  id: string;
  title: string;
  subtitle: string;
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

interface Addon {
  title: string;
  price: string;
  description: string;
  icon: string;
  color: string;
}

const featuresData: Feature[] = [
  {
    id: "expert-team",
    icon: <Users size={28} />,
    name: "Expert Web Developers",
    description:
      "Skilled professionals delivering modern, responsive web solutions.",
    color: "Blue",
    badges: ["10+ Years Experience", "Certified Developers", "Agile Workflow"],
    features: [
      {
        category: "Team Expertise",
        items: [
          "Certified Front-end and Back-end Developers",
          "UI/UX Designers with Figma expertise",
          "DevOps Engineers for seamless deployment",
          "Project Managers with Agile/Scrum certifications",
        ],
      },
      {
        category: "Development Practices",
        items: [
          "Agile development with iterative delivery",
          "Cross-browser compatibility testing",
          "SEO-optimized and accessible web design",
          "Continuous integration and deployment (CI/CD)",
        ],
      },
    ],
    cta: "Hire Our Team",
  },
  {
    id: "modern-tech",
    icon: <Code size={28} />,
    name: "Modern Tech Stack",
    description:
      "Cutting-edge tools for fast, scalable, and secure web applications.",
    color: "Emerald",
    badges: ["React & Next.js", "TypeScript", "99.9% Uptime"],
    features: [
      {
        category: "Frontend Technologies",
        items: [
          "React.js, Next.js, and Vue.js frameworks",
          "TypeScript for type-safety",
          "Tailwind CSS and Material-UI for styling",
          "Progressive Web App (PWA) support",
        ],
      },
      {
        category: "Performance & Scalability",
        items: [
          "Server-side rendering with Next.js",
          "Optimized load times with lazy loading",
          "Scalable cloud hosting on AWS/GCP",
          "99.9% uptime with CDN integration",
        ],
      },
    ],
    cta: "Explore Tech Stack",
  },
  {
    id: "responsive-design",
    icon: <Monitor size={28} />,
    name: "Responsive Design",
    description: "Pixel-perfect, mobile-first designs for all devices.",
    color: "Purple",
    badges: ["Mobile-First", "Cross-Platform", "WCAG Compliant"],
    features: [
      {
        category: "Design Capabilities",
        items: [
          "Mobile-first responsive layouts",
          "Cross-platform compatibility",
          "WCAG 2.1 accessibility standards",
          "Custom animations and transitions",
        ],
      },
      {
        category: "Testing & Optimization",
        items: [
          "Device testing across iOS, Android, and Desktop",
          "Performance optimization with Lighthouse",
          "Browser compatibility testing",
          "A/B testing for user engagement",
        ],
      },
    ],
    cta: "View Design Portfolio",
  },
  {
    id: "proven-results",
    icon: <Award size={28} />,
    name: "Proven Results",
    description: "Trusted by 300+ clients with 95% satisfaction rate.",
    color: "Orange",
    badges: ["300+ Projects", "95% Satisfaction", "5+ Awards"],
    features: [
      {
        category: "Track Record",
        items: [
          "300+ successful web projects delivered",
          "95% client satisfaction rate",
          "Average 2x increase in user engagement",
          "99% on-time delivery rate",
        ],
      },
      {
        category: "Recognition",
        items: [
          "Awwwards Site of the Day winner",
          "CSS Design Awards recipient",
          "Featured in Smashing Magazine",
          "Certified Google Partner",
        ],
      },
    ],
    cta: "See Case Studies",
  },
  {
    id: "ongoing-support",
    icon: <LifeBuoy size={28} />,
    name: "Ongoing Support & Maintenance",
    description:
      "Comprehensive maintenance and 24/7 support to keep your web application running optimally.",
    color: "Green",
    badges: ["24/7 Monitoring", "Quick Response", "Proactive Updates"],
    features: [
      {
        category: "Support Services",
        items: [
          "24/7 system monitoring and alerting",
          "Emergency bug fixes with 2-hour response time",
          "Regular security updates and patches",
          "Performance optimization consultations",
        ],
      },
      {
        category: "Maintenance Plans",
        items: [
          "Regular backup and disaster recovery plans",
          "Third-party dependency updates",
          "Server health monitoring and scaling",
          "Monthly performance reports and analytics",
        ],
      },
    ],
    cta: "Explore Support Plans",
  },
];

// Static data: Highlights
const highlightsData: Feature[] = [
  {
    id: "rapid-development",
    icon: <Rocket size={32} />,
    name: "Rapid Development",
    description: "Fast-tracked web solutions with agile workflows.",
    color: "Blue",
    badges: ["4-Week MVP", "Agile Sprints", "CI/CD Pipelines"],
    features: [
      {
        category: "Development Speed",
        items: [
          "MVP delivery in 4-6 weeks",
          "Agile sprints for iterative progress",
          "Pre-built components for faster builds",
          "Continuous integration with GitHub Actions",
        ],
      },
      {
        category: "Prototyping & Delivery",
        items: [
          "Rapid prototyping with Figma",
          "Early user testing integration",
          "Automated deployment pipelines",
          "Post-launch iteration support",
        ],
      },
    ],
    cta: "Launch Your MVP",
  },
  {
    id: "seo-analytics",
    icon: <BarChart size={32} />,
    name: "SEO & Analytics",
    description:
      "Optimized websites with advanced analytics for maximum reach.",
    color: "Emerald",
    badges: ["Google Analytics", "SEO Optimized", "Conversion Tracking"],
    features: [
      {
        category: "SEO Optimization",
        items: [
          "On-page SEO with meta tags and schema",
          "Site speed optimization with Lighthouse",
          "XML sitemaps and robots.txt setup",
          "Keyword research and content strategy",
        ],
      },
      {
        category: "Analytics Integration",
        items: [
          "Google Analytics and Tag Manager setup",
          "Real-time user behavior tracking",
          "Conversion rate optimization (CRO)",
          "Custom dashboards for insights",
        ],
      },
    ],
    cta: "Boost Your Visibility",
  },
  {
    id: "ecommerce-expertise",
    icon: <ShoppingCart size={32} />,
    name: "E-Commerce Expertise",
    description:
      "High-converting e-commerce platforms with seamless integrations.",
    color: "Purple",
    badges: ["Shopify & WooCommerce", "Secure Payments", "Scalable"],
    features: [
      {
        category: "E-Commerce Features",
        items: [
          "Custom Shopify or WooCommerce stores",
          "Secure payment gateways (Stripe, PayPal)",
          "Dynamic product filtering and search",
          "Cart abandonment recovery tools",
        ],
      },
      {
        category: "Integrations & Scalability",
        items: [
          "Integration with CRM and ERP systems",
          "Scalable cloud hosting for traffic spikes",
          "Marketing automation with Mailchimp",
          "Analytics for sales and user behavior",
        ],
      },
    ],
    cta: "Build Your Online Store",
  },
  {
    id: "reliable-delivery",
    icon: <CheckCircle size={32} />,
    name: "Reliable Delivery",
    description: "On-time project delivery with 99% success rate.",
    color: "Orange",
    badges: ["99% On-Time", "350+ Projects", "Agile Workflow"],
    features: [
      {
        category: "Project Delivery",
        items: [
          "99% on-time delivery rate",
          "350+ web projects completed",
          "Agile project management with Scrum",
          "Dedicated project coordinators",
        ],
      },
      {
        category: "Client Support",
        items: [
          "24/7 client communication channels",
          "Post-launch maintenance and updates",
          "Transparent progress reporting",
          "Client training and documentation",
        ],
      },
    ],
    cta: "Start Your Web Project",
  },
  {
    id: "security-first",
    icon: <ShieldCheck size={32} />,
    name: "Security First Approach",
    description: "Enterprise-grade security embedded into every project.",
    color: "Red",
    badges: ["OWASP Compliant", "Data Encryption", "Zero Trust"],
    features: [
      {
        category: "Application Security",
        items: [
          "OWASP Top 10 compliance",
          "End-to-end data encryption",
          "Secure authentication with OAuth2 / JWT",
          "Regular vulnerability scanning & patching",
        ],
      },
      {
        category: "Infrastructure & Compliance",
        items: [
          "Zero Trust network principles",
          "GDPR & HIPAA-ready solutions",
          "Automated backup & disaster recovery",
          "Role-based access controls (RBAC)",
        ],
      },
    ],
    cta: "Secure Your Systems",
  },
];

const suiteData: SuiteData = {
  title: "Comprehensive Web Development Suite",
  icon: "🌐",
  description:
    "Our all-in-one web development solution delivers responsive, scalable, and secure websites with modern frameworks, SEO optimization, and ongoing support.",
  features: [
    "Responsive and mobile-first design",
    "React.js/Next.js-powered frontends",
    "SEO and performance optimization",
    "CI/CD pipeline setup",
    "Cloud hosting with AWS/GCP",
    "Accessibility compliance (WCAG 2.1)",
    "Custom CMS integration",
    "E-commerce functionality",
    "Analytics and tracking setup",
    "Dedicated project manager",
    "Post-launch support and maintenance",
    "Security audits and SSL setup",
  ],
  metrics: [
    { label: "Project Delivery Time", value: "4-8 weeks" },
    { label: "Client Satisfaction", value: "95%" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Page Load Speed", value: "<2 sec" },
  ],
  gradient: "blue",
  cta: "Start Your Project",
};

const specialSolutions: SolutionData[] = [
  {
    icon: "🛒",
    title: "E-Commerce Solution",
    price: "₹1.5L",
    period: "/project",
    target: "Retail & Online Businesses",
    shortDescription:
      "Robust e-commerce platforms with secure payment integration.",
    fullDescription:
      "Custom-built e-commerce websites with modern frameworks, secure payment gateways, and scalable infrastructure for retail businesses.",
    features: [
      "WooCommerce/Shopify integration",
      "Secure payment gateways (Stripe, PayPal)",
      "Product catalog management",
      "SEO and conversion rate optimization",
      "Mobile-responsive design",
      "Inventory and order tracking",
      "Customer account management",
      "Analytics dashboard",
      "Marketing automation integration",
    ],
    delivery: "Fully functional e-commerce website",
    cta: "Launch Your Store",
    gradient: "emerald",
  },
  {
    icon: "📝",
    title: "Custom CMS Development",
    price: "₹1.8L",
    period: "/project",
    target: "Content-Driven Businesses",
    shortDescription: "Tailored CMS solutions for seamless content management.",
    fullDescription:
      "Custom content management systems built for scalability, ease of use, and integration with modern web technologies.",
    features: [
      "Custom CMS with Next.js or Strapi",
      "Role-based access control",
      "SEO-optimized content structure",
      "Multilingual support",
      "API integration for third-party tools",
      "Content scheduling and automation",
      "User-friendly admin dashboard",
      "Performance optimization",
      "Security hardening",
    ],
    delivery: "Custom CMS platform",
    cta: "Get Your CMS",
    gradient: "blue",
  },
];

const infrastructureData: InfrastructureItem[] = [
  {
    id: "development-team",
    icon: <Users size={28} />,
    title: "Development Team",
    description: "Expert developers delivering high-quality web solutions.",
    color: "Blue",
    sections: [
      {
        title: "",
        color: "#3b82f6",
        items: [
          "Frontend Developers (React, Vue, Angular)",
          "Backend Developers (Node.js, Django)",
          "UI/UX Designers",
          "DevOps Engineers",
          "QA and Testing Specialists",
          "SEO Specialists",
          "Project Managers",
        ],
      },
    ],
  },
  {
    id: "tools-stack",
    icon: <Wrench size={28} />,
    title: "Tools & Stack",
    description: "Modern tools for efficient and scalable web development.",
    color: "Emerald",
    sections: [
      {
        title: "Frontend & Backend",
        color: "#10b981",
        items: [
          "React.js, Next.js, Vue.js",
          "Node.js, Express, Django",
          "TypeScript and JavaScript",
          "Tailwind CSS, Material-UI",
        ],
      },
      {
        title: "DevOps & Testing",
        color: "#10b981",
        items: [
          "Docker, Kubernetes",
          "Jenkins, GitHub Actions",
          "Jest, Cypress for testing",
          "Lighthouse, Webpack",
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    description: "Scalable and secure hosting for web applications.",
    color: "Purple",
    sections: [
      {
        title: "Cloud Platforms",
        color: "#8b5cf6",
        items: [
          "AWS (EC2, S3, CloudFront)",
          "Google Cloud Platform",
          "Vercel for Next.js hosting",
          "Netlify for static sites",
        ],
      },
      {
        title: "Security & Performance",
        color: "#8b5cf6",
        items: [
          "SSL/TLS certificates",
          "DDoS protection",
          "Content Delivery Network (CDN)",
          "Load balancing",
        ],
      },
    ],
  },
  {
    id: "processes-standards",
    icon: <FileText size={28} />,
    title: "Processes & Standards",
    description: "Streamlined workflows aligned with industry best practices.",
    color: "Orange",
    sections: [
      {
        title: "Development Processes",
        color: "#f59e0b",
        items: [
          "Agile/Scrum methodology",
          "Code reviews and pair programming",
          "Continuous integration pipelines",
          "WCAG 2.1 compliance",
        ],
      },
      {
        title: "Quality Assurance",
        color: "#f59e0b",
        items: [
          "Automated testing suites",
          "Performance benchmarks",
          "Accessibility audits",
          "SEO audits",
        ],
      },
    ],
  },
];

const comparisonData: ComparisonData[] = [
  {
    feature: "Entry Price",
    ourService: "₹0 (Basic)",
    competitorA: "₹20,000",
    competitorB: "₹50,000+",
    localFirms: "₹10,000-₹30,000",
  },
  {
    feature: "React/Next.js Support",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Limited",
  },
  {
    feature: "SEO Optimization",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Basic",
  },
  {
    feature: "Accessibility Compliance",
    ourService: true,
    competitorA: "Optional",
    competitorB: true,
    localFirms: false,
  },
  {
    feature: "Cloud Hosting",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Optional",
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
    title: "SEO Pro Package",
    price: "₹3,999/mo",
    description: "Advanced SEO with keyword and competitor analysis",
    icon: "🔍",
    color: "Blue",
  },
  {
    title: "E-Commerce Analytics Suite",
    price: "₹4,999/mo",
    description: "Sales and user behavior tracking dashboard",
    icon: "📊",
    color: "Emerald",
  },
  {
    title: "Custom CMS Module",
    price: "₹5,999",
    description: "One-time custom content management feature",
    icon: "📝",
    color: "Purple",
  },
  {
    title: "Accessibility Audit",
    price: "₹3,999",
    description: "One-time WCAG 2.1 compliance review",
    icon: "♿",
    color: "Orange",
  },
  {
    title: "Performance Optimization",
    price: "₹2,999/mo",
    description: "Ongoing site speed and Lighthouse improvements",
    icon: "⚡",
    color: "Blue",
  },
  {
    title: "Custom Animation Pack",
    price: "₹4,999",
    description: "One-time set of engaging UI animations",
    icon: "✨",
    color: "Emerald",
  },
  {
    title: "Web Design Style Guide",
    price: "Free (Digital)",
    description: "Included with every web dev plan",
    icon: "🎨",
    highlight: true,
    color: "Purple",
  },
];

export const WebDevData = {
  features: featuresData,
  suite: suiteData,
  solutions: specialSolutions,
  infrastructure: infrastructureData,
  comparison: comparisonData,
  highlights: highlightsData,
  addons: addonsData,
};
