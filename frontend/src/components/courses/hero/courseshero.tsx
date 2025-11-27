import React from 'react';
import style from './CourseHero.module.scss';


const CourseHero = () => {
  return (
    <>
    <section className={style.courseHero}>
      <div className={style.heroContent}>
        <h1 className={style.heroTitle}>
          <span className={style.gradientText}>LEARN THE SKILLS FOR</span>
          <br />
          <span className={style.whiteText}>TOMORROW'S TECH LEADERS.</span>
        </h1>
        
        <p className={style.heroSubtitle}>
          Learn from experts, work on real projects, and earn certifications that
          <br />
          put you ahead in Cybersecurity, AI, Blockchain, and Data Science.
        </p>
        
        <button className={style.ctaButton}>EXPLORE PROGRAMS</button>
        
        <div className={style.statsGrid}>
          <div className={style.statItem}>
            <h2 className={style.statNumber}>600K</h2>
            <p className={style.statLabel}>Satisfied students</p>
          </div>
          <div className={style.statDivider}></div>
          <div className={style.statItem}>
            <h2 className={style.statNumber}>200M</h2>
            <p className={style.statLabel}>Workshops</p>
          </div>
          <div className={style.statDivider}></div>
          <div className={style.statItem}>
            <h2 className={`${style.statNumber} ${style.rating}`}>4.5/5</h2>
            <p className={style.statLabel}>Webinars</p>
          </div>
          <div className={style.statDivider}></div>
          <div className={style.statItem}>
            <h2 className={style.statNumber}>1.3M</h2>
            <p className={style.statLabel}>Industry Partners</p>
          </div>
        </div>
      </div>
     
      <div className={style.courseCard}>
        <div className={style.cardHeader}>
          <button className={`${style.navBtn} ${style.prev}`}>‹</button>
          <div className={style.cardInfo}>
            <span className={style.courseType}>Advanced<br />AI Program</span>
            <div className={style.infoGroup}>
              <div className={style.infoItem}>
                <span className={style.infoLabel}>Course Duration</span>
                <span className={style.infoValue}>35 HOURS</span>
              </div>
              <div className={style.infoItem}>
                <span className={style.infoLabel}>Starts on</span>
                <span className={style.infoValue}>AUG 09, 2025</span>
              </div>
              <div className={style.infoItem}>
                <span className={style.infoLabel}>Level</span>
                <span className={style.infoValue}>INTERMEDIATE</span>
              </div>
              <div className={style.infoItem}>
                <span className={style.infoLabel}>Mode</span>
                <span className={style.infoValue}>ONLINE</span>
              </div>
            </div>
            <div className={style.actionGroup}>
              <div className={style.fastFilling}>
                <span className={style.lightning}>⚡</span>
                <span>Fast Filling</span>
              </div>
              <button className={style.enrollBtn}>ENROLL NOW</button>
            </div>
          </div>
          <button className={`${style.navBtn} ${style.next}`}>›</button>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default CourseHero;