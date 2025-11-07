// data-service/solution.ts
// Service to fetch solutions data based on slug
interface Solution {
  id: string;
  title: string;
  price: string;
  priceUnit: string;
  category: string;
  description: string;
  features: string[];
}

// Mock data structure - Replace with actual API calls
const solutionsData: Record<string, Solution[]> = {
  cybersecurity: [
    {
      id: '1',
      title: 'OT SENTINEL',
      price: '₹1.2L',
      priceUnit: 'month',
      category: 'Manufacturing & Critical Infrastructure',
      description: 'Industrial cybersecurity with OT visibility and anomaly detection.',
      features: [
        'Passive Asset Discovery (ICS-safe)',
        'Network Segmentation Audit',
        'Quarterly Firmware Review'
      ]
    },
    {
      id: '2',
      title: 'PHYSICAL RED TEAM',
      price: '₹49K',
      priceUnit: 'month',
      category: 'High-Security Organizations',
      description: 'Simulated physical penetration testing for enhanced security posture.',
      features: [
        'Red Team Exercises',
        'Social Engineering Simulations',
        'Post-Engagement Debriefs'
      ]
    }
  ],
  ai: [
    {
      id: '4',
      title: 'AI STRATEGY CONSULTING',
      price: '₹80K',
      priceUnit: 'month',
      category: 'Enterprise AI Adoption',
      description: 'Tailored AI roadmap development and implementation guidance.',
      features: [
        'AI Maturity Assessment',
        'Custom Model Selection',
        'Ethical AI Framework'
      ]
    },
    {
      id: '5',
      title: 'MACHINE LEARNING OPS',
      price: '₹1.5L',
      priceUnit: 'month',
      category: 'Data-Driven Organizations',
      description: 'End-to-end MLOps pipeline for scalable AI deployments.',
      features: [
        'Model Monitoring & Retraining',
        'Automated Deployment Pipelines',
        'Performance Analytics Dashboard'
      ]
    }
  ],
  blockchain: [
    {
      id: '7',
      title: 'BLOCKCHAIN IMPLEMENTATION',
      price: '₹2L',
      priceUnit: 'month',
      category: 'Supply Chain & Finance',
      description: 'Custom blockchain solutions for secure, decentralized transactions.',
      features: [
        'Smart Contract Development',
        'Node Infrastructure Setup',
        'Consensus Mechanism Optimization'
      ]
    },
    {
      id: '8',
      title: 'NFT MARKETPLACE BUILD',
      price: '₹1.8L',
      priceUnit: 'one-time',
      category: 'Digital Assets & Media',
      description: 'Full-stack NFT platform with wallet integration and royalties.',
      features: [
        'ERC-721/1155 Compliance',
        'IPFS Storage Integration',
        'Auction & Minting Modules'
      ]
    }
  ],
  cloud: [
    {
      id: '10',
      title: 'CLOUD MIGRATION SERVICES',
      price: '₹1L',
      priceUnit: 'month',
      category: 'Legacy System Modernization',
      description: 'Seamless migration to cloud with minimal downtime.',
      features: [
        'Assessment & Planning',
        'Hybrid Cloud Setup',
        'Data Transfer Optimization'
      ]
    },
    {
      id: '11',
      title: 'SERVERLESS ARCHITECTURE',
      price: '₹70K',
      priceUnit: 'month',
      category: 'Scalable Applications',
      description: 'Design and deployment of serverless apps for cost efficiency.',
      features: [
        'Function-as-a-Service Implementation',
        'Event-Driven Workflows',
        'Cost Monitoring Tools'
      ]
    }
  ],
  development: [
    {
      id: '13',
      title: 'CUSTOM SOFTWARE DEV',
      price: '₹90K',
      priceUnit: 'month',
      category: 'Bespoke Applications',
      description: 'Full-cycle development of tailored software solutions.',
      features: [
        'Agile Methodology',
        'UI/UX Design Integration',
        'CI/CD Pipeline Setup'
      ]
    },
    {
      id: '14',
      title: 'MOBILE APP DEVELOPMENT',
      price: '₹1.1L',
      priceUnit: 'one-time',
      category: 'Cross-Platform Mobility',
      description: 'Native and hybrid mobile apps for iOS and Android.',
      features: [
        'React Native/Flutter Usage',
        'Push Notification Integration',
        'App Store Optimization'
      ]
    }
  ]
};

/**
 * Fetch solutions based on slug
 * @param slug - The slug identifier for the solution category
 * @returns Promise with array of solutions
 */
export const getSolutionsBySlug = async (slug: string): Promise<Solution[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  // Return solutions based on slug, fallback to empty array if not found
  return solutionsData[slug] || [];
};

/**
 * Fetch all available slugs
 * @returns Promise with array of available slugs
 */
export const getAvailableSlugs = async (): Promise<string[]> => {
  return Object.keys(solutionsData);
};

/**
 * Fetch a single solution by ID
 * @param id - The solution ID
 * @returns Promise with solution or null
 */
export const getSolutionById = async (id: string): Promise<Solution | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  for (const solutions of Object.values(solutionsData)) {
    const found = solutions.find(s => s.id === id);
    if (found) return found;
  }
  
  return null;
};

// For actual API implementation, replace with:
/*
export const getSolutionsBySlug = async (slug: string): Promise<Solution[]> => {
  try {
    const response = await fetch(`/api/solutions/${slug}`);
    if (!response.ok) throw new Error('Failed to fetch solutions');
    return await response.json();
  } catch (error) {
    console.error('Error fetching solutions:', error);
    return [];
  }
};
*/