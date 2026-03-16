'use client';

import { motion } from 'framer-motion';
import { ChefHat, Fish, Wine, Sparkles } from 'lucide-react';

const advantages = [
  {
    icon: ChefHat,
    title: 'Bucătari Experți',
    description: 'Echipa noastră de bucătari are o experiență vastă în prepararea celor mai delicioase preparate, combinând tehnicile clasice cu inovația culinară.',
  },
  {
    icon: Fish,
    title: 'Specialități Marine',
    description: 'Pește proaspăt adus zilnic de la pescari locali, fructe de mare fine și preparate specifice zonei litorale, gătite cu măiestrie.',
  },
  {
    icon: Wine,
    title: 'Selecție de Vinuri',
    description: 'O colecție selectă de vinuri românești și internaționale, alese pentru a completa perfect preparatele noastre culinare.',
  },
  {
    icon: Sparkles,
    title: 'Servicii Premium',
    description: 'Personalul nostru atent și profesionist se asigură că fiecare oaspete se simte special și are o experiență de neuitat.',
  },
];

export default function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6"
          >
            <span className="text-gradient-gold">De Ce Tridento?</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto"
          >
            Descoperă ce ne diferențiază și de ce oaspeții noștri 
            revin mereu cu drag.
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group flex gap-5 p-6 rounded-xl bg-navy-900/50 border border-gold-subtle hover:border-gold-500/50 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Icon */}
              <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-7 h-7 text-gold-500" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-serif font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed group-hover:text-navy-200 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
