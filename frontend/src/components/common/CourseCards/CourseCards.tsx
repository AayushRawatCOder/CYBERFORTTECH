import styles from './CourseCards.module.scss';

// Import icons with unique names
import CalendarIcon from "../../../assets/icons/CelenderIcon.png";
import ThunderIcon from "../../../assets/icons/ThunderIcon.png";
import TimeIcon from "../../../assets/icons/TimeIcon.png";
import PersonIcon from "../../../assets/icons/PersonIcon.png";
import StarIcon from "../../../assets/icons/StarIcon.png";
import ArchivedIcon from "../../../assets/icons/ArchivedIcon.png";

// Import course images
import Course1 from "../../../assets/images/Course1.png";
import Course2 from "../../../assets/images/Course2.png";
import Course3 from "../../../assets/images/Course3.png";
import Course4 from "../../../assets/images/Course4.png";
import Course5 from "../../../assets/images/Course5.png";

const courses = [
  {
    image: Course1,
    level: 'ADVANCED',
    category: 'DATA SCIENCE',
    rating: 4.7,
    seatsLeft: 9,
    title: 'Next Gen Science Internship',
    duration: '2 months',
    startDate: '12th June',
    participants: '120+',
    description: 'Globally recognized credential for advanced system vulnerability analysis.',
    price: 1600,
    originalPrice: 2000,
    discount: '20% off'
  },
  {
    image: Course2,
    level: 'BEGINNER',
    category: 'DATA SCIENCE',
    rating: 4.3,
    seatsLeft: 20,
    title: 'AI Fundamentals Bootcamp',
    duration: '30 hours',
    startDate: '16th July',
    participants: '200+',
    description: 'Start your journey into Artificial Intelligence and Machine Learning.',
    price: 1800,
    originalPrice: 2200,
    discount: '18% off'
  },
  {
    image: Course3,
    level: 'INTERMEDIATE',
    category: 'CYBERSECURITY',
    rating: 4.6,
    seatsLeft: 7,
    title: 'Cybersecurity Specialist',
    duration: '45 days',
    startDate: '22nd June',
    participants: '190+',
    description: 'Master ethical hacking, penetration testing & cyber defense protocols.',
    price: 2100,
    originalPrice: 2500,
    discount: '16% off'
  },
  {
    image: Course4,
    level: 'ADVANCED',
    category: 'DATA ANALYTICS',
    rating: 4.8,
    seatsLeft: 5,
    title: 'Big Data Analyst',
    duration: '1 month',
    startDate: '5th July',
    participants: '80+',
    description: 'Data analysis badge for industry-ready data professionals.',
    price: 2400,
    originalPrice: 2900,
    discount: '17% off'
  },
  {
    image: Course5,
    level: 'BEGINNER',
    category: 'DEVELOPMENT',
    rating: 4.2,
    seatsLeft: 18,
    title: 'Frontend Dev Crash Course',
    duration: '3 weeks',
    startDate: '20th June',
    participants: '140+',
    description: 'Learn React, TypeScript, and modern responsive web techniques.',
    price: 1200,
    originalPrice: 1700,
    discount: '29% off'
  },
  {
    image: Course1,
    level: 'INTERMEDIATE',
    category: 'CYBERSECURITY',
    rating: 4.6,
    seatsLeft: 7,
    title: 'Cybersecurity Specialist',
    duration: '45 days',
    startDate: '22nd June',
    participants: '190+',
    description: 'Master ethical hacking, penetration testing & cyber defense protocols.',
    price: 2100,
    originalPrice: 2500,
    discount: '16% off'
  }
];

export default function CourseCards() {
  return (
    <section className={styles.whyPartnerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {courses.map((course, i) => (
            <div className={styles.cardOuter} key={i}>
              <div className={styles.cardInner}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className={styles.courseImage}
                  />
                  <span className={`${styles.levelBadge} ${
                    course.level === 'ADVANCED' 
                      ? styles.advanced 
                      : course.level === 'BEGINNER' 
                      ? styles.beginner 
                      : styles.intermediate
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <span className={styles.category}>{course.category}</span>
                
                <div className={styles.metaRow}>
                  <span className={styles.ratingBadge}>
                    <img src={StarIcon} alt="rating" className={styles.icon} />
                    <span>{course.rating}</span>
                  </span>
                  <span className={styles.seatsBadge}>
                    <img src={ThunderIcon} alt="seats" className={styles.icon} />
                    {course.seatsLeft} seats left
                  </span>
                  <span className={styles.archivedBadge}>
                    <img src={ArchivedIcon} alt="archived" className={styles.icon} />
                  </span>
                </div>
                
                <h3 className={styles.cardTitle}>{course.title}</h3>
                
                <div className={styles.metaRow}>
                  <span className={styles.infoBadge}>
                    <img src={TimeIcon} alt="duration" className={styles.infoBadgeicon} />
                    {course.duration}
                  </span>
                  <span className={styles.infoBadge}>
                    <img src={CalendarIcon} alt="start date" className={styles.infoBadgeicon} />
                    {course.startDate}
                  </span>
                  <span className={styles.infoBadge}>
                    <img src={PersonIcon} alt="participants" className={styles.infoBadgeicon} />
                    {course.participants}
                  </span>
                </div>
                
                <p className={styles.cardDescription}>{course.description}</p>
                
                <div className={styles.priceRow}>
                  <span className={styles.price}>₹{course.price}</span>
                  <span className={styles.originalPrice}>₹{course.originalPrice}</span>
                  <span className={styles.discount}>{course.discount}</span>
                </div>
                
                <button className={styles.enrollBtn}>ENROLL NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
