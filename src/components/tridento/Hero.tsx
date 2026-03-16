'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import BlurText from './BlurText';
import GradientText from './GradientText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_50%)]" />
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="waves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q5 5, 10 10 T20 10" fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5"/>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#waves)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Big Logo - Main Hero Element */}
          <motion.div 
            className="mb-10 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 drop-shadow-2xl">
              <Image
                src="/big-logo.png"
                alt="Tridento Restaurant"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Subtitle with BlurText Effect */}
          <BlurText
            text="Restaurant"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl lg:text-3xl text-navy-200 mb-4 font-light"
          />

          {/* Tagline with BlurText Effect */}
          <BlurText
            text="Experiență culinară de excepție în inima Mangaliei, la malul Mării Negre"
            delay={100}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="text-lg md:text-xl text-gold-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          />

          {/* CTA Buttons with Gradient Text */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/meniu">
              <Button className="btn-gold px-8 py-4 text-lg rounded-full min-w-[200px] btn-pulse">
                <span className="text-navy-950 font-semibold tracking-wide">
                  Vezi Meniul
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg rounded-full min-w-[200px] border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                Rezervă / Contact
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a 
          href="#despre-noi" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </div>
    </section>
  );
}
