import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
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
}

interface PricingCardsProps {
  pricingData?: PricingTier[];
}

// Default fallback data
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
    ]
  },
  {
    id: 'essential',
    name: 'ESSENTIAL + ENDPOINT',
    price: '₹18,999',
    period: '/m',
    description: 'Comprehensive security coverage with advanced monitoring',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #065f46 100%)',
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
    ]
  },
  {
    id: 'pro',
    name: 'PRO DEFENSE SUITE',
    price: '₹45,000',
    period: '/m',
    description: 'Comprehensive security coverage with advanced monitoring',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
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
    ]
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE SHIELD',
    price: '₹2L',
    period: '/m',
    description: 'Comprehensive security coverage with advanced monitoring',
    popular: true,
    gradient: 'linear-gradient(135deg, #7e22ce 0%, #be185d 50%, #9f1239 100%)',
    borderColor: 'rgba(236, 72, 153, 0.5)',
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
    ]
  },
  {
    id: 'elite',
    name: 'ELITE CYBER COMMAND',
    price: '₹3L+',
    period: '/m',
    description: 'Comprehensive security coverage with advanced monitoring',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #064e3b 100%)',
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
    ]
  }
];

const PricingCards: React.FC<PricingCardsProps> = ({ pricingData }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use provided data or fallback to defaults
  const tiers = pricingData || defaultPricingTiers;

  return (
    <div className="pricing-container">
      {/* Cybersecurity themed background effects */}
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
            style={{
              background: tier.gradient,
              border: `1px solid ${tier.borderColor}`
            }}
          >
            {tier.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}
            
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
                GET STARTED
              </button>
            </div>

            {/* Cyber glow effect on hover */}
            <div className={`card-glow ${hoveredCard === tier.id ? 'active' : ''}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;