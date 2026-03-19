"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Globe, Pizza, Martini, Palmtree, Clock3 } from "lucide-react"

const company = {
  name: "F.E. Tridento S.R.L.",
  slogan: "Gustul mării într-un cadru premium",
  description:
    "Descoperă o experienţă culinară inspirată de prospețimea mării, savoarea preparatelor atent alese şi eleganța unui spațiu modern, creat pentru momente speciale.",
  address: "Str. Oituz 20, Mangalia 905500, România",
  phone: "0241 751 126",
  email: "srltridento@gmail.com",
  website: "www.tridentosrl.com",
}

const benefits = [
  {
    icon: Pizza,
    text: "Pizza premium și specialități inspirate de mare.",
  },
  {
    icon: Martini,
    text: "Băuturi răcoritoare și deserturi elegante.",
  },
  {
    icon: Palmtree,
    text: "Atmosferă elegantă și relaxantă, inspirată de mare.",
  },
  {
    icon: Clock3,
    text: "Servicii rapide și atente pentru orice moment al zilei.",
  },
]

export default function FlyerPage() {
  const flyerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950 text-white">
      {/* Screen-only action bar */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button
          className="btn-gold rounded-full px-5 py-2 text-sm shadow-lg"
          onClick={() => window.print()}
        >
          Descarcă flyer PDF
        </Button>
      </div>
      {/* Flyer container: aproximativ format A4 pe verticală */}
      <div
        ref={flyerRef}
        className="relative w-full max-w-[740px] aspect-[1/1.4142] shadow-2xl overflow-hidden px-6 py-8 md:px-10 md:py-10 break-inside-avoid print:rounded-none"
      >
        {/* Background imagine dedicată flyer-ului */}
        <Image
          src="/Tridento/flyer-background.png"
          alt="Fundal Tridento flyer"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay ușor pentru lizibilitate – fundalul rămâne bine vizibil */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-navy-950/30 to-navy-950/50 print:bg-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Top: logo + title (centered, inspirat de flyer-ul dat) */}
          <header className="mb-4 md:mb-5 text-center">
            <div className="flex justify-center mb-3">
              <div className="relative w-32 h-24 md:w-40 md:h-28">
                <Image
                  src="/Tridento/flyer-logo.png"
                  alt="Tridento Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] print:drop-shadow-none"
                  priority
                />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
              <span className="text-gradient-gold">{company.name}</span>
            </h1>
            <p className="text-sm md:text-base text-gold-200/90 mt-2 font-medium italic">
              {company.slogan}
            </p>
          </header>

          {/* Decor divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/80 to-transparent mb-3 md:mb-4" />

          {/* Main text area */}
          <main className="flex-1 grid grid-rows-[auto_auto_auto_1fr] gap-4 md:gap-5">
            {/* Description */}
            <section className="text-center px-2">
              <p className="text-sm md:text-base text-gold-200/90 leading-relaxed">
                {company.description}
              </p>
            </section>

            {/* Zonă centrală: imagine stânga + „Ce oferim” dreapta, ca în model */}
            <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr] gap-4 md:gap-5 items-stretch mt-1">
              {/* Hero image inspirată de interior, cu fade sus/jos (fără dreptunghi vizibil) */}
              <div className="relative w-full h-44 md:h-56 overflow-hidden">
                <Image
                  src="/Tridento/restaurant1.png"
                  alt="Ambient Tridento"
                  fill
                  className="object-cover"
                />
                {/* Fade jos */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />
                {/* Fade sus */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy-950/80 via-navy-950/30 to-transparent" />
              </div>

              {/* „Ce oferim” în dreapta – pe dreptunghi grafic offers-rectangle */}
              <div className="relative w-full h-52 md:h-64 overflow-hidden">
                <Image
                  src="/Tridento/offers-rectangle.png"
                  alt="Fundal oferte Tridento"
                  fill
                  className="object-cover"
                />
                {/* Conținut peste dreptunghi */}
                <div className="absolute inset-x-3 top-2 bottom-5 md:inset-x-4 md:top-3 md:bottom-6 flex flex-col items-center justify-start">
                  <h2 className="text-base md:text-lg font-serif font-semibold mb-2 text-gold-100 text-center leading-tight">
                    Ce oferim:
                  </h2>
                  <ul className="space-y-2 text-sm md:text-sm text-gold-100 w-full max-w-[260px]">
                    {benefits.map((item) => (
                      <li key={item.text} className="flex gap-2 items-start">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-200 shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* De ce să alegi Tridento – secțiune de argumente sub ofertă */}
            <section className="mt-4 md:mt-6">
              <div className="inline-flex items-center gap-3 mb-2 md:mb-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
                <h3 className="text-base md:text-lg font-serif font-semibold text-gold-200 tracking-wide">
                  De ce să alegi Tridento
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm md:text-sm text-gold-100 max-w-2xl">
                <div className="flex gap-2 items-center">
                  <span className="inline-block w-4 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200 shrink-0" />
                  <span>ingrediente atent selectate</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="inline-block w-4 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200 shrink-0" />
                  <span>prezentare premium a preparatelor</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="inline-block w-4 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200 shrink-0" />
                  <span>atmosferă marină elegantă</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="inline-block w-4 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200 shrink-0" />
                  <span>servire rapidă și atentă</span>
                </div>
              </div>
            </section>

            {/* Bottom section: contact + QR */}
            <section className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-4 md:gap-5 items-end">
              {/* Contact info – fără dreptunghi, text auriu pe fundal */}
              <div className="text-left">
                <h3 className="font-serif text-base md:text-lg font-medium italic text-gold-300 mb-2">
                  Ne găsești aici:
                </h3>
                <div className="space-y-1.5 text-sm md:text-sm font-serif text-gold-200/95">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gold-400 shrink-0" />
                    <span>{company.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-gold-400 shrink-0" />
                    <span>{company.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-gold-400 shrink-0" />
                    <span>{company.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-gold-400 shrink-0" />
                    <span>{company.website}</span>
                  </div>
                </div>
                <div className="mt-3 h-px bg-gradient-to-r from-gold-500/80 to-transparent max-w-[200px]" />
              </div>

              {/* QR area */}
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-dashed border-gold-400/80 bg-navy-950/70 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for QR – poți înlocui imaginea cu un QR generat ulterior */}
                  <Image
                    src="/Tridento/qr-code.png"
                    alt="Cod QR meniu Tridento"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-[11px] md:text-xs text-gold-100 uppercase tracking-[0.12em] text-center">
                  Scanează pentru a vedea meniul
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}

