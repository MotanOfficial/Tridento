'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Floating bubble component
function FloatingBubble({ 
  size, 
  left, 
  top, 
  delay = 0,
  duration = 6 
}: { 
  size: number; 
  left: string; 
  top: string; 
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: `radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))`,
        boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

// Parallax wave component
function ParallaxWave({ 
  className, 
  opacity = 0.05 
}: { 
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={`absolute w-full ${className}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <path
        fill="rgba(212, 175, 55, 0.3)"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
}

// Decorative fish icon
function FloatingFish({ delay = 0, left, top }: { delay?: number; left: string; top: string }) {
  return (
    <motion.div
      className="absolute text-gold-500/20 pointer-events-none"
      style={{ left, top }}
      animate={{
        x: [0, 50, 0],
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 20L3 17V7L12 4L21 7V17L12 20Z" opacity="0.3"/>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
      </svg>
    </motion.div>
  );
}

// Anchor with parallax
function ParallaxAnchor() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 20]);
  const opacity = useTransform(scrollY, [0, 300], [0.1, 0]);

  return (
    <motion.div
      className="absolute right-10 top-1/4 pointer-events-none hidden lg:block"
      style={{ y, rotate, opacity }}
    >
      <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-gold-500">
        <path 
          d="M50 10V75M50 10C50 10 30 20 30 35C30 50 50 55 50 55M50 10C50 10 70 20 70 35C70 50 50 55 50 55M25 30H75M35 30V20C35 20 40 15 50 15C60 15 65 20 65 20V30M30 75C30 75 40 85 50 85C60 85 70 75 70 75" 
          stroke="currentColor" 
          strokeWidth="2"
          opacity="0.2"
        />
      </svg>
    </motion.div>
  );
}

export default function ParallaxElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating bubbles */}
      <FloatingBubble size={80} left="10%" top="20%" delay={0} duration={8} />
      <FloatingBubble size={120} left="85%" top="60%" delay={1} duration={10} />
      <FloatingBubble size={60} left="70%" top="15%" delay={2} duration={7} />
      <FloatingBubble size={100} left="20%" top="70%" delay={3} duration={9} />
      <FloatingBubble size={50} left="90%" top="30%" delay={4} duration={6} />
      <FloatingBubble size={70} left="5%" top="50%" delay={5} duration={8} />
      <FloatingBubble size={40} left="50%" top="85%" delay={2} duration={7} />
      <FloatingBubble size={90} left="75%" top="80%" delay={1} duration={11} />

      {/* Parallax anchor */}
      <ParallaxAnchor />

      {/* Waves */}
      <ParallaxWave className="bottom-0 h-64" opacity={0.03} />
      <ParallaxWave className="bottom-10 h-48" opacity={0.02} />
    </div>
  );
}
