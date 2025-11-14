import React, { useState } from 'react';
import './Gallery.scss';

interface GalleryItem {
  url: string;
  title: string;
  description: string;
  date?: string;
  views?: number;
  tag?: string;
}

const Gallery: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => new Set(prev.add(url)));
  };

  const collaborationImages: GalleryItem[] = [
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/M.U_MOU_Cermony/5-min.jpg',
      title: 'MOU Ceremony',
      description: 'Strategic partnership signing ceremony with university officials',
      date: '2024-01-15',
      views: 1242,
      tag: 'Partnership'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/vision_group_+best/6-min.jpg',
      title: 'Strategic Alliance',
      description: 'Building future partnerships with industry leaders',
      date: '2024-01-10',
      views: 856,
      tag: 'Collaboration'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/MANGALAYATAN_UNIVERSITY_WORKSHOP/4-min.jpg',
      title: 'University Workshop',
      description: 'Cybersecurity training session for students and faculty members',
      date: '2024-01-08',
      views: 1567,
      tag: 'Workshop'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/Vision_MOU/VISION+MOU+PICTURES1.jpg',
      title: 'Vision MOU Signing',
      description: 'Educational partnership agreement signing ceremony',
      date: '2024-01-05',
      views: 943,
      tag: 'Partnership'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'AI Barkaat Workshop',
      description: 'Technical training initiative on artificial intelligence',
      date: '2024-01-03',
      views: 1123,
      tag: 'Training'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/MANGALAYATAN_UNIVERSITY_WORKSHOP/10-min.jpg',
      title: 'University Workshop',
      description: 'Cybersecurity training session with hands-on exercises',
      date: '2023-12-28',
      views: 1345,
      tag: 'Workshop'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/Vision_MOU/mou+vision+poster.jpg',
      title: 'Vision Group Partner',
      description: 'Industry collaboration initiative launch event',
      date: '2023-12-25',
      views: 765,
      tag: 'Collaboration'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/M.U_MOU_Cermony/3-min.jpg',
      title: 'Interactive Live Session',
      description: 'Strategy and shared knowledge exchange session',
      date: '2023-12-20',
      views: 987,
      tag: 'Session'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'Management Workshop',
      description: 'Cybersecurity for enterprise leaders and decision makers',
      date: '2023-12-15',
      views: 678,
      tag: 'Workshop'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'AI Barkaat Workshop',
      description: 'Blockchain training initiative for developers',
      date: '2023-12-10',
      views: 1456,
      tag: 'Training'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const handleLike = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    console.log('Liked:', item.title);
  };

  const handleShare = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    console.log('Shared:', item.title);
  };

  const handleExpand = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    console.log('Expanded:', item.title);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            OUR <span className="gallery-title-highlight">GALLERY</span>
          </h2>
          <p className="gallery-subtitle">
            Showcasing our journey in cybersecurity excellence, industry
            <br />
            collaborations, and educational partnerships across the globe.
          </p>
        </div>

        <div className="gallery-grid">
          {collaborationImages.map((item, index) => (
            <div 
              key={index} 
              className={`gallery-item ${index === 2 || index === 5 ? 'gallery-item-tall' : ''}`}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className={`gallery-image ${!loadedImages.has(item.url) ? 'gallery-image-loading' : ''}`}
                  onLoad={() => handleImageLoad(item.url)}
                />
                
                {!loadedImages.has(item.url) && (
                  <div className="gallery-image-loading"></div>
                )}
                
                <div className="gallery-overlay">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-description">{item.description}</p>
                </div>
                
                <div className="gallery-item-actions">
                  <button 
                    className="gallery-action-btn"
                    onClick={(e) => handleLike(e, item)}
                    aria-label="Like"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <button 
                    className="gallery-action-btn"
                    onClick={(e) => handleShare(e, item)}
                    aria-label="Share"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </button>
                  <button 
                    className="gallery-action-btn"
                    onClick={(e) => handleExpand(e, item)}
                    aria-label="Expand"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M14 10l6-6M9 21H3v-6M10 14l-6 6"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="gallery-item-footer">
                <div className="gallery-item-meta">
                  <span title="Date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {formatDate(item.date!)}
                  </span>
                  <span title="Views">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {formatViews(item.views!)}
                  </span>
                </div>
                {item.tag && (
                  <div className="gallery-item-tag">{item.tag}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;