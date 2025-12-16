import React, { useState, useEffect, useRef } from "react";
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

function lockBodyScroll() {
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {
  document.body.style.overflow = "";
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
    { count: "100+", title: "Clients Served", description: "Trusted by them, we deliver top-tier protection around the clock." },
    { count: "24/7", title: "Security Monitoring", description: "Our 24/7 monitoring keeps threats at bay so you can focus on what matters." },
    { count: "98.9%", title: "Success Rate", description: "With this, we stand by our promise of reliable security and performance." },
  ];

  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInSection, setIsInSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      unlockBodyScroll();
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionInView = rect.top <= 100 && rect.bottom >= windowHeight - 100;
      setIsInSection(sectionInView);

      if (!sectionInView) {
        unlockBodyScroll();
        return;
      }

      const now = Date.now();
      
      if (isTransitioning.current || now - lastScrollTime.current < 1600) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;

      if (direction === 1 && currentStatIndex < stats.length - 1) {
        e.preventDefault();
        lockBodyScroll();
        isTransitioning.current = true;
        lastScrollTime.current = now;
        setCurrentStatIndex(prev => prev + 1);
        
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1600);
      } else if (direction === -1 && currentStatIndex > 0) {
        e.preventDefault();
        lockBodyScroll();
        isTransitioning.current = true;
        lastScrollTime.current = now;
        setCurrentStatIndex(prev => prev - 1);
        
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1600);
      } else if (direction === 1 && currentStatIndex === stats.length - 1) {
        unlockBodyScroll();
      } else if (direction === -1 && currentStatIndex === 0) {
        unlockBodyScroll();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      unlockBodyScroll();
    };
  }, [currentStatIndex, isMobile, stats.length]);

  const midIndex = Math.ceil(logos.length / 2);
  const leftColumnLogos = logos.slice(0, midIndex);
  const rightColumnLogos = logos.slice(midIndex);

  const tripledLeft = [...leftColumnLogos, ...leftColumnLogos, ...leftColumnLogos];
  const tripledRight = [...rightColumnLogos, ...rightColumnLogos, ...rightColumnLogos];
  const doubledLeft = [...leftColumnLogos, ...leftColumnLogos];
  const doubledRight = [...rightColumnLogos, ...rightColumnLogos];

  return (
    <section ref={sectionRef} className="client-section">
      <div className="client-container">
        <div className="logos-wrapper">
          <div className="logo-column left-column">
            <div className="logo-track">
              {tripledLeft.map((logo, i) => (
                <div key={`left-${i}`} className="logo-item">
                  <img src={logo.path} alt={logo.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-column right-column">
            <div className="logo-track">
              {tripledRight.map((logo, i) => (
                <div key={`right-${i}`} className="logo-item">
                  <img src={logo.path} alt={logo.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-row-mobile logo-row-rtl">
            <div className="logo-track-mobile">
              {doubledLeft.map((logo, i) => (
                <div key={`mob1-${i}`} className="logo-item">
                  <img src={logo.path} alt={logo.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-row-mobile logo-row-ltr">
            <div className="logo-track-mobile">
              {doubledRight.map((logo, i) => (
                <div key={`mob2-${i}`} className="logo-item">
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
                className={`stat-item ${!isMobile && index === currentStatIndex ? "active slide-in" : ""}`}
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
