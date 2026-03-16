'use client';

import { motion } from 'framer-motion';
import { Users, UtensilsCrossed, Calendar, Award } from 'lucide-react';
import NumberCounter from './NumberCounter';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Clienți Mulțumiți',
    icon: <Users className="w-6 h-6" />,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Preparate Delicioase',
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Ani de Experiență',
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    value: 4.9,
    suffix: '',
    prefix: '',
    label: 'Rating Google',
    icon: <Award className="w-6 h-6" />,
    decimals: 1,
  },
];

function AnimatedCounter({ 
  value, 
  suffix, 
  prefix, 
  decimals = 0 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  decimals?: number;
}) {
  return (
    <NumberCounter
      to={value}
      suffix={suffix}
      prefix={prefix}
      duration={2.5}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-500 font-serif"
    />
  );
}

export default function Statistics() {
  return (
    <section className="py-16 md:py-20 bg-gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="card-elegant rounded-2xl p-6 md:p-8 relative overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-gold-500">{stat.icon}</span>
                </div>
                
                {/* Number with animation */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                
                {/* Label */}
                <p className="text-navy-300 text-sm md:text-base">{stat.label}</p>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
