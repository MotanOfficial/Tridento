'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean;
  decimals?: number;
}

function AnimatedNumber({
  value,
  duration = 2,
  delay = 0,
  decimals = 0,
}: {
  value: number;
  duration?: number;
  delay?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => 
    Math.floor(current)
  );

  const displayDecimal = useTransform(spring, (current) => 
    current.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        spring.set(value);
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, spring, delay, hasAnimated]);

  return (
    <motion.span ref={ref}>
      <motion.span>
        {decimals > 0 ? displayDecimal : display}
      </motion.span>
    </motion.span>
  );
}

export default function NumberCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  className = '',
  once = true,
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <div ref={ref} className={className}>
      {prefix}
      {isInView && (
        <AnimatedNumber value={to} duration={duration} delay={delay} decimals={decimals} />
      )}
      {suffix}
    </div>
  );
}

// Statistics section component
interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export function StatsSection({ stats, title, subtitle }: StatsSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-20 bg-gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                <span className="text-gradient-gold">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-navy-300 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="card-elegant rounded-2xl p-6 md:p-8 hover:shadow-gold-500/10 transition-all duration-300">
                {/* Icon */}
                {stat.icon && (
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gold-500">{stat.icon}</span>
                  </div>
                )}
                
                {/* Number */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-500 mb-2 font-serif">
                  {isInView && (
                    <NumberCounter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2}
                      delay={index * 0.1}
                    />
                  )}
                </div>
                
                {/* Label */}
                <p className="text-navy-300 text-sm md:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
