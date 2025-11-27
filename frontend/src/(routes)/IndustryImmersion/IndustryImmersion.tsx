import React from 'react'
import IndustryImmersionHeroSection from '../../components/industryImmersion/industryImmersionHeroSection/industryImmersionHero'
import IndustryImmersionFeatureSection from '../../components/industryImmersion/IndustryImmersionFeatureSection/IndustryImmersionFeatures'
import styles from './IndustryImmersion.module.scss'
import FAQ from '../../components/common/FAQ/FAQ'
import ContactForm from '../../components/common/ContactForm/ContactForm'
import SuccessStories from '../../components/common/Testimonial/SuccessStories'
import CourseCards from '../../components/common/CourseCards/CourseCards'

function IndustryImmersion() {
  return (
    <div className={styles.industryImmersionPage}>
      <div className={styles.heroGlow}>
        <IndustryImmersionHeroSection/>
        <IndustryImmersionFeatureSection/>
      </div>
      <CourseCards/>
      <div className={styles.rightGlow}>
        <SuccessStories/>
        <FAQ/>
      </div>
      <div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default IndustryImmersion
