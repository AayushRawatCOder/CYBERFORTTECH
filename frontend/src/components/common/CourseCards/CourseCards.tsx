import styles from './CourseCards.module.scss';

const courses = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
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
        {/* <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.colorful}>Explore</span>
            <span className={styles.highlight}> Internships</span>
          </h2>
          <p className={styles.subtitle}>
            Choose a program and start your data-driven career.
          </p>
        </div> */}
        <div className={styles.grid}>
          {courses.map((course, i) => (
            <div className={styles.cardOuter} key={i}>
              <div className={styles.cardInner}>
                <div style={{ width: '100%', borderRadius: 20, overflow: 'hidden', marginBottom: 16, position: 'relative' }}>
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 14,
                      background: course.level === 'ADVANCED'
                        ? 'rgba(0,255,0,0.15)'
                        : course.level === 'BEGINNER'
                        ? 'rgba(255,165,0,0.17)'
                        : 'rgba(23,200,255,0.12)',
                      color: course.level === 'ADVANCED'
                        ? '#66ffa2'
                        : course.level === 'BEGINNER'
                        ? '#ffa500'
                        : '#17c8ff',
                      fontWeight: 700,
                      fontSize: 12,
                      padding: '6px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(200,200,255,0.11)'
                    }}
                  >{course.level}</span>
                </div>
                <span className={styles.category}>{course.category}</span>
                <div style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
                    <span style={{ color: '#00ffea', fontSize: '1em' }}>★</span>
                    <span>{course.rating}</span>
                  </span>
                  <span style={{
                    background: 'rgba(77,70,50,0.33)',
                    color: '#fffde9',
                    fontWeight: 400,
                    borderRadius: 6,
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 8px'
                  }}>
                    ⚡{course.seatsLeft} seats left
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <div style={{ display: 'flex', gap: 12, margin: '8px 0' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#d6dbed' }}>🕐 {course.duration}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#d6dbed' }}>📅 {course.startDate}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#d6dbed' }}>👥 {course.participants}</span>
                </div>
                <p className={styles.cardDescription}>{course.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '12px 0 6px 0' }}>
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
