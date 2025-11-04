import styles from './Footer.module.scss';
import footerlogo from "../../../assets/icons/footerlogo.png";
import whatsapp from "../../../assets/icons/basil_whatsapp-solid.png";
import call from "../../../assets/icons/call.png";
import discord from "../../../assets/icons/ic_baseline-discord.png";
import facebook from "../../../assets/icons/ic_baseline-facebook.png";
import instagram from "../../../assets/icons/instagram.png";
import telegram from "../../../assets/icons/lineicons_telegram.png";
import mail from "../../../assets/icons/mail.png";
import location from "../../../assets/icons/mdi_location.png";
import youtube from "../../../assets/icons/mdi_youtube.png";
import twitter from "../../../assets/icons/prime_twitter.png";
import sendicon from "../../../assets/icons/sendicon.png";
import linkedin from "../../../assets/icons/uil_linkedin.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.brandBlock}>
          <div className={styles.logoRow}>
            <img src={footerlogo} className={styles.logoImg} width={40} height={40} alt="Cyberfort Logo"/>
            <span className={styles.brandTxt}>Cyberfort<b>TECH</b></span>
          </div>
          <div className={styles.contactInfo}>
            <span>
              <img src={mail} className={styles.icon} width={18} height={18} alt="mail"/>
              support@cyberfort.tech
            </span>
            <span>
              <img src={call} className={styles.icon} width={18} height={18} alt="call"/>
              +91-XXXXXXXXXX
            </span>
            <span>
              <img src={location} className={styles.icon} width={18} height={18} alt="location"/>
              123 Tech Park, Mumbai, India
            </span>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.columns}>
            <div className={styles.col}>
              <div className={styles.title}>Company</div>
              <span>About Us</span>
              <span>Partners</span>
              <span>Gallery</span>
              <span>Careers</span>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Services</div>
              <span>Cybersecurity</span>
              <span>Artificial Intelligence</span>
              <span>Block Chain</span>
              <span>Cloud Services</span>
              <span>Development</span>
              <span>Compliance</span>
              <span>Auditing</span>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Education</div>
              <span>Academy</span>
              <span>Courses</span>
              <span>Internships</span>
              <span>Certifications</span>
              <span>Labs</span>
              <span>CTF</span>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Resources</div>
              <span>Blogs</span>
              <span>Forums</span>
              <span>Case Studies</span>
              <span>Webinars & Events</span>
              <span>FAQs</span>
            </div>
            <div className={styles.subscribeCol}>
              <div className={styles.title}>Stay up to date</div>
              <div className={styles.inputRow}>
                <input type="email" placeholder="Your email address" />
                <button>
                  <img src={sendicon} width={18} height={18} className={styles.sendicon} alt="sendicon"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.socials}>
          <a><img src={whatsapp} width={21} height={21} alt="whatsapp"/></a>
          <a><img src={instagram} width={21} height={21} alt="instagram"/></a>
          <a><img src={linkedin} width={21} height={21} alt="linkedin"/></a>
          <a><img src={telegram} width={21} height={21} alt="telegram"/></a>
          <a><img src={discord} width={21} height={21} alt="discord"/></a>
          <a><img src={youtube} width={21} height={21} alt="youtube"/></a>
          <a><img src={twitter} width={21} height={21} alt="twitter"/></a>
          <a><img src={facebook} width={21} height={21} alt="facebook"/></a>
        </div>
        <div className={styles.legal}>
          <span>• Terms of Service</span>
          <span>• Privacy Policy</span>
          <span>© 2025 Cyberfort Tech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
