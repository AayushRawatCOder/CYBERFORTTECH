// src/pages/ServicesDetail.tsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { technologies, type Technology } from "../../../Data/technologies";
import {
  featuresData,
  type ServiceKey,
} from "../../../Data/Data-service/Feature"; // Import featuresData
import styles from "./ServicesDetail.module.scss";
import HeroSection from "../../../components/Services/ServiceHeroSection/ServiceHeroSection";
import PricingCards from "../../../components/Services/SpecialServices/SpecialServices";
import SpecializedSolutions from "../../../components/Services/SpecializedSolutions/SpecializedSolutions";
import AdvancedSolutions from "../../../components/Services/AdvancedSolutions/AdvancedSolutions";
import SuccessStories from "../../../components/common/Testimonial/SuccessStories";
import FAQ from "../../../components/common/FAQ/FAQ";
import ContactForm from "../../../components/common/ContactForm/ContactForm";

const ServicesDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the technology by slug
  const tech: Technology | undefined = technologies.find(
    (t) => t.slug === slug
  );

  // Map technology slugs to featuresData service keys
  const getServiceKeyFromSlug = (slug: string): ServiceKey | null => {
    const slugToServiceKey: Record<string, ServiceKey> = {
      cybersecurity: "cybersecurity",
      "ai-": "ai", // Map 'ai-ml' slug to 'ai' service key
      blockchain: "blockchain",
      computing: "cloud", // Map 'cloud-computing' slug to 'cloud' service key
      development: "development", // Map 'software-development' slug to 'development' service key
    };

    return slugToServiceKey[slug] || null;
  };

  // Get the service key for featuresData
  const serviceKey = slug ? getServiceKeyFromSlug(slug) : null;

  // Check if pricing data exists for this service
  const hasPricingData = serviceKey && featuresData[serviceKey];

  // Handle 404 - service not found
  if (!tech) {
    return (
      <div className={styles.container}>
        <div className={styles.errorContainer}>
          <h1>Service Not Found</h1>
          <p>The service "{slug}" doesn't exist.</p>
          <Link to="/services" className={styles.backButton}>
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.servicesDetail}>
      <div className={styles.container}>
        {/* Route Information Banner */}
        <div className={styles.routeInfo}>
          <div className={styles.routePath}>
            <span className={styles.routeLabel}>Current Route:</span>
            <code className={styles.routeCode}>/services/{slug}</code>
          </div>
          <div className={styles.availableRoutes}>
            <span className={styles.routesLabel}>Available Services:</span>
            <div className={styles.routeBadges}>
              {technologies.map((technology) => (
                <Link
                  key={technology.slug}
                  to={`/services/${technology.slug}`}
                  className={`${styles.routeBadge} ${
                    technology.slug === slug ? styles.activeRoute : ""
                  }`}
                >
                  {technology.slug}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          ← Back to Services
        </button>

        {/* Service Content */}
        <div className={styles.detailContent}>
          <div className={styles.serviceHeader}>
            <div
              className={styles.iconWrapper}
              style={{ backgroundColor: tech.iconBg }}
            >
              <img
                src={tech.icon}
                alt={tech.title}
                className={styles.detailIcon}
              />
            </div>

            <h1 className={styles.detailTitle}>{tech.title}</h1>
            <p className={styles.detailDescription}>{tech.description}</p>

            {/* Pricing Data Status */}
            <div className={styles.pricingStatus}>
              {hasPricingData ? (
                <span className={styles.pricingAvailable}>
                  ✓ Pricing plans available
                </span>
              ) : (
                <span className={styles.pricingUnavailable}>
                  ⚠ No specific pricing data
                </span>
              )}
            </div>
          </div>

          {/* Route Details Card */}
          <div className={styles.routeDetails}>
            <h2>Route Information</h2>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Current Slug:</span>
                <code className={styles.detailValue}>{slug}</code>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Service ID:</span>
                <span className={styles.detailValue}>{tech.id}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Features Count:</span>
                <span className={styles.detailValue}>
                  {tech.features.length}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Service Key:</span>
                <code className={styles.detailValue}>
                  {serviceKey || "N/A"}
                </code>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Pricing Plans:</span>
                <span className={styles.detailValue}>
                  {hasPricingData ? featuresData[serviceKey!].length : 0}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Border Color:</span>
                <span
                  className={styles.colorDot}
                  style={{ backgroundColor: tech.borderColor }}
                ></span>
                <code className={styles.detailValue}>{tech.borderColor}</code>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className={styles.featuresSection}>
            <h2>Key Features</h2>
            <ul className={styles.featuresList}>
              {tech.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <div
                    className={styles.featureBullet}
                    style={{ backgroundColor: tech.borderColor }}
                  ></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Content */}
          <section className={styles.moreInfo}>
            <h2>Why Choose Our {tech.title}?</h2>
            <p>
              This is the detailed view for {tech.title}. You can add more
              content, pricing information, case studies, or contact forms here.
            </p>
          </section>

          {/* CTA Button */}
          <button className={styles.ctaButton}>
            Get a Quote for {tech.title}
          </button>
        </div>

        {/* Debug Information - Remove in production */}
        <div className={styles.debugInfo}>
          <h3>Debug Information</h3>
          <div className={styles.debugSection}>
            <h4>Service Mapping:</h4>
            <pre className={styles.debugCode}>
              {JSON.stringify(
                {
                  slug,
                  serviceKey,
                  hasPricingData,
                  availablePlans: hasPricingData
                    ? featuresData[serviceKey!].map((p) => p.name)
                    : [],
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>
      </div>

      {/* Hero Section - Pass service data if needed */}
      <HeroSection />

      {/* Pricing Cards - This will automatically fetch data based on serviceKey */}
      {/* Pricing Cards */}
      <PricingCards key={slug} serviceKey={serviceKey} />

      <SpecializedSolutions/>
      <AdvancedSolutions/>

      <SuccessStories/>
      <FAQ/>
      <ContactForm/>
    </div>
  );
};

export default ServicesDetail;
