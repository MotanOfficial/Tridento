'use client';

import { useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  strength?: number;
  range?: number;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  strength = 0.4,
  range = 150,
  href,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { type: 'spring' as const, stiffness: 150, damping: 15 };

  const baseClassName = cn(
    'btn-gold rounded-full cursor-pointer inline-flex items-center justify-center gap-2 font-semibold transition-shadow duration-300',
    'px-6 py-3 text-base',
    'hover:shadow-lg hover:shadow-gold-500/30',
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={springConfig}
        className="inline-block"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
          className={baseClassName}
        >
          {children}
        </motion.span>
      </motion.a>
    );
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={springConfig}
      className="inline-block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
        className={baseClassName}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Magnetic wrapper for any element
interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrapper({
  children,
  className = '',
  strength = 0.3,
}: MagneticWrapperProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring' as const, stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
