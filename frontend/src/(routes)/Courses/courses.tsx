import React from 'react'
import CourseHero from '../../components/courses/hero/courseshero'
import WhyPartner from '../../components/courses/whyourcourses/whycourse'
import WhyCourse from '../../components/courses/whyourcourses/whycourse'
import { CoursesFilterPage } from '../../components/courses/CoursesFilters/Filter'

const CoursesPage = () => {
  return (
    <div>
        <div>
            <CourseHero/>
        </div>
        <div>
          <WhyCourse/>
        </div>
        <CoursesFilterPage/>
    </div>
  )
}

export default CoursesPage