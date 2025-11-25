import ContactForm from "../../components/common/ContactForm/ContactForm"
import FAQ from "../../components/common/FAQ/FAQ"
// import SuccessStories from "../../components/common/Testimonial/SuccessStories"
import HomeGallery from "../../components/Galary/HomeGalary/HomeGalary"
import ClientSection from "../../components/home/ClientSection/ClientSection"
import FeaturesSection from "../../components/home/FeatureSection/FeatureSection"
import HeroSection from "../../components/home/HeroSection/HeroSection"
import ImpactStats from "../../components/home/ImpactStats/ImpactStats"
import SecuritySolutions from "../../components/home/SecuritySolutions/SecuritySolution"
import SuccessStories from "../../components/home/Testimonial/SuccessStories"
import ThreatMap from "../../components/Home/ThreatMap/ThreatMap"
import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <div className={styles.partnerPage}>
      <HeroSection/>
      <div className={styles.leftGlow}>
        <ClientSection/>
        <ThreatMap/>
      </div>
      <FeaturesSection/>
      <div className={styles.centerGlow}>
        <ImpactStats/>
      </div>
      <SecuritySolutions/>
      <HomeGallery/>
      <div className={styles.rightGlow}>
        {/* <SuccessStories/> */}
        <SuccessStories/>
      </div>
      <FAQ/>
      <ContactForm/>
    </div>
  )
}

export default HomePage
