'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  direction?: 'up' | 'down';
}

export function ParallaxImage({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    }
  }, []);

  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight;

  const yRange = useTransform(
    scrollY,
    [initial, final],
    direction === 'up' 
      ? [speed * 100, -speed * 100]
      : [-speed * 100, speed * 100]
  );

  const y = useSpring(yRange, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

// Full section with parallax background
interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  speed?: number;
}

export function ParallaxSection({
  children,
  backgroundImage,
  className = '',
  overlay = true,
  overlayOpacity = 0.7,
  speed = 0.3,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background */}
      {backgroundImage && (
        <motion.div
          style={{ y: springY }}
          className="absolute inset-0 z-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-10 bg-navy-950"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
}

// Parallax layer for multiple elements
interface ParallaxLayerProps {
  children: ReactNode;
  depth?: number; // 0 to 1, how much parallax effect
  className?: string;
}

export function ParallaxLayer({
  children,
  depth = 0.5,
  className = '',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [depth * -100, depth * 100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }} className={className}>
      {children}
    </motion.div>
  );
}
