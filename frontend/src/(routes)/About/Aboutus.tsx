import React from "react";
import AboutHero from "../../components/About/HeroOfferAbout/AboutHero";
import styles from "./Aboutus.module.scss";
import OfferSection from "../../components/About/offer/offer";
import JourneySection from "../../components/About/Journey/JourneySection";
import OurImpact from "../../components/About/Impact/OurImpact";
import WhyChooseUs from "../../components/About/WhyChooseUs/WhyChooseUs";
import ContactForm from "../../components/common/ContactForm/ContactForm";
import HomeGallery from "../../components/Galary/HomeGalary/HomeGalary";
import Gallery from "../../components/About/Gallery/Gallery";

const Aboutus = () => {
  return (
    <>
      <div className={styles.centerGlow}>
        <AboutHero />
      </div>
      <div>
        <OfferSection />
      </div>
      <div>
        <JourneySection />
      </div>
      <div>
        <OurImpact />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
};

export default Aboutus;
