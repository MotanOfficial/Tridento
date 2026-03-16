'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface CursorTrailProps {
  color?: string;
  size?: number;
  trailLength?: number;
  particleCount?: number;
  enabled?: boolean;
}

export default function CursorTrail({
  color = 'rgba(212, 175, 55, 0.5)',
  size = 8,
  trailLength = 20,
  particleCount = 5,
  enabled = true,
}: CursorTrailProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Add new particles
      for (let i = 0; i < particleCount; i++) {
        setParticles((prev) => [
          ...prev,
          {
            id: idRef.current++,
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: Math.random() * size + 2,
            opacity: Math.random() * 0.5 + 0.3,
          },
        ]);
      }

      // Limit trail length
      if (particles.length > trailLength) {
        setParticles((prev) => prev.slice(-trailLength));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, particleCount, size, trailLength, particles.length]);

  // Fade out particles
  useEffect(() => {
    if (!enabled || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [enabled, particles.length]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main cursor */}
      <motion.div
        animate={{
          x: mousePos.x - size / 2,
          y: mousePos.y - size / 2,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color}, transparent)`,
        }}
      />

      {/* Trail particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: particle.opacity, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${color}, transparent)`,
          }}
        />
      ))}
    </div>
  );
}

// Ring cursor effect
export function RingCursor({
  color = 'rgba(212, 175, 55, 0.4)',
  size = 40,
  enabled = true,
}: {
  color?: string;
  size?: number;
  enabled?: boolean;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hover over interactive elements
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [enabled]);

  if (!enabled || !isVisible) return null;

  return (
    <motion.div
      animate={{
        x: mousePos.x - size / 2,
        y: mousePos.y - size / 2,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed pointer-events-none z-[9999] rounded-full border-2"
      style={{
        width: size,
        height: size,
        borderColor: color,
      }}
    />
  );
}
