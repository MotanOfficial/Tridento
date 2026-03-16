import Hero from '@/components/tridento/Hero';
import About from '@/components/tridento/About';
import Advantages from '@/components/tridento/Advantages';
import Gallery from '@/components/tridento/Gallery';
import Testimonials from '@/components/tridento/Testimonials';
import Statistics from '@/components/tridento/Statistics';
import Awards from '@/components/tridento/Awards';
import QRCodeSection from '@/components/tridento/QRCodeSection';
import ContactInfo from '@/components/tridento/ContactInfo';
import ParallaxElements from '@/components/tridento/ParallaxElements';
import CursorTrail from '@/components/tridento/CursorTrail';
import Divider from '@/components/tridento/Divider';

export default function HomePage() {
  return (
    <>
      {/* Cursor trail effect */}
      <CursorTrail color="rgba(212, 175, 55, 0.4)" size={6} trailLength={15} />
      
      {/* Parallax background elements */}
      <ParallaxElements />
      
      {/* Main content */}
      <Hero />
      <Divider variant="wave" color="gold" />
      <About />
      <Divider variant="trident" color="gold" invert />
      <Advantages />
      <Divider variant="double-wave" color="gold" />
      <Statistics />
      <Divider variant="curve" color="gold" invert />
      <Gallery />
      <Divider variant="wave" color="gold" />
      <Testimonials />
      <Divider variant="trident" color="gold" invert />
      <Awards />
      <Divider variant="double-wave" color="gold" />
      <QRCodeSection />
      <ContactInfo />
    </>
  );
}
