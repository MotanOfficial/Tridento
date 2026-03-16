import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

const contactInfo = {
  address: 'Str. Oituz 20, Mangalia 905500, Romania',
  phone: '0241 751 126',
  email: 'srltridento@gmail.com',
  website: 'www.tridentosrl.com',
};

const hours = [
  { day: 'Luni - Vineri', time: '10:00 - 22:00' },
  { day: 'Sâmbătă - Duminică', time: '11:00 - 23:00' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-subtle">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Descriere */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/Tridento/mini-logo.png"
                  alt="Tridento Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-serif text-gradient-gold">
                Tridento
              </span>
            </div>
            <p className="text-navy-300 mb-6 max-w-md leading-relaxed">
              Restaurantul Tridento vă oferă o experiență culinară de excepție 
              în inima Mangaliei. Gusturi autentice, ingrediente proaspete și 
              o atmosferă elegantă vă așteaptă la malul mării.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-navy-800 text-gold-400 text-sm rounded-full border border-gold-subtle">
                Restaurant Premium
              </span>
              <span className="px-3 py-1 bg-navy-800 text-gold-400 text-sm rounded-full border border-gold-subtle">
                Specialități Marine
              </span>
              <span className="px-3 py-1 bg-navy-800 text-gold-400 text-sm rounded-full border border-gold-subtle">
                Bucătărie Românească
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-4 font-serif">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-navy-200 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-navy-200 hover:text-gold-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-navy-200 hover:text-gold-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-navy-200 hover:text-gold-500 transition-colors"
                >
                  <Globe className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span>{contactInfo.website}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Program */}
          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-4 font-serif">
              Program de Lucru
            </h3>
            <ul className="space-y-3">
              {hours.map((item) => (
                <li key={item.day} className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-navy-200">{item.day}</p>
                    <p className="text-gold-400 font-medium">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/meniu"
                className="inline-flex items-center px-4 py-2 btn-gold rounded-full text-sm"
              >
                Vezi Meniul
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-400">
          <p>
            © {new Date().getFullYear()} Tridento SRL. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/meniu" className="hover:text-gold-500 transition-colors">
              Meniu
            </Link>
            <Link href="/contact" className="hover:text-gold-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
