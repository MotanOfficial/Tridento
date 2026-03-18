"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BadgeCheck,
  Building2,
  CreditCard,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Pizza,
  Salad,
  Ship,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Wine,
} from "lucide-react"

const company = {
  name: "Tridento S.R.L.",
  tagline: "Gust premium, servit rapid — cu stil marin modern.",
  subtitle: "Firmă de exercițiu în domeniul alimentației publice",
  address: "Str. Oituz 20, Mangalia 905500, Romania",
  phone: "0241 751 126",
  email: "srltridento@gmail.com",
  domain: "Alimentație publică • restaurant • livrare",
}

const products = [
  {
    icon: Pizza,
    title: "Pizza",
    description: "Rețete clasice și combinații speciale, blat perfect copt și ingrediente premium.",
    items: ["Margherita", "Quattro Formaggi", "Prosciutto & Rucola", "Tridento Special"],
  },
  {
    icon: Wine,
    title: "Băuturi",
    description: "Selecție echilibrată de băuturi răcoritoare, cafea și opțiuni pentru seri elegante.",
    items: ["Răcoritoare", "Cafea & ceai", "Cocktail-uri fără alcool", "Apă plată/minerală"],
  },
  {
    icon: Sparkles,
    title: "Deserturi",
    description: "Final dulce, atent prezentat, cu texturi fine și arome elegante.",
    items: ["Tiramisu", "Cheesecake", "Panna cotta", "Desertul zilei"],
  },
  {
    icon: Salad,
    title: "Salate",
    description: "Prospețime, echilibru și porții generoase — perfecte pentru un prânz ușor.",
    items: ["Salată Caesar", "Salată grecească", "Salată ton", "Salată sezonieră"],
  },
]

const salesPolicy = [
  {
    icon: UtensilsCrossed,
    title: "Comandă în locație",
    text: "Servire rapidă, ambient elegant și recomandări personalizate.",
  },
  {
    icon: Ship,
    title: "Comandă online",
    text: "Preluare comenzi simplă, confirmare rapidă și actualizări clare.",
  },
  {
    icon: Truck,
    title: "Livrare / ridicare",
    text: "Livrare în zonele apropiate sau ridicare personală la oră stabilită.",
  },
  {
    icon: CreditCard,
    title: "Metode de plată",
    text: "Numerar, card, transfer (pentru parteneri) — în funcție de scenariu.",
  },
]

const promos = [
  {
    title: "Reduceri periodice",
    text: "Pachete promoționale în anumite intervale (happy hours / zile tematice).",
  },
  {
    title: "Meniuri speciale",
    text: "Meniu de prânz, meniu de sezon, combinații recomandate de chef.",
  },
  {
    title: "Fidelizare",
    text: "Card de fidelitate: puncte, beneficii, surprize la aniversare.",
  },
]

const partners = [
  { name: "Furnizori locali", text: "Ingrediente proaspete, trasabilitate și ritm de aprovizionare constant." },
  { name: "Colaborări HoReCa", text: "Evenimente, degustări, meniuri tematice și parteneriate sezoniere." },
  { name: "Comunitate", text: "Implicare în inițiative locale și evenimente educaționale." },
]

const marketingValues = [
  { title: "Calitate", text: "Selecție atentă de ingrediente și standard constant." },
  { title: "Prospețime", text: "Rotire rapidă a stocului și pregătire la comandă." },
  { title: "Rapiditate", text: "Flux optimizat pentru servire și livrare." },
  { title: "Seriozitate", text: "Comunicare clară, respect pentru client și punctualitate." },
]

const gallery = [
  { src: "/Tridento/restaurant1.png", alt: "Tridento — ambient 1" },
  { src: "/Tridento/restaurant2.png", alt: "Tridento — ambient 2" },
  { src: "/Tridento/restaurant3.png", alt: "Tridento — ambient 3" },
  { src: "/Tridento/restaurant4.png", alt: "Tridento — ambient 4" },
]

function SectionTitle({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8 print:mb-4">
      <div className="flex items-center justify-center gap-3 mb-3 print:justify-start">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-subtle flex items-center justify-center">
          <Icon className="w-6 h-6 text-gold-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold">
          <span className="text-gradient-gold print:text-black">{title}</span>
        </h2>
      </div>
      {subtitle ? (
        <p className="text-navy-200 max-w-3xl mx-auto text-center print:text-left print:text-black/80">
          {subtitle}
        </p>
      ) : null}
      <div className="w-28 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5 print:hidden" />
    </div>
  )
}

export default function CatalogPage() {
  return (
    <div className="bg-navy-950 text-white print:bg-white print:text-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero print:bg-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none print:hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-navy-700/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-16 md:pt-20 pb-14 md:pb-20 print:pt-6 print:pb-6 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-subtle bg-navy-900/40 px-4 py-2 text-sm text-navy-200 mb-6 print:bg-transparent print:text-black/70 print:border-black/20">
                <BadgeCheck className="w-4 h-4 text-gold-500" />
                <span>{company.subtitle}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                <span className="text-gradient-gold print:text-black">{company.name}</span>
              </h1>

              <p className="text-lg md:text-2xl text-navy-200 mb-6 max-w-2xl print:text-black/80">
                {company.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 print:hidden">
                <Button className="btn-gold rounded-full px-7 py-6 text-base md:text-lg">
                  <Link href="#date-generale" className="inline-flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Date generale
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-7 py-6 text-base md:text-lg border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950"
                >
                  <Link href="#produse-servicii" className="inline-flex items-center gap-2">
                    <UtensilsCrossed className="w-5 h-5" />
                    Produse & servicii
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-7 py-6 text-base md:text-lg border-gold-subtle text-white/90 hover:bg-navy-900/60"
                  onClick={() => window.print()}
                >
                  Tipărește / PDF
                </Button>
              </div>

              <div className="hidden print:block mt-4 text-sm text-black/70">
                Document pregătit pentru tipărire (A4) / export PDF.
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end print:justify-end">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <Image
                  src="/Tridento/mini-logo.png"
                  alt="Logo Tridento"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATE GENERALE */}
      <section id="date-generale" className="py-16 md:py-20 print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Building2}
            title="Date generale despre firmă"
            subtitle="Informații de identificare și contact, structurate clar pentru utilizare rapidă."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
            <div className="card-elegant rounded-3xl p-7 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-900/50 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <Building2 className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-300 print:text-black/60">Denumirea firmei</div>
                    <div className="text-xl font-serif font-semibold print:text-black">{company.name}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-900/50 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <UtensilsCrossed className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-300 print:text-black/60">Domeniul de activitate</div>
                    <div className="text-white/90 print:text-black">{company.domain}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-900/50 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <MapPin className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-300 print:text-black/60">Adresă</div>
                    <div className="text-white/90 print:text-black">{company.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant rounded-3xl p-7 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-900/50 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <Phone className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-300 print:text-black/60">Telefon</div>
                    <div className="text-white/90 print:text-black">{company.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-900/50 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <Mail className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-300 print:text-black/60">Email</div>
                    <div className="text-white/90 print:text-black">{company.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREZENTAREA FIRMEI */}
      <section className="py-16 md:py-20 bg-gradient-navy print:bg-white print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Ship}
            title="Prezentarea firmei"
            subtitle="O identitate modernă, cu atmosferă marină, construită pe experiență premium și procese eficiente."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-4">
            <div className="lg:col-span-2 card-elegant rounded-3xl p-8 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <h3 className="text-2xl font-serif font-semibold mb-4 print:text-black">Descriere scurtă</h3>
              <p className="text-navy-200 leading-relaxed print:text-black/80">
                Tridento S.R.L. este o firmă de exercițiu în alimentația publică ce propune o
                experiență culinară premium, într-un decor bleumarin închis cu accente aurii și
                influențe marine moderne. Accentul este pus pe calitate, prezentare și servicii rapide.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-navy-900/40 border border-gold-subtle p-5 print:bg-transparent print:border-black/20">
                  <div className="text-sm text-navy-300 print:text-black/60 mb-1">Misiunea</div>
                  <div className="text-white/90 print:text-black">
                    Să oferim gust premium accesibil și servicii impecabile, cu identitate marină modernă.
                  </div>
                </div>
                <div className="rounded-2xl bg-navy-900/40 border border-gold-subtle p-5 print:bg-transparent print:border-black/20">
                  <div className="text-sm text-navy-300 print:text-black/60 mb-1">Obiective</div>
                  <div className="text-white/90 print:text-black">
                    Creșterea satisfacției clienților, standardizare, timp de servire redus, retenție.
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant rounded-3xl p-8 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <h3 className="text-2xl font-serif font-semibold mb-4 print:text-black">Diferențiatori</h3>
              <ul className="space-y-3 text-navy-200 print:text-black/80">
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Design premium, atmosferă marină modernă
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Ingrediente atent selectate și prezentare elegantă
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Procese rapide pentru locație și livrare
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Comunicare clară și servicii consistente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUSE & SERVICII */}
      <section id="produse-servicii" className="py-16 md:py-20 print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Pizza}
            title="Produse și servicii"
            subtitle="Listă clară, cu descrieri scurte și o prezentare premium prin carduri elegante."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
            {products.map((p) => (
              <div
                key={p.title}
                className="group card-elegant card-glow rounded-3xl p-8 border border-gold-subtle hover:border-gold-500/40 transition-colors break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <p.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold print:text-black">{p.title}</h3>
                </div>
                <p className="text-navy-200 mb-5 leading-relaxed print:text-black/80">{p.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {p.items.map((it) => (
                    <div
                      key={it}
                      className="rounded-xl bg-navy-900/35 border border-gold-subtle px-3 py-2 text-sm text-white/90 print:bg-transparent print:border-black/20 print:text-black"
                    >
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-4">
            <div className="lg:col-span-2 card-elegant rounded-3xl p-8 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <h3 className="text-2xl font-serif font-semibold mb-3 print:text-black">Servicii</h3>
              <p className="text-navy-200 leading-relaxed print:text-black/80">
                Servim atât în locație, cât și pentru ridicare / livrare. Oferim recomandări personalizate,
                ambalare atentă și o comunicare clară pe tot parcursul comenzii.
              </p>
            </div>
            <div className="card-elegant rounded-3xl p-8 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <h3 className="text-2xl font-serif font-semibold mb-3 print:text-black">Garanții</h3>
              <ul className="space-y-2 text-navy-200 print:text-black/80">
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Ingrediente proaspete
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Standard de prezentare premium
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                  Timp optimizat de servire
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGINI / GALERIE */}
      <section className="py-16 md:py-20 bg-gradient-navy print:bg-white print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Ship}
            title="Imagini"
            subtitle="Galerie premium, responsive, potrivită și pentru print/export PDF."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 print:gap-2">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="relative aspect-square overflow-hidden rounded-2xl border border-gold-subtle bg-navy-900/30 print:border-black/20"
              >
                <Image src={g.src} alt={g.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent print:hidden" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLITICA DE VANZARE */}
      <section className="py-16 md:py-20 print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={CreditCard}
            title="Politica de vânzare"
            subtitle="Canale de comandă, livrare/ridicare și metode de plată — clar și ușor de urmărit."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 print:gap-4">
            {salesPolicy.map((s) => (
              <div
                key={s.title}
                className="card-elegant rounded-3xl p-7 border border-gold-subtle hover:border-gold-500/40 transition-colors break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-subtle flex items-center justify-center mb-4 print:bg-transparent print:border-black/20">
                  <s.icon className="w-6 h-6 text-gold-500" />
                </div>
                <div className="text-xl font-serif font-semibold mb-2 print:text-black">{s.title}</div>
                <div className="text-navy-200 print:text-black/80">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTE & PROMOTII */}
      <section className="py-16 md:py-20 bg-gradient-navy print:bg-white print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Sparkles}
            title="Oferte și promoții"
            subtitle="Strategii simple, elegante și ușor de comunicat pentru creșterea vânzărilor."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-4">
            {promos.map((p) => (
              <div
                key={p.title}
                className="card-elegant rounded-3xl p-8 border border-gold-subtle hover:border-gold-500/40 transition-colors break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none"
              >
                <div className="text-2xl font-serif font-semibold mb-3 print:text-black">{p.title}</div>
                <div className="text-navy-200 leading-relaxed print:text-black/80">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENERI */}
      <section className="py-16 md:py-20 print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Handshake}
            title="Parteneri"
            subtitle="Furnizori și colaborări care susțin calitatea și ritmul operațional."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="card-elegant rounded-3xl p-8 border border-gold-subtle hover:border-gold-500/40 transition-colors break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                    <Handshake className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="text-xl font-serif font-semibold print:text-black">{p.name}</div>
                </div>
                <div className="text-navy-200 leading-relaxed print:text-black/80">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETING */}
      <section className="py-16 md:py-20 bg-gradient-navy print:bg-white print:py-8">
        <div className="container mx-auto px-4">
          <SectionTitle
            icon={Sparkles}
            title="Elemente de marketing"
            subtitle="Mesaj, valori și promisiune — coerente cu identitatea Tridento."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 print:gap-4">
            <div className="card-elegant rounded-3xl p-8 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <div className="text-sm text-navy-300 print:text-black/60 mb-2">Slogan</div>
              <div className="text-2xl md:text-3xl font-serif font-bold mb-5 print:text-black">
                „{company.tagline}”
              </div>
              <p className="text-navy-200 leading-relaxed print:text-black/80">
                Comunicarea pune accent pe rafinament, prospețime și eficiență. Designul bleumarin cu accente
                aurii susține percepția de premium, iar mesajele sunt scurte, clare și memorabile.
              </p>
            </div>

            <div className="card-elegant rounded-3xl p-8 break-inside-avoid print:border print:border-black/20 print:bg-white print:shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-subtle flex items-center justify-center print:bg-transparent print:border-black/20">
                  <Sparkles className="w-5 h-5 text-gold-500" />
                </div>
                <div className="text-xl font-serif font-semibold print:text-black">Valori</div>
              </div>
              <div className="space-y-3">
                {marketingValues.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-2xl bg-navy-900/35 border border-gold-subtle p-4 print:bg-transparent print:border-black/20"
                  >
                    <div className="font-semibold text-white print:text-black">{v.title}</div>
                    <div className="text-sm text-navy-200 print:text-black/80">{v.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-4 print:hidden">
            <div className="text-navy-300">
              Vrei să revii la site?{" "}
              <Link href="/" className="text-gold-500 hover:text-gold-400 underline underline-offset-4">
                Înapoi acasă
              </Link>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950"
              onClick={() => window.print()}
            >
              Tipărește pagina
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

