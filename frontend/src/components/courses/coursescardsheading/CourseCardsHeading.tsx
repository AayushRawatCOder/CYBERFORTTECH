import React from "react";
import styles from "./CoursesCardHeading.module.scss";

const CourseCardHeading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <span className={styles.gradient}>EXPLORE</span> OUR COURSES
      </h2>
      <p className={styles.subtitle}>
        Learn from experts, work on real projects, and earn certifications that put you ahead in Cybersecurity, AI, Blockchain, and Data Science.
      </p>
    </div>
  );
};

export default CourseCardHeading;
