import ContactForm from "../../components/common/ContactForm/ContactForm"
import FAQ from "../../components/common/FAQ/FAQ"
import SuccessStories from "../../components/common/Testimonial/SuccessStories"
import ComparisonTable from "../../components/Services/ComparisonSection/ComparisonTable"
import CoreTechnologies from "../../components/Services/Coretechnologies/Coretechnologies"
import HeroSection from "../../components/Services/ServiceHeroSection/ServiceHeroSection"
import SecuritySolutions from "../../components/Services/SolutionsSection/Solutions"
import styles from './Servicespage.module.scss'

const Servicespage = () => {
  return (
    <div className={styles.partnerPage}>
      <div className={styles.heroGlow}>
      <HeroSection/>
      <CoreTechnologies/>
      </div>
      <div className={styles.leftGlow}>
      <ComparisonTable/>
      </div>
      <div className={styles.centerGlow}>
      <SecuritySolutions/>
      </div>
      <div className={styles.rightGlow}>
      <SuccessStories/>
      </div>
      <FAQ/>
      <ContactForm/>
    </div>
  )
}

export default Servicespage
