import { ArrowRight } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { baseTransition, slowTransition, fadeInUp } from '../lib/motion';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { BlurFade } from '@/components/magicui/blur-fade';

export default function Hero() {

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen scroll-mt-20 sm:scroll-mt-24 flex items-center justify-center overflow-hidden bg-background pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={slowTransition}
    >
      {/* Enhanced Background Shapes with Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob shapes animés */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blob-shape blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[0%] w-[30vw] h-[30vw] bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* Lignes décoratives animées */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        />

        {/* Subtle grid pattern overlay - très discret */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#84967320_1px,transparent_1px),linear-gradient(to_bottom,#84967320_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
      >
        {/* Badge minimaliste */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-background/80 backdrop-blur-sm border border-secondary/20 rounded-full mb-10 shadow-soft"
          variants={fadeInUp}
        >
          <img
            src="/favicon.svg"
            alt="Melioz Logo"
            className="w-5 h-5 object-contain"
            loading="lazy"
            width={20}
            height={20}
          />


          <span className="text-sm text-text font-semibold tracking-wide">
            Agence Digital Melioz
          </span>
        </motion.div>

        {/* Headline - Copywriting optimisé avec animations fluides */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2"
          variants={fadeInUp}
          transition={slowTransition}
        >
          <motion.span
            className="block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Votre expertise mérite
          </motion.span>
          <motion.span
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedGradientText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              une présence en ligne
            </AnimatedGradientText>
            <motion.span
              className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 -z-10 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.span>
          <motion.span
            className="block mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            d’excellence.
          </motion.span>
        </motion.h1>

        {/* Subheadline - Copywriting orienté bénéfices avec animation */}
        <BlurFade delay={0.9} duration={0.6} className="mb-6">
          <p
            className="text-xl sm:text-2xl md:text-3xl text-text/80 max-w-3xl mx-auto leading-relaxed font-medium px-2"
          >
            Transformez votre présence digitale en un{' '}
            <span className="relative inline-block text-primary font-semibold whitespace-nowrap">
              levier de croissance performant
              <span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-1.5 bg-primary/30 rounded-full" />
            </span>
            .
          </p>
        </BlurFade>

        {/* Value Proposition - Copywriting clair */}
        <BlurFade delay={1.1} duration={0.6} className="mb-8 sm:mb-12">
          <p
            className="text-base sm:text-lg md:text-xl text-text/70 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Design d'expérience, ingénierie web et stratégie d'acquisition pour répondre à vos enjeux de digitalisation et de croissance.
          </p>
        </BlurFade>

        {/* CTA Buttons - Modern Design */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          variants={fadeInUp}
          transition={{ ...baseTransition, delay: 0.7 }}
        >
          <a
            href="/book-a-call"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
          >
            <span>Réserver un appel</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="/services"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-background border-2 border-secondary/30 text-text font-semibold rounded-full hover:bg-primary/5 hover:border-secondary transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
          >
            <span>Nos services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
