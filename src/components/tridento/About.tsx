'use client';

import { motion } from 'framer-motion';
import { Utensils, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Bucătărie Răsfățată',
    description: 'Preparate alese, gătite cu pasiune și măiestrie, folosind rețete tradiționale și tehnici moderne.',
  },
  {
    icon: Heart,
    title: 'Ingrediente Proaspete',
    description: 'Selectăm cu grijă cele mai bune ingrediente de la furnizori de încredere pentru a garanta calitatea.',
  },
  {
    icon: Users,
    title: 'Ambianță Elegantă',
    description: 'Un spațiu modern și rafinat, ideal pentru cine romantice, sărbători sau întâlniri de afaceri.',
  },
];

export default function About() {
  return (
    <section id="despre-noi" className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-800/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6"
          >
            <span className="text-gradient-gold">Despre Noi</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-navy-200 leading-relaxed mb-6"
          >
            Restaurantul Tridento este destinația perfectă pentru cei care apreciază 
            bucătăria de calitate într-un cadru elegant și relaxant. Situat în inima 
            Mangaliei, la câțiva pași de malul mării, oferim o experiență culinară 
            care îmbină tradiția cu rafinamentul modern.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-navy-300 leading-relaxed"
          >
            Echipa noastră de bucătari talentați prepară preparate delicioase 
            folosind ingrediente proaspete, locale și importate, pentru a vă oferi 
            cele mai savuroase preparate din pește și fructe de mare, dar și 
            specialități ale bucătăriei românești și internaționale.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group card-elegant card-glow rounded-2xl p-8 text-center relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-gold-500" />
              </div>
              
              {/* Content */}
              <h3 className="relative text-xl font-serif font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-navy-300 group-hover:text-navy-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
