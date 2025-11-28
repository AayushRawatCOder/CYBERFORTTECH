// CourseCards.tsx
import React from 'react';
import styles from './CourseCards.module.scss';

// Import icons
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

interface Course {
  image: string;
  level: 'ADVANCED' | 'BEGINNER' | 'INTERMEDIATE';
  category: string;
  rating: number;
  seatsLeft: number;
  title: string;
  duration: string;
  startDate: string;
  participants: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: string;
  createdDate: Date;
}

interface FilterState {
  sortBy: 'latest' | 'oldest';
  categories: string[];
  levels: string[];
  priceRange: number;
  searchQuery: string;
}

interface CourseCardsProps {
  filters: FilterState;
}

const allCourses: Course[] = [
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
    discount: '20% off',
    createdDate: new Date('2025-06-01')
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
    discount: '18% off',
    createdDate: new Date('2025-07-01')
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
    discount: '16% off',
    createdDate: new Date('2025-06-15')
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
    discount: '17% off',
    createdDate: new Date('2025-06-20')
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
    discount: '29% off',
    createdDate: new Date('2025-06-10')
  },
  {
    image: Course1,
    level: 'INTERMEDIATE',
    category: 'CYBERSECURITY',
    rating: 4.6,
    seatsLeft: 7,
    title: 'Cybersecurity Specialist Advanced',
    duration: '45 days',
    startDate: '22nd June',
    participants: '190+',
    description: 'Master ethical hacking, penetration testing & cyber defense protocols.',
    price: 2100,
    originalPrice: 2500,
    discount: '16% off',
    createdDate: new Date('2025-05-25')
  }
];

export default function CourseCards({ filters }: CourseCardsProps) {
  const filterCourses = () => {
    let filtered = [...allCourses];

    // Filter by search query - only if search is not empty
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
      );
    }

    // Filter by categories - only if categories are selected
    if (filters.categories.length > 0) {
      filtered = filtered.filter(course => {
        const isTech = ['DATA SCIENCE', 'CYBERSECURITY', 'DATA ANALYTICS', 'DEVELOPMENT'].includes(course.category);
        return filters.categories.some(cat =>
          (cat === 'Tech' && isTech) || (cat === 'Non-Tech' && !isTech)
        );
      });
    }

    // Filter by levels - only if levels are selected
    if (filters.levels.length > 0) {
      filtered = filtered.filter(course =>
        filters.levels.some(level => level.toUpperCase() === course.level)
      );
    }

    // Filter by price - always apply
    filtered = filtered.filter(course => course.price <= filters.priceRange);

    // Sort by date
    filtered.sort((a, b) => {
      if (filters.sortBy === 'latest') {
        return b.createdDate.getTime() - a.createdDate.getTime();
      } else {
        return a.createdDate.getTime() - b.createdDate.getTime();
      }
    });

    return filtered;
  };

  const courses = filterCourses();

  return (
    <section className={styles.whyPartnerSection}>
      <div className={styles.container}>
        {courses.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px', 
            fontSize: '18px', 
            color: '#666',
            gridColumn: '1 / -1'
          }}>
            <p style={{ fontSize: '24px', marginBottom: '10px' }}>😞 No courses found</p>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
