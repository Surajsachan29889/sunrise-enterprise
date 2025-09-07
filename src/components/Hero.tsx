import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Grid Pattern */}
      <div className="grid-pattern"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Leading Healthcare Innovation
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            <div className="title-line title-line-1">Revolutionizing</div>
            <div className="title-line title-line-2">Healthcare</div>
            <div className="title-line title-line-3">Management</div>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Experience the dawn of a new era in healthcare excellence with
            <span className="highlight-orange">
              {" "}
              cutting-edge technology
            </span>{" "}
            and
            <span className="highlight-white"> innovative solutions</span>
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary">
              <span className="btn-text">Discover More</span>
              <div className="btn-overlay"></div>
            </button>

            <button className="btn-secondary">
              <span className="btn-text">Learn More</span>
              <div className="btn-overlay-secondary"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Healthcare Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Reliability</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
