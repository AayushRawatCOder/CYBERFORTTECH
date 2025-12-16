import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { featuresData, type ServiceKey, type FeaturePlan } from '../../../Data/Data-service/Feature';
import './PricingCards.scss';

interface FeatureSection {
  category: string;
  items: string[];
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  gradient: string;
  borderColor: string;
  features: FeatureSection[];
  cta?: string;
  icon?: React.ReactNode;
}

interface PricingCardsProps {
  serviceKey: ServiceKey | null;
  pricingData?: PricingTier[];
}

const defaultPricingTiers: PricingTier[] = [
  {
    id: 'discovery',
    name: 'DISCOVERY STARTER',
    price: '₹0',
    period: '/m',
    description: 'Basic cyber visibility & threat scanning for small organizations',
    gradient: 'linear-gradient(180deg, #01E6DD 0%, #064e3b 40%, #000000 100%)',
    borderColor: 'linear-gradient(135deg, rgba(254, 143, 235, 0.75) 0%, rgba(1, 230, 221, 0.15) 100%)',
    features: [
      {
        category: 'Core Security',
        items: [
          'Basic Vulnerability Scanning',
          'Web L7/L1 Pentesting (Basic)',
          'SIEM/SOC (Email & WhatsApp)',
          'Basic Security Monitoring'
        ]
      }
    ],
    cta: 'Get Started'
  }
];

const getGradient = (color: string, popular: boolean): string => {
  if (popular) {
    return 'linear-gradient(180deg, #FE8FEB 0%, rgba(254, 143, 235, 0.5) 40%, #000000 100%)';
  }
  return 'linear-gradient(180deg, #01E6DD 0%, #064e3b 40%, #000000 100%)';
};

const getBorderColor = (): string => {
  return 'linear-gradient(135deg, rgba(254, 143, 235, 0.75) 0%, rgba(1, 230, 221, 0.15) 100%)';
};

const transformToTier = (plan: FeaturePlan): PricingTier => {
  const priceBadge = plan.badges.find(badge => badge.includes('₹'));
  let price = '₹0';
  let period = '/m';

  if (priceBadge) {
    if (priceBadge.includes('/')) {
      const parts = priceBadge.split('/');
      price = parts[0].trim();
      period = `/${parts[1].replace('Month', 'm').replace('Monthly', 'm').toLowerCase()}`;
    } else {
      price = priceBadge;
    }
  }

  const popular = plan.badges.some(badge =>
    badge.toLowerCase().includes('popular') || badge.toLowerCase().includes('most')
  );

  return {
    id: plan.id,
    name: plan.name.toUpperCase(),
    price,
    period,
    description: plan.description,
    popular,
    gradient: getGradient(plan.color, popular),
    borderColor: getBorderColor(),
    features: plan.features,
    cta: plan.cta,
    icon: plan.icon,
  };
};

const PricingCards: React.FC<PricingCardsProps> = ({ serviceKey, pricingData: propData }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tiers, setTiers] = useState<PricingTier[]>(defaultPricingTiers);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let newTiers: PricingTier[] = [];

      if (propData) {
        newTiers = propData;
      } else if (serviceKey && featuresData[serviceKey]) {
        newTiers = featuresData[serviceKey].map(transformToTier);
      } else {
        newTiers = featuresData.cybersecurity.map(transformToTier);
      }

      setTiers(newTiers);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [serviceKey, propData]);

  if (loading) {
    return (
      <div className="pricing-container loading">
        <div className="loading-shimmer">Loading pricing...</div>
      </div>
    );
  }

  return (
    <div className="pricing-container">
      <div className="pricing-grid">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`pricing-card ${tier.popular ? 'popular' : ''}`}
            onMouseEnter={() => setHoveredCard(tier.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {tier.popular && <div className="popular-badge">MOST POPULAR</div>}

            <div className="card-content">
              <div className="card-header">
                <h3 className="tier-name">{tier.name}</h3>
                <div className="price-wrapper">
                  <span className="price">{tier.price}</span>
                  <span className="period">{tier.period}</span>
                </div>
                <p className="description">{tier.description}</p>
              </div>

              <div className="features-wrapper">
                {tier.features.map((section, idx) => (
                  <div key={idx} className="feature-section">
                    <h4 className="section-title">{section.category}</h4>
                    <ul className="feature-list">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="feature-item">
                          <Check size={14} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <button className="cta-button">
                {tier.cta ? tier.cta.toUpperCase() : 'GET STARTED'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
