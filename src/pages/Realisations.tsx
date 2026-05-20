import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';

export default function Realisations() {
  const mRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mScrollY } = useScroll({ target: mRef, offset: ['start end', 'end start'] });
  const mY = useTransform(mScrollY, [0, 1], [60, -60]);

  return (
    <div className="min-h-screen bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Nos Réalisations | MELIOZ Agence Paris"
        description="Découvrez les projets web réalisés par MELIOZ — sites vitrine, e-commerce et applications sur mesure."
        canonical="/realisations"
      />
      <Navbar />
      <main>
        {/* Hero — teal */}
        <section className="relative min-h-[60vh] bg-melioz-teal flex items-center overflow-hidden pt-28 md:pt-36">
          <motion.div ref={mRef} style={{ y: mY }} className="absolute right-0 top-[20%] pointer-events-none select-none">
            <img
              src="/images/Melioz Vector.svg"
              className="w-[300px] md:w-[500px] opacity-[0.05]"
              aria-hidden="true"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.div>
          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4 md:mb-6">
                Nos réalisations
              </p>
              <h1
                className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-3xl"
                style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
              >
                Ce qu'on a construit.
              </h1>
              <p className="font-body text-[15px] md:text-[18px] text-melioz-offwhite/70 max-w-xl leading-relaxed mt-6">
                Des projets pensés pour durer, conçus pour performer.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Liste projets — offwhite */}
        <section className="py-16 md:py-24 lg:py-32 bg-melioz-offwhite">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="divide-y divide-melioz-navy/10">
              {projects.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 0.06}>
                  <article className="group py-12 md:py-16 lg:py-20">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                      {/* Image */}
                      <a
                        href={`/realisations/${project.slug}`}
                        className="md:w-[280px] lg:w-[360px] flex-shrink-0"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                          style={{ background: 'linear-gradient(135deg, #204F56 0%, #0D1626 100%)' }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img
                              src="/images/Melioz Vector.svg"
                              className="w-24 opacity-[0.25]"
                              style={{ filter: 'brightness(0) invert(1)' }}
                              aria-hidden="true"
                            />
                          </div>
                          {project.image && (
                            <img
                              src={project.image}
                              alt={project.name}
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="lazy"
                              width={720}
                              height={540}
                            />
                          )}
                          <div className="absolute inset-0 bg-melioz-navy/0 group-hover:bg-melioz-navy/15 transition-colors duration-300" />
                        </div>
                      </a>

                      {/* Contenu */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-3">
                          {project.category} · {project.year}
                        </p>
                        <h2
                          className="font-display font-bold leading-tight tracking-[-0.02em] text-melioz-navy mb-4"
                          style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
                        >
                          {project.name}
                        </h2>
                        <p className="font-body text-[15px] md:text-[17px] text-melioz-navy/60 leading-relaxed mb-6 max-w-xl">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.08em] bg-melioz-navy/5 text-melioz-navy/50 rounded-lg border border-melioz-navy/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={`/realisations/${project.slug}`}
                          className="inline-flex items-center gap-2 font-body font-medium text-[15px] text-melioz-electric group-hover:gap-3 transition-all duration-200 w-fit"
                        >
                          Voir le projet <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            {projects.length < 3 && (
              <AnimatedSection className="mt-16 md:mt-20">
                <div className="p-8 md:p-10 rounded-2xl bg-melioz-navy text-center">
                  <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-3">
                    Votre projet
                  </p>
                  <h3
                    className="font-display font-bold leading-tight tracking-[-0.02em] text-melioz-offwhite mb-4"
                    style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
                  >
                    Vous voulez en faire partie ?
                  </h3>
                  <p className="font-body text-[15px] md:text-[17px] text-melioz-offwhite/60 max-w-md mx-auto mb-8 leading-relaxed">
                    Parlons de votre projet et construisons quelque chose dont vous serez fiers.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-melioz-electric text-melioz-offwhite font-body font-medium text-sm md:text-[15px] rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    Démarrer un projet <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
