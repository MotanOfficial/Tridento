'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'shimmer' | 'none';
}

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'shimmer',
}: SkeletonProps) {
  const baseClasses = 'bg-navy-800';
  
  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-navy-700/50 before:to-transparent',
    none: '',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], animationClasses[animation], className)}
      style={style}
    />
  );
}

// Card skeleton for loading states
export function CardSkeleton() {
  return (
    <div className="card-elegant rounded-2xl p-6 space-y-4">
      <Skeleton variant="rounded" className="h-40 w-full" />
      <Skeleton variant="text" className="w-3/4 h-6" />
      <Skeleton variant="text" className="w-full h-4" />
      <Skeleton variant="text" className="w-2/3 h-4" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rounded" className="h-10 w-24" />
        <Skeleton variant="rounded" className="h-10 w-24" />
      </div>
    </div>
  );
}

// Gallery skeleton
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-square rounded-2xl overflow-hidden">
          <Skeleton variant="rounded" className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}

// Testimonial skeleton
export function TestimonialSkeleton() {
  return (
    <div className="card-elegant rounded-3xl p-6 md:p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} variant="circular" width={20} height={20} />
        ))}
      </div>
      <Skeleton variant="text" className="w-full h-4 mb-2" />
      <Skeleton variant="text" className="w-full h-4 mb-2" />
      <Skeleton variant="text" className="w-3/4 h-4 mb-6" />
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="space-y-2">
          <Skeleton variant="text" className="w-32 h-4" />
          <Skeleton variant="text" className="w-48 h-3" />
        </div>
      </div>
    </div>
  );
}

// Section skeleton
export function SectionSkeleton() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton variant="text" className="w-64 h-10 mx-auto mb-4" />
          <Skeleton variant="rounded" className="w-24 h-1 mx-auto mb-6" />
          <Skeleton variant="text" className="max-w-md h-5 mx-auto" />
        </div>
      </div>
    </div>
  );
}
