"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStaggeredAnimation } from "../hooks/useScrollAnimation";
import { useSafeIntersection } from "../hooks/useSafeScroll";
import "./About.css";

const About = () => {
  const { ref: safeRef, isInView: safeInView } = useSafeIntersection();
  const { ref: staggerRef, isInView: staggerInView } = useStaggeredAnimation();

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      ref={safeRef}
      initial="hidden"
      animate={safeInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <motion.div className="about-background">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="floating-shape shape-3"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="grid-overlay"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
      </motion.div>

      <div className="about-container">
        {/* Section Header */}
        <motion.div className="about-header" variants={itemVariants}>
          <motion.div
            className="section-badge"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              className="badge-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👥
            </motion.span>
            Meet Our Team
          </motion.div>
          <motion.h2 className="about-title" variants={itemVariants}>
            <motion.span
              className="title-highlight"
              initial={{ x: -50, opacity: 0 }}
              animate={
                safeInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering
            </motion.span>{" "}
            Healthcare Excellence
          </motion.h2>
          <motion.p className="about-subtitle" variants={itemVariants}>
            Led by visionary healthcare professionals with decades of combined
            experience in transforming medical institutions worldwide
          </motion.p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="team-grid"
          ref={staggerRef}
          variants={containerVariants}
          initial="hidden"
          animate={staggerInView ? "visible" : "hidden"}
        >
          {/* Dr. Stuti Sachan Card */}
          <motion.div
            className="team-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -10,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card-header">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <Image
                    src="/stuti.jpeg"
                    alt="Dr. Stuti Sachan"
                    className="avatar-image"
                    width={120}
                    height={120}
                  />
                  <motion.div
                    className="avatar-ring"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  ></motion.div>
                </div>
                <div className="status-dot"></div>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">Dr. Stuti Sachan</h3>
                <p className="profile-role">Chief Healthcare Strategist</p>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="section-title">
                <h4>Academic Excellence</h4>
              </div>

              <div className="expertise-showcase">
                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">🎓</div>
                  </div>
                  <div className="expertise-details">
                    <h5>PhD in Hospital Management</h5>
                    <p>
                      Advanced Healthcare Systems and comprehensive hospital
                      administration
                    </p>
                    <ul className="expertise-points">
                      <li>Healthcare Systems</li>
                      <li>Strategic Planning</li>
                      <li>Research Excellence</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">📚</div>
                  </div>
                  <div className="expertise-details">
                    <h5>MBA Hospital Management</h5>
                    <p>
                      Healthcare Administration and business management
                      expertise
                    </p>
                    <ul className="expertise-points">
                      <li>Business Strategy</li>
                      <li>Operations Management</li>
                      <li>Financial Planning</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">⚕️</div>
                  </div>
                  <div className="expertise-details">
                    <h5>B.Tech Biomedical Engineering</h5>
                    <p>
                      Medical Technology Systems and biomedical device expertise
                    </p>
                    <ul className="expertise-points">
                      <li>Medical Devices</li>
                      <li>Technology Integration</li>
                      <li>System Design</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">🏆</div>
                  </div>
                  <div className="expertise-details">
                    <h5>QM & AHO Certification</h5>
                    <p>Quality Management and AHA Organisation accreditation</p>
                    <ul className="expertise-points">
                      <li>Quality Systems</li>
                      <li>Accreditation Standards</li>
                      <li>Compliance Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="expertise-tags">
                <span className="tag">Hospital Management</span>
                <span className="tag">Quality Assurance</span>
                <span className="tag">Healthcare Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Dr. Neeraj Sachan Card */}
          <motion.div
            className="team-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -10,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card-header">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <Image
                    src="/neeraj.jpeg"
                    alt="Dr. Neeraj Sachan"
                    className="avatar-image"
                    width={120}
                    height={120}
                  />
                  <motion.div
                    className="avatar-ring"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  ></motion.div>
                </div>
                <div className="status-dot"></div>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">Dr. Neeraj Sachan</h3>
                <p className="profile-role">Pharmaceutical Solutions Expert</p>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">12+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Solutions Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="section-title">
                <h4>Core Expertise</h4>
              </div>

              <div className="expertise-showcase">
                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">💊</div>
                  </div>
                  <div className="expertise-details">
                    <h5>Pharmaceutical Management</h5>
                    <p>
                      Strategic oversight of pharmaceutical operations and
                      supply chain optimization
                    </p>
                    <ul className="expertise-points">
                      <li>Supply Chain Strategy</li>
                      <li>Regulatory Compliance</li>
                      <li>Quality Management</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">🔬</div>
                  </div>
                  <div className="expertise-details">
                    <h5>Healthcare Innovation</h5>
                    <p>
                      Pioneering cutting-edge solutions for modern healthcare
                      challenges
                    </p>
                    <ul className="expertise-points">
                      <li>Digital Health Solutions</li>
                      <li>Process Innovation</li>
                      <li>Technology Integration</li>
                    </ul>
                  </div>
                </div>

                <div className="expertise-area">
                  <div className="expertise-visual">
                    <div className="expertise-icon-large">📈</div>
                  </div>
                  <div className="expertise-details">
                    <h5>Process Optimization</h5>
                    <p>
                      Streamlining healthcare delivery through advanced
                      methodologies
                    </p>
                    <ul className="expertise-points">
                      <li>Workflow Analysis</li>
                      <li>Cost Reduction</li>
                      <li>Efficiency Improvement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="expertise-tags">
                <span className="tag">Pharmaceutical Management</span>
                <span className="tag">Healthcare Innovation</span>
                <span className="tag">Process Optimization</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div className="mission-section" variants={itemVariants}>
          <motion.div
            className="mission-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="mission-glow"></div>
            <div className="mission-content">
              <div className="mission-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize healthcare management through innovative
                solutions, expert guidance, and unwavering commitment to
                excellence in patient care and operational efficiency.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
