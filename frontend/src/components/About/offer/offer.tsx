import React from 'react';
import './OfferSection.scss';

const OfferSection: React.FC = () => {
  return (
    <section className="offer-section">
      <div className="offer-section__container">
        {/* Header */}
        <div className="offer-section__header">
          <h2 className="offer-section__title">
            WHAT WE <span className="text-cyan">OFFER?</span>
          </h2>
          <p className="offer-section__description">
            Through deep research, proprietary frameworks, and product-first thinking, CyberFort
            Tech is committed to creating systems that are not just secure, but visionary
            designed for impact, built for scale, and ready for tomorrow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="offer-section__cards">
          
          {/* CyberFort Labs Card */}
          <div className="offer-card">
            <div className="offer-card__icon-wrapper">
              <div className="offer-card__icon offer-card__icon--cyan">
                {/* Replaced SVG with <img> */}
                <img 
                  src='/logo/labs.svg'
                  alt="CyberFort Labs Icon" 
                  className="offer-card__image-icon"
                  width="32" 
                  height="32"
                />
              </div>
            </div>
            <div className="offer-card__content">
              <h3 className="offer-card__title">CyberFort Labs</h3>
              <p className="offer-card__description">
                Driving breakthrough technology, built through in-house research.
              </p>
            </div>
          </div>

          {/* Vision-Led Architecture Card */}
          <div className="offer-card">
            <div className="offer-card__icon-wrapper">
              <div className="offer-card__icon offer-card__icon--brown">
                {/* Replaced SVG with <img> */}
                <img 
                  src='/logo/vision-led.svg'
                  alt="Vision-Led Architecture Icon" 
                  className="offer-card__image-icon"
                  width="32" 
                  height="32"
                />
              </div>
            </div>
            <div className="offer-card__content">
              <h3 className="offer-card__title">Vision-Led Architecture</h3>
              <p className="offer-card__description">
                Designing modular, scalable systems with future-ready infrastructure.
              </p>
            </div>
          </div>

          {/* Industry Alignment Card */}
          <div className="offer-card">
            <div className="offer-card__icon-wrapper">
              <div className="offer-card__icon offer-card__icon--blue">
                {/* Replaced SVG with <img> */}
                <img 
                  src='/logo/industry.svg' 
                  alt="Industry Alignment Icon" 
                  className="offer-card__image-icon"
                  width="32" 
                  height="32"
                />
              </div>
            </div>
            <div className="offer-card__content">
              <h3 className="offer-card__title">Industry Alignment</h3>
              <p className="offer-card__description">
                Building solutions aligned with global standards to meet security demands.
              </p>
            </div>
          </div>

          {/* Interdisciplinary Engineering Card */}
          <div className="offer-card">
            <div className="offer-card__icon-wrapper">
              <div className="offer-card__icon offer-card__icon--green">
                {/* Replaced SVG with <img> */}
                <img 
                  src='/logo/engineering.svg' 
                  alt="Interdisciplinary Engineering Icon" 
                  className="offer-card__image-icon"
                  width="32" 
                  height="32"
                />
              </div>
            </div>
            <div className="offer-card__content">
              <h3 className="offer-card__title">Interdisciplinary Engineering</h3>
              <p className="offer-card__description">
                Fusing cybersecurity, AI, and full-stack development into unified platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;