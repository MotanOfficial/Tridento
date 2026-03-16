'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/meniu', label: 'Meniu' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gold-subtle">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/Tridento/mini-logo.png"
                alt="Tridento Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold font-serif text-gradient-gold">
              Tridento
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold-500 transition-colors font-medium text-lg underline-animation"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/meniu">
              <Button className="btn-gold px-6 py-2 rounded-full">
                Vezi Meniul
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold-subtle animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold-500 transition-colors font-medium text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/meniu" onClick={() => setIsOpen(false)}>
                <Button className="btn-gold w-full rounded-full mt-2">
                  Vezi Meniul
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
