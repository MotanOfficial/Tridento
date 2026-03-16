'use client';

import { useState, useRef, useCallback, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function RippleButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  type = 'button',
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const rippleIdRef = useRef(0);

  const createRipple = useCallback((event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }, []);

  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    createRipple(event);
    onClick?.();
  };

  const variantClasses = {
    primary: 'btn-gold',
    secondary: 'bg-navy-800 text-white hover:bg-navy-700 border border-gold-subtle',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold overflow-hidden transition-all duration-300',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={handleClick}
        className={baseClasses}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
