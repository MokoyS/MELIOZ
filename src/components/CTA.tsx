import { useState } from 'react';
import { Calendar, Mail, Video, Loader2 } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { baseTransition, baseViewport, fadeInUp, scaleIn } from '../lib/motion';

export default function CTA() {
  // --- LOGIQUE DU FORMULAIRE ---
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!web3FormsKey) {
      setIsSuccess(false);
      setResult('Clé Web3Forms manquante. Ajoutez VITE_WEB3FORMS_KEY dans votre .env.local.');
      return;
    }
    setIsSubmitting(true);
    setResult('Envoi en cours...');

    const formData = new FormData(event.target as HTMLFormElement);

    // TA CLÉ API EST ICI 👇
    formData.append('access_key', web3FormsKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult('Message reçu ! On vous recontacte sous 24h.');
        (event.target as HTMLFormElement).reset();
        window.setTimeout(() => {
          setResult('');
          setIsSuccess(false);
        }, 4800);
      } else {
        setIsSuccess(false);
        setResult('Une erreur est survenue. Réessayez plus tard.');
      }
    } catch (error) {
      setIsSuccess(false);
      setResult('Erreur de connexion.');
    } finally {
      setIsSubmitting(false);
    }
  };
  // -----------------------------

  const highlights = [
    {
      title: 'Réponse rapide',
      description: 'Sous 24h ouvrées',
      icon: <Calendar className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Visioconférence',
      description: 'Parlons de vous',
      icon: <Video className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'Appel gratuit',
      description: '15 minutes pour discuter',
      icon: <Mail className="w-6 h-6 text-accent" />,
    },
  ];

  const viewport = baseViewport;

  return (
    <motion.section
      id="cta"
      className="py-16 sm:py-24 bg-background relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Organic Background Shapes avec animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blob-shape blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-text mb-6"
            variants={fadeInUp}
            transition={baseTransition}
          >
            Prêt à transformer
            <span className="block mt-2 text-primary">
              votre image digitale ?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-text/70 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ ...baseTransition, delay: 0.08 }}
          >
            Contactez-nous et planifiez un appel gratuit de 30 minutes pour discuter de votre projet et de nos solutions. 
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-soft border border-secondary/20 overflow-hidden relative group"
          variants={scaleIn}
          transition={{ ...baseTransition, delay: 0.12 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Effet de brillance au hover uniquement */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '200%' }}
            transition={{ duration: 0.6 }}
          />
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 mb-8 relative z-10">
            {highlights.map((card, index) => (
              <motion.div
                key={card.title}
                className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-xl border border-secondary/20 group/card overflow-hidden relative"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ ...baseTransition, delay: 0.16 + index * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
              >
                {/* Effet de brillance sur les cartes */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.div
                  className="p-3 bg-background rounded-lg mb-4 shadow-sm relative z-10"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-text font-semibold mb-2 relative z-10 group-hover/card:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-text/70 relative z-10">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={onSubmit}
            className="space-y-4"
            variants={fadeInUp}
          >
            {/* INPUTS CACHÉS WEB3FORMS */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <input type="hidden" name="subject" value="Nouveau Lead - Melioz" />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="px-4 py-3 bg-background border border-secondary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all w-full"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email"
                className="px-4 py-3 bg-background border border-secondary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all w-full"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Parlez-nous de votre projet..."
              rows={4}
              className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gradient flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Envoi...
                </>
              ) : (
                "Obtenir mon audit gratuit"
              )}
            </button>

            {/* Feedback Message */}
            {result && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm text-center font-medium ${isSuccess ? 'text-secondary' : 'text-accent'}`}
              >
                {result}
              </motion.p>
            )}

            <p className="text-xs text-text/50 text-center">
              En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
            </p>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}