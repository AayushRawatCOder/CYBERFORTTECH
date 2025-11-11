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
    gradient: 'linear-gradient(135deg, #115e59 0%, #134e4a 100%)',
    borderColor: 'rgba(45, 212, 191, 0.3)',
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

const getGradient = (color: string): string => {
  const gradients: Record<string, string> = {
    Emerald: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    Orange: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    Blue: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    Purple: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    Red: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  };
  return gradients[color] || 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)';
};

const getBorderColor = (color: string): string => {
  const borders: Record<string, string> = {
    Emerald: 'rgba(16, 185, 129, 0.3)',
    Orange: 'rgba(249, 115, 22, 0.3)',
    Blue: 'rgba(59, 130, 246, 0.3)',
    Purple: 'rgba(168, 85, 247, 0.3)',
    Red: 'rgba(239, 68, 68, 0.3)',
  };
  return borders[color] || 'rgba(107, 114, 128, 0.3)';
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
    gradient: getGradient(plan.color),
    borderColor: getBorderColor(plan.color),
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
      {isClient && (
        <>
          <div className="cyber-grid"></div>
          <div className="cyber-particles">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 12}s`,
                }}
              />
            ))}
          </div>
          <div className="scan-lines"></div>
        </>
      )}

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

            <div className={`card-glow ${hoveredCard === tier.id ? 'active' : ''}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
