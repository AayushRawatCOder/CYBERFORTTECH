import React from 'react';
import './OfferSection.scss';

const OfferSection: React.FC = () => {
  return (
    <section className="offer-section">
      <div className="offer-section__container">
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

        <div className="offer-section__cards">
          <div className="offer-section__card-outer">
            <div className="offer-section__card-inner">
              <div className="offer-section__icon offer-section__icon--cyan">
                <img 
                  src='/logo/labs.svg'
                  alt="CyberFort Labs Icon" 
                />
              </div>
              <h3 className="offer-section__card-title">CyberFort Labs</h3>
              <p className="offer-section__card-description">
                Driving breakthrough technology, built through in-house research.
              </p>
            </div>
          </div>

          <div className="offer-section__card-outer">
            <div className="offer-section__card-inner">
              <div className="offer-section__icon offer-section__icon--brown">
                <img 
                  src='/logo/vision-led.svg'
                  alt="Vision-Led Architecture Icon" 
                />
              </div>
              <h3 className="offer-section__card-title">Vision-Led Architecture</h3>
              <p className="offer-section__card-description">
                Designing modular, scalable systems with future-ready infrastructure.
              </p>
            </div>
          </div>

          <div className="offer-section__card-outer">
            <div className="offer-section__card-inner">
              <div className="offer-section__icon offer-section__icon--blue">
                <img 
                  src='/logo/industry.svg' 
                  alt="Industry Alignment Icon" 
                />
              </div>
              <h3 className="offer-section__card-title">Industry Alignment</h3>
              <p className="offer-section__card-description">
                Building solutions aligned with global standards to meet security demands.
              </p>
            </div>
          </div>

          <div className="offer-section__card-outer">
            <div className="offer-section__card-inner">
              <div className="offer-section__icon offer-section__icon--green">
                <img 
                  src='/logo/engineering.svg' 
                  alt="Interdisciplinary Engineering Icon" 
                />
              </div>
              <h3 className="offer-section__card-title">Interdisciplinary Engineering</h3>
              <p className="offer-section__card-description">
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
