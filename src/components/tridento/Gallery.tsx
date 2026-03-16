'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Gallery images - these would be replaced with actual food photos
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    alt: 'Preparat gourmet elegant',
    category: 'Specialități',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Preparat premium',
    category: 'Principal',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    alt: 'Fructe de mare proaspete',
    category: 'Marine',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
    alt: 'Desert elegant',
    category: 'Desert',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    alt: 'Saladă gourmet',
    category: 'Salate',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    alt: 'Pește la grătar',
    category: 'Marine',
  },
];

function LightboxModal({ 
  image, 
  onClose, 
  onPrev, 
  onNext 
}: { 
  image: typeof galleryImages[0]; 
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-lg p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/80 hover:text-gold-500 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 p-2 text-white/80 hover:text-gold-500 transition-colors z-10"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 p-2 text-white/80 hover:text-gold-500 transition-colors z-10"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent p-6 rounded-b-lg">
          <span className="text-gold-400 text-sm font-medium">{image.category}</span>
          <p className="text-white text-lg">{image.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-navy relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Camera className="w-8 h-8 text-gold-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-gradient-gold">Galeria Noastră</span>
            </h2>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto">
            Descoperă preparatele noastre prin imagini. Fiecare fel este o operă de artă culinară.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-gold-400 text-sm font-medium mb-1">{image.category}</span>
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-2xl transition-all duration-300" />
              
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-navy-950/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <LightboxModal
            image={galleryImages[selectedImage]}
            onClose={() => setSelectedImage(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
