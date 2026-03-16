'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  splitBy?: 'letters' | 'words';
  delay?: number;
  duration?: number;
  animation?: 'fadeUp' | 'blur' | 'scale' | 'slide';
  once?: boolean;
}

export default function SplitText({
  text,
  className = '',
  splitBy = 'letters',
  delay = 0.03,
  duration = 0.5,
  animation = 'fadeUp',
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const elements = splitBy === 'words' ? text.split(' ') : text.split('');

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    blur: {
      initial: { opacity: 0, filter: 'blur(10px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
    },
    scale: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    },
  };

  const { initial, animate } = animations[animation];

  return (
    <div ref={ref} className={cn('flex flex-wrap', splitBy === 'words' ? 'gap-x-2' : '', className)}>
      {elements.map((char, index) => (
        <motion.span
          key={index}
          initial={initial}
          animate={isInView ? animate : initial}
          transition={{
            duration,
            delay: index * delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

// Pre-styled heading with split animation
interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  splitBy?: 'letters' | 'words';
  animation?: 'fadeUp' | 'blur' | 'scale' | 'slide';
}

export function AnimatedHeading({
  text,
  as: Component = 'h2',
  className = '',
  splitBy = 'letters',
  animation = 'blur',
}: AnimatedHeadingProps) {
  return (
    <Component className={cn('font-serif font-bold', className)}>
      <SplitText
        text={text}
        splitBy={splitBy}
        animation={animation}
        delay={0.02}
        className="text-gradient-gold"
      />
    </Component>
  );
}
