"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIsMounted } from "../hooks/useScrollAnimation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const isMounted = useIsMounted();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  };

  if (!isMounted) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
