import PartnerHeroSection from "../../components/Partner/HeroSection/PartnerHeroSection"
import PartnershipWorks from "../../components/Partner/PartnershipWorks/PartnershipWorks";
import TrustedPartners from "../../components/Partner/TrustedPartnerSection/TrustedPartners"
import styles from "./PartnerPage.module.scss";

const PartenerPage = () => {
  return (
    <div className={styles.partnerPage}>
      <PartnerHeroSection />
      <TrustedPartners />
      <PartnershipWorks/>
    </div>
  )
}

export default PartenerPage
