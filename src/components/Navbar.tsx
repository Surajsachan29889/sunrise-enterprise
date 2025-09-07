"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = ["home", "about", "services", "testimonials"];
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          const sectionId = section.id;
          if (sectionId !== activeSection) {
            setActiveSection(sectionId);
          }
          break;
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Update active section immediately for better UX
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {/* Background Elements */}
      <div className="navbar-background">
        <div className="navbar-glow"></div>
        <div className="navbar-pattern"></div>
      </div>

      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo and Brand */}
          <motion.div
            className="navbar-brand"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.a
              href="#home"
              className="brand-link"
              onClick={closeMobileMenu}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="brand-logo"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/logo.png"
                  alt="Sunrise Enterprises"
                  className="logo-image"
                  width={40}
                  height={40}
                />
                <motion.div
                  className="logo-glow"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>
              <div className="brand-text">
                <span className="brand-name">Sunrise</span>
                <span className="brand-subtitle">Enterprises</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            <div className="navbar-nav">
              {[
                { name: "Home", href: "#home", id: "home" },
                { name: "About", href: "#about", id: "about" },
                { name: "Services", href: "#services", id: "services" },
                {
                  name: "Testimonials",
                  href: "#testimonials",
                  id: "testimonials",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.id ? "nav-link-active" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span className="nav-text">{item.name}</span>
                  <div className="nav-indicator"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <div className="action-group">
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                <div className="theme-icon-wrapper">
                  {theme === "light" ? (
                    <svg
                      className="theme-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  ) : (
                    <svg
                      className="theme-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                  )}
                </div>
                <span className="theme-label">
                  {theme === "light" ? "Dark" : "Light"}
                </span>
              </button>

              <button className="cta-button">
                <span className="cta-text">Get Started</span>
                <span className="cta-icon">🚀</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="navbar-mobile-toggle">
            <button
              className={`mobile-toggle-btn ${
                isMobileMenuOpen ? "active" : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="mobile-toggle-icon">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <div className="mobile-menu-content">
            <div className="mobile-nav">
              {[
                { name: "Home", href: "#home", id: "home" },
                { name: "About", href: "#about", id: "about" },
                { name: "Services", href: "#services", id: "services" },
                {
                  name: "Testimonials",
                  href: "#testimonials",
                  id: "testimonials",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${
                    activeSection === item.id ? "mobile-nav-link-active" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span className="mobile-nav-text">{item.name}</span>
                  <svg
                    className="mobile-nav-arrow"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mobile-actions">
              <button className="mobile-cta-button" onClick={closeMobileMenu}>
                <span>Get Started</span>
                <span>🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </motion.nav>
  );
};

export default Navbar;
