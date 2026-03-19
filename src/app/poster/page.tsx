"use client"

import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Pizza,
  Martini,
  Palmtree,
  Clock3,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const company = {
  name: "F.E. Tridento S.R.L.",
  slogan: "Gustul mării într-un cadru premium",
  description:
    "",
  address: "Str. Oituz 20, Mangalia 905500, România",
  phone: "0241 751 126",
  email: "srltridento@gmail.com",
  website: "www.tridentosrl.com",
}

const offers = [
  {
    icon: Pizza,
    text: "Pizza premium cu ingrediente atent selectate",
  },
  {
    icon: Palmtree,
    text: "Preparate inspirate de prospețimea mării",
  },
  {
    icon: Martini,
    text: "Băuturi fine și deserturi savuroase",
  },
  {
    icon: Clock3,
    text: "Ambianță elegantă cu influențe marine",
  },
]

export default function PosterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950 text-white">
      {/* Screen-only action bar */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button
          className="btn-gold rounded-full px-5 py-2 text-sm shadow-lg"
          onClick={() => window.print()}
        >
          Descarcă poster PDF
        </Button>
      </div>

      {/* Poster container: landscape */}
      <div className="relative w-full max-w-[1100px] aspect-[1.4142/1] overflow-hidden">
        {/* Background */}
        <Image
          src="/Tridento/poster-background.png"
          alt="Fundal poster Tridento"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-navy-950/55" />

        {/* Content */}
        <div className="relative z-10 h-full w-full px-5 md:px-10 py-7 md:py-10">
          {/* Pizza (fade, bottom-right) */}
          <div
            className="absolute right-0 bottom-0 z-0 pointer-events-none w-[360px] h-[360px] md:w-[420px] md:h-[420px]"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 72%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage:
                "radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 72%)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          >
            <Image
              src="/Tridento/poster-pizza.png"
              alt="Pizza"
              fill
              className="object-contain object-bottom-right"
            />
          </div>
          {/* Top brand */}
          <div className="text-center">
            <div className="relative mx-auto w-[260px] h-[110px] md:w-[320px] md:h-[130px]">
              <Image
                src="/Tridento/poster-logo.png"
                alt="TRIDENTO logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-2">
              <div className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gold-200">
                {company.name}
              </div>
              <div className="text-gold-200/95 italic font-serif text-base md:text-lg mt-1">
                {company.slogan}
              </div>
            </div>
          </div>

          {/* Description */}
          {/* Description removed to match requested poster text */}

          {/* Image + Ce oferim (înlocuiește „De ce să alegi Tridento”) */}
          <div className="mt-3 md:mt-4">
            <section className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
              {/* Left image: restaurant2 with top/bottom fades */}
              <div className="relative w-full h-[230px] md:h-[260px] overflow-hidden">
                <Image
                  src="/Tridento/restaurant2.png"
                  alt="Restaurant Tridento - ambient 2"
                  fill
                  className="object-cover"
                />
                {/* Fade top */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy-950/80 via-navy-950/30 to-transparent" />
                {/* Fade bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />
              </div>

              {/* Right: offers rectangle + "Ce oferim" (a bit bigger) */}
              <div className="relative w-full h-[270px] md:h-[305px] overflow-visible">
                <Image
                  src="/Tridento/offers-rectangle.png"
                  alt="Ce oferim"
                  fill
                  className="object-contain scale-x-[1.3] -translate-y-10"
                  style={{ ["--tw-scale-y" as any]: 0.8 }}
                />

                <div className="absolute inset-x-2 top-5 bottom-5 flex flex-col items-center justify-start -translate-y-1">
                  <h2 className="text-lg md:text-xl font-serif font-semibold mb-3 text-gold-100 text-center leading-tight">
                    Savurează experiențe premium:
                  </h2>

                  <ul className="mt-1 space-y-2 text-gold-100 text-sm md:text-[15px] w-full max-w-[340px]">
                    {offers.map((o) => (
                      <li key={o.text} className="flex items-start gap-2.5">
                        <o.icon className="w-4 h-4 md:w-5 md:h-5 text-gold-200 shrink-0 mt-0.5" />
                        <span className="leading-snug">{o.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom: contact + QR in same container */}
          <div className="mt-5">
            <div className="max-w-[760px] grid grid-cols-[1fr_auto] gap-8 items-start">
              <div className="text-left">
                <div className="font-serif text-base md:text-lg font-semibold italic text-gold-200/95">
                  Ne găsești aici:
                </div>

                <div className="mt-2 space-y-1.5 text-sm md:text-[15px] text-gold-100/95 font-serif">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{company.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{company.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{company.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{company.website}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-dashed border-gold-400/80 bg-navy-950/70 overflow-hidden">
                  <Image
                    src="/Tridento/qr-code.png"
                    alt="Cod QR meniu"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-[10px] md:text-[11px] text-gold-100 uppercase tracking-[0.12em] text-center mt-2 max-w-[150px]">
                  Scanează pentru meniu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

