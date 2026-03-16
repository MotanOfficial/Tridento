'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  speed?: number;
}

// Static gradient text with gold shimmer
export default function GradientText({
  children,
  className = '',
  animated = false,
  speed = 3,
}: GradientTextProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {animated ? (
        <>
          {/* Base gradient */}
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
            {children}
          </span>
          
          {/* Shimmer overlay */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none"
            style={{ animationDuration: `${speed}s` }}
          >
            {children}
          </span>
        </>
      ) : (
        <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
          {children}
        </span>
      )}
    </span>
  );
}

// Animated gradient that cycles through colors
export function CyclingGradientText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={cn(
        'bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-500 bg-[length:200%_auto] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </motion.span>
  );
}

// Glowing text effect
export function GlowingText({
  children,
  className = '',
  color = 'gold',
}: {
  children: React.ReactNode;
  className?: string;
  color?: 'gold' | 'white';
}) {
  const glowColor = color === 'gold' 
    ? 'drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
    : 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]';

  return (
    <motion.span
      animate={{
        filter: [
          'drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))',
          'drop-shadow(0 0 15px rgba(212, 175, 55, 0.6))',
          'drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn('text-gold-400', glowColor, className)}
    >
      {children}
    </motion.span>
  );
}

// Gradient border around text
export function GradientBorderText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn('relative inline-block p-[2px] rounded-lg', className)}>
      {/* Animated border */}
      <motion.span
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-500 bg-[length:200%_auto] rounded-lg"
      />
      
      {/* Content */}
      <span className="relative bg-navy-950 rounded-lg px-3 py-1 block">
        {children}
      </span>
    </span>
  );
}

// Outline text that fills on hover
export function OutlineText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn('relative group cursor-pointer', className)}>
      {/* Outline */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500 group-hover:text-navy-950 transition-all duration-300"
        style={{ WebkitTextStroke: '1px #d4af37' }}
      >
        {children}
      </span>
      
      {/* Fill on hover */}
      <span className="absolute inset-0 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {children}
      </span>
    </span>
  );
}
