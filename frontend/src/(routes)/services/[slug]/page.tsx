import React from "react";
import { useParams, Link } from "react-router-dom";
import { technologies, type Technology } from "../../../Data/technologies";
import {
  featuresData,
  type ServiceKey,
} from "../../../Data/Data-service/Feature";
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

  const tech: Technology | undefined = technologies.find((t) => t.slug === slug);

  const getServiceKeyFromSlug = (slug: string): ServiceKey | null => {
    const slugToServiceKey: Record<string, ServiceKey> = {
      cybersecurity: "cybersecurity",
      "ai-": "ai",
      blockchain: "blockchain",
      computing: "cloud",
      development: "development",
    };
    return slugToServiceKey[slug] || null;
  };

  const serviceKey = slug ? getServiceKeyFromSlug(slug) : null;

  if (!tech) {
    return (
      <div className={styles.partnerPage}>
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
    <div className={styles.partnerPage}>
      <div className={styles.heroGlow}>
        <HeroSection />
        <PricingCards key={slug} serviceKey={serviceKey} />
      </div>


      <div className={styles.leftGlow}>
        <SpecializedSolutions />
        <AdvancedSolutions />
      </div>

      <div className={styles.rightGlow}>
        <SuccessStories />
        <FAQ />
        <ContactForm />
      </div>
    </div>
  );
};

export default ServicesDetail;

