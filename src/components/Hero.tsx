"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeIntersection } from "../hooks/useSafeScroll";
import "./Hero.css";

const Hero = () => {
  const { ref: heroRef, isInView } = useSafeIntersection();

  return (
    <motion.section
      id="home"
      className="hero-section"
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Light Gradient Animation Background */}
      <div className="hero-background">
        <motion.div
          className="hero-gradient-1"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="hero-gradient-2"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1.02, 1, 1.02],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="hero-gradient-3"
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        ></motion.div>

        {/* Subtle moving light effect */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 40% 60%, rgba(255, 149, 0, 0.08) 0%, transparent 50%),
                         radial-gradient(circle at 60% 40%, rgba(255, 149, 0, 0.06) 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            backgroundPosition: [
              "40% 60%, 60% 40%",
              "45% 55%, 55% 45%",
              "40% 60%, 60% 40%",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Gentle grid overlay */}
        <motion.div
          className="grid-pattern"
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="badge-dot"></span>
            Leading Healthcare Innovation
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="title-line title-line-1">Revolutionizing</div>
            <div className="title-line title-line-2">Healthcare</div>
            <div className="title-line title-line-3">Management</div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Experience the dawn of a new era in healthcare excellence with{" "}
            <span className="highlight-orange">cutting-edge technology</span>{" "}
            and <span className="highlight-white">innovative solutions</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <button className="btn-primary">
              <span className="btn-text">Discover More</span>
              <div className="btn-overlay"></div>
            </button>

            <button className="btn-secondary">
              <span className="btn-text">Learn More</span>
              <div className="btn-overlay-secondary"></div>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              { number: "500+", label: "Healthcare Partners" },
              { number: "99.9%", label: "Uptime Reliability" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
