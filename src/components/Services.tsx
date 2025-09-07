"use client";

import React from "react";
import { motion } from "framer-motion";
import { useStaggeredAnimation } from "../hooks/useScrollAnimation";
import { useSafeIntersection } from "../hooks/useSafeScroll";
import "./Services.css";

const services = [
  {
    icon: "🏥",
    title: "Hospital Management Consulting",
    description:
      "Strategic planning and operational improvement for hospitals and healthcare facilities.",
    features: [
      "Strategic Planning",
      "Operational Excellence",
      "Cost Optimization",
    ],
    highlight: "Transform Operations",
  },
  {
    icon: "🏆",
    title: "Quality Management & Accreditation",
    description:
      "Comprehensive assistance with NABH, JCI, and international healthcare accreditations.",
    features: ["NABH Accreditation", "JCI Standards", "Quality Systems"],
    highlight: "Excellence Certified",
  },
  {
    icon: "⚕️",
    title: "Biomedical Equipment Planning",
    description:
      "Expert guidance on medical equipment procurement, installation, and lifecycle management.",
    features: [
      "Equipment Planning",
      "Procurement Support",
      "Lifecycle Management",
    ],
    highlight: "Technology Integration",
  },
];

const Services = () => {
  const { ref: servicesRef, isInView } = useSafeIntersection();
  const { ref: cardsRef, isInView: cardsInView } = useStaggeredAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      id="services"
      className="services-section"
      ref={servicesRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <motion.div className="services-background">
        <motion.div
          className="floating-orb orb-1"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="floating-orb orb-2"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="floating-orb orb-3"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="grid-pattern"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
      </motion.div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-badge">
            <span className="badge-icon">🎯</span>
            <span className="badge-text">Our Expertise</span>
          </div>

          <div className="title-container">
            <h2 className="services-title">
              <span className="title-main">Comprehensive Healthcare</span>
              <span className="title-accent">Solutions</span>
            </h2>

            <div className="title-ornament">
              <div className="ornament-dot"></div>
              <div className="ornament-dot"></div>
              <div className="ornament-dot"></div>
            </div>
          </div>

          <p className="services-subtitle">
            Transforming healthcare delivery through strategic consulting,
            quality management, and innovative technology solutions that drive
            measurable results for your organization
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          ref={cardsRef}
          variants={containerVariants}
          animate={cardsInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              data-index={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateZ: 2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-glow"></div>
              <div className="card-border"></div>

              <div className="service-header">
                <div className="service-icon">
                  <span className="icon-main">{service.icon}</span>
                  <div className="icon-ring"></div>
                </div>
                <div className="service-highlight">{service.highlight}</div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer">
                <motion.button
                  className="learn-more-btn"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More
                  <motion.span
                    className="btn-arrow"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="cta-content"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ready to Transform Your Healthcare Operations?
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Let&apos;s discuss how our expert solutions can elevate your
              organization
            </motion.p>
            <motion.button
              className="cta-button"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 0.5,
                delay: 1.2,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <motion.span
                className="cta-sparkle"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
