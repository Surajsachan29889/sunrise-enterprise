"use client";

import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      {/* Background Elements */}
      <div className="footer-background">
        <div className="footer-glow"></div>
        <div className="footer-pattern"></div>
      </div>

      <div className="footer-container">
        {/* Newsletter */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h4 className="newsletter-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get the latest insights on healthcare management and industry
              trends delivered straight to your inbox
            </p>
            <div className="newsletter-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">📊</span>
                <span>Industry Reports</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💡</span>
                <span>Expert Insights</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎯</span>
                <span>Best Practices</span>
              </div>
            </div>
          </div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="input-icon">✉️</div>
            </div>
            <button
              type="submit"
              className={`newsletter-button ${
                isSubscribed ? "subscribed" : ""
              }`}
              disabled={isSubscribed}
            >
              <span className="button-text">
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </span>
              <span className="button-icon">{isSubscribed ? "✅" : "📬"}</span>
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h4 className="social-title">Connect With Us</h4>
          <div className="social-links">
            <a href="#" className="social-link linkedin">
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="social-label">LinkedIn</span>
            </a>
            <a href="#" className="social-link twitter">
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span className="social-label">Twitter</span>
            </a>
            <a href="#" className="social-link facebook">
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="social-label">Facebook</span>
            </a>
            <a href="#" className="social-link instagram">
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="social-label">Instagram</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Sunrise Enterprises. All Rights Reserved.
            </p>
            <p className="made-with">Made with ❤️ for Healthcare Excellence</p>
          </div>
          <div className="footer-legal">
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
            <span className="divider">•</span>
            <a href="#" className="legal-link">
              Terms of Service
            </a>
            <span className="divider">•</span>
            <a href="#" className="legal-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
          <span className="scroll-text">Top</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
