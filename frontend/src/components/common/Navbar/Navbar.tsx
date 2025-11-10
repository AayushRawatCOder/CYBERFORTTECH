import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Education dropdown items
  const educationItems = [
    { href: "/courses", label: "COURSES", icon: "📚" },
    { href: "/internships", label: "INDUSTRY IMMERSION", icon: "🏢" },
    { href: "/certificate", label: "CERTIFICATE VERIFICATION", icon: "🎓" }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src="/logo/cyberfort_logo.svg" alt="CyberfortTECH" className="logo-image" />
          <span className="logo-text">
            Cyberfort<span className="logo-text-tech">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Link to="/" className={`nav-link ${isActivePath('/') ? 'active' : ''}`}>
            HOME
          </Link>
          <Link to="/services" className={`nav-link ${isActivePath('/services') ? 'active' : ''}`}>
            SERVICES
          </Link>
          
          {/* Education Dropdown */}
          <div className="dropdown-container" ref={dropdownRef}>
            <button
              className={`nav-link dropdown-trigger ${activeDropdown === 'education' ? 'open' : ''}`}
              onClick={() => toggleDropdown('education')}
            >
              EDUCATION
              <span className={`dropdown-arrow ${activeDropdown === 'education' ? 'rotated' : ''}`}>▼</span>
            </button>
            
            {activeDropdown === 'education' && (
              <div className="dropdown-menu">
                {educationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={`dropdown-item ${isActivePath(item.href) ? 'active' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <span className="item-label">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className={`nav-link ${isActivePath('/about') ? 'active' : ''}`}>
            ABOUT US
          </Link>
          <Link to="/partners" className={`nav-link ${isActivePath('/partners') ? 'active' : ''}`}>
            PARTNERS
          </Link>
        </div>

        {/* Auth Buttons & Mobile Menu */}
        <div className="nav-actions">
          <div className="auth-buttons">
            <button className="auth-button signup">SIGN UP</button>
            <button className="auth-button login">LOG IN</button>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            SERVICES
          </Link>
          
          <div className="mobile-dropdown-container">
            <button
              className="mobile-nav-link"
              onClick={() => toggleDropdown('mobileEducation')}
            >
              EDUCATION <span className="dropdown-arrow">▼</span>
            </button>
            
            {activeDropdown === 'mobileEducation' && (
              <div className="mobile-dropdown-content">
                {educationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="mobile-dropdown-item"
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsOpen(false);
                    }}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <span className="item-label">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            ABOUT US
          </Link>
          <Link to="/partners" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            PARTNERS
          </Link>
          
          <div className="mobile-auth-buttons">
            <button className="auth-button signup">SIGN UP</button>
            <button className="auth-button login">LOG IN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;