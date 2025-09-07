"use client";

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValue } from 'framer-motion';

// Ultra-safe scroll hook that handles hydration gracefully
export const useSafeScroll = () => {
  const [isClient, setIsClient] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollProgress(progress);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return {
    scrollProgress: isClient ? scrollProgress : 0,
    isClient
  };
};

// Safe intersection observer hook
export const useSafeIntersection = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    if (!ref.current || typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '-50px',
        threshold: 0.1,
        ...options
      }
    );
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);
  
  return {
    ref,
    isInView: isClient ? isInView : false,
    isClient
  };
};

