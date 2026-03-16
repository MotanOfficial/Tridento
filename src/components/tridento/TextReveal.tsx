'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = '',
  delay = 0.03,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const letters = text.split('');

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: index * delay,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
          style={{ marginRight: letter === ' ' ? '0.25em' : '0' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
}

// Alternative: Mask reveal animation
interface MaskRevealProps {
  text: string;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export function MaskReveal({
  text,
  className = '',
  direction = 'up',
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const initialPosition = {
    up: { y: '100%' },
    left: { x: '-100%' },
    right: { x: '100%' },
  };

  const animatePosition = {
    up: { y: 0 },
    left: { x: 0 },
    right: { x: 0 },
  };

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        initial={initialPosition[direction]}
        animate={isInView ? animatePosition[direction] : initialPosition[direction]}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.div>
    </div>
  );
}

// Word-by-word reveal
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className = '', delay = 0.1 }: WordRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const words = text.split(' ');

  return (
    <div ref={ref} className={cn('flex flex-wrap gap-x-2 gap-y-1', className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Typewriter effect
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({
  text,
  className = '',
  speed = 50,
  delay = 0,
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const characters = text.split('');

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0,
            delay: delay + (index * speed) / 1000,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-current ml-0.5"
      />
    </span>
  );
}
