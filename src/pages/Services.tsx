import { useState } from 'react';
import { ArrowRight, Code2, PenTool, TrendingUp, Rocket, Wrench, HeadphonesIcon, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import RealisationsPreview from '../components/RealisationsPreview';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      title: 'Développement Web',
      description: 'Sites vitrines, applications web et e-commerce développés avec les technologies les plus modernes.',
      features: [
        'Sites responsives et performants',
        'Applications web sur-mesure',
        'E-commerce avec Shopify ou WooCommerce',
        'Intégrations API et automatisations',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: PenTool,
      title: 'Design UI/UX',
      description: 'L’esthétique au service de l’usage. Nous créons des interfaces haute couture qui captent l’attention et guident vos visiteurs vers l’action, transformant chaque interaction en une opportunité business.',
      features: [
        'Maquettes et prototypes Figma',
        'Design system cohérent',
        'Tests utilisateurs',
        'Optimisation des parcours',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: TrendingUp,
      title: 'Stratégie Digitale',
      description: 'Un site puissant ne sert à rien sans un message fort. Nous définissons votre positionnement et votre univers visuel pour que votre marque soit mémorable et impose son autorité sur son marché.',
      features: [
        'Audit SEO complet',
        'Stratégie de contenu',
        'Configuration Analytics',
        'Optimisation des performances',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: TrendingUp,
      title: 'SEO/GEO',
      description: 'Soyez visible là où vos clients cherchent des réponses. Nous optimisons votre présence pour les moteurs de recherche classiques et les nouvelles IA génératives afin de garantir un flux de trafic qualifié.',
      features: [
        'Audit SEO complet',
        'Stratégie de contenu',
        'Configuration Analytics',
        'Optimisation des performances',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Rocket,
      title: 'Infrastructure & Sécurité',
      description: 'Nous gérons la complexité pour vous. Hébergement haute disponibilité, surveillance 24/7 et mises à jour préventives pour que votre actif digital reste performant et inviolable sur le long terme.',
      features: [
        'Configuration hosting optimisé',
        'Certificats SSL',
        'Backup automatiques',
        'Monitoring 24/7',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Gardez votre site performant et sécurisé avec nos forfaits de maintenance.',
      features: [
        'Mises à jour régulières',
        'Corrections de bugs',
        'Sauvegardes automatiques',
        'Support technique',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: HeadphonesIcon,
      title: 'Conseil & Pilotage Continu',
      description: 'Le succès d\'un projet digital ne s\'arrête pas à sa mise en ligne. Notre mission est d\'assurer que votre plateforme ne soit pas seulement fonctionnelle, mais qu\'elle surperforme continuellement face à la concurrence.',
      features: [
        'Analyse de performance & Suivi ROI',
        'Veille technologique & IA',
        'Accompagnement décisionnel',
        'Optimisation continue',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const faqs = [
    {
      question: 'Quels sont vos délais de livraison ?',
      answer: 'Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, tandis qu\'une application web complexe peut prendre 2-3 mois. Nous établissons un planning précis dès le début du projet.',
    },
    {
      question: 'Comment se déroule un projet type ?',
      answer: 'Chaque projet suit notre méthodologie éprouvée : brief initial, conception UX/UI, développement itératif, tests, et mise en ligne. Vous êtes impliqué à chaque étape avec des points réguliers.',
    },
    {
      question: 'Proposez-vous des forfaits de maintenance ?',
      answer: 'Oui, nous proposons des forfaits de maintenance mensuels adaptés à vos besoins : mises à jour, sauvegardes, monitoring, et support technique inclus.',
    },
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: 'Nous utilisons les technologies les plus modernes et adaptées à chaque projet : React, Next.js, TypeScript, Node.js, ainsi que des CMS comme WordPress ou Shopify selon les besoins.',
    },
    {
      question: 'Travaillez-vous avec des clients hors de Paris ?',
      answer: 'Absolument ! Agence 100% digitale basée à Paris, nous travaillons avec des clients dans toute la France et à l\'international. Visioconférences, outils collaboratifs et communication régulière garantissent un suivi optimal.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO
        title="Nos Services Web, Design & Stratégie | MELIOZ Paris"
        description="Découvrez nos expertises : développement sur-mesure, design d'interface et accompagnement marketing pour votre succès numérique."
        canonical="/services"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
              Nos Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
              Un écosystème performant.
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              De l'architecture stratégique au pilotage de votre acquisition, nous concevons des outils sur-mesure dédiés à la croissance de votre activité.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-background rounded-2xl border border-secondary/20 shadow-soft hover:shadow-md hover:border-secondary/40 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
                <p className="text-text/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text/60">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Réalisations Preview */}
        <RealisationsPreview />

        {/* CTA Section */}
        <section className="py-16 bg-primary/5 border-y border-secondary/20 mb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Donnons une nouvelle dimension à votre présence digitale.
            </h2>
            <p className="text-lg text-text/70 mb-8">
              Discutons de vos besoins et trouvons ensemble la solution idéale.
            </p>
            <a
              href="/book-a-call"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
            >
              <span>Réserver un créneau</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold text-sm mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-secondary/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-background hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-text">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text/50 transition-transform ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-primary/5 border-t border-secondary/20">
                    <p className="text-text/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
