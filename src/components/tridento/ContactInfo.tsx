import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

export default function ContactInfo() {
  return (
    <section className="py-20 md:py-28 bg-gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-gradient-gold">Contactează-ne</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto">
            Suntem aici pentru tine. Contactează-ne pentru rezervări, 
            informații sau evenimente speciale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Adresă */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Adresa
              </h3>
              <p className="text-navy-300 text-sm">
                {contactData.address}
              </p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold-500 hover:text-gold-400 text-sm transition-colors"
              >
                Deschide în Google Maps →
              </a>
            </div>

            {/* Telefon */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Telefon
              </h3>
              <a 
                href={`tel:${contactData.phone}`}
                className="text-navy-300 text-sm hover:text-gold-500 transition-colors block mb-4"
              >
                {contactData.phone}
              </a>
              <a href={`tel:${contactData.phone}`}>
                <Button className="btn-gold w-full rounded-lg text-sm py-2">
                  Apelează Acum
                </Button>
              </a>
            </div>

            {/* Email */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Email
              </h3>
              <a 
                href={`mailto:${contactData.email}`}
                className="text-navy-300 text-sm hover:text-gold-500 transition-colors block mb-4 break-all"
              >
                {contactData.email}
              </a>
              <a href={`mailto:${contactData.email}`}>
                <Button className="btn-gold w-full rounded-lg text-sm py-2">
                  Trimite Email
                </Button>
              </a>
            </div>

            {/* Website */}
            <div className="card-elegant rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Website
              </h3>
              <a 
                href={`https://${contactData.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 text-sm hover:text-gold-500 transition-colors block mb-4"
              >
                {contactData.website}
              </a>
              <a 
                href={`https://${contactData.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold w-full rounded-lg text-sm py-2">
                  Vizitează Site
                </Button>
              </a>
            </div>
          </div>

          {/* Program & CTA */}
          <div className="flex flex-col gap-6">
            {/* Program */}
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
            </div>

            {/* CTA */}
            <div className="card-elegant rounded-2xl p-6 text-center">
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Rezervă o Masă
              </h3>
              <p className="text-navy-300 mb-6 text-sm">
                Pentru rezervări și evenimente speciale, te rugăm să ne 
                contactezi telefonic sau prin email.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="flex-1">
                  <Button className="btn-gold w-full rounded-lg">
                    Pagina de Contact
                  </Button>
                </Link>
                <Link href="/meniu" className="flex-1">
                  <Button 
                    variant="outline"
                    className="w-full rounded-lg border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950"
                  >
                    Vezi Meniul
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
