import styles from './PartnershipOpportunities.module.scss';
import globalPartnerIcon from "../../../assets/icons/GlobalPartners.png";
import educationPartnerIcon from "../../../assets/icons/EducationPartners.png";
import corporatePartnerIcon from "../../../assets/icons/CorporatePartners.png";
import technologyPartnerIcon from "../../../assets/icons/TechnologyPartners.png";

const partnershipData = [
  {
    id: 1,
    title: 'Technology Partners',
    description: 'Integrate your solutions with our platform to deliver enhanced security capabilities.',
    icon: technologyPartnerIcon,
    color: 'cyan',
    benefits: [
      'Basic Vulnerability Scanning',
      'Web L7/L1 Pentesting (Basic)',
      'SIEM/SOC (Email & WhatsApp)',
      'Basic Security Monitoring'
    ]
  },
  {
    id: 2,
    title: 'Education Partners',
    description: 'Collaborate on training programs and curriculum development for cybersecurity education.',
    icon: educationPartnerIcon,
    color: 'green',
    benefits: [
      'Basic Vulnerability Scanning',
      'Web L7/L1 Pentesting (Basic)',
      'SIEM/SOC (Email & WhatsApp)',
      'Basic Security Monitoring'
    ]
  },
  {
    id: 3,
    title: 'Corporate Partners',
    description: 'Strategic alliances to address complex cybersecurity challenges in the enterprise.',
    icon: corporatePartnerIcon,
    color: 'orange',
    benefits: [
      'Basic Vulnerability Scanning',
      'Web L7/L1 Pentesting (Basic)',
      'SIEM/SOC (Email & WhatsApp)',
      'Basic Security Monitoring'
    ]
  },
  {
    id: 4,
    title: 'Global Partners',
    description: 'International partnerships to expand reach and develop region-specific solutions.',
    icon: globalPartnerIcon,
    color: 'blue',
    benefits: [
      'Basic Vulnerability Scanning',
      'Web L7/L1 Pentesting (Basic)',
      'SIEM/SOC (Email & WhatsApp)',
      'Basic Security Monitoring'
    ]
  }
];

export default function PartnershipOpportunities() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          PARTNERSHIP 
          <br/>
          <span className={styles.gradient}>OPPORTUNITIES</span>
        </h1>
        <p className={styles.subtitle}>Explore the different ways to partner with CyberFort</p>
      </div>

      <div className={styles.cardsGrid}>
        {partnershipData.map((partner) => (
          <div key={partner.id} className={styles.cardOuter}>
            <div className={styles.cardInner}>
              <div className={`${styles.iconBox} ${styles[`${partner.color}Icon`]}`}>
                <img src={partner.icon} alt={partner.title} className={styles.iconImage} />
              </div>

              <h2 className={styles.cardTitle}>{partner.title}</h2>
              <p className={styles.cardDescription}>{partner.description}</p>

              <div className={styles.benefits}>
                <h3 className={styles.benefitsTitle}>Key Benefits</h3>
                <ul className={styles.benefitsList}>
                  {partner.benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      <span className={styles.checkmark}>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={styles.button}>
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
