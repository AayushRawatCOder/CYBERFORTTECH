import React, { useState, useEffect, useCallback } from 'react';
import styles from './HomeGalary.module.scss';

interface GalleryItem {
  url: string;
  title: string;
  description: string;
}

const HomeGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  const collaborationImages: GalleryItem[] = [
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/M.U_MOU_Cermony/5-min.jpg',
      title: 'MOU Ceremony',
      description: 'Strategic partnership signing'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/vision_group_+best/6-min.jpg',
      title: 'Vision MOU Signing',
      description: 'Educational partnership agreement'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/Vision_MOU/VISION+MOU+PICTURES1.jpg',
      title: 'Vision Group Partner',
      description: 'Industry collaboration initiative'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/MANGALAYATAN_UNIVERSITY_WORKSHOP/4-min.jpg',
      title: 'University Workshop',
      description: 'Cybersecurity training session'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/MANGALAYATAN_UNIVERSITY_WORKSHOP/10-min.jpg',
      title: 'Campus Visit',
      description: 'Student engagement program'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'Al-Barkaat Workshop',
      description: 'Technical training initiative'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/M.U_MOU_Cermony/3-min.jpg',
      title: 'Partnership Event',
      description: 'Collaboration milestone'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/Vision_MOU/mou+vision+poster.jpg',
      title: 'Vision Partnership Poster',
      description: 'Official collaboration announcement'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth <= 1400) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, collaborationImages.length - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const calculateCardWidth = () => {
    return `calc((100% - ${(itemsPerView - 1) * 25}px) / ${itemsPerView})`;
  };

  return (
    <section className={styles.homeGallery}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>
            OUR <span className={styles.galleryTitleHighlight}>GALLERY</span>
          </h2>
          <p className={styles.gallerySubtitle}>
            Showcasing our journey in cybersecurity excellence, industry
            collaborations, and educational partnerships across the globe.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <button 
            className={styles.carouselButton} 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            ‹
          </button>

          <div 
            className={styles.carouselContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={styles.carouselTrack}
              style={{
                transform: `translateX(calc(-${currentIndex} * (${calculateCardWidth()} + 25px)))`
              }}
            >
              {collaborationImages.map((item, index) => (
                <div 
                  key={index} 
                  className={styles.galleryCard}
                  style={{ 
                    width: calculateCardWidth(),
                    minWidth: calculateCardWidth()
                  }}
                >
                  <div className={styles.cardInner}>
                    <img
                      src={item.url}
                      alt={item.title}
                      className={styles.galleryCardImage}
                      loading="lazy"
                    />
                    <div className={styles.cardOverlay}></div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={styles.carouselButton}
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
