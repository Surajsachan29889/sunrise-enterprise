"use client";

import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Chief Medical Officer",
    company: "Apollo Healthcare Group",
    location: "Mumbai, India",
    quote:
      "Sunrise Enterprises revolutionized our hospital management systems. Their strategic approach helped us achieve NABH accreditation in record time while improving patient satisfaction by 40%.",
    rating: 5,
    avatar: "RK",
    impact: "40% improvement in patient satisfaction",
  },
  {
    name: "Ms. Priya Sharma",
    position: "Hospital Administrator",
    company: "Fortis Healthcare",
    location: "New Delhi, India",
    quote:
      "The quality management expertise they brought was exceptional. Our operational efficiency increased significantly, and we successfully obtained JCI accreditation on our first attempt.",
    rating: 5,
    avatar: "PS",
    impact: "JCI accreditation achieved",
  },
  {
    name: "Dr. Anil Mehta",
    position: "Medical Director",
    company: "Max Healthcare",
    location: "Gurugram, India",
    quote:
      "Their biomedical equipment planning saved us over ₹2 crores in procurement costs. The team's attention to detail and industry knowledge is remarkable.",
    rating: 5,
    avatar: "AM",
    impact: "₹2 Cr+ cost savings",
  },
  {
    name: "Mrs. Kavita Joshi",
    position: "Quality Head",
    company: "Manipal Hospitals",
    location: "Bangalore, India",
    quote:
      "Working with Sunrise Enterprises was transformative. They helped streamline our processes and achieve ISO certification while maintaining the highest standards of patient care.",
    rating: 5,
    avatar: "KJ",
    impact: "ISO certification achieved",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slidesToShow = 2; // Show 2 testimonials at a time
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };


  return (
    <section id="testimonials" className="testimonials-section">
      {/* Background Elements */}
      <div className="testimonials-background">
        <div className="floating-quote quote-1">&quot;</div>
        <div className="floating-quote quote-2">&quot;</div>
        <div className="testimonials-pattern"></div>
      </div>

      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <div className="section-badge">
            <span className="badge-icon">💬</span>
            <span className="badge-text">Client Stories</span>
          </div>

          <h2 className="testimonials-title">
            <span className="title-main">What Our Clients</span>
            <span className="title-accent">Say About Us</span>
          </h2>

          <p className="testimonials-subtitle">
            Discover how we&apos;ve transformed healthcare operations across India&apos;s
            leading medical institutions
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-slider">
          <div className="slider-container">
            {/* Navigation Arrows */}
            <button
              className="slider-arrow slider-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous testimonials"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <button
              className="slider-arrow slider-arrow-right"
              onClick={goToNext}
              aria-label="Next testimonials"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>

            {/* Slider Track */}
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="slider-slide">
                  <div className="testimonials-grid">
                    {testimonials
                      .slice(
                        slideIndex * slidesToShow,
                        (slideIndex + 1) * slidesToShow
                      )
                      .map((testimonial, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="testimonial-card"
                          data-index={index}
                        >
                          <div className="card-glow"></div>

                          {/* Quote Icon */}
                          <div className="quote-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.738.4-1.091.692-.707.585-1.382 1.278-1.909 2.04-.492.721-.86 1.505-1.035 2.397-.166.924-.181 1.864.046 2.755.224.922.68 1.759 1.341 2.414.678.668 1.569 1.067 2.5 1.067.736 0 1.467-.241 2.02-.684.574-.46.932-1.134.932-1.861 0-.759-.396-1.429-.932-1.884-.553-.465-1.284-.684-2.02-.684z" />
                              <path d="M16.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.738.4-1.091.692-.707.585-1.382 1.278-1.909 2.04-.492.721-.86 1.505-1.035 2.397-.166.924-.181 1.864.046 2.755.224.922.68 1.759 1.341 2.414.678.668 1.569 1.067 2.5 1.067.736 0 1.467-.241 2.02-.684.574-.46.932-1.134.932-1.861 0-.759-.396-1.429-.932-1.884-.553-.465-1.284-.684-2.02-.684z" />
                            </svg>
                          </div>

                          {/* Testimonial Content */}
                          <div className="testimonial-content">
                            <p className="testimonial-quote">
                              &quot;{testimonial.quote}&quot;
                            </p>

                            <div className="testimonial-rating">
                              <div className="rating-stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <div key={i} className="star-wrapper">
                                    <svg
                                      className="star-icon"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                  </div>
                                ))}
                              </div>
                              <span className="rating-text">Excellent</span>
                            </div>

                            <div className="impact-badge">
                              <span className="impact-icon">📈</span>
                              <span className="impact-text">
                                {testimonial.impact}
                              </span>
                            </div>
                          </div>

                          {/* Client Info */}
                          <div className="client-info">
                            <div className="client-avatar">
                              <span className="avatar-text">
                                {testimonial.avatar}
                              </span>
                              <div className="avatar-ring"></div>
                            </div>

                            <div className="client-details">
                              <h4 className="client-name">
                                {testimonial.name}
                              </h4>
                              <p className="client-position">
                                {testimonial.position}
                              </p>
                              <p className="client-company">
                                {testimonial.company}
                              </p>
                              <p className="client-location">
                                📍 {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="slider-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slider Progress Bar */}
          <div className="slider-progress">
            <div
              className="progress-bar"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Healthcare Institutions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
