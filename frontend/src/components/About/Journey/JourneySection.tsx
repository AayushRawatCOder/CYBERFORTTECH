import React, { useEffect, useState, useRef } from "react";
import styles from "./JourneySection.module.scss";

/**
 * JourneyTimeline Component
 * 
 * A futuristic timeline component with:
 * - U-shaped glowing arc (inverted semi-circle)
 * - Gradient heading with neon effects
 * - Rotated year labels along the curve
 * - Center active year content
 * - Left/right navigation with smooth animations
 * 
 * Props:
 * - timelineData: Record of years with descriptions
 * - initialYear: Starting year (defaults to middle year)
 */

interface TimelineItem {
  title?: string;
  desc: string;
}

interface JourneyTimelineProps {
  timelineData: Record<string, TimelineItem>;
  initialYear?: string;
}

// Demo data
const DEFAULT_DATA: Record<string, TimelineItem> = {
  "2023": {
    desc: "Launched our foundation with core cybersecurity services and established partnerships with industry leaders.",
  },
  "2024": {
    desc: "Expanded our services with advanced cybersecurity training programs and launched enterprise security solutions.",
  },
  "2025": {
    desc: "Achieved industry recognition and scaled our platform to serve over 10,000 professionals globally.",
  },
};

/**
 * Utility: Get next/previous year keys with circular looping
 */
const getAdjacentKeys = (keys: string[], currentKey: string) => {
  const currentIndex = keys.indexOf(currentKey);
  const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
  const nextIndex = (currentIndex + 1) % keys.length;
  
  return {
    prev: keys[prevIndex],
    next: keys[nextIndex],
  };
};

export default function JourneySection({
  timelineData = DEFAULT_DATA,
  initialYear,
}: JourneyTimelineProps) {
  // Sort years chronologically
  const years = Object.keys(timelineData).sort();
  
  // Initialize with middle year or provided initialYear
  const startYear = initialYear && years.includes(initialYear) 
    ? initialYear 
    : years[Math.floor(years.length / 2)];
  
  const [activeYear, setActiveYear] = useState<string>(startYear);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  
  // Refs for accessibility
  const liveRegionRef = useRef<HTMLDivElement>(null);
  
  // Get adjacent years for display
  const { prev: leftYear, next: rightYear } = getAdjacentKeys(years, activeYear);
  
  /**
   * Animation flow:
   * 1. Set animating flag to disable buttons
   * 2. Set direction for exit animation
   * 3. Wait for exit animation (300ms)
   * 4. Change active year
   * 5. Wait for enter animation (320ms)
   * 6. Clear animating flag
   */
  const navigateTo = (targetYear: string, navDirection: "left" | "right") => {
    if (isAnimating || targetYear === activeYear) return;
    
    setIsAnimating(true);
    setDirection(navDirection);
    
    // Exit animation
    setTimeout(() => {
      setActiveYear(targetYear);
      setDirection(null);
    }, 300);
    
    // Enter animation complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 620);
  };
  
  const handlePrevious = () => {
    const { prev } = getAdjacentKeys(years, activeYear);
    navigateTo(prev, "left");
  };
  
  const handleNext = () => {
    const { next } = getAdjacentKeys(years, activeYear);
    navigateTo(next, "right");
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeYear, isAnimating]);
  
  // Update live region for screen readers
  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `Year ${activeYear}: ${timelineData[activeYear].desc}`;
    }
  }, [activeYear, timelineData]);
  
  return (
    <section 
      className={styles.journeyTimeline}
      aria-label="Company Journey Timeline"
    >
      {/* Ambient glow backgrounds */}
      <div className={styles.journeyTimeline__vignette} aria-hidden="true" />
      
      <div className={styles.journeyTimeline__container}>
        {/* Header */}
        <header className={styles.journeyTimeline__header}>
          <h2 className={styles.journeyTimeline__heading}>OUR JOURNEY</h2>
          <p className={styles.journeyTimeline__subtitle}>
            From inception to becoming a leading cybersecurity education platform.
          </p>
        </header>
        
        {/* U-Shaped Arc SVG - ENHANCED GLOW */}
        <div className={styles.journeyTimeline__arcContainer} aria-hidden="true">
          <svg
            className={styles.journeyTimeline__arc}
            viewBox="0 0 1600 600"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* ENHANCED GLOW GRADIENT - #01E6DD to #FE8FEB */}
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#01E6DD" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FE8FEB" stopOpacity="0.95" />
              </linearGradient>
              
              {/* ENHANCED GLOW FILTER - radial-like blur */}
              <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="25" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Inner depth shadow gradient */}
              <radialGradient id="depthGradient" cx="50%" cy="70%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.7)"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
              </radialGradient>
            </defs>
            
            {/* Ambient glow base */}
            <ellipse
              cx="800"
              cy="400"
              rx="650"
              ry="350"
              fill="url(#depthGradient)"
              opacity="0.5"
            />
            
            {/* GLOWING ARC LAYER - wider stroke + enhanced blur */}
            <path
              d="M 150 320 A 650 650 0 0 0 1450 320"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="42"
              strokeLinecap="round"
              filter="url(#glowBlur)"
              opacity="0.85"
            />
            
            {/* SOLID ARC LAYER - crisp definition */}
            <path
              d="M 150 320 A 650 650 0 0 0 1450 320"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="36"
              strokeLinecap="round"
              opacity="1"
            />
            
            {/* Inner solid arc */}
            <path
              d="M 200 305 A 590 590 0 0 0 1400 305"
              fill="none"
              stroke="rgba(255, 255, 255, 0.73)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Inner dashed arc */}
            <path
              d="M 210 305 A 590 590 0 0 0 1390 305"
              fill="none"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            
            {/* Depth ring (inner shadow effect) */}
            <path
              d="M 170 315 A 630 630 0 0 0 1430 315"
              fill="none"
              stroke="rgba(0,0,0,0.5)"
              strokeWidth="50"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>
        
        {/* Side Years (Left & Right) */}
        <div className={styles.journeyTimeline__sideYears}>
          {/* Left Year */}
          <div className={`${styles.yearItem} ${styles['yearItem--left']}`}>
            <div className={styles.yearItem__number}>{leftYear}</div>
            <p className={styles.yearItem__desc}>
              {timelineData[leftYear].desc}
            </p>
          </div>
          
          {/* Right Year */}
          <div className={`${styles.yearItem} ${styles['yearItem--right']}`}>
            <div className={styles.yearItem__number}>{rightYear}</div>
            <p className={styles.yearItem__desc}>
              {timelineData[rightYear].desc}
            </p>
          </div>
        </div>
        
        {/* Center Active Year Content */}
        <div 
          className={`${styles.activeContent} ${
            isAnimating ? styles['activeContent--animating'] : ''
          } ${
            direction ? styles[`activeContent--exit-${direction}`] : ''
          }`}
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className={styles.activeContent__year}>{activeYear}</div>
          <p className={styles.activeContent__desc}>
            {timelineData[activeYear].desc}
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <button
          className={`${styles.navButton} ${styles['navButton--left']}`}
          onClick={handlePrevious}
          disabled={isAnimating}
          aria-label={`Navigate to previous year: ${leftYear}`}
          tabIndex={0}
        >
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        <button
          className={`${styles.navButton} ${styles['navButton--right']}`}
          onClick={handleNext}
          disabled={isAnimating}
          aria-label={`Navigate to next year: ${rightYear}`}
          tabIndex={0}
        >
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Screen reader live region */}
        <div 
          ref={liveRegionRef}
          className={styles['sr-only']}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        />
      </div>
    </section>
  );
}
