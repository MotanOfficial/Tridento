'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full btn-gold shadow-lg shadow-gold-500/30 flex items-center justify-center group"
          aria-label="Înapoi sus"
        >
          <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-navy-950 group-hover:-translate-y-0.5 transition-transform" />
          
          {/* Pulse ring effect */}
          <span className="absolute inset-0 rounded-full bg-gold-500/30 animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
