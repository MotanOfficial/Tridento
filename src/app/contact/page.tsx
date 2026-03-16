import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează restaurantul Tridento din Mangalia. Adresă, telefon, email și program de lucru pentru rezervări și informații.',
  openGraph: {
    title: 'Contact | Tridento Restaurant',
    description: 'Contactează restaurantul Tridento pentru rezervări și informații.',
    images: ['/og-image.jpg'],
  },
};

const contactData = {
  address: 'Str. Oituz 20, Mangalia 905500, Romania',
  phone: '0241 751 126',
  email: 'srltridento@gmail.com',
  website: 'www.tridentosrl.com',
};

const hours = [
  { day: 'Luni - Vineri', time: '10:00 - 22:00' },
  { day: 'Sâmbătă - Duminică', time: '11:00 - 23:00' },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-navy-950 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient-gold">Contact</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto">
            Suntem aici pentru tine. Contactează-ne pentru rezervări, 
            informații sau pentru a organiza evenimente speciale.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Adresă */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-white mb-2">
                    Adresa Noastră
                  </h3>
                  <p className="text-navy-300 mb-3">
                    {contactData.address}
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Deschide în Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Telefon */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-white mb-2">
                    Telefon
                  </h3>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="text-2xl text-gold-400 hover:text-gold-300 transition-colors block mb-3"
                  >
                    {contactData.phone}
                  </a>
                  <p className="text-navy-400 text-sm mb-4">
                    Sună-ne pentru rezervări sau informații
                  </p>
                  <a href={`tel:${contactData.phone}`}>
                    <Button className="btn-gold rounded-lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Apelează Acum
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-white mb-2">
                    Email
                  </h3>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-xl text-gold-400 hover:text-gold-300 transition-colors block mb-3"
                  >
                    {contactData.email}
                  </a>
                  <p className="text-navy-400 text-sm mb-4">
                    Scrie-ne pentru orice întrebare sau propunere
                  </p>
                  <a href={`mailto:${contactData.email}`}>
                    <Button className="btn-gold rounded-lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Trimite Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-gold-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-white mb-2">
                    Website
                  </h3>
                  <a 
                    href={`https://${contactData.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gold-400 hover:text-gold-300 transition-colors block mb-3"
                  >
                    {contactData.website}
                  </a>
                  <a 
                    href={`https://${contactData.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-gold rounded-lg">
                      <Globe className="w-4 h-4 mr-2" />
                      Vizitează Site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Hours */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="card-elegant rounded-2xl overflow-hidden">
              <div className="bg-navy-800 px-4 py-3 border-b border-gold-subtle flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span className="text-white font-medium">Locația Noastră</span>
              </div>
              <div className="relative bg-navy-900" style={{ height: '300px' }}>
                {/* Google Maps Embed - Înlocuiește cu coordonatele reale */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.495143288443!2d28.5869073!3d43.8143075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b9f87f8d2d2d2d%3A0x2d2d2d2d2d2d2d2d!2sStr.%20Oituz%2020%2C%20Mangalia%20905500!5e0!3m2!1sro!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locație Tridento Mangalia"
                  className="grayscale contrast-125 opacity-80"
                />
                {/* Overlay pentru integrare vizuală */}
                <div className="absolute bottom-4 left-4 bg-navy-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-subtle">
                  <p className="text-sm text-gold-400 font-medium">Tridento Restaurant</p>
                  <p className="text-xs text-navy-300">Str. Oituz 20, Mangalia</p>
                </div>
              </div>
            </div>

            {/* Program de Lucru */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-gold-500" />
                <h3 className="text-xl font-serif font-semibold text-white">
                  Program de Lucru
                </h3>
              </div>
              <div className="space-y-4">
                {hours.map((item) => (
                  <div 
                    key={item.day}
                    className="flex justify-between items-center py-3 border-b border-gold-subtle last:border-0"
                  >
                    <span className="text-navy-200">{item.day}</span>
                    <span className="text-gold-400 font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-navy-800/50 rounded-lg border border-gold-subtle">
                <p className="text-sm text-navy-300 text-center">
                  Pentru rezervări în afara programului, te rugăm să ne contactezi telefonic.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="card-elegant rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                Rezervă o Masă
              </h3>
              <p className="text-navy-300 mb-6">
                Te invităm să ne vizitezi și să te bucuri de preparatele noastre delicioase. 
                Pentru rezervări, sună-ne la numărul de telefon afișat.
              </p>
              <a href={`tel:${contactData.phone}`}>
                <Button className="btn-gold px-8 py-4 text-lg rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Sună pentru Rezervări
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link 
            href="/meniu"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-lg"
          >
            ← Consultă meniul nostru
          </Link>
        </div>
      </div>
    </section>
  );
}
