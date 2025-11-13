import React from 'react';
import './Gallery.scss';

interface GalleryItem {
  url: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const collaborationImages: GalleryItem[] = [
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/M.U_MOU_Cermony/5-min.jpg',
      title: 'MOU Ceremony',
      description: 'Strategic partnership signing'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/vision_group_+best/6-min.jpg',
      title: 'Strategic Alliance',
      description: 'Building future partnerships'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/MANGALAYATAN_UNIVERSITY_WORKSHOP/4-min.jpg',
      title: 'University Workshop',
      description: 'Cybersecurity training session'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/Vision_MOU/VISION+MOU+PICTURES1.jpg',
      title: 'Vision MOU Signing',
      description: 'Educational partnership agreement'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'AI Barkaat Workshop',
      description: 'Technical training initiative'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/MANGALAYATAN_UNIVERSITY_WORKSHOP/10-min.jpg',
      title: 'University Workshop',
      description: 'Cybersecurity training session'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/Vision_MOU/mou+vision+poster.jpg',
      title: 'Vision Group Partner',
      description: 'Industry collaboration initiative'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/M.U_MOU_Cermony/3-min.jpg',
      title: 'Interactive Live Session',
      description: 'Strategy and shared knowledge'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'Management Workshop',
      description: 'Cybersecurity for enterprise leaders'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'AI Barkaat Workshop',
      description: 'Blockchain training initiative'
    },
    {
      url: 'https://cyberfort-media.s3.ap-south-1.amazonaws.com/manual/gallery/AL-BARKAAT_+WORKSHOP/2-min.jpg',
      title: 'AI Barkaat Workshop',
      description: 'Blockchain training initiative'
    }
  ];

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
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;