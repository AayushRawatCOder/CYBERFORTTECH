import React from "react";
import styles from "./HeroSection.module.scss";
import shieldlogo from "../../../assets/images/Centre.png";
import flagIcon from "../../../assets/images/Group 80.png";
import academyIcon from "../../../assets/images/Group 80 (1).png";
import chatIcon from "../../../assets/images/Group 78.png";
import dangerlines from "../../../assets/images/danger.png";
import rightlines from "../../../assets/images/right.png";

const HeroSection: React.FC = () => (
  <section className={styles.heroSection}>
    <div className={styles.contentWrap}>
      <div className={styles.leftContent}>
        <h1 className={styles.title}>
          <span className={styles.fortify}>FORTIFYING THE FUTURE</span>
          <br />
          <span className={styles.digital}>OF DIGITAL SECURITY</span>
        </h1>

        <p className={styles.desc}>
          Advanced cyber defense, red teaming, and security solutions for
          enterprises and defense.
        </p>

        <button className={styles.demoBtn}>REQUEST A DEMO</button>

        <div className={styles.ctaCard}>
          <div className={styles.ctaRow}>
            <img src={flagIcon} alt="CTF" className={styles.ctaIconImg} />
          </div>
          <div className={styles.ctaRow}>
            <img src={academyIcon} alt="Academy" className={styles.ctaIconImg} />
          </div>
        </div>
      </div>

      <div className={styles.centerCard}>
        <div className={styles.heroCard}>
          <img src={shieldlogo} alt="Shield" className={styles.shieldLogo} />
        </div>
        <div className={styles.heroLines}>
          <img src={dangerlines} alt="" className={styles.dangerLines} />
          <img src={rightlines} alt="" className={styles.rightLines} />
        </div>
        <div className={styles.rightContent}>
          <p className={styles.infoBlock}>
            At CyberFort Tech, we transform how the world builds trust in
            technology. Through our Academy, R&amp;D, and Product Labs, we close
            skill gaps, secure innovation, and accelerate excellence across
            Cybersecurity, AI, Blockchain, and Data Science.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.chatSlot}>
      <img src={chatIcon} alt="Chat" className={styles.chatIconImg} />
    </div>
  </section>
);

export default HeroSection;
