'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

export default function FlipCard({
  frontContent,
  backContent,
  className = '',
  frontClassName = '',
  backClassName = '',
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn('perspective-1000 cursor-pointer group', className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0 backface-hidden rounded-2xl overflow-hidden',
            frontClassName
          )}
        >
          {frontContent}
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0 backface-hidden rounded-2xl overflow-hidden rotate-y-180',
            backClassName
          )}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}

// Pre-styled dish card with flip
interface DishCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
  price: string;
  ingredients?: string[];
}

export function DishFlipCard({
  image,
  name,
  category,
  description,
  price,
  ingredients,
}: DishCardProps) {
  return (
    <FlipCard
      className="h-80 md:h-96"
      frontClassName="card-elegant"
      backClassName="card-elegant bg-gradient-to-br from-navy-800 to-navy-900"
      frontContent={
        <div className="relative h-full">
          {/* Image */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-gold-400 text-sm font-medium">{category}</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">
              {name}
            </h3>
            <p className="text-gold-500 text-lg font-semibold mt-2">{price}</p>
          </div>

          {/* Flip indicator */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-navy-950/80 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      }
      backContent={
        <div className="h-full p-6 flex flex-col justify-between">
          <div>
            <span className="text-gold-400 text-sm font-medium">{category}</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">
              {name}
            </h3>
            <p className="text-navy-300 mt-4 leading-relaxed">{description}</p>
            
            {ingredients && ingredients.length > 0 && (
              <div className="mt-4">
                <p className="text-gold-500 text-sm font-medium mb-2">Ingrediente:</p>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2 py-1 bg-navy-700 text-navy-200 text-xs rounded-full"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-gold-500 text-xl font-bold">{price}</p>
            <button className="btn-gold px-4 py-2 rounded-full text-sm">
              Comandă
            </button>
          </div>
        </div>
      }
    />
  );
}
