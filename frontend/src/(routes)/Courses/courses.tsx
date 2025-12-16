import React from 'react'
import CourseHero from '../../components/courses/hero/courseshero'
import WhyPartner from '../../components/courses/whyourcourses/whycourse'
import WhyCourse from '../../components/courses/whyourcourses/whycourse'
import { CoursesFilterPage } from '../../components/courses/CoursesFilters/Filter'
import WhyChoose from '../../components/courses/whychoose/WhyChoose'
import FAQ from '../../components/common/FAQ/FAQ'
import SuccessStories from '../../components/common/Testimonial/SuccessStories'
import Educators from '../../components/courses/educator/Educator'
import ContactForm from '../../components/common/ContactForm/ContactForm'
import  styles  from "./courses.module.scss";

const CoursesPage = () => {
  return (
    <div className={styles.partnerPage}>
        <div className={styles.heroGlow}>
            <CourseHero/>
        </div>
        <div>
          <WhyCourse/>
        </div>
        <CoursesFilterPage/>
        <div className={styles.leftGlow}>
          <WhyChoose/>
          <SuccessStories/>
        </div>
        <div className={styles.rightGlow}>
          <Educators/>
          <FAQ/>
        </div>
        <div>
          <ContactForm/>
        </div>
    </div>
  )
}

export default CoursesPage