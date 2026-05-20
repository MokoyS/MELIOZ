# Copywriting & Identité de Marque MELIOZ — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Réécriture complète de tous les textes du site MELIOZ selon le guide de marque fourni, création de la page Tarifs et de la section Équipe, avec un seul commit final.

**Architecture:** Modification des composants existants (Hero, WhyUs, ServicesPreview, AboutSection, ContactPreFooter, CTADevis, Footer, Navbar), refonte des pages (Agence, Services, Contact, Expertise, Realisations), création de nouveaux composants (TeamSection, ProcessSection) et d'une nouvelle page (Tarifs), câblage dans main.tsx.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React (icônes existantes — Mail, Instagram via Camera, GitHub via Code2)

---

## Texts to Change — File Inventory

Before touching code, here is every text that changes, by file:

### src/App.tsx
- SEO title: `"MELIOZ — Agence Digitale Paris | Design, Dev & Stratégie"` → `"MELIOZ — Agence Digitale Paris | Sites Web & Applications"`
- SEO description: `"Agence digitale à Paris..."` → `"MELIOZ crée des sites web et applications performants. Stack moderne, suivi transparent, livraison rapide. Paris & Montesson (78)."`
- Add `<ProcessSection />` and `<TeamSection />` imports and usage between `<WhyUs />` and `<ContactPreFooter />`

### src/components/Hero.tsx
- H1: **ne pas modifier** — conserver `"L'expertise digitale à taille humaine."`
- Subtitle: `"Design soigné, code moderne, résultats mesurables..."` → `"MELIOZ conçoit et développe des expériences digitales qui performent. Stack moderne, suivi transparent, livraison en 3 semaines."`
- Secondary CTA: `"Voir nos réalisations"` → `"Voir les réalisations"`

### src/components/Navbar.tsx
- **Aucune modification** — conserver les liens existants tels quels

### src/components/ServicesPreview.tsx
- Label: `"Ce qu'on fait"` → `"CE QU'ON CONSTRUIT POUR VOUS"`
- H2: `"Nos solutions pour vos\nenjeux digitaux."` → `"De l'idée au produit fini."`
- Sub-text below H2: add `"MELIOZ intervient sur l'ensemble du cycle digital — conception, développement, lancement."`
- Service 01: title `"Sites qui performent."`, description `"Design sur mesure, code moderne, optimisation SEO dès le départ. Livré en 2 à 4 semaines, pas 4 mois."`, tag `"Next.js · Vite · Vercel"`
- Service 02: title `"Vos idées, en production."`, description `"Du tableau blanc au produit fonctionnel. MELIOZ cadre, développe et livre votre MVP dans les délais — sans compromis techniques."`, tag `"React · Supabase · TypeScript"`
- Service 03: title `"L'expérience avant tout."`, description `"Interface pensée pour l'utilisateur, pas pour le portfolio. Chaque décision de design a une raison fonctionnelle."`, tag `"Figma · UI/UX · Mobile-first"`

### src/components/WhyUs.tsx
- Label: `"Pourquoi nous"` → `"NOS ENGAGEMENTS"`
- H2: `"L'exigence au service de votre croissance."` → `"Quatre raisons de choisir MELIOZ."`
- Replace 3 cards (Expertise/Proximité/Qualité) with 4 cards:
  - `{ title: 'Livraison rapide', description: 'On livre en 2 à 4 semaines — pas 4 mois. La vitesse d\'exécution est notre premier engagement envers vous.' }`
  - `{ title: 'Stack moderne', description: 'Vite, React, Next.js, Supabase, IA intégrée. Des technologies qui durent et qui performent.' }`
  - `{ title: 'Suivi transparent', description: 'Un portail dédié, un interlocuteur unique, un avancement visible à tout moment. Aucune décision unilatérale.' }`
  - `{ title: 'Rapport qualité/prix', description: "L'exigence d'une grande agence, l'agilité d'une petite structure. Pas de surcoût lié à l'overhead." }`

### src/components/AboutSection.tsx
- H2: `"Créer, mesurer,\nitérer."` → keep (bon titre)
- Body text: update → `"MELIOZ est une agence à taille humaine fondée à Paris. Chaque projet est une collaboration directe, sans intermédiaire, du cadrage à la mise en ligne."`
- Stats: replace fabricated stats (50+, 98%, 5+) with:
  - `{ label: 'Délai moyen de livraison', value: '3 sem.' }`
  - `{ label: 'Score Lighthouse moyen', value: '>90' }`
  - `{ label: 'Propriété transférée', value: '100%' }`

### src/components/ContactPreFooter.tsx
- Label: `"Contactez-nous"` → `"PRÊT À DÉMARRER ?"`
- H2: `"Contactez-nous dès aujourd'hui"` → `"Votre projet mérite mieux."`
- Body: `"Un projet ? Une problématique ?..."` → `"Parlez-nous de votre idée. MELIOZ vous répond sous 24h."`
- CTA: `"Nous contacter"` → `"Démarrer maintenant"`
- Panel: update status line from `"Melioz — disponible"` → `"MELIOZ — disponible"`
- Panel cards: keep icons/structure, update texts to match spec (Réponse sous 24h, Premier RDV offert 30 min, Suivi en temps réel)

### src/components/CTADevis.tsx
- Label: `"Prêt à démarrer ?"` → remove or replace with `"VOTRE PROJET"`
- H2: `"Transformons votre projet en réalité."` → `"Votre projet mérite mieux."`
- Body: `"Un échange de 15 minutes..."` → `"Parlez-nous de votre idée. MELIOZ vous répond sous 24h."`
- CTA primary: `"Réserver un appel gratuit"` → `"Démarrer maintenant"`
- CTA secondary: `"Nous écrire"` → keep as `"Nous écrire"`
- Add sub text below CTAs: `"Pas d'engagement. Premier échange gratuit."`

### src/components/Footer.tsx
- Remove `Linkedin` import, remove LinkedIn from social icons array
- Social icons: keep `Camera` (Instagram) + `Code2` (GitHub) only
- Tagline: `"Agence digitale à taille humaine. Design, développement et stratégie pour les entreprises ambitieuses."` → `"L'expertise digitale à taille humaine."`
- Add address below tagline: `"Montesson (78) · Paris"`
- Col "Contact": add phone `"+33 6 33 56 99 62"` and SIRET `"924 503 709"`
- Nav columns: restructure to match spec — À propos: L'équipe · Notre approche · Réalisations | Services: Sites web · Applications · Design
- Copyright: `"© {year} MELIOZ. Tous droits réservés."` ✓ (already correct)
- Add legal mention below copyright: `"TVA non applicable, art. 293 B du CGI — SIRET 924 503 709"`

### src/pages/Services.tsx
- SEO: title `"Services — MELIOZ | Création Web & Développement"`, desc `"Création de sites, applications et design UX. MELIOZ livre en 2 à 4 semaines avec une stack Next.js/Vite/Supabase."`
- Hero label: `"Nos services"` ✓
- H1: `"Ce qu'on construit pour vous."` → `"De l'idée au produit fini."`
- Sub-title: → `"MELIOZ intervient sur l'ensemble du cycle digital — conception, développement, lancement."`
- Services grid: replace 7 services with 4 matching the spec (Sites qui performent / Vos idées en production / L'expérience avant tout / Votre partenaire, pas un prestataire)
- FAQ: update answers to use concrete language, no jargon
- CTA section: `"Donnons une nouvelle dimension..."` → `"Votre projet mérite mieux."` + `"Démarrer maintenant"`

### src/pages/Agence.tsx
- SEO: title `"L'Équipe — MELIOZ | Maxime & Matéo"`, desc `"Maxime (développeur) et Matéo (marketing digital) fondent MELIOZ. Deux associés, un seul objectif : votre projet livré."`
- Hero label: `"Notre histoire"` → `"L'ÉQUIPE"`
- H1: `"Une agence digitale à taille humaine"` → `"Deux associés. Un seul objectif."`
- Sub: → `"Maxime et Matéo ont fondé MELIOZ avec une conviction simple : les meilleurs projets naissent d'une collaboration directe, sans intermédiaire entre vous et ceux qui créent."`
- Remove "Notre histoire" section with lorem-like paragraphs
- Replace "Nos valeurs" section with manifeste quote: `"Les meilleures expériences digitales ne viennent pas des plus grosses agences. Elles viennent des équipes qui ont encore quelque chose à prouver."`
- CTA section: `"Rendre l'excellence digitale accessible."` → `"Votre projet mérite mieux."`, CTA → `"Démarrer maintenant"`
- Add TeamSection component import and use after hero section

### src/pages/Contact.tsx
- SEO: title `"Contact — MELIOZ | Démarrez votre projet"`, desc `"Parlez-nous de votre projet. MELIOZ vous répond sous 24h. Premier échange gratuit."`
- Hero H1: `"Une question ? Contactez-nous"` → `"Parlez-nous de votre projet."`
- Success message: `"Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais."` → `"MELIOZ vous répond sous 24h."`

### src/pages/Expertise.tsx
- SEO: update title/desc to align with brand
- Hero H1: `"La convergence des talents, l'exigence du résultat."` → `"Le code derrière vos ambitions."`
- Hero sub: remove jargon ("synergie", "écosystèmes numériques qui dominent")

### src/pages/Realisations.tsx
- SEO: desc → `"Découvrez les projets créés par MELIOZ — sites web, applications et interfaces. Paris & Montesson (78)."`

---

## New Files to Create

### src/components/TeamSection.tsx
Team section: Maxime (dev) + Matéo (marketing), cards with Mail + GitHub / Mail + Instagram icons, teal/mint alternating bg.

### src/components/ProcessSection.tsx
Process section: 4 steps (On comprend / Périmètre clair / Suivi en temps réel / Livré expliqué transféré).

---

## Tasks

### Task 1: Update Hero.tsx copy

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Update subtitle** (H1 reste inchangé)

Change from:
```tsx
Design soigné, code moderne, résultats mesurables. Nous transformons vos ambitions en présence digitale remarquable.
```
To:
```tsx
MELIOZ conçoit et développe des expériences digitales qui performent. Stack moderne, suivi transparent, livraison en 3 semaines.
```

- [ ] **Step 2: Update secondary CTA label**

Change from `"Voir nos réalisations"` to `"Voir les réalisations"`.

---

### Task 2: ~~Navbar~~ — supprimée (pas de modification de la nav)

---

### Task 3: Update ServicesPreview.tsx copy

**Files:**
- Modify: `src/components/ServicesPreview.tsx`

- [ ] **Step 1: Update section label**

Change `"Ce qu'on fait"` to `"CE QU'ON CONSTRUIT POUR VOUS"`.

- [ ] **Step 2: Update H2 and add subtitle**

Change H2 from `"Nos solutions pour vos<br />enjeux digitaux."` to `"De l'idée au produit fini."`.
Add `<p>` after H2: `"MELIOZ intervient sur l'ensemble du cycle digital — conception, développement, lancement."`
Use class `font-body text-[17px] text-melioz-navy/60 mt-4 max-w-lg leading-relaxed`.

- [ ] **Step 3: Replace services array**

Change from 3 services (Ingénierie / Expérience / Visibilité) to:
```tsx
const services = [
  {
    num: '01',
    title: 'Sites qui performent.',
    description: 'Design sur mesure, code moderne, optimisation SEO dès le départ. Livré en 2 à 4 semaines, pas 4 mois.',
    tag: 'Next.js · Vite · Vercel',
    bg: 'bg-melioz-teal',
    text: 'text-melioz-offwhite',
    mFilter: 'brightness(0) invert(1)',
    linkColor: 'text-melioz-electric',
  },
  {
    num: '02',
    title: 'Vos idées, en production.',
    description: 'Du tableau blanc au produit fonctionnel. MELIOZ cadre, développe et livre votre MVP dans les délais — sans compromis techniques.',
    tag: 'React · Supabase · TypeScript',
    bg: 'bg-melioz-mint',
    text: 'text-melioz-navy',
    mFilter: 'brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(634%) hue-rotate(145deg) brightness(93%) contrast(88%)',
    linkColor: 'text-melioz-electric',
  },
  {
    num: '03',
    title: "L'expérience avant tout.",
    description: "Interface pensée pour l'utilisateur, pas pour le portfolio. Chaque décision de design a une raison fonctionnelle.",
    tag: 'Figma · UI/UX · Mobile-first',
    bg: 'bg-melioz-navy',
    text: 'text-melioz-offwhite',
    mFilter: 'brightness(0) invert(1)',
    linkColor: 'text-melioz-electric',
  },
];
```

- [ ] **Step 4: Add tag rendering below description in each card**

Below the `<p>` description element, add:
```tsx
<p className={`font-body text-[11px] uppercase tracking-widest mt-3 opacity-50 ${service.text}`}>
  {service.tag}
</p>
```

---

### Task 4: Update WhyUs.tsx — 4 pillars

**Files:**
- Modify: `src/components/WhyUs.tsx`

- [ ] **Step 1: Replace reasons array with 4 items**

Change from:
```tsx
const reasons = [
  { title: 'Expertise', description: '...' },
  { title: 'Proximité', description: '...' },
  { title: 'Qualité', description: '...' },
];
```
To:
```tsx
const reasons = [
  {
    title: 'Livraison rapide.',
    description: "On livre en 2 à 4 semaines — pas 4 mois. La vitesse d'exécution est notre premier engagement envers vous.",
  },
  {
    title: 'Stack moderne.',
    description: 'Vite, React, Next.js, Supabase, IA intégrée. Des technologies qui durent et qui performent.',
  },
  {
    title: 'Suivi transparent.',
    description: "Un portail dédié, un interlocuteur unique, un avancement visible à tout moment. Aucune décision unilatérale.",
  },
  {
    title: 'Rapport qualité/prix.',
    description: "L'exigence d'une grande agence, l'agilité d'une petite structure. Pas de surcoût lié à l'overhead.",
  },
];
```

- [ ] **Step 2: Update section label and H2**

Change label from `"Pourquoi nous"` to `"NOS ENGAGEMENTS"`.
Change H2 from `"L'exigence au service de votre croissance."` to `"Quatre raisons de choisir MELIOZ."`.

- [ ] **Step 3: Update grid from 3 to 4 columns**

Change grid class from `"grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"` to `"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"`.

---

### Task 5: Update AboutSection.tsx — honest stats

**Files:**
- Modify: `src/components/AboutSection.tsx`

- [ ] **Step 1: Replace fabricated stats**

Change from:
```tsx
const values = [
  { label: 'Projets livrés', value: '50+' },
  { label: 'Satisfaction client', value: '98%' },
  { label: "Années d'expérience", value: '5+' },
];
```
To:
```tsx
const values = [
  { label: 'Délai moyen de livraison', value: '3 sem.' },
  { label: 'Score Lighthouse moyen', value: '>90' },
  { label: 'Propriété transférée', value: '100%' },
];
```

- [ ] **Step 2: Update body text**

Change from:
```
Nous sommes une agence à taille humaine qui croit en la rigueur, l'impact et la transparence. Chaque projet est une collaboration étroite avec nos clients, de la stratégie à la mise en ligne.
```
To:
```tsx
{"MELIOZ est une agence à taille humaine fondée à Paris. Chaque projet est une collaboration directe, sans intermédiaire, du cadrage à la mise en ligne."}
```

---

### Task 6: Update ContactPreFooter.tsx — CTA Final

**Files:**
- Modify: `src/components/ContactPreFooter.tsx`

- [ ] **Step 1: Update label, H2, body, CTA**

- Label: `"Contactez-nous"` → `"PRÊT À DÉMARRER ?"`
- H2: `"Contactez-nous dès aujourd'hui"` → `"Votre projet mérite mieux."`
- Body: → `{"Parlez-nous de votre idée. MELIOZ vous répond sous 24h."}`
- CTA href: keep `/contact`, label: `"Nous contacter"` → `"Démarrer maintenant"`

- [ ] **Step 2: Update panel status text**

`"Melioz — disponible"` → `"MELIOZ — disponible"`

- [ ] **Step 3: Add "Pas d'engagement" note under CTA**

Below `<a>` CTA link, add:
```tsx
<p className="font-body text-xs text-melioz-navy/40 mt-3">Pas d'engagement. Premier échange gratuit.</p>
```

---

### Task 7: Update CTADevis.tsx copy

**Files:**
- Modify: `src/components/CTADevis.tsx`

- [ ] **Step 1: Update label, H2, body**

- Label: `"Prêt à démarrer ?"` → `"VOTRE PROJET"`
- H2: `"Transformons votre projet en réalité."` → `"Votre projet mérite mieux."`
- Body: → `{"Parlez-nous de votre idée. MELIOZ vous répond sous 24h."}`

- [ ] **Step 2: Update CTA primary label**

`"Réserver un appel gratuit"` → `"Démarrer maintenant"`

- [ ] **Step 3: Add sub text below CTAs**

After the `<div className="flex ...">` CTAs container, add:
```tsx
<p className="font-body text-xs text-melioz-offwhite/40 mt-4">
  Pas d&#39;engagement. Premier échange gratuit.
</p>
```

---

### Task 8: Update Footer.tsx — remove LinkedIn, update copy

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Remove LinkedIn import and icon**

Remove `Linkedin` from imports.
Remove LinkedIn entry from the social icons array:
```tsx
// Remove this entry:
{ icon: Linkedin, href: '#', label: 'LinkedIn MELIOZ' },
```
Keep only:
```tsx
{ icon: Camera, href: 'https://www.instagram.com/agencemelioz', label: 'Instagram MELIOZ' },
{ icon: Code2, href: 'https://github.com/agencemelioz', label: 'GitHub MELIOZ' },
```

- [ ] **Step 2: Update tagline and add address**

Change tagline from:
```
Agence digitale à taille humaine. Design, développement et stratégie pour les entreprises ambitieuses.
```
To:
```tsx
{"L'expertise digitale à taille humaine."}
```
Add address below:
```tsx
<p className="font-body text-sm text-melioz-offwhite/40 mt-1">Montesson (78) · Paris</p>
```

- [ ] **Step 3: Update Contact column — add phone and SIRET**

After email link, add:
```tsx
<li>
  <a href="tel:+33633569962" className="flex items-start gap-2 font-body text-sm text-melioz-offwhite/60 hover:text-melioz-offwhite transition-colors duration-200">
    <span>+33 6 33 56 99 62</span>
  </a>
</li>
<li>
  <span className="font-body text-sm text-melioz-offwhite/40">SIRET : 924 503 709</span>
</li>
```

- [ ] **Step 4: Add TVA legal mention to copyright line**

Below `<p className="...">© {new Date().getFullYear()} MELIOZ...</p>`, add:
```tsx
<p className="font-body text-xs text-melioz-offwhite/20 mt-1 text-center sm:text-left">
  TVA non applicable, art. 293 B du CGI
</p>
```

---

### Task 9: Create TeamSection.tsx

**Files:**
- Create: `src/components/TeamSection.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { Mail, Code2, Camera } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const team = [
  {
    name: 'Maxime',
    role: 'Développeur & Co-fondateur',
    description: "Maxime conçoit et développe l'ensemble des projets MELIOZ. Stack moderne, code propre, obsession de la performance. Il est votre interlocuteur technique direct.",
    email: 'contact@agencemelioz.com',
    socials: [
      { icon: Mail, href: 'mailto:contact@agencemelioz.com', label: 'Email Maxime' },
      { icon: Code2, href: 'https://github.com/agencemelioz', label: 'GitHub Maxime' },
    ],
    bg: 'bg-melioz-teal',
    text: 'text-melioz-offwhite',
  },
  {
    name: 'Matéo',
    role: 'Communication & Marketing Digital · Co-fondateur',
    description: "Matéo pilote la stratégie de contenu, le copywriting et le marketing digital des projets clients. Il transforme votre positionnement en messages qui convertissent.",
    email: 'contact@agencemelioz.com',
    socials: [
      { icon: Mail, href: 'mailto:contact@agencemelioz.com', label: 'Email Matéo' },
      { icon: Camera, href: 'https://www.instagram.com/agencemelioz', label: 'Instagram Matéo' },
    ],
    bg: 'bg-melioz-mint',
    text: 'text-melioz-navy',
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-melioz-offwhite overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">
            {"L'ÉQUIPE"}
          </p>
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Deux associés. Un seul objectif.
          </h2>
          <p className="font-body text-[17px] text-melioz-navy/60 mt-4 max-w-xl leading-relaxed">
            Maxime et Matéo ont fondé MELIOZ avec une conviction simple : les meilleurs projets naissent d&#39;une collaboration directe, sans intermédiaire entre vous et ceux qui créent.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className={`${member.bg} rounded-2xl p-8 md:p-10 flex flex-col gap-6`}>
                <div>
                  <h3 className={`font-display font-bold text-[28px] md:text-[32px] leading-tight ${member.text}`}>
                    {member.name}
                  </h3>
                  <p className={`font-body text-[12px] uppercase tracking-widest mt-1 opacity-60 ${member.text}`}>
                    {member.role}
                  </p>
                </div>
                <p className={`font-body text-[15px] md:text-[17px] leading-relaxed opacity-80 flex-1 ${member.text}`}>
                  {member.description}
                </p>
                <div className="flex gap-3">
                  {member.socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`p-2.5 rounded-xl border opacity-60 hover:opacity-100 transition-opacity ${
                        member.bg === 'bg-melioz-teal'
                          ? 'border-melioz-offwhite/20 text-melioz-offwhite'
                          : 'border-melioz-navy/20 text-melioz-navy'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 10: Create ProcessSection.tsx

**Files:**
- Create: `src/components/ProcessSection.tsx`

- [ ] **Step 1: Create the component**

```tsx
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    num: '01',
    title: 'On comprend votre projet.',
    description: '30 minutes pour cerner vos besoins, vos contraintes et vos objectifs. Pas de commercial, pas de PowerPoint.',
  },
  {
    num: '02',
    title: 'Un périmètre clair, un prix fixe.',
    description: 'Cahier des charges, délais et tarif définis par écrit. Vous savez exactement ce que vous payez avant de signer.',
  },
  {
    num: '03',
    title: 'Vous suivez l&#39;avancement en temps réel.',
    description: 'Un portail Notion dédié à votre projet. Chaque étape validée avec vous — aucune décision unilatérale.',
  },
  {
    num: '04',
    title: 'Livré, expliqué, transféré.',
    description: 'Mise en ligne, vidéo de passation, accès complets transmis. Le site vous appartient à 100%.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-melioz-offwhite overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <AnimatedSection className="mb-16">
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">
            COMMENT ÇA SE PASSE
          </p>
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-navy"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Simple. Transparent. Sans surprise.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.08}>
              <div className="p-6 md:p-8 border border-melioz-navy/10 rounded-2xl bg-melioz-offwhite hover:border-melioz-electric hover:-translate-y-0.5 transition-all duration-200">
                <span className="font-display font-bold text-[48px] md:text-[56px] leading-none opacity-10 text-melioz-navy">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-[20px] md:text-[22px] text-melioz-navy mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-melioz-navy/70">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 11: Add ProcessSection and TeamSection to App.tsx homepage

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add imports**

```tsx
import ProcessSection from './components/ProcessSection';
import TeamSection from './components/TeamSection';
```

- [ ] **Step 2: Add sections to the layout**

Add `<ProcessSection />` after `<WhyUs />` and `<TeamSection />` after `<ProcessSection />`:
```tsx
<WhyUs />
<SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
<ProcessSection />
<SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
<TeamSection />
<SectionLine className="bg-melioz-navy/10 mx-4 sm:mx-6" />
<ContactPreFooter />
```

- [ ] **Step 3: Update homepage SEO**

```tsx
<SEO
  title="MELIOZ — Agence Digitale Paris | Sites Web & Applications"
  description="MELIOZ crée des sites web et applications performants. Stack moderne, suivi transparent, livraison rapide. Paris & Montesson (78)."
  canonical="/"
/>
```

---

### Task 14: Update Agence.tsx — manifeste + team page

**Files:**
- Modify: `src/pages/Agence.tsx`

- [ ] **Step 1: Update SEO**

```tsx
<SEO
  title={"L'Équipe — MELIOZ | Maxime & Matéo"}
  description={"Maxime (développeur) et Matéo (marketing digital) fondent MELIOZ. Deux associés, un seul objectif : votre projet livré."}
  canonical="/agence"
/>
```

- [ ] **Step 2: Update hero section**

- Label: `"Notre histoire"` → `"L'ÉQUIPE"`
- H1: → `"Deux associés. Un seul objectif."`
- Sub: → `{"Maxime et Matéo ont fondé MELIOZ avec une conviction simple : les meilleurs projets naissent d'une collaboration directe, sans intermédiaire entre vous et ceux qui créent."}`
- Remove CTA `"Nous rencontrer"` link from hero

- [ ] **Step 3: Replace "Notre histoire" section with manifeste**

Replace the entire `<section className="py-16 ... bg-melioz-offwhite">` histoire block with a manifeste section:
```tsx
<section className="py-16 md:py-24 lg:py-32 bg-melioz-navy">
  <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
    <AnimatedSection>
      <blockquote
        className="font-display font-bold leading-[1.1] tracking-[-0.02em] text-melioz-offwhite"
        style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
      >
        {'"Les meilleures expériences digitales ne viennent pas des plus grosses agences. Elles viennent des équipes qui ont encore quelque chose à prouver."'}
      </blockquote>
    </AnimatedSection>
  </div>
</section>
```

- [ ] **Step 4: Replace "Nos valeurs" section with TeamSection**

Remove the values section. Import and add `<TeamSection />` after the manifeste section:
```tsx
import TeamSection from '../components/TeamSection';
// ...
<TeamSection />
```

- [ ] **Step 5: Update CTA section**

- H2: `"Rendre l'excellence digitale accessible."` → `"Votre projet mérite mieux."`
- Body: → `{"Parlez-nous de votre idée. MELIOZ vous répond sous 24h."}`
- CTA label: `"Réserver un appel"` → `"Démarrer maintenant"`

---

### Task 15: Update Services.tsx copy

**Files:**
- Modify: `src/pages/Services.tsx`

- [ ] **Step 1: Update SEO**

```tsx
<SEO
  title="Services — MELIOZ | Création Web & Développement"
  description="Création de sites, applications et design UX. MELIOZ livre en 2 à 4 semaines avec une stack Next.js/Vite/Supabase."
  canonical="/services"
/>
```

- [ ] **Step 2: Update hero H1 and subtitle**

- H1: `"Ce qu'on construit pour vous."` → `"De l'idée au produit fini."`
- Sub: → `{"MELIOZ intervient sur l'ensemble du cycle digital — conception, développement, lancement."}`

- [ ] **Step 3: Replace services array with 4 items**

```tsx
const services = [
  {
    icon: Code2,
    title: 'Sites qui performent.',
    description: 'Design sur mesure, code moderne, optimisation SEO dès le départ. Livré en 2 à 4 semaines, pas 4 mois.',
    features: ['Next.js / Vite', 'Mobile-first responsive', 'SEO technique intégré', 'Vercel / hébergement inclus'],
  },
  {
    icon: Rocket,
    title: 'Vos idées, en production.',
    description: 'Du tableau blanc au produit fonctionnel. MELIOZ cadre, développe et livre votre MVP dans les délais — sans compromis techniques.',
    features: ['React · Supabase · TypeScript', 'Cadrage & spécifications', 'Itérations rapides', 'Livraison en 4 à 8 semaines'],
  },
  {
    icon: PenTool,
    title: "L'expérience avant tout.",
    description: "Interface pensée pour l'utilisateur, pas pour le portfolio. Chaque décision de design a une raison fonctionnelle.",
    features: ['Figma · Design system', 'UX mobile-first', 'Tests utilisateurs', 'Optimisation des conversions'],
  },
  {
    icon: Wrench,
    title: 'Votre partenaire, pas un prestataire.',
    description: 'Mises à jour, nouvelles fonctionnalités, support réactif. MELIOZ reste disponible après la livraison.',
    features: ['Monitoring continu', 'Itérations post-lancement', 'Support réactif', 'SLA défini'],
  },
];
```
Remove unused icon imports: `TrendingUp`, `HeadphonesIcon`. Keep `Code2, PenTool, Rocket, Wrench`.

- [ ] **Step 4: Update FAQ answers — remove jargon**

```tsx
const faqs = [
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Un site vitrine en 2 à 3 semaines, une application web en 4 à 8 semaines. Le périmètre est défini par écrit avant le démarrage — pas de dérive, pas de surprise.',
  },
  {
    question: 'Comment se déroule un projet type ?',
    answer: "30 minutes de brief, un cahier des charges écrit, un prix fixe. Vous suivez l'avancement sur un portail Notion dédié. Chaque étape est validée avec vous avant la suivante.",
  },
  {
    question: 'Proposez-vous des forfaits de maintenance ?',
    answer: 'Oui. Mises à jour, corrections, nouvelles fonctionnalités et support technique — selon un SLA défini à la signature.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Next.js, Vite, React, TypeScript, Supabase, Vercel. Des technologies modernes choisies pour la performance, la sécurité et la durabilité de votre projet.',
  },
  {
    question: 'Travaillez-vous avec des clients hors de Paris ?',
    answer: "MELIOZ travaille entièrement en ligne. Visios, outils partagés, portail de suivi — votre localisation ne change rien à la qualité du suivi.",
  },
];
```

- [ ] **Step 5: Update CTA section copy**

- H2: `"Donnons une nouvelle dimension à votre présence digitale."` → `"Votre projet mérite mieux."`
- Sub: → `{"Parlez-nous de votre idée. MELIOZ vous répond sous 24h."}`
- CTA: `"Réserver un créneau"` → `"Démarrer maintenant"`

---

### Task 16: Update Contact.tsx copy

**Files:**
- Modify: `src/pages/Contact.tsx`

- [ ] **Step 1: Update SEO**

```tsx
<SEO
  title="Contact — MELIOZ | Démarrez votre projet"
  description="Parlez-nous de votre projet. MELIOZ vous répond sous 24h. Premier échange gratuit."
  canonical="/contact"
/>
```

- [ ] **Step 2: Update hero H1**

`"Une question ? Contactez-nous"` → `"Parlez-nous de votre projet."`

- [ ] **Step 3: Update success message**

`"Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais."` → `"MELIOZ vous répond sous 24h."`

---

### Task 17: Update Expertise.tsx copy

**Files:**
- Modify: `src/pages/Expertise.tsx`

- [ ] **Step 1: Update SEO**

```tsx
<SEO
  title="Expertise — MELIOZ | Stack & Savoir-faire"
  description="Stack Next.js, Vite, React, Supabase. MELIOZ maîtrise l'ingénierie web, le design UX et le marketing digital pour livrer des projets performants."
  canonical="/expertise"
/>
```

- [ ] **Step 2: Update hero H1 and subtitle**

- H1: `"La convergence des talents, l'exigence du résultat."` → `"Le code derrière vos ambitions."`
- Sub: Remove jargon. Replace with: `{"MELIOZ maîtrise l'ensemble du cycle digital — de l'architecture technique au marketing de contenu. Quatre pôles, un seul objectif : votre projet livré et performant."}`

---

### Task 18: Update Realisations.tsx SEO

**Files:**
- Modify: `src/pages/Realisations.tsx`

- [ ] **Step 1: Update SEO**

```tsx
<SEO
  title="Réalisations — MELIOZ | Projets Web & Applications"
  description="Découvrez les projets créés par MELIOZ — sites web, applications et interfaces. Paris & Montesson (78)."
  canonical="/realisations"
/>
```

---

### Task 19: Final verification before single commit

- [ ] **Step 1: Check for apostrophes droites** (') in JSX text — must be `{" ' "}` or `&#39;` or `{''}` wrapper
- [ ] **Step 2: Check for emojis** — none allowed in JSX text
- [ ] **Step 3: Check Footer** — only Instagram (Camera) + GitHub (Code2), no Linkedin
- [ ] **Step 4: Check no "jeune équipe", "startup", "passionnés", "synergies", "disruptif"** appear in any file
- [ ] **Step 5: Check CTA consistency** — primary CTAs use "Démarrer un projet" or "Démarrer maintenant"
- [ ] **Step 6: Verify Tarifs page renders** at `/tarifs` route
- [ ] **Step 7: Verify TeamSection** appears on both `/agence` and homepage
- [ ] **Step 8: Create single commit**

```bash
git add src/components/Hero.tsx src/components/Navbar.tsx \
  src/components/ServicesPreview.tsx src/components/WhyUs.tsx \
  src/components/AboutSection.tsx src/components/ContactPreFooter.tsx \
  src/components/CTADevis.tsx src/components/Footer.tsx \
  src/components/TeamSection.tsx src/components/ProcessSection.tsx \
  src/pages/Tarifs.tsx src/pages/Agence.tsx src/pages/Services.tsx \
  src/pages/Contact.tsx src/pages/Expertise.tsx src/pages/Realisations.tsx \
  src/App.tsx src/main.tsx

git commit -m "feat: refonte copywriting et identité de marque MELIOZ

- Réécriture complète de tous les textes selon le guide de marque
- Nouvelle section équipe (Maxime + Matéo) avec icônes DA
- Nouvelle section processus (4 étapes)
- Nouvelle page Tarifs (Starter 950€ / Studio 2400€ / Scale 4500€)
- Meta SEO mis à jour sur toutes les pages
- Suppression du LinkedIn dans les profils et le footer
- Suppression de tous les emojis remplacés par icônes DA
- Stats honnêtes dans AboutSection (délai / Lighthouse / propriété)
- 4 piliers MELIOZ dans WhyUs (livraison / stack / suivi / prix)"
```
