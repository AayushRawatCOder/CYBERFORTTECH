import React, { useState, useEffect } from "react";
import "./ClientSection.scss";

interface GalleryLogo {
  name: string;
  path: string;
}

interface Stat {
  count: string;
  title: string;
  description: string;
}

const ClientSection: React.FC = () => {
  const logos: GalleryLogo[] = [
    { name: "aws", path: "/company-logo/aws4.svg" },
    { name: "cisco", path: "/company-logo/cisco-ar21.svg" },
    { name: "comptia", path: "/company-logo/compTIAtransparent.svg" },
    { name: "cyberark", path: "/company-logo/cyberark1.svg" },
    { name: "ec-council", path: "/company-logo/Ec_Council_Logo.svg" },
    { name: "google-cloud", path: "/company-logo/gcp1.svg" },
    { name: "hashicorp", path: "/company-logo/hashicorp1.svg" },
    { name: "infosec", path: "/company-logo/infosec.svg" },
    { name: "nextjs", path: "/company-logo/nextjswhite.svg" },
    { name: "nginx", path: "/company-logo/nginx-ar21.svg" },
    { name: "okta", path: "/company-logo/okta copy.svg" },
    { name: "sailpoint", path: "/company-logo/sailpoint.svg" },
    { name: "securden", path: "/company-logo/securden-logo.svg" },
  ];

  const stats: Stat[] = [
    {
      count: "100+",
      title: "Clients Served",
      description: "Trusted by them, we deliver top-tier protection around the clock."
    },
    {
      count: "24/7",
      title: "Security Monitoring",
      description: "Our 24/7 monitoring keeps threats at bay so you can focus on what matters."
    },
    {
      count: "98.9%",
      title: "Success Rate",
      description: "With this, we stand by our promise of reliable security and performance."
    }
  ];

  const [currentStatIndex, setCurrentStatIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [stats.length, isMobile]);

  const midIndex = Math.ceil(logos.length / 2);
  const leftColumnLogos = logos.slice(0, midIndex);
  const rightColumnLogos = logos.slice(midIndex);

  return (
    <section className="client-section">
      <div className="client-container">
        <div className="logos-wrapper">
          <div className="logo-column left-column">
            <div className="logo-track">
              {[...leftColumnLogos, ...leftColumnLogos, ...leftColumnLogos].map(
                (logo, index) => (
                  <div key={`left-${index}`} className="logo-item">
                    <img src={logo.path} alt={logo.name} loading="lazy" />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="logo-column right-column">
            <div className="logo-track">
              {[
                ...rightColumnLogos,
                ...rightColumnLogos,
                ...rightColumnLogos,
              ].map((logo, index) => (
                <div key={`right-${index}`} className="logo-item">
                  <img src={logo.path} alt={logo.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-row-mobile logo-row-rtl">
            <div className="logo-track-mobile">
              {[...leftColumnLogos, ...leftColumnLogos].map((logo, index) => (
                <div key={`mobile-row1-${index}`} className="logo-item">
                  <img src={logo.path} alt={logo.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-row-mobile logo-row-ltr">
            <div className="logo-track-mobile">
              {[...rightColumnLogos, ...rightColumnLogos].map((logo, index) => (
                <div key={`mobile-row2-${index}`} className="logo-item">
                  <img src={logo.path} alt={logo.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="client-content">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-item ${!isMobile && index === currentStatIndex ? 'active' : ''}`}
              >
                <h1 className="client-count">{stat.count}</h1>
                <h2 className="client-title">{stat.title}</h2>
                <p className="client-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
