import React from 'react';
import './CourseHero.scss';

const CourseHero = () => {
  return (
    <section className="course-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">LEARN THE SKILLS FOR</span>
          <br />
          <span className="white-text">TOMORROW'S TECH LEADERS.</span>
        </h1>
        
        <p className="hero-subtitle">
          Learn from experts, work on real projects, and earn certifications that
          <br />
          put you ahead in Cybersecurity, AI, Blockchain, and Data Science.
        </p>
        
        <button className="cta-button">EXPLORE PROGRAMS</button>
        
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">600K+</h2>
            <p className="stat-label">Satisfied students</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className="stat-number">200M+</h2>
            <p className="stat-label">Workshops</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className="stat-number">4.5/5</h2>
            <p className="stat-label">Webinars</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className="stat-number">1.3M+</h2>
            <p className="stat-label">Industry Partners</p>
          </div>
        </div>
      </div>
      
      <div className="course-card">
        <div className="card-header">
          <button className="nav-btn prev">‹</button>
          <div className="card-info">
            <span className="course-type">Advanced<br />AI Program</span>
            <div className="info-item">
              <span className="info-label">Course Duration</span>
              <span className="info-value">35 HOURS</span>
            </div>
            <div className="info-item">
              <span className="info-label">Starts on</span>
              <span className="info-value">AUG 09, 2025</span>
            </div>
            <div className="info-item">
              <span className="info-label">Level</span>
              <span className="info-value">INTERMEDIATE</span>
            </div>
            <div className="info-item">
              <span className="info-label">Mode</span>
              <span className="info-value">ONLINE</span>
            </div>
            <div className="fast-filling">
              <span className="lightning">⚡</span>
              <span>Fast Filling</span>
            </div>
            <button className="enroll-btn">ENROLL NOW</button>
          </div>
          <button className="nav-btn next">›</button>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;