import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage = responseData.error || 'Erreur lors de l\'envoi du message';
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background text-text flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6 font-display">
              Message envoyé !
            </h1>
            <p className="text-xl text-text/70 mb-10 font-sans">
              Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-[24px] hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-sans"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <SEO 
        title="MELIOZ - Contact"
        description="Contactez l'agence MELIOZ, agence digitale 100% en ligne basée à Paris, pour échanger sur vos besoins et concrétiser vos projets digitaux dès aujourd'hui."
        canonical="/contact"
      />
      <Navbar />
      <main className="pt-32 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4 font-sans">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6 font-display">
              Une question ? Contactez-nous
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-sans">
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Formulaire */}
            <div className="bg-white/50 border border-secondary/10 rounded-[24px] p-8 sm:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2 font-sans">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-sans"
                    placeholder="Jean Dupont"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-accent font-sans">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2 font-sans">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-sans"
                    placeholder="jean@entreprise.fr"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-accent font-sans">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2 font-sans">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-sans"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2 font-sans">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none font-sans"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-accent font-sans">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-[24px]">
                    <p className="text-sm text-accent font-sans">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-white font-bold rounded-[24px] shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed font-sans"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Infos */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="bg-white/50 border border-secondary/10 rounded-[24px] p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1 font-display">Email</h3>
                    <a href="mailto:contact@agencemelioz.com" className="text-text/70 hover:text-primary transition-colors font-sans">
                      contact@agencemelioz.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Composant Paris */}
              <div className="p-8 bg-text rounded-[24px] text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display">Paris, France</h3>
                    <p className="text-white/60 text-sm font-sans">Notre terrain de jeu</p>
                  </div>
                </div>
                
                {/* Représentation stylisée de Paris */}
                <div className="relative h-32 flex items-end justify-center gap-2 mb-6">
                  {/* Tour Eiffel stylisée */}
                  <div className="relative">
                    <div className="w-1 h-20 bg-primary/40 mx-auto" />
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/40" />
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/40" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/40" />
                    <div className="w-20 h-2 bg-primary/40 rounded-t-full" />
                  </div>
                  
                  {/* Bâtiments stylisés */}
                  <div className="flex items-end gap-1">
                    <div className="w-6 h-12 bg-secondary/30 rounded-t" />
                    <div className="w-4 h-16 bg-secondary/40 rounded-t" />
                    <div className="w-5 h-10 bg-secondary/30 rounded-t" />
                    <div className="w-6 h-14 bg-secondary/40 rounded-t" />
                    <div className="w-4 h-8 bg-secondary/30 rounded-t" />
                  </div>
                </div>
                
                <p className="text-white/70 text-sm font-sans">
                  Agence 100% digitale basée à Paris. Nous travaillons avec des clients partout en France via visioconférence et outils collaboratifs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
