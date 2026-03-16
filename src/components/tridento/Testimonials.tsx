'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Ionescu',
    location: 'București',
    rating: 5,
    text: 'O experiență culinară extraordinară! Peștele a fost proaspăt și gătit perfect, iar servirea a fost impecabilă. Cu siguranță vom reveni!',
    date: 'Acum 2 săptămâni',
  },
  {
    id: 2,
    name: 'Alexandru Popescu',
    location: 'Constanța',
    rating: 5,
    text: 'Cel mai bun restaurant de pe litoral! Atmosferă elegantă, meniu variat și preparate delicioase. Recomand cu căldură specialitățile de fructe de mare.',
    date: 'Acum o lună',
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    location: 'Mangalia',
    rating: 5,
    text: 'Am sărbătorit ziua de naștere aici și a fost perfect. Personalul foarte atent, mâncarea excelentă și decorul superb. Mulțumim pentru tot!',
    date: 'Acum 3 săptămâni',
  },
  {
    id: 4,
    name: 'Andrei Marin',
    location: 'Cluj-Napoca',
    rating: 5,
    text: 'Am descoperit Tridento în vacanță și ne-a cucerit. Preparate autentice, ingrediente proaspete și un raport calitate-preț excelent.',
    date: 'Acum o lună',
  },
  {
    id: 5,
    name: 'Cristina Georgescu',
    location: 'Timișoara',
    rating: 5,
    text: 'Restaurantul ideal pentru o cină romantică la malul mării. Vederile sunt superbe, iar preparatele sunt adevărate opere de artă culinară.',
    date: 'Acum 2 luni',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-gold-500 fill-gold-500' : 'text-navy-600'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`card-elegant rounded-3xl p-6 md:p-8 relative ${
        isActive ? 'shadow-2xl shadow-gold-500/10' : ''
      }`}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-gold-500/10" />
      
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      
      {/* Text */}
      <p className="text-navy-200 text-lg leading-relaxed mb-6 italic">
        &quot;{testimonial.text}&quot;
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-navy-950 font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-navy-400 text-sm">{testimonial.location} • {testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-gradient-gold">Ce Spun Oaspeții Noștri</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
            <p className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto">
              Părerea clienților noștri contează cel mai mult. Descoperă experiențele lor la Tridento.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-navy-800 hover:bg-navy-700 border border-gold-subtle text-gold-500 hover:text-gold-400 transition-all hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-gold-500' 
                      : 'bg-navy-600 hover:bg-navy-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-navy-800 hover:bg-navy-700 border border-gold-subtle text-gold-500 hover:text-gold-400 transition-all hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials - Mobile */}
        <div className="md:hidden">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 pb-4 -mx-4 px-4">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-shrink-0 w-[85vw] snap-center">
                  <TestimonialCard testimonial={testimonial} isActive={index === currentIndex} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-gold-500' : 'bg-navy-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 card-elegant rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9</span>
            <span className="text-navy-400">din 5 stele</span>
            <span className="text-navy-600">•</span>
            <span className="text-navy-400">{testimonials.length}+ recenzii</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
