'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SmoothScrollContainerProps {
  children: ReactNode;
  className?: string;
}

// Wrap sections with this for smooth full-page scrolling
export function SmoothScrollContainer({ children, className = '' }: SmoothScrollContainerProps) {
  return (
    <div className={cn('h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide', className)}>
      {children}
    </div>
  );
}

interface SmoothScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// Each section becomes a full-page snap point
export function SmoothScrollSection({ children, className = '', id }: SmoothScrollSectionProps) {
  return (
    <section id={id} className={cn('min-h-screen snap-start snap-always flex items-center', className)}>
      {children}
    </section>
  );
}

// Alternative: Use this hook to detect which section is active
import { useEffect, useState, useRef } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 0) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
