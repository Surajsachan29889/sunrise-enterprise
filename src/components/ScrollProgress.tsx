"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useIsMounted } from "../hooks/useScrollAnimation";

const ScrollProgress = () => {
  const isMounted = useIsMounted();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  if (!isMounted) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "rgba(255, 149, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #ff9500 0%, #ffb347 100%)",
            width: "0%",
          }}
        />
      </div>
    );
  }

  return (
    <motion.div
      className="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "rgba(255, 149, 0, 0.1)",
        zIndex: 1000,
        transformOrigin: "0%",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #ff9500 0%, #ffb347 100%)",
          transformOrigin: "0%",
          scaleX,
        }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
