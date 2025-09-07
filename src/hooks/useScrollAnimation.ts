"use client";

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

// Custom hook to handle hydration safely
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Hook to check if component is mounted (for hydration safety)
export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return isMounted;
};

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const isInView = useInView(ref, isMounted ? { once: false, margin: "-100px" } : { once: false, margin: "-100px" });
  
  return { ref, isInView: isMounted ? isInView : false };
};

// Advanced scroll animations that trigger every time
export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const isInView = useInView(ref, isMounted ? { once: false, margin: "-50px" } : { once: false, margin: "-50px" });
  
  return { ref, isInView: isMounted ? isInView : false };
};

// Continuous scroll-based transforms
export const useScrollTransforms = () => {
  const isMounted = useIsMounted();
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0.3]);
  
  const staticY = useMotionValue(0);
  const staticRotate = useMotionValue(0);
  const staticScale = useMotionValue(1);
  const staticOpacity = useMotionValue(1);
  
  return { 
    y: isMounted ? y : staticY, 
    rotate: isMounted ? rotate : staticRotate, 
    scale: isMounted ? scale : staticScale, 
    opacity: isMounted ? opacity : staticOpacity, 
    scrollYProgress 
  };
};

// Section-specific scroll animations
export const useSectionScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  
  // Only initialize scroll if mounted and in browser
  const { scrollYProgress } = useScroll(
    typeof window !== 'undefined' && isMounted ? {
      target: ref,
      offset: ["start end", "end start"]
    } : {}
  );
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  const staticY = useMotionValue(0);
  const staticRotate = useMotionValue(0);
  const staticScale = useMotionValue(1);
  const staticOpacity = useMotionValue(1);
  
  return { 
    ref, 
    y: isMounted ? y : staticY, 
    rotate: isMounted ? rotate : staticRotate, 
    scale: isMounted ? scale : staticScale, 
    opacity: isMounted ? opacity : staticOpacity 
  };
};

// Text reveal animation on scroll
export const useTextReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const isInView = useInView(ref, isMounted ? { once: false, margin: "-100px" } : { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll(
    typeof window !== 'undefined' && isMounted ? {
      target: ref,
      offset: ["start 0.8", "start 0.2"]
    } : {}
  );
  
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const staticY = useMotionValue(0);
  const staticOpacity = useMotionValue(1);
  
  return { 
    ref, 
    isInView: isMounted ? isInView : false, 
    clipPath: isMounted ? clipPath : "inset(0 0% 0 0)", 
    y: isMounted ? y : staticY, 
    opacity: isMounted ? opacity : staticOpacity 
  };
};

// Staggered elements animation
export const useStaggeredAnimation = (delay: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const isInView = useInView(ref, isMounted ? { once: false, margin: "-80px" } : { once: false, margin: "-80px" });
  
  return { ref, isInView: isMounted ? isInView : false, delay };
};

// Floating animation on scroll
export const useFloatingOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const { scrollYProgress } = useScroll(
    typeof window !== 'undefined' && isMounted ? {
      target: ref,
      offset: ["start end", "end start"]
    } : {}
  );
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, -20]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
  const staticY = useMotionValue(0);
  const staticX = useMotionValue(0);
  const staticRotate = useMotionValue(0);
  
  return { 
    ref, 
    y: isMounted ? y : staticY, 
    x: isMounted ? x : staticX, 
    rotate: isMounted ? rotate : staticRotate 
  };
};

export const useParallax = (offset: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const yPos = scrollProgress * offset;
      
      y.set(yPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y, offset]);

  return { ref, y: smoothY };
};

export const useMouseParallax = (intensity: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const smoothX = useSpring(x, { damping: 60, stiffness: 300 });
  const smoothY = useSpring(y, { damping: 60, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;
      
      x.set(deltaX);
      y.set(deltaY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, intensity]);

  return { ref, x: smoothX, y: smoothY };
};
