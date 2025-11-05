import { Award, Cloud, Cpu, Database, FileText, Settings, Users, Wrench, Bot, Sparkles, BarChart, CheckCircle, ShieldCheck, Lock } from "lucide-react";
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
    id: "ai-expertise",
    icon: <Cpu size={28} />,
    name: "AI Expertise",
    description: "World-class AI engineers delivering cutting-edge solutions.",
    color: "Blue",
    badges: ["PhD Researchers", "10+ Years Experience", "Certified AI Experts"],
    features: [
      {
        category: "Team Expertise",
        items: [
          "PhD-level AI researchers",
          "Machine learning engineers (TensorFlow, PyTorch)",
          "Data scientists with domain expertise",
          "MLOps specialists for deployment",
        ],
      },
      {
        category: "AI Development",
        items: [
          "Custom model development",
          "Model training and optimization",
          "Explainable AI (XAI) integration",
          "Continuous model monitoring",
        ],
      },
    ],
    cta: "Hire AI Experts",
  },
  {
    id: "ml-algorithms",
    icon: <Settings size={28} />,
    name: "Advanced ML Algorithms",
    description: "State-of-the-art algorithms for predictive and generative AI.",
    color: "Emerald",
    badges: ["Deep Learning", "NLP Expertise", "99% Accuracy"],
    features: [
      {
        category: "Algorithm Capabilities",
        items: [
          "Deep learning with CNNs and RNNs",
          "Natural Language Processing (NLP) models",
          "Reinforcement learning for optimization",
          "Generative AI with GANs and VAEs",
        ],
      },
      {
        category: "Performance",
        items: [
          "99% model accuracy for specific tasks",
          "Real-time inference capabilities",
          "Scalable model deployment",
          "Low-latency predictions",
        ],
      },
    ],
    cta: "Explore AI Models",
  },
  {
    id: "data-pipelines",
    icon: <Database size={28} />,
    name: "Data Pipelines",
    description: "Robust pipelines for data ingestion, processing, and analysis.",
    color: "Purple",
    badges: ["ETL Automation", "Big Data", "Real-Time"],
    features: [
      {
        category: "Data Engineering",
        items: [
          "Automated ETL pipelines",
          "Big data processing with Apache Spark",
          "Real-time data streaming",
          "Data quality and validation checks",
        ],
      },
      {
        category: "Integration",
        items: [
          "Integration with cloud platforms (AWS, GCP)",
          "Data lake and warehouse setup",
          "API-driven data ingestion",
          "Secure data storage",
        ],
      },
    ],
    cta: "Build Data Pipelines",
  },
  {
    id: "proven-results",
    icon: <Award size={28} />,
    name: "Proven Results",
    description: "Trusted by 200+ clients with 90% success rate.",
    color: "Orange",
    badges: ["200+ AI Projects", "90% Success", "5+ Patents"],
    features: [
      {
        category: "Track Record",
        items: [
          "200+ AI projects delivered",
          "90% success rate in model deployment",
          "Average 4x ROI for clients",
          "98% client retention rate",
        ],
      },
      {
        category: "Recognition",
        items: [
          "5+ AI patents filed",
          "Featured in AI conferences",
          "Google Cloud AI Partner",
          "AWS Machine Learning Competency",
        ],
      },
    ],
    cta: "View AI Case Studies",
  },
  {
    id: "ethical-ai",
    icon: <ShieldCheck size={28} />,
    name: "Ethical AI & Governance",
    description: "Developing responsible AI systems with a focus on fairness and transparency.",
    color: "Red",
    badges: ["AI Ethics", "Data Privacy", "Fairness Audits"],
    features: [
      {
        category: "Responsible AI",
        items: [
          "Bias detection and mitigation frameworks",
          "Explainable AI (XAI) for model transparency",
          "Fairness and equity audits",
          "Compliance with GDPR and other regulations",
        ],
      },
      {
        category: "Governance",
        items: [
          "Data privacy and security protocols",
          "Model risk management",
          "Ethical guidelines for AI deployment",
          "Continuous monitoring for unintended consequences",
        ],
      },
    ],
    cta: "Learn About Our AI Ethics",
  },
];

// Static data: Highlights
const highlightsData: Feature[] = [
  {
    id: "ai-automation",
    icon: <Bot size={32} />,
    name: "AI-Driven Automation",
    description: "Streamline operations with intelligent automation solutions.",
    color: "Blue",
    badges: ["RPA Expertise", "99% Efficiency", "Scalable"],
    features: [
      {
        category: "Automation Capabilities",
        items: [
          "Robotic Process Automation (RPA) with AI",
          "Workflow optimization with ML models",
          "Automated decision-making systems",
          "Integration with enterprise software",
        ],
      },
      {
        category: "Performance Benefits",
        items: [
          "99% process efficiency gains",
          "Scalable automation for large datasets",
          "Real-time process monitoring",
          "Reduced operational costs by up to 40%",
        ],
      },
    ],
    cta: "Automate Your Processes",
  },
  {
    id: "generative-ai",
    icon: <Sparkles size={32} />,
    name: "Generative AI Solutions",
    description: "Innovative content creation and design with generative AI.",
    color: "Emerald",
    badges: ["GANs & VAEs", "Content Creation", "High Fidelity"],
    features: [
      {
        category: "Generative Technologies",
        items: [
          "Generative Adversarial Networks (GANs)",
          "Variational Autoencoders (VAEs)",
          "Text-to-image generation models",
          "AI-driven content personalization",
        ],
      },
      {
        category: "Applications",
        items: [
          "Automated content generation for marketing",
          "Synthetic data for model training",
          "Creative design automation",
          "Customized user experiences",
        ],
      },
    ],
    cta: "Explore Generative AI",
  },
  {
    id: "real-time-analytics",
    icon: <BarChart size={32} />,
    name: "Real-Time AI Analytics",
    description: "Actionable insights with real-time data processing.",
    color: "Purple",
    badges: ["Real-Time", "Predictive Insights", "Scalable"],
    features: [
      {
        category: "Analytics Capabilities",
        items: [
          "Real-time data processing with Spark",
          "Predictive analytics with ML models",
          "Custom dashboards with Tableau integration",
          "Anomaly detection in streaming data",
        ],
      },
      {
        category: "Performance & Integration",
        items: [
          "Sub-second query response times",
          "Integration with AWS, GCP, Azure",
          "Scalable analytics pipelines",
          "Secure data visualization",
        ],
      },
    ],
    cta: "Get Real-Time Insights",
  },
  {
    id: "client-centric-strategy",
    icon: <CheckCircle size={32} />,
    name: "Client-Centric AI Strategy",
    description: "Tailored AI solutions aligned with your business goals.",
    color: "Orange",
    badges: ["Custom Solutions", "90% Satisfaction", "Consulting"],
    features: [
      {
        category: "Strategic Consulting",
        items: [
          "AI roadmap development",
          "Business process analysis for AI integration",
          "Custom AI solution design",
          "Stakeholder alignment workshops",
        ],
      },
      {
        category: "Client Success",
        items: [
          "90% client satisfaction rate",
          "Dedicated AI consultants",
          "Post-deployment optimization",
          "Ongoing training and support",
        ],
      },
    ],
    cta: "Plan Your AI Strategy",
  },
  {
    id: "enterprise-security",
    icon: <Lock size={32} />,
    name: "Enterprise-Grade Security",
    description: "Robust security protocols to protect your data and AI models.",
    color: "Red",
    badges: ["Data Encryption", "IAM", "Compliance"],
    features: [
      {
        category: "Data Security",
        items: [
          "End-to-end data encryption (at rest and in transit)",
          "Secure access control with IAM policies",
          "Regular vulnerability assessments and penetration testing",
          "Data anonymization and differential privacy",
        ],
      },
      {
        category: "Model & Infrastructure Security",
        items: [
          "Secure ML model deployment environments",
          "Adversarial attack detection and defense",
          "Compliance with industry standards (e.g., ISO 27001)",
          "Centralized security logging and monitoring",
        ],
      },
    ],
    cta: "Request Security Details",
  },
];

const suiteData: SuiteData = {
  title: "Comprehensive AI Development Suite",
  icon: "🤖",
  description:
    "End-to-end AI solutions with custom model development, data pipelines, and scalable deployment for transformative business outcomes.",
  features: [
    "Custom AI model development",
    "NLP and computer vision solutions",
    "Automated data pipelines",
    "Cloud-based model deployment",
    "MLOps for continuous monitoring",
    "Explainable AI integration",
    "Big data processing",
    "Real-time inference",
    "Model optimization",
    "AI consulting and strategy",
    "Data security and compliance",
    "Post-deployment support",
  ],
  metrics: [
    { label: "Model Accuracy", value: "90%+" },
    { label: "Deployment Time", value: "4-8 weeks" },
    { label: "Client Satisfaction", value: "90%" },
    { label: "Inference Speed", value: "<100 ms" },
  ],
  gradient: "blue",
  cta: "Start Your AI Project",
};

const specialSolutions: SolutionData[] = [
  {
    icon: "📊",
    title: "Predictive Analytics",
    price: "₹2.5L",
    period: "/project",
    target: "Data-Driven Businesses",
    shortDescription: "Predictive models for actionable business insights.",
    fullDescription:
      "Custom predictive analytics solutions using machine learning to forecast trends, optimize operations, and drive decision-making.",
    features: [
      "Time-series forecasting models",
      "Customer behavior analysis",
      "Churn prediction",
      "Demand forecasting",
      "Data pipeline automation",
      "Real-time analytics dashboard",
      "Model explainability",
      "Cloud deployment",
      "Ongoing model tuning",
    ],
    delivery: "Predictive analytics platform",
    cta: "Get Predictive Insights",
    gradient: "emerald",
  },
  {
    icon: "🗣️",
    title: "NLP Chatbot",
    price: "₹2L",
    period: "/project",
    target: "Customer Service",
    shortDescription: "Intelligent chatbots for automated customer support.",
    fullDescription:
      "AI-powered chatbots with natural language processing for 24/7 customer support, lead generation, and user engagement.",
    features: [
      "NLP with BERT or GPT models",
      "Multichannel support (web, mobile)",
      "Custom intents and responses",
      "Sentiment analysis",
      "Integration with CRM systems",
      "Scalable cloud hosting",
      "Analytics dashboard",
      "Security compliance",
      "Post-launch support",
    ],
    delivery: "Fully functional chatbot",
    cta: "Build Your Chatbot",
    gradient: "blue",
  },
];

const infrastructureData: InfrastructureItem[] = [
  {
    id: "ai-team",
    icon: <Users size={28} />,
    title: "AI Team",
    description: "Expert AI professionals for innovative solutions.",
    color: "Blue",
    sections: [
      {
        title: "",
        color: "#3b82f6",
        items: [
          "AI Researchers (PhD-level)",
          "Machine Learning Engineers",
          "Data Scientists",
          "MLOps Engineers",
          "Data Engineers",
          "AI Consultants",
        ],
      },
    ],
  },
  {
    id: "ai-tools",
    icon: <Wrench size={28} />,
    title: "AI Tools",
    description: "Advanced tools for AI development and deployment.",
    color: "Emerald",
    sections: [
      {
        title: "ML Frameworks",
        color: "#10b981",
        items: [
          "TensorFlow, PyTorch",
          "Scikit-learn, XGBoost",
          "Hugging Face Transformers",
          "OpenCV for computer vision",
        ],
      },
      {
        title: "MLOps & Data",
        color: "#10b981",
        items: [
          "Kubeflow, MLflow",
          "Apache Spark, Airflow",
          "Jupyter, Pandas",
          "DVC for version control",
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud platforms for AI workloads.",
    color: "Purple",
    sections: [
      {
        title: "Cloud Platforms",
        color: "#8b5cf6",
        items: [
          "AWS SageMaker",
          "Google Cloud AI Platform",
          "Azure Machine Learning",
          "GCP BigQuery",
        ],
      },
      {
        title: "Performance & Security",
        color: "#8b5cf6",
        items: [
          "GPU-accelerated computing",
          "Data encryption at rest",
          "IAM-based access control",
          "Auto-scaling clusters",
        ],
      },
    ],
  },
  {
    id: "processes-standards",
    icon: <FileText size={28} />,
    title: "Processes & Standards",
    description: "Best practices for AI development and governance.",
    color: "Orange",
    sections: [
      {
        title: "AI Development",
        color: "#f59e0b",
        items: [
          "CRISP-DM methodology",
          "Model validation frameworks",
          "Ethical AI guidelines",
          "Data governance policies",
        ],
      },
      {
        title: "Quality Assurance",
        color: "#f59e0b",
        items: [
          "Model performance monitoring",
          "Bias and fairness audits",
          "Data quality checks",
          "Regulatory compliance",
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
    title: "AI Model Fine-Tuning",
    price: "₹9,999/mo",
    description: "Custom fine-tuning for enhanced model accuracy",
    icon: "⚙️",
    color: "Blue",
  },
  {
    title: "Real-Time Inference API",
    price: "₹4,999/mo",
    description: "Low-latency API for real-time AI predictions",
    icon: "⚡",
    color: "Emerald",
  },
  {
    title: "Synthetic Data Generator",
    price: "₹2,999/use",
    description: "AI-generated synthetic datasets for training",
    icon: "📊",
    color: "Purple",
  },
  {
    title: "Explainable AI Module",
    price: "₹6,999",
    description: "One-time integration for model transparency",
    icon: "🔍",
    color: "Orange",
  },
  {
    title: "MLOps Monitoring Dashboard",
    price: "₹3,999/mo",
    description: "Real-time model performance monitoring",
    icon: "📈",
    color: "Blue",
  },
  {
    title: "AI Strategy Workshop",
    price: "₹12,999",
    description: "One-time tailored AI roadmap session",
    icon: "🧠",
    color: "Emerald",
  },
  {
    title: "AI Ethics Guidelines",
    price: "Free (Digital)",
    description: "Included with every AI plan",
    icon: "📜",
    highlight: true,
    color: "Purple",
  },
];

export const AiData = {
  features: featuresData,
  suite: suiteData,
  solutions: specialSolutions,
  infrastructure: infrastructureData,
  comparison: comparisonData,
  highlights: highlightsData, 
  addons:addonsData,
};