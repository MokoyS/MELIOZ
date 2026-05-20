import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import { getProjectBySlug } from '../data/projects';

export default function RealisationDetail({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);

  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [60, -60]);

  if (!project) {
    return (
      <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
        <Navbar />
        <main className="flex items-center justify-center min-h-[60vh] px-5">
          <div className="text-center">
            <p className="font-body text-[17px] text-melioz-navy/60 mb-4">Projet introuvable.</p>
            <a
              href="/realisations"
              className="inline-flex items-center gap-2 font-body text-sm text-melioz-electric hover:gap-3 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" /> Retour aux réalisations
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title={`${project.name} — Réalisation MELIOZ`}
        description={project.shortDescription}
        canonical={`/realisations/${project.slug}`}
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative min-h-[65vh] bg-melioz-teal flex items-center overflow-hidden pt-28 md:pt-36">
          <motion.div ref={mRef} style={{ y: mY }} className="absolute right-0 top-[15%] pointer-events-none select-none">
            <img
              src="/images/Melioz Vector.svg"
              className="w-[300px] md:w-[500px] opacity-[0.05]"
              aria-hidden="true"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.div>

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24 w-full">
            <AnimatedSection>
              <a
                href="/realisations"
                className="inline-flex items-center gap-1.5 font-body text-[13px] text-melioz-offwhite/60 hover:text-melioz-offwhite/90 transition-colors duration-200 mb-8 md:mb-10"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Toutes les réalisations
              </a>

              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4 md:mb-5">
                {project.category} · {project.year}
              </p>
              <h1
                className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl mb-6 md:mb-8"
                style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
              >
                {project.name}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.08em] bg-melioz-offwhite/10 text-melioz-offwhite/75 rounded-lg border border-melioz-offwhite/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-melioz-electric text-melioz-offwhite font-body font-medium text-sm md:text-[15px] rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
              >
                Visiter le site <ArrowUpRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Aperçu + Description — offwhite */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-offwhite">
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            {/* Image */}
            <AnimatedSection className="mb-12 md:mb-16">
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #204F56 0%, #0D1626 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/Melioz Vector.svg"
                    className="w-36 md:w-56 opacity-[0.18]"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    aria-hidden="true"
                  />
                </div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Aperçu ${project.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                )}
              </div>
            </AnimatedSection>

            {/* Description longue */}
            <AnimatedSection>
              <div className="max-w-3xl space-y-5 md:space-y-6 font-body text-[15px] md:text-[17px] leading-[1.7] text-melioz-navy/70">
                {project.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services + Témoignage — navy */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-navy">
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Services */}
              <AnimatedSection>
                <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">
                  Services réalisés
                </p>
                <ul className="space-y-4">
                  {project.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 font-body text-[15px] md:text-[17px] text-melioz-offwhite/80">
                      <span className="w-5 h-5 rounded-full bg-melioz-electric/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-melioz-electric" />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Témoignage */}
              <AnimatedSection delay={0.1}>
                <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-6">
                  Témoignage client
                </p>
                <blockquote>
                  <p
                    className="font-display font-bold leading-snug tracking-[-0.01em] text-melioz-offwhite mb-6"
                    style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                  >
                    "{project.testimonial.quote}"
                  </p>
                  <footer className="border-t border-melioz-offwhite/10 pt-5">
                    <p className="font-body font-medium text-[15px] text-melioz-offwhite/90">{project.testimonial.author}</p>
                    <p className="font-body text-[13px] text-melioz-offwhite/50 mt-0.5">{project.testimonial.role}</p>
                  </footer>
                </blockquote>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA — electric */}
        <section className="relative py-20 md:py-32 bg-melioz-electric overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <img
              src="/images/Melioz Vector.svg"
              className="w-[300px] md:w-[400px] opacity-[0.06]"
              aria-hidden="true"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-offwhite/60 mb-4">
                Votre projet
              </p>
              <h2
                className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-melioz-offwhite mb-5 md:mb-6"
                style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
              >
                Un projet similaire en tête ?
              </h2>
              <p className="font-body text-[15px] md:text-[18px] text-melioz-offwhite/75 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Parlons-en. On prend le temps de comprendre vos besoins avant de proposer quoi que ce soit.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-melioz-offwhite text-melioz-electric font-body font-medium text-sm md:text-[15px] rounded-xl hover:-translate-y-0.5 transition-transform duration-200 whitespace-nowrap"
              >
                Nous contacter <ArrowUpRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
