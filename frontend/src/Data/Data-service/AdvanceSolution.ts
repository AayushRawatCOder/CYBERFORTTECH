// data-service/advance.ts
// Service to fetch advanced solutions data based on service category

interface AdvancedSolution {
  id: string;
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  isFree?: boolean;
}

// Advanced solutions data organized by service type
const advancedSolutionsData: Record<string, AdvancedSolution[]> = {
  cybersecurity: [
    {
      id: 'adv-cs-1',
      title: 'AWARENESS POSTERS',
      price: '₹0',
      priceUnit: 'm',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ],
      isFree: true
    },
    {
      id: 'adv-cs-2',
      title: 'SOP GENERATOR',
      price: '₹499',
      priceUnit: 'use',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ]
    },
    {
      id: 'adv-cs-3',
      title: 'EMAIL PHISHING TEST',
      price: '₹999',
      priceUnit: 'use',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ]
    },
    {
      id: 'adv-cs-4',
      title: 'DARK WEB MONITOR',
      price: '₹1,999',
      priceUnit: 'm',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ]
    },
    {
      id: 'adv-cs-5',
      title: 'EDR LITE (5 DEVICES)',
      price: '₹3,999',
      priceUnit: 'm',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ]
    },
    {
      id: 'adv-cs-6',
      title: 'BIOMETRIC ASSESS',
      price: '₹7,999',
      priceUnit: '',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ]
    },
    {
      id: 'adv-cs-7',
      title: 'USB DROP STIMULATION',
      price: '₹4,999',
      priceUnit: '',
      description: 'Upgrade basic plans with endpoint detection and response.',
      features: [
        'Basic Vulnerability Scanning',
        'Web L7/L1 Pentesting (Basic)'
      ]
    }
  ],

  ai: [
    {
      id: 'adv-ai-1',
      title: 'AI MODEL LIBRARY',
      price: '₹0',
      priceUnit: 'm',
      description: 'Access pre-trained AI models for quick implementation.',
      features: [
        'Pre-trained Model Access',
        'Basic API Integration'
      ],
      isFree: true
    },
    {
      id: 'adv-ai-2',
      title: 'DATA ANNOTATION',
      price: '₹599',
      priceUnit: 'use',
      description: 'Professional data labeling and annotation services.',
      features: [
        'Manual Data Labeling',
        'Quality Assurance Check'
      ]
    },
    {
      id: 'adv-ai-3',
      title: 'MODEL FINE-TUNING',
      price: '₹1,499',
      priceUnit: 'use',
      description: 'Fine-tune existing models with your custom data.',
      features: [
        'Custom Dataset Training',
        'Hyperparameter Optimization'
      ]
    },
    {
      id: 'adv-ai-4',
      title: 'AI MONITORING',
      price: '₹2,499',
      priceUnit: 'm',
      description: 'Real-time monitoring of AI model performance.',
      features: [
        'Performance Tracking',
        'Drift Detection'
      ]
    },
    {
      id: 'adv-ai-5',
      title: 'GPU COMPUTE',
      price: '₹4,999',
      priceUnit: 'm',
      description: 'Dedicated GPU resources for model training.',
      features: [
        'High-performance Computing',
        'Scalable Infrastructure'
      ]
    },
    {
      id: 'adv-ai-6',
      title: 'AI CONSULTING',
      price: '₹8,999',
      priceUnit: '',
      description: 'Expert AI strategy and implementation guidance.',
      features: [
        'Strategy Development',
        'Technical Architecture'
      ]
    },
    {
      id: 'adv-ai-7',
      title: 'CUSTOM AI SOLUTION',
      price: '₹5,999',
      priceUnit: '',
      description: 'Fully customized AI solution development.',
      features: [
        'End-to-end Development',
        'Deployment Support'
      ]
    }
  ],

  blockchain: [
    {
      id: 'adv-bc-1',
      title: 'TESTNET DEPLOYMENT',
      price: '₹0',
      priceUnit: 'm',
      description: 'Deploy and test smart contracts on testnet.',
      features: [
        'Testnet Access',
        'Basic Testing Tools'
      ],
      isFree: true
    },
    {
      id: 'adv-bc-2',
      title: 'CONTRACT AUDIT',
      price: '₹799',
      priceUnit: 'use',
      description: 'Security audit for smart contracts.',
      features: [
        'Vulnerability Scanning',
        'Audit Report Generation'
      ]
    },
    {
      id: 'adv-bc-3',
      title: 'GAS OPTIMIZATION',
      price: '₹1,299',
      priceUnit: 'use',
      description: 'Optimize smart contract gas usage.',
      features: [
        'Code Optimization',
        'Gas Cost Reduction'
      ]
    },
    {
      id: 'adv-bc-4',
      title: 'WALLET INTEGRATION',
      price: '₹1,799',
      priceUnit: 'm',
      description: 'Multi-wallet integration for dApps.',
      features: [
        'MetaMask Integration',
        'WalletConnect Support'
      ]
    },
    {
      id: 'adv-bc-5',
      title: 'IPFS STORAGE',
      price: '₹3,499',
      priceUnit: 'm',
      description: 'Decentralized storage solution.',
      features: [
        'IPFS Node Setup',
        'Pinning Services'
      ]
    },
    {
      id: 'adv-bc-6',
      title: 'TOKEN CREATION',
      price: '₹6,999',
      priceUnit: '',
      description: 'Custom token development and deployment.',
      features: [
        'ERC-20/BEP-20 Tokens',
        'Tokenomics Design'
      ]
    },
    {
      id: 'adv-bc-7',
      title: 'DAO SETUP',
      price: '₹4,499',
      priceUnit: '',
      description: 'Decentralized autonomous organization setup.',
      features: [
        'Governance Structure',
        'Voting Mechanism'
      ]
    }
  ],

  cloud: [
    {
      id: 'adv-cl-1',
      title: 'FREE TIER ACCESS',
      price: '₹0',
      priceUnit: 'm',
      description: 'Access cloud resources with free tier limits.',
      features: [
        'Basic Compute Resources',
        'Limited Storage'
      ],
      isFree: true
    },
    {
      id: 'adv-cl-2',
      title: 'AUTO-SCALING',
      price: '₹699',
      priceUnit: 'use',
      description: 'Automatic resource scaling based on demand.',
      features: [
        'Load-based Scaling',
        'Cost Optimization'
      ]
    },
    {
      id: 'adv-cl-3',
      title: 'BACKUP SOLUTION',
      price: '₹1,199',
      priceUnit: 'use',
      description: 'Automated backup and disaster recovery.',
      features: [
        'Automated Backups',
        'Point-in-time Recovery'
      ]
    },
    {
      id: 'adv-cl-4',
      title: 'CDN INTEGRATION',
      price: '₹1,899',
      priceUnit: 'm',
      description: 'Content delivery network for faster loading.',
      features: [
        'Global Edge Locations',
        'DDoS Protection'
      ]
    },
    {
      id: 'adv-cl-5',
      title: 'MONITORING SUITE',
      price: '₹3,799',
      priceUnit: 'm',
      description: 'Comprehensive cloud monitoring and alerts.',
      features: [
        'Real-time Monitoring',
        'Custom Alerts'
      ]
    },
    {
      id: 'adv-cl-6',
      title: 'SECURITY HARDENING',
      price: '₹7,499',
      priceUnit: '',
      description: 'Advanced cloud security configuration.',
      features: [
        'Security Best Practices',
        'Compliance Setup'
      ]
    },
    {
      id: 'adv-cl-7',
      title: 'MULTI-CLOUD SETUP',
      price: '₹4,799',
      priceUnit: '',
      description: 'Multi-cloud architecture implementation.',
      features: [
        'Cross-cloud Integration',
        'Vendor Independence'
      ]
    }
  ],

  development: [
    {
      id: 'adv-dev-1',
      title: 'CODE TEMPLATES',
      price: '₹0',
      priceUnit: 'm',
      description: 'Access starter templates and boilerplates.',
      features: [
        'Framework Templates',
        'Best Practice Examples'
      ],
      isFree: true
    },
    {
      id: 'adv-dev-2',
      title: 'CODE REVIEW',
      price: '₹599',
      priceUnit: 'use',
      description: 'Professional code review and feedback.',
      features: [
        'Expert Code Analysis',
        'Best Practice Recommendations'
      ]
    },
    {
      id: 'adv-dev-3',
      title: 'API DOCUMENTATION',
      price: '₹1,099',
      priceUnit: 'use',
      description: 'Automated API documentation generation.',
      features: [
        'OpenAPI/Swagger',
        'Interactive Documentation'
      ]
    },
    {
      id: 'adv-dev-4',
      title: 'TESTING SUITE',
      price: '₹1,699',
      priceUnit: 'm',
      description: 'Comprehensive testing infrastructure.',
      features: [
        'Unit Testing Setup',
        'Integration Testing'
      ]
    },
    {
      id: 'adv-dev-5',
      title: 'CI/CD PIPELINE',
      price: '₹3,599',
      priceUnit: 'm',
      description: 'Automated deployment pipeline setup.',
      features: [
        'GitHub Actions/GitLab CI',
        'Automated Deployments'
      ]
    },
    {
      id: 'adv-dev-6',
      title: 'PERFORMANCE AUDIT',
      price: '₹6,999',
      priceUnit: '',
      description: 'Complete application performance analysis.',
      features: [
        'Performance Profiling',
        'Optimization Recommendations'
      ]
    },
    {
      id: 'adv-dev-7',
      title: 'CODE MIGRATION',
      price: '₹4,599',
      priceUnit: '',
      description: 'Legacy code migration and modernization.',
      features: [
        'Technology Upgrade',
        'Refactoring Services'
      ]
    }
  ]
};

/**
 * Extract service type from route path
 * Example: '/services/cybersecurity' -> 'cybersecurity'
 */
export const getServiceTypeFromRoute = (pathname: string): string => {
  const match = pathname.match(/\/services\/([^\/]+)/);
  return match ? match[1] : 'cybersecurity';
};

/**
 * Fetch advanced solutions based on service type
 * @param serviceType - The service type (cybersecurity, ai, blockchain, cloud, development)
 * @returns Promise with array of advanced solutions
 */
export const getAdvancedSolutionsByService = async (
  serviceType: string
): Promise<AdvancedSolution[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return solutions based on service type, fallback to cybersecurity
  return advancedSolutionsData[serviceType.toLowerCase()] || advancedSolutionsData.cybersecurity;
};

/**
 * Fetch all available service types
 * @returns Promise with array of available service types
 */
export const getAvailableServices = async (): Promise<string[]> => {
  return Object.keys(advancedSolutionsData);
};

/**
 * Fetch a single advanced solution by ID
 * @param id - The solution ID
 * @returns Promise with solution or null
 */
export const getAdvancedSolutionById = async (
  id: string
): Promise<AdvancedSolution | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  for (const solutions of Object.values(advancedSolutionsData)) {
    const found = solutions.find(s => s.id === id);
    if (found) return found;
  }

  return null;
};

// For actual API implementation, replace with:
/*
export const getAdvancedSolutionsByService = async (
  serviceType: string
): Promise<AdvancedSolution[]> => {
  try {
    const response = await fetch(`/api/advanced-solutions?service=${serviceType}`);
    if (!response.ok) throw new Error('Failed to fetch advanced solutions');
    return await response.json();
  } catch (error) {
    console.error('Error fetching advanced solutions:', error);
    return [];
  }
};
*/