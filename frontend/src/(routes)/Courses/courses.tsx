import React from 'react'
import CourseHero from '../../components/courses/hero/courseshero'
import WhyPartner from '../../components/courses/whyourcourses/whycourse'
import WhyCourse from '../../components/courses/whyourcourses/whycourse'

const CoursesPage = () => {
  return (
    <div>
        <div>
            <CourseHero/>
        </div>
        <div>
          <WhyCourse/>
        </div>
    </div>
  )
}

export default CoursesPage