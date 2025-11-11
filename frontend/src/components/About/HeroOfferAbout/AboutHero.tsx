import React from 'react';
import './AboutHero.scss';

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__header">
          <h1 className="about-hero__title">
            WE ARE MAKING TECHNOLOGY
          </h1>
          <h2 className="about-hero__subtitle">
            <span className="text-purple">SIMPLE</span>
            <span className="text-cyan">, SECURE</span>
            <span className="text-cyan">, AND</span>
            <br />
            <span className="text-cyan">SCALABLE</span>
          </h2>
        </div>

        <div className="about-hero__cards">
          {/* Vision Card */}
          <div className="card card--vision">
            <div className="card__icon-wrapper">
              <img 
                src="/logo/vision.svg" 
                alt="Vision Icon" 
                className="card__icon"
              />
            </div>
            
            <div className="card__content">
              <h3 className="card__title">
                OUR <span className="text-purple">VISION</span>
              </h3>
              <p className="card__subtitle">SECURE. ACCESS. EMPOWER</p>
              <p className="card__description">
                To build a future where technology 
                feels secure, accessible, and 
                empowering for everyone — from 
                startups to enterprises.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="card card--mission">
            <div className="card__icon-wrapper">
              <img 
                src="/logo/mission.svg" 
                alt="Mission Icon" 
                className="card__icon"
              />
            </div>
            
            <div className="card__content">
              <h3 className="card__title">
                OUR <span className="text-cyan">MISSION</span>
              </h3>
              <p className="card__subtitle">SIMPLIFY. SECURE. SCALE</p>
              <p className="card__description">
                At CyberFort Tech, we're on a 
                mission to make cutting-edge 
                technology simple, safe, and 
                scalable. We exist to protect digital 
                assets, bridge skill gaps, and fuel 
                innovation across cybersecurity, 
                AI, blockchain, and data science 
                empowering businesses to grow 
                with confidence and clarity.
              </p>
            </div>
          </div>

          {/* Value Card */}
          <div className="card card--value">
            <div className="card__icon-wrapper">
              <img 
                src="/logo/value.svg" 
                alt="Value Icon" 
                className="card__icon"
              />
            </div>
            
            <div className="card__content">
              <h3 className="card__title">
                OUR <span className="text-cyan">VALUE</span>
              </h3>
              <p className="card__subtitle">PRECISION. TRUST. PROGRESS</p>
              <p className="card__description">
                We safeguard what matters, 
                innovate fearlessly, and keep 
                technology human — reliable, 
                affordable, and built for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;