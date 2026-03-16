# 🍽️ Tridento - Website Restaurant

Website modern și elegant pentru Restaurantul Tridento din Mangalia, construit cu Next.js, TypeScript și Tailwind CSS.

![Tridento Restaurant](https://img.shields.io/badge/Tridento-Restaurant-gold?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan?style=flat-square&logo=tailwindcss)

## 🌟 Caracteristici

- ✅ **Static Export** - Compatibil 100% cu GitHub Pages
- ✅ **Design Premium** - Elegant, cu tema navy-auriu
- ✅ **Mobile-First** - Optimizat pentru telefon și tabletă
- ✅ **QR Code** - Pentru acces rapid la meniu
- ✅ **SEO Optimizat** - Metadata completă pentru motoare de căutare
- ✅ **Fără Backend** - Doar HTML, CSS și JavaScript static
- ✅ **Limba Română** - Tot conținutul în română

## 📁 Structura Proiectului

```
tridento/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions pentru deploy
├── public/
│   ├── menu/
│   │   └── tridento-catalog.pdf  # 👉 Plasează PDF-ul meniului aici
│   ├── logo.svg
│   ├── site.webmanifest
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css         # Stiluri globale + tema Tridento
│   │   ├── layout.tsx          # Layout cu SEO metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── meniu/
│   │   │   └── page.tsx        # Pagina Meniu
│   │   └── contact/
│   │       └── page.tsx        # Pagina Contact
│   └── components/
│       └── tridento/
│           ├── Header.tsx      # Navigație sticky
│           ├── Footer.tsx      # Footer cu contact
│           ├── Hero.tsx        # Secțiune hero
│           ├── About.tsx       # Despre noi
│           ├── Advantages.tsx  # De ce Tridento
│           ├── QRCodeSection.tsx # QR code pentru meniu
│           └── ContactInfo.tsx # Informații contact
├── next.config.ts              # Config pentru static export
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🚀 Instalare și Rulare Locală

### Cerințe

- Node.js 18+ sau Bun
- npm, yarn sau bun

### Pași

```bash
# Clonează repository-ul
git clone https://github.com/USERNAME/tridento.git
cd tridento

# Instalează dependențele
bun install
# sau
npm install

# Rulează în mod dezvoltare
bun run dev
# sau
npm run dev

# Deschide http://localhost:3000 în browser
```

## 📦 Build pentru Producție

```bash
# Build static
bun run build
# sau
npm run build

# Output va fi în folderul /out
```

## 🌐 Deploy pe GitHub Pages

### Opțiunea 1: Automat (Recomandat)

1. **Fork sau clonează** acest repository
2. **Mergi la Settings → Pages**
3. **Selectează Source: GitHub Actions**
4. **Push pe branch-ul `main`** va trigger-ui deploy automat

### Opțiunea 2: Manual

1. Rulează `bun run build`
2. Upload conținutul folderului `/out` pe branch-ul `gh-pages`

### ⚠️ Configurare pentru Repository non-root

Dacă repository-ul tău NU este `username.github.io`, trebuie să configurezi `basePath`:

1. Deschide `next.config.ts`
2. Decomentează și modifică:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  
  // Pentru repository: github.com/USERNAME/tridento
  basePath: '/tridento',
  assetPrefix: '/tridento/',
  
  // ... restul configurației
};
```

3. Actualizează și `src/app/layout.tsx`:

```typescript
metadataBase: new URL('https://USERNAME.github.io/tridento'),
```

## 📄 Adăugarea Meniului PDF

1. Plasează fișierul PDF în: `public/menu/tridento-catalog.pdf`
2. Commit și push:
```bash
git add public/menu/tridento-catalog.pdf
git commit -m "Adaugă meniu PDF"
git push
```

## 🎨 Personalizare

### Culori

Culorile sunt definite în `src/app/globals.css`:

```css
--navy-950: #0a1929;  /* Background principal */
--gold-500: #d4af37;  /* Accent principal (auriu) */
```

### Informații Contact

Actualizează datele în:
- `src/components/tridento/Footer.tsx`
- `src/components/tridento/ContactInfo.tsx`
- `src/app/contact/page.tsx`

### QR Code

Modifică URL-ul în `src/components/tridento/QRCodeSection.tsx`:

```typescript
const MENU_URL = '/meniu'; // sau URL complet
```

## 📱 Funcționalități pe Pagini

### Homepage (`/`)
- Hero cu numele restaurantului
- Secțiune "Despre noi"
- Avantaje / De ce Tridento
- QR Code pentru meniu
- Informații contact

### Meniu (`/meniu`)
- Buton descărcare PDF
- Buton deschidere PDF
- Preview embed PDF
- Link către QR code

### Contact (`/contact`)
- Adresă cu link Google Maps
- Telefon click-to-call
- Email click-to-email
- Website clickabil
- Program de lucru
- Hartă embedded

## 🔧 Tehnologii Folosite

- **Next.js 16** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Componente UI
- **qrcode.react** - Generare QR code
- **Lucide Icons** - Iconițe

## 📞 Contact Restaurant

- **Adresă:** Str. Oituz 20, Mangalia 905500, Romania
- **Telefon:** 0241 751 126
- **Email:** srltridento@gmail.com
- **Website:** www.tridentosrl.com

## 📜 Licență

© 2026 Tridento SRL. Toate drepturile rezervate.

---

**Developed with ❤️ by Motan for Tridento Restaurant**
