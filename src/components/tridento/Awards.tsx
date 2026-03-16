'use client';

import { motion } from 'framer-motion';
import { Star, Award, Shield, ThumbsUp } from 'lucide-react';

const awards = [
  {
    icon: Star,
    title: 'TripAdvisor',
    subtitle: 'Certificate of Excellence',
    rating: '4.5',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Gault & Millau',
    subtitle: 'Recomandat',
    rating: '12.5',
    year: '2024',
  },
  {
    icon: Shield,
    title: 'Siguranță Alimentară',
    subtitle: 'Certificat HACCP',
    rating: '✓',
    year: '2023',
  },
  {
    icon: ThumbsUp,
    title: 'Google Reviews',
    subtitle: 'Rating Excelent',
    rating: '4.9',
    year: '2024',
  },
];

export default function Awards() {
  return (
    <section className="py-16 md:py-20 bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif font-bold mb-4"
          >
            <span className="text-gradient-gold">Recunoaștere & Premii</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
          <p className="text-navy-300 max-w-2xl mx-auto">
            Suntem mândri de recunoașterea primită pentru calitatea serviciilor și preparatelor noastre.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card-elegant rounded-2xl p-6 text-center relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <award.icon className="w-8 h-8 text-gold-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-semibold text-white mb-1">
                  {award.title}
                </h3>
                <p className="text-navy-400 text-sm mb-3">{award.subtitle}</p>
                
                {/* Rating */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-gold-500/10 rounded-full border border-gold-500/30">
                  <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                  <span className="text-gold-400 font-semibold">{award.rating}</span>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 right-3 text-xs text-navy-500 font-medium">
                  {award.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-navy-400">
            <Shield className="w-5 h-5 text-gold-500" />
            <span className="text-sm">Plată Securizată</span>
          </div>
          <div className="flex items-center gap-2 text-navy-400">
            <Award className="w-5 h-5 text-gold-500" />
            <span className="text-sm">Calitate Garantată</span>
          </div>
          <div className="flex items-center gap-2 text-navy-400">
            <ThumbsUp className="w-5 h-5 text-gold-500" />
            <span className="text-sm">Satisfacție 100%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
