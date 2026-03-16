'use client';

import Image from 'next/image';
import { Smartphone, QrCode } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface QRCodeSectionProps {
  /**
   * Textul descriptiv lângă QR
   */
  description?: string;
}

export default function QRCodeSection({ 
  description = 'Scanează codul QR pentru a accesa meniul nostru digital direct pe telefonul tău.'
}: QRCodeSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elegant rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* QR Code Image */}
              <div className="flex-shrink-0">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl">
                  <div className="relative w-44 h-44 md:w-52 md:h-52">
                    <Image
                      src="/Tridento/qr-code.png"
                      alt="QR Code Meniu Tridento"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <QrCode className="w-8 h-8 text-gold-500" />
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gradient-gold">
                    Meniu Digital
                  </h2>
                </div>
                <p className="text-lg text-navy-200 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/meniu">
                    <Button className="btn-gold rounded-full px-6">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Accesează Meniul
                    </Button>
                  </Link>
                  <a 
                    href="/Tridento/menu/tridento-catalog.pdf" 
                    download
                    className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-4"
                  >
                    Descarcă PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
