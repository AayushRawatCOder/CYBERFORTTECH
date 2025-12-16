import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import CertificateIcon from "../../../assets/icons/NavCertificateIcon.png";
import CoursesIcon from "../../../assets/icons/NavCoursesIcon.png";
import IndustryIcon from "../../../assets/icons/NavIndustryIcon.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const isActivePath = (path: string) =>
    path === "/" ? location.pathname === path : location.pathname.startsWith(path);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const educationItems = [
    { href: "/courses", label: "COURSES", icon: CoursesIcon },
    { href: "/IndustryImmersion", label: "INDUSTRY IMMERSION", icon: IndustryIcon },
    { href: "/certificate", label: "CERTIFICATE VERIFICATION", icon: CertificateIcon },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${isOpen ? styles.mobileOpen : ""}`}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoContainer}>
          <img src="/logo/cyberfort_logo.svg" alt="CyberfortTECH" className={styles.logoImage} />
          <span className={styles.logoText}>
            Cyberfort<span className={styles.logoTextTech}>TECH</span>
          </span>
        </Link>
        <div className={styles.desktopNav}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActivePath("/") ? styles.active : ""}`}
          >
            HOME
          </Link>
          <Link
            to="/services"
            className={`${styles.navLink} ${isActivePath("/services") ? styles.active : ""}`}
          >
            SERVICES
          </Link>
          <div className={styles.dropdownContainer} ref={dropdownRef}>
            <button
              className={`${styles.navLink} ${styles.dropdownTrigger} ${
                isActivePath("/courses") || isActivePath("/IndustryImmersion") || isActivePath("/certificate") 
                  ? styles.active 
                  : ""
              }`}
              onClick={() => toggleDropdown("education")}
              type="button"
            >
              EDUCATION
              <span className={`${styles.dropdownArrow} ${activeDropdown === "education" ? styles.rotated : ""}`}>▼</span>
            </button>
            {activeDropdown === "education" && (
              <div className={styles.dropdownMenu}>
                {educationItems.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    to={href}
                    className={`${styles.dropdownItem} ${isActivePath(href) ? styles.active : ""}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <img src={icon} alt={label} className={styles.itemIcon} />
                    <span className={styles.itemLabel}>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/about"
            className={`${styles.navLink} ${isActivePath("/about") ? styles.active : ""}`}
          >
            ABOUT US
          </Link>
          <Link
            to="/partners"
            className={`${styles.navLink} ${isActivePath("/partners") ? styles.active : ""}`}
          >
            PARTNERS
          </Link>
        </div>
        <div className={styles.navActions}>
          <div className={styles.authButtons}>
            <button className={`${styles.authButton} ${styles.signup}`}>SIGN UP</button>
            <button className={`${styles.authButton} ${styles.login}`}>LOG IN</button>
          </div>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
        <Link
          to="/"
          className={`${styles.mobileNavLink} ${isActivePath("/") ? styles.active : ""}`}
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          to="/services"
          className={`${styles.mobileNavLink} ${isActivePath("/services") ? styles.active : ""}`}
          onClick={() => setIsOpen(false)}
        >
          SERVICES
        </Link>
        <div className={styles.mobileDropdownContainer}>
          <button
            className={styles.mobileNavLink}
            onClick={() => toggleDropdown("mobileEducation")}
            type="button"
          >
            EDUCATION <span className={styles.dropdownArrow}>▼</span>
          </button>
          {activeDropdown === "mobileEducation" && (
            <div className={styles.mobileDropdownContent}>
              {educationItems.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  to={href}
                  className={styles.mobileDropdownItem}
                  onClick={() => {
                    setActiveDropdown(null);
                    setIsOpen(false);
                  }}
                >
                  <img src={icon} alt={label} className={styles.itemIcon} />
                  <span className={styles.itemLabel}>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          to="/about"
          className={`${styles.mobileNavLink} ${isActivePath("/about") ? styles.active : ""}`}
          onClick={() => setIsOpen(false)}
        >
          ABOUT US
        </Link>
        <Link
          to="/partners"
          className={`${styles.mobileNavLink} ${isActivePath("/partners") ? styles.active : ""}`}
          onClick={() => setIsOpen(false)}
        >
          PARTNERS
        </Link>
        <div className={styles.mobileAuthButtons}>
          <button className={`${styles.authButton} ${styles.signup}`}>SIGN UP</button>
          <button className={`${styles.authButton} ${styles.login}`}>LOG IN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
