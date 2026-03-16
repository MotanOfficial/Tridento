import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  ExternalLink, 
  FileText, 
  QrCode,
  ArrowLeft,
  Smartphone 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meniu',
  description: 'Descoperă meniul restaurantului Tridento. Specialități marine, preparate tradiționale românești și delicii internaționale în Mangalia.',
  openGraph: {
    title: 'Meniu | Tridento Restaurant',
    description: 'Descoperă meniul restaurantului Tridento - specialități marine și bucătărie românească.',
    images: ['/og-image.jpg'],
  },
};

// Pentru GitHub Pages cu basePath /Tridento, fișierul PDF este servit de la:
//   https://motanofficial.github.io/Tridento/menu/tridento-catalog.pdf
const MENU_PDF_PATH = '/Tridento/menu/tridento-catalog.pdf';

export default function MeniuPage() {
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
            <span className="text-gradient-gold">Meniul Nostru</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-navy-200 max-w-2xl mx-auto">
            Descoperă selecția noastră de preparate fine, preparate cu ingrediente 
            proaspete și multă pasiune pentru gastronomie.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href={MENU_PDF_PATH} download>
            <Button className="btn-gold px-8 py-6 text-lg rounded-full w-full sm:w-auto">
              <Download className="w-5 h-5 mr-2" />
              Descarcă Meniul
            </Button>
          </a>
          <a href={MENU_PDF_PATH} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 w-full sm:w-auto"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Deschide Meniul în PDF
            </Button>
          </a>
        </div>

        {/* PDF Preview Container */}
        <div className="card-elegant rounded-3xl overflow-hidden mb-12">
          <div className="bg-navy-800 px-4 py-3 border-b border-gold-subtle flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gold-500" />
              <span className="text-white font-medium">Preview Meniu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          
          {/* PDF Embed */}
          <div className="bg-navy-900 p-4">
            <div className="w-full" style={{ minHeight: '600px' }}>
              <iframe
                src={`${MENU_PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-[600px] md:h-[800px] rounded-lg border border-gold-subtle"
                title="Meniu Tridento PDF"
              />
            </div>
          </div>
        </div>

        {/* Alternative Text */}
        <div className="text-center text-navy-400 mb-12">
          <p className="mb-2">
            Nu poți vedea PDF-ul? Încearcă să îl descarci sau să îl deschizi într-un tab nou.
          </p>
          <p>
            PDF-ul este pregătit pentru a fi adăugat în: <code className="text-gold-400 bg-navy-800 px-2 py-1 rounded">public/menu/tridento-catalog.pdf</code>
          </p>
        </div>

        {/* QR Section */}
        <div className="card-elegant rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center">
          <QrCode className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-semibold text-white mb-3">
            Scanează pentru Meniu
          </h2>
          <p className="text-navy-300 mb-6">
            Folosește camera telefonului pentru a scana codul QR de pe pagina 
            principală și a accesa meniul direct pe dispozitivul tău mobil.
          </p>
          <Link href="/">
            <Button className="btn-gold rounded-full">
              <Smartphone className="w-4 h-4 mr-2" />
              Înapoi la pagina principală
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
