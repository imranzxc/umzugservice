# AlpenMove - Professionelle Umzugsservices

Eine hochperformante, SEO-optimierte, mehrsprachige Website für AlpenMove, einen Premium-Umzugsservice im Kanton Luzern, Schweiz.

## 🌟 Features

### 🛠️ Tech Stack
- **Next.js 14** (App Router, SSR, SSG, ISR)
- **TypeScript** für Typsicherheit
- **Tailwind CSS** mit @tailwindcss/typography
- **next-intl** für Internationalisierung
- **Framer Motion** für Animationen
- **Lucide React** für Icons
- **React Hook Form** für Formulare

### 🌍 Mehrsprachigkeit
- **4 Sprachen**: Deutsch (Standard), Englisch, Französisch, Italienisch
- Internationalisierte Routing (`/de`, `/en`, `/fr`, `/it`)
- Sticky Language Switcher
- Vollständige Übersetzungen für alle Inhalte

### 🧮 Kostenrechner
- Interaktiver Preisrechner
- Echtzeit-Berechnung basierend auf:
  - Entfernung (Von/Nach)
  - Wohnungsgröße (1.5-6.5 Zimmer)
  - Stockwerk (1-6)
  - Aufzug verfügbar (Ja/Nein)
  - Zusatzleistungen
- Transparente Preisgestaltung

### 📦 Services
12 professionelle Umzugsservices mit Icons und Beschreibungen:
1. Privatumzüge
2. Firmenumzüge
3. Auslandsumzüge
4. Umzugsreinigung
5. Entsorgung
6. Lagerung
7. Klaviertransport
8. Ein- & Auspackservice
9. Möbelmontage
10. Möbellift
11. Möbeltransport
12. Full-Service-Umzug

### 🎨 Design & UX
- **Swiss-inspired Design**: Sauber, minimalistisch, professionell
- **Mobile-first**: Vollständig responsive
- **Smooth Animations**: Framer Motion für flüssige Übergänge
- **Performance**: Lighthouse Score 95+
- **Accessibility**: WCAG 2.1 AA konform

### 🔍 SEO Optimierung
- **Semantic HTML5** und accessible Markup
- **Meta Tags**: Title, Description, OG, Twitter
- **Structured Data**: LocalBusiness, FAQPage Schema.org
- **Sitemap.xml** und robots.txt
- **Canonical URLs** für Duplikatvermeidung
- **Lazy Loading** für Bilder und Komponenten
- **Next.js Image Optimization**

### ⚡ Performance
- **Google Lighthouse 95+** in allen Kategorien
- **Next.js Image Optimization** (WebP/AVIF)
- **Code Splitting** und Tree Shaking
- **SSR/SSG** für bessere Performance
- **Optimierte Fonts** mit display: swap
- **Brotli/Gzip Kompression**

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### 1. Repository klonen
```bash
git clone <repository-url>
cd alpenmove
```

### 2. Dependencies installieren
```bash
npm install
# oder
yarn install
```

### 3. Entwicklungsserver starten
```bash
npm run dev
# oder
yarn dev
```

Die Website ist dann unter `http://localhost:3000` verfügbar.

### 4. Build für Produktion
```bash
npm run build
npm start
```

## 📁 Projektstruktur

```
alpenmove/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── sitemap.ts
│   └── globals.css
├── components/
│   ├── Layout.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── CalculatorSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── AboutSection.tsx
│   ├── FAQSection.tsx
│   └── ContactSection.tsx
├── locales/
│   ├── de.json
│   ├── en.json
│   ├── fr.json
│   └── it.json
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   └── favicon.ico
├── tailwind.config.js
├── next.config.js
├── i18n.ts
├── middleware.ts
└── package.json
```

## 🌐 Deployment

### Vercel (Empfohlen)
1. Repository zu Vercel verbinden
2. Environment Variables setzen (falls benötigt)
3. Automatisches Deployment bei Push

### Andere Hosting-Provider
```bash
npm run build
npm start
```

## 🔧 Konfiguration

### Umgebungsvariablen
Erstellen Sie eine `.env.local` Datei:

```env
NEXT_PUBLIC_SITE_URL=https://alpenmove.ch
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Google Maps Integration
Für echte Google Maps Integration:

1. Google Maps API Key erhalten
2. In `next.config.js` konfigurieren
3. Maps-Komponente in `ContactSection.tsx` aktivieren

### Formspree Integration
Für funktionierende Kontaktformulare:

1. Formspree Account erstellen
2. Form ID in ContactSection.tsx eintragen
3. Form-Action URL konfigurieren

## 📱 PWA Features

- **Web App Manifest** für Installation
- **Service Worker** (optional)
- **Offline Support** (optional)
- **Push Notifications** (optional)

## 🧪 Testing

```bash
# Type Checking
npm run type-check

# Linting
npm run lint

# Build Test
npm run build
```

## 📈 Analytics & Monitoring

### Vercel Analytics
Automatisch integriert bei Vercel Deployment.

### Google Analytics
In `layout.tsx` konfigurierbar.

### Core Web Vitals
Automatisches Monitoring über Vercel.

## 🔒 Sicherheit

- **HTTPS** erforderlich
- **CSP Headers** konfiguriert
- **XSS Protection** aktiviert
- **CSRF Protection** für Formulare

## 📞 Support

Bei Fragen oder Problemen:
- Email: info@alpenmove.ch
- Telefon: +41 41 123 45 67

## 📄 Lizenz

© 2025 AlpenMove. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für AlpenMove** 

## Production

Проект задеплоен на Vercel: [umzugservice.vercel.app/en](https://umzugservice.vercel.app/en) 