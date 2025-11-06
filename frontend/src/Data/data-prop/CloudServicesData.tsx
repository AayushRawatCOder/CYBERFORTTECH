import { Award, Cloud, FileText, Server, Shield, Users, Wrench, Settings, Activity, CloudLightning, Box, DollarSign, CheckCircle, DollarSignIcon } from "lucide-react";
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
  serverConfigurations?: {
    model: string;
    configurations: { name: string; specs: string; price: string }[];
    offer?: string;
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
    id: "server-expertise",
    icon: <Users size={28} />,
    name: "Server Expertise",
    description: "Certified experts delivering tailored server and workstation solutions.",
    color: "Blue",
    badges: ["HP Certified", "Dell Experts", "3-Year Warranty"],
    features: [
      {
        category: "Team Expertise",
        items: [
          "HP ProLiant Specialists",
          "Dell PowerEdge Engineers",
          "IBM Server Professionals",
          "Technical Support 24/7",
        ],
      },
      {
        category: "Server Practices",
        items: [
          "Custom server configuration",
          "Refurbished server optimization",
          "3-year warranty support",
          "30-day free trial deployment",
        ],
      },
    ],
    cta: "Contact Server Experts",
  },
  {
    id: "scalable-server-infrastructure",
    icon: <Server size={28} />,
    name: "Scalable Server Infrastructure",
    description: "Flexible server solutions for heavy workloads and hosting.",
    color: "Emerald",
    badges: ["Latest Models", "Free Shipping", "No Cost EMI"],
    features: [
      {
        category: "Infrastructure Capabilities",
        items: [
          "HPE ProLiant DL385 Gen10 Plus v2",
          "Dell PowerEdge R720/R620/R630",
          "High-density storage servers",
          "Dedicated hosting environments",
        ],
      },
      {
        category: "Performance",
        items: [
          "Up to 24-core AMD EPYC processors",
          "512GB DDR3/DDR4 RAM options",
          "10.5TB SSD storage capacity",
          "99.9% uptime guarantee",
        ],
      },
    ],
    cta: "Scale Your Servers",
  },
  {
    id: "server-security",
    icon: <Shield size={28} />,
    name: "Server Security",
    description: "Robust security for dedicated server hosting.",
    color: "Purple",
    badges: ["Dedicated Security", "DDoS Protection", "Compliance"],
    features: [
      {
        category: "Security Practices",
        items: [
          "Dedicated server firewalls",
          "DDoS protection with Fortigate",
          "Data encryption for hosting",
          "Compliance with industry standards",
        ],
      },
      {
        category: "Monitoring",
        items: [
          "24/7 server monitoring",
          "Real-time threat detection",
          "Automated backup solutions",
          "Security audits included",
        ],
      },
    ],
    cta: "Secure Your Servers",
  },
  {
    id: "proven-server-results",
    icon: <Award size={28} />,
    name: "Proven Server Results",
    description: "Trusted server solutions with high client satisfaction.",
    color: "Orange",
    badges: ["300+ Deployments", "95% Satisfaction", "3-Year Support"],
    features: [
      {
        category: "Track Record",
        items: [
          "300+ server deployments",
          "95% client satisfaction rate",
          "Up to 25% cost savings",
          "On-time delivery with free shipping",
        ],
      },
      {
        category: "Recognition",
        items: [
          "Certified HP and Dell partners",
          "Industry-leading refurbished servers",
          "Expert technical support team",
          "Call us at 733-733-0402",
        ],
      },
    ],
    cta: "View Server Success Stories",
  },
  {
    id: "cost-effective-servers",
    icon: <DollarSignIcon size={28} />,
    name: "Cost-Effective Servers",
    description: "Maximize value with low-cost server options and offers.",
    color: "Green",
    badges: ["Lowest Prices", "30-Day Trial", "No Cost EMI"],
    features: [
      {
        category: "Cost Management",
        items: [
          "Starting at ₹49,999 for PowerEdge R620",
          "Refurbished servers with 25% off",
          "3-year warranty included",
          "Free trial for 30 days",
        ],
      },
      {
        category: "Savings",
        items: [
          "No cost EMI options",
          "Free and instant shipping",
          "Bulk order discounts",
          "Flexible rental plans",
        ],
      },
    ],
    cta: "Get Cost-Effective Servers",
  },
];

const suiteData: SuiteData = {
  title: "Comprehensive Server & Hosting Suite",
  icon: "💻",
  description:
    "End-to-end server and hosting solutions with advanced technology, 3-year warranties, and 30-day free trials for businesses of all sizes.",
  features: [
    "Custom server configuration",
    "Latest HPE ProLiant and Dell PowerEdge models",
    "Refurbished servers with certified spares",
    "Dedicated server hosting with 30-day trial",
    "High-performance workstations (HP Z-Series, Dell Precision)",
    "Networking and storage solutions",
    "3-year warranty and 24/7 support",
    "Free shipping and no cost EMI",
    "IT rental and Ethernet switch options",
    "Xeon processor and RAID card upgrades",
    "Dedicated technical sales support",
    "Advanced security with Fortigate firewalls",
  ],
  metrics: [
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Cost Savings", value: "Up to 25%" },
    { label: "Warranty Period", value: "3 Years" },
    { label: "Trial Period", value: "30 Days" },
  ],
  gradient: "cyan",
  cta: "Explore Server Suite",
};

const specialSolutions: SolutionData[] = [
  {
    icon: "🛠️",
    title: "Server Deployment",
    price: "₹301,999",
    period: "/unit",
    target: "Businesses with Heavy Workloads",
    shortDescription: "Rapid deployment of high-performance servers.",
    fullDescription:
      "Deploy HPE ProLiant DL385 Gen10 Plus v2 with 24-core AMD EPYC, 64GB RAM, and 1.44TB SSD, optimized for heavy workloads with 25% off and 3-year warranty.",
    features: [
      "24-core AMD EPYC 7402P processor",
      "64GB DDR4 RAM and 1.44TB SSD",
      "3-year warranty and 30-day trial",
      "Free shipping and technical support",
      "Customizable configurations",
      "High scalability for enterprise use",
      "DDoS protection included",
      "24/7 monitoring and maintenance",
    ],
    delivery: "Fully configured server unit",
    cta: "Deploy Now",
    gradient: "emerald",
  },
  {
    icon: "🏢",
    title: "Dedicated Hosting Setup",
    price: "₹49,999",
    period: "/month",
    target: "Web Hosting Providers",
    shortDescription: "Secure and scalable dedicated hosting.",
    fullDescription:
      "Set up dedicated hosting with Dell PowerEdge R620, offering 30-day free trial, 3-year warranty, and no cost EMI, ideal for web applications.",
    features: [
      "Starting price at ₹49,999",
      "30-day free trial period",
      "3-year warranty and free shipping",
      "Scalable storage up to 10.5TB",
      "Dedicated server security",
      "24/7 technical support at 733-733-0402",
      "Ethernet switch integration",
      "Customizable OS options",
    ],
    delivery: "Active hosting environment",
    cta: "Start Hosting",
    gradient: "blue",
  },
];

const infrastructureData: InfrastructureItem[] = [
  {
    id: "custom-server-solutions",
    icon: <Server size={28} />,
    title: "Custom Server Solutions",
    description: "Tailored server and infrastructure solutions with 3-year warranty and 30-day free trial.",
    color: "Blue",
    sections: [
      {
        title: "Solution Categories",
        color: "#06b6d4",
        items: [
          "Build Your Own Server",
          "Servers",
          "Workstations",
          "IT Rental",
          "Hosting",
          "Networking",
          "Components",
          "Enterprise Servers",
          "High-Performance Workstations",
          "Infrastructure",
          "Cryptocurrency Mining Servers",
          "Dell RAID Card",
          "Inspur Servers",
          "Server Accessories",
          "Server Management",
          "Windows Dedicated Servers",
          "Today's Deals",
          "Management",
          "Dedicated Server Hosting",
          "Storage Servers",
          "Ethernet Switches",
          "Xeon Processors",
          "Ethernet Cards",
        ],
      },
    ],
    serverConfigurations: [
      {
        model: "HPE ProLiant DL385 Gen10 Plus v2",
        configurations: [
          {
            name: "Base",
            specs: "24-Core AMD EPYC 7402P | 64GB DDR4 RAM | 1.44 TB SSD (3x480GB SATA)",
            price: "₹301,999/-",
          },
        ],
        offer: "Save Up To 25% Off",
      },
      {
        model: "PowerEdge R720",
        configurations: [
          { name: "Basic", specs: "8 Cores CPU | 64GB DDR3 | 600GB SAS HDD", price: "N/A" },
          { name: "Standard", specs: "8 Cores CPU | 128GB DDR3 | 16TB SAS HDD", price: "N/A" },
          { name: "Reliable", specs: "24 Cores CPU | 256GB DDR3 | 1.5TB SAS HDD", price: "N/A" },
          { name: "Powerful", specs: "24 Cores CPU | 512GB DDR3 | 10.5TB SATA SSD", price: "N/A" },
        ],
        offer: "No Cost EMI. Free & Instant Shipping.",
      },
      {
        model: "PowerEdge R620",
        configurations: [
          { name: "Base", specs: "N/A", price: "₹49,999/-" },
        ],
        offer: "Offer Price",
      },
      {
        model: "PowerEdge R630",
        configurations: [
          { name: "Base", specs: "N/A", price: "₹99,999/-" },
        ],
        offer: "Offer Price",
      },
      {
        model: "DL360 G10 Server",
        configurations: [
          { name: "Base", specs: "N/A", price: "₹299,999/-" },
        ],
        offer: "Offer Price",
      },
      {
        model: "UCS C240 M3 Server",
        configurations: [
          { name: "Base", specs: "N/A", price: "₹69,999/-" },
        ],
        offer: "Offer Price",
      },
      {
        model: "DL365 Gen10 Plus",
        configurations: [
          { name: "Base", specs: "N/A", price: "N/A" },
        ],
      },
      {
        model: "FusionServer RH2288 V3",
        configurations: [
          { name: "Base", specs: "N/A", price: "N/A" },
        ],
      },
      {
        model: "DL380 G9",
        configurations: [
          { name: "Base", specs: "N/A", price: "N/A" },
        ],
      },
      {
        model: "DL380 Gen10",
        configurations: [
          { name: "Base", specs: "N/A", price: "N/A" },
        ],
      },
      {
        model: "DL380p Gen8",
        configurations: [
          { name: "Base", specs: "N/A", price: "N/A" },
        ],
      },
    ],
  },
  {
    id: "workstation-solutions",
    icon: <Wrench size={28} />,
    title: "Workstation Solutions",
    description: "High-performance workstations for design and rendering.",
    color: "Emerald",
    sections: [
      {
        title: "Workstation Models",
        color: "#10b981",
        items: [
          "HP Z-Series Workstations",
          "Dell Precision T5810",
          "HP Z620",
          "Customizable configurations",
        ],
      },
    ],
  },
  {
    id: "hosting-infrastructure",
    icon: <Cloud size={28} />,
    title: "Hosting Infrastructure",
    description: "Secure and scalable hosting with 30-day trial.",
    color: "Purple",
    sections: [
      {
        title: "Hosting Options",
        color: "#8b5cf6",
        items: [
          "Dedicated Hosting",
          "Windows Dedicated Servers",
          "30-day free trial",
          "Dedicated server security",
        ],
      },
    ],
  },
];

const comparisonData: ComparisonData[] = [
  {
    feature: "Entry Price",
    ourService: "₹49,999 (R620)",
    competitorA: "₹80,000",
    competitorB: "₹150,000+",
    localFirms: "₹60,000-₹100,000",
  },
  {
    feature: "Warranty Period",
    ourService: "3 Years",
    competitorA: "1 Year",
    competitorB: "2 Years",
    localFirms: "1-2 Years",
  },
  {
    feature: "Free Trial",
    ourService: "30 Days",
    competitorA: "7 Days",
    competitorB: "15 Days",
    localFirms: "None",
  },
  {
    feature: "Free Shipping",
    ourService: true,
    competitorA: false,
    competitorB: true,
    localFirms: "Limited",
  },
  {
    feature: "Customization",
    ourService: true,
    competitorA: "Basic",
    competitorB: true,
    localFirms: "Limited",
  },
  {
    feature: "24/7 Support",
    ourService: true,
    competitorA: true,
    competitorB: true,
    localFirms: "Limited Hours",
  },
];

const addonsData: Addon[] = [
  {
    title: "Extended Warranty",
    price: "₹9,999",
    description: "Add 1-year extended warranty",
    icon: "🛡️",
    color: "Blue",
  },
  {
    title: "Server Upgrade Package",
    price: "₹15,999",
    description: "Upgrade RAM and SSD capacity",
    icon: "🔧",
    color: "Emerald",
  },
  {
    title: "Hosting Security Suite",
    price: "₹5,999/mo",
    description: "DDoS protection and firewall",
    icon: "🔒",
    color: "Purple",
  },
  {
    title: "IT Rental Plan",
    price: "₹10,999/mo",
    description: "Rent Dell or HP servers",
    icon: "🏠",
    color: "Orange",
  },
  {
    title: "Xeon Processor Upgrade",
    price: "₹7,999",
    description: "Add high-performance Xeon CPUs",
    icon: "💻",
    color: "Blue",
  },
  {
    title: "Ethernet Switch Rental",
    price: "₹3,999/mo",
    description: "Rent networking switches",
    icon: "🌐",
    color: "Emerald",
  },
  {
    title: "Free Installation Support",
    price: "Free",
    description: "Included with every purchase",
    icon: "✔️",
    highlight: true,
    color: "Purple",
  },
];

const highlightsData: Feature[] = [
  {
    id: "latest-server-models",
    icon: <Server size={32} />,
    name: "Latest Server Models",
    description: "Explore the newest HP, Dell, and IBM servers.",
    color: "Blue",
    badges: ["HPE DL385", "PowerEdge R720", "3-Year Warranty"],
    features: [
      {
        category: "Server Models",
        items: [
          "HPE ProLiant DL385 Gen10 Plus v2",
          "Dell PowerEdge R620/R630/R720",
          "IBM UCS C240 M3",
          "Latest technology integration",
        ],
      },
      {
        category: "Benefits",
        items: [
          "Starting at ₹49,999",
          "Free shipping and 25% off",
          "30-day free trial",
          "Customizable configurations",
        ],
      },
    ],
    cta: "Browse Latest Servers",
  },
  {
    id: "refurbished-servers",
    icon: <Box size={32} />,
    name: "Refurbished Servers",
    description: "Cost-effective refurbished servers with certified performance.",
    color: "Emerald",
    badges: ["25% Off", "3-Year Warranty", "Tested Spares"],
    features: [
      {
        category: "Refurbished Options",
        items: [
          "Dell PowerEdge R720",
          "HP ProLiant DL380 G9",
          "IBM FusionServer RH2288 V3",
          "Multi-level testing",
        ],
      },
      {
        category: "Advantages",
        items: [
          "Up to 25% cost savings",
          "3-year warranty included",
          "Free technical support",
          "Instant shipping",
        ],
      },
    ],
    cta: "Shop Refurbished Servers",
  },
  {
    id: "dedicated-hosting",
    icon: <CloudLightning size={32} />,
    name: "Dedicated Hosting",
    description: "Secure hosting with 30-day free trial.",
    color: "Purple",
    badges: ["30-Day Trial", "99.9% Uptime", "Secure"],
    features: [
      {
        category: "Hosting Features",
        items: [
          "Windows Dedicated Servers",
          "Dedicated server security",
          "30-day free trial",
          "Scalable bandwidth",
        ],
      },
      {
        category: "Security",
        items: [
          "Fortigate firewall integration",
          "DDoS protection",
          "24/7 monitoring",
          "Data encryption",
        ],
      },
    ],
    cta: "Start Hosting Today",
  },
  {
    id: "workstation-performance",
    icon: <Wrench size={32} />,
    name: "Workstation Performance",
    description: "High-performance workstations for rendering and design.",
    color: "Orange",
    badges: ["HP Z-Series", "Dell Precision", "3-Year Warranty"],
    features: [
      {
        category: "Workstation Models",
        items: [
          "HP Z620",
          "Dell Precision T5810",
          "Custom GPU options",
          "High RAM capacity",
        ],
      },
      {
        category: "Benefits",
        items: [
          "Optimized for rendering",
          "3-year warranty",
          "Free shipping",
          "Technical support included",
        ],
      },
    ],
    cta: "Explore Workstations",
  },
  {
    id: "it-rental-solutions",
    icon: <DollarSign size={32} />,
    name: "IT Rental Solutions",
    description: "Flexible rental options for servers and switches.",
    color: "Red",
    badges: ["Dell Rental", "Ethernet Switches", "Cost-Effective"],
    features: [
      {
        category: "Rental Options",
        items: [
          "Dell Server Rental",
          "Ethernet Switches Rental",
          "Fortigate Firewall Rental",
          "Short-term projects",
        ],
      },
      {
        category: "Benefits",
        items: [
          "Starting at ₹10,999/mo",
          "No upfront investment",
          "Free installation support",
          "Flexible contract terms",
        ],
      },
    ],
    cta: "Rent IT Equipment",
  },
];

export const CloudServicesData = {
  features: featuresData,
  suite: suiteData,
  solutions: specialSolutions,
  infrastructure: infrastructureData,
  comparison: comparisonData,
  highlights: highlightsData,
  addons: addonsData,
};