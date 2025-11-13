import React from 'react'
import AboutHero from '../../components/About/HeroOfferAbout/AboutHero'
import styles  from "./Aboutus.module.scss";
import OfferSection from '../../components/About/offer/offer';
import JourneySection from '../../components/About/Journey/JourneySection';

const Aboutus = () => {
  return (
   <>
   <div className={styles.centerGlow}>
    <AboutHero/>
   </div>
   <div>
    <OfferSection/>
   </div>
   <div>
    <JourneySection/>
   </div>
   
   </>
  )
}

export default Aboutus