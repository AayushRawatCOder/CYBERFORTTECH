import React from "react";
import "./ClientSection.scss";

const ClientSection: React.FC = () => {
  const logos = [
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

  const midIndex = Math.ceil(logos.length / 2);
  const leftColumnLogos = logos.slice(0, midIndex);
  const rightColumnLogos = logos.slice(midIndex);

  return (
    <section className="client-section">
      <div className="client-container">
        <div className="logos-wrapper">
          {/* Left Column - Scrolling Down */}
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

          {/* Right Column - Scrolling Up */}
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
        </div>

        <div className="client-content">
          <h1 className="client-count">100+</h1>
          <h2 className="client-title">Clients Served</h2>
          <p className="client-description">
            Trusted by them, we deliver top-tier
            <br />
            protection around the clock.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
