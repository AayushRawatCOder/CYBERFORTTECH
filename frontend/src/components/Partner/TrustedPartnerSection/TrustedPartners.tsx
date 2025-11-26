import React, { useState } from 'react';
import styles from './TrustedPartner.module.scss';
import TechnologyIcon from "../../../assets/icons/Technology.png";
import EducationIcon from "../../../assets/icons/Education.png";
import GovernmentIcon from "../../../assets/icons/Goverment.png";
import CorporateIcon from "../../../assets/icons/corporate.png";

interface Logo {
  name: string;
  path: string;
  category: string;
}

const TrustedPartners: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('technology');
  const logos: Logo[] = [
    { name: "sailpoint", path: "/company-logo/sailpoint.svg", category: "technology" },
    { name: "cieh", path: "/company-logo/cieh.svg", category: "education" },
    { name: "nginx", path: "/company-logo/nginx-ar21.svg", category: "technology" },
    { name: "hashicorp", path: "/company-logo/hashicorp1.svg", category: "technology" },
    { name: "nextjs", path: "/company-logo/nextjswhite.svg", category: "technology" },
    { name: "comptia", path: "/company-logo/compTIAtransparent.svg", category: "education" },
    { name: "infosec", path: "/company-logo/infosec.svg", category: "technology" },
    { name: "okta", path: "/company-logo/okta copy.svg", category: "technology" },
    { name: "sailpoint2", path: "/company-logo/sailpoint.svg", category: "corporate" },
    { name: "cisco", path: "/company-logo/cisco-ar21.svg", category: "technology" },
    { name: "google-cloud", path: "/company-logo/gcp1.svg", category: "technology" },
    { name: "cyberark", path: "/company-logo/cyberark1.svg", category: "technology" },
    { name: "react", path: "/company-logo/react.svg", category: "technology" },
    { name: "ec-council", path: "/company-logo/Ec_Council_Logo.svg", category: "education" },
    { name: "aws", path: "/company-logo/aws4.svg", category: "technology" },
    { name: "cisco2", path: "/company-logo/cisco-ar21.svg", category: "corporate" },
    { name: "google-cloud2", path: "/company-logo/gcp1.svg", category: "corporate" },
    { name: "cyberark2", path: "/company-logo/cyberark1.svg", category: "corporate" },
    { name: "react2", path: "/company-logo/react.svg", category: "corporate" },
    { name: "securden", path: "/company-logo/securden-logo.svg", category: "government" },
  ];
  const categories = [
    { id: 'technology', label: 'TECHNOLOGY', icon: TechnologyIcon },
    { id: 'education', label: 'EDUCATION', icon: EducationIcon },
    { id: 'corporate', label: 'CORPORATE', icon: CorporateIcon },
    { id: 'government', label: 'GOVERNMENT', icon: GovernmentIcon },
  ];
  const filteredLogos = logos.filter(logo => logo.category === activeCategory);
  const rowCount = 2;
  const logosPerRow = Math.ceil(filteredLogos.length / rowCount);
  const row1Logos = filteredLogos.slice(0, logosPerRow);
  const row2Logos = filteredLogos.slice(logosPerRow);
  return (
    <section className={styles.trustedPartners}>
      <div className={styles.categoryTabs}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.categoryTab} ${activeCategory === category.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <img src={category.icon} alt={category.label} className={styles.categoryIcon} />
            {category.label}
          </button>
        ))}
      </div>
      <div className={styles.logosContainer}>
        <div className={`${styles.logoRow} ${styles.row1}`}>
          <div className={styles.logoTrack}>
            {[...row1Logos, ...row1Logos, ...row1Logos].map((logo, index) => (
              <div key={`row1-${index}`} className={styles.logoItem}>
                <img src={logo.path} alt={logo.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.logoRow} ${styles.row2}`}>
          <div className={styles.logoTrack}>
            {[...row2Logos, ...row2Logos, ...row2Logos].map((logo, index) => (
              <div key={`row2-${index}`} className={styles.logoItem}>
                <img src={logo.path} alt={logo.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;