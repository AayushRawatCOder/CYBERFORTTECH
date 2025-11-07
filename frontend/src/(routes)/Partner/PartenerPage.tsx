import ContactForm from "../../components/common/ContactForm/ContactForm";
import FAQ from "../../components/common/FAQ/FAQ";
import SuccessStories from "../../components/common/Testimonial/SuccessStories";
import PartnerHeroSection from "../../components/Partner/HeroSection/PartnerHeroSection"
import PartnershipWorks from "../../components/Partner/PartnershipWorks/PartnershipWorks";
import TrustedPartners from "../../components/Partner/TrustedPartnerSection/TrustedPartners"
import WhyPartner from "../../components/Partner/WhyPartnerWithUS/WhyPartnerwithUs";
import styles from "./PartnerPage.module.scss";

const PartenerPage = () => {
  return (
    <div className={styles.partnerPage}>
  <div className={styles.heroGlow}>
    <PartnerHeroSection />
    <TrustedPartners />
  </div>

  <div className={styles.leftGlow}>
    <PartnershipWorks />
  </div>

  <div className={styles.centerGlow}>
    <WhyPartner />
    <SuccessStories/>
  </div>
  <div className={styles.rightGlow}>
  <FAQ/>
  <ContactForm/>
  </div>
</div>

  )
}

export default PartenerPage