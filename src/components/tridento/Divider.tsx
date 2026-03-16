'use client';

import { motion } from 'framer-motion';

interface DividerProps {
  variant?: 'wave' | 'trident' | 'curve' | 'double-wave';
  color?: 'gold' | 'navy';
  invert?: boolean;
  className?: string;
}

export default function Divider({
  variant = 'wave',
  color = 'gold',
  invert = false,
  className = '',
}: DividerProps) {
  const colorClass = color === 'gold' ? 'text-gold-500/10' : 'text-navy-900';
  const invertClass = invert ? 'rotate-180' : '';

  const variants = {
    wave: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-16 md:h-24 ${colorClass} ${invertClass}`}>
        <path
          fill="currentColor"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        />
      </svg>
    ),
    trident: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-16 md:h-24 ${colorClass} ${invertClass}`}>
        <path
          fill="currentColor"
          d="M0,0V46.29c47.79,22.2,103.72,33.42,158.75,33.42,89.72,0,168.79-33.42,277.32-33.42S536.09,79.71,600,79.71s108.79-33.42,217.32-33.42,168.79,33.42,277.32,33.42c55,0,111-11.21,158.75-33.42V0Z"
        />
        <circle cx="200" cy="80" r="8" fill="currentColor" opacity="0.5" />
        <circle cx="400" cy="60" r="6" fill="currentColor" opacity="0.5" />
        <circle cx="600" cy="70" r="10" fill="currentColor" opacity="0.5" />
        <circle cx="800" cy="55" r="7" fill="currentColor" opacity="0.5" />
        <circle cx="1000" cy="75" r="9" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-12 md:h-16 ${colorClass} ${invertClass}`}>
        <path
          fill="currentColor"
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
        />
      </svg>
    ),
    'double-wave': (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-20 md:h-28 ${colorClass} ${invertClass}`}>
        <path
          fill="currentColor"
          opacity="0.5"
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        />
        <path
          fill="currentColor"
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          transform="translate(0, -20)"
        />
      </svg>
    ),
  };

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      {variants[variant]}
    </div>
  );
}

// Animated divider with scroll trigger
export function AnimatedDivider({ variant = 'wave', color = 'gold' }: DividerProps) {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="origin-left"
      >
        <Divider variant={variant} color={color} />
      </motion.div>
    </div>
  );
}

// Decorative line divider
export function LineDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
      <div className="w-2 h-2 bg-gold-500 rounded-full" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
    </div>
  );
}
