import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage = responseData.error || "Erreur lors de l'envoi du message";
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
      <div className="flex flex-col min-h-screen bg-melioz-offwhite text-melioz-navy">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="p-4 bg-melioz-mint border border-melioz-navy/10 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-melioz-teal" />
            </div>
            <h2 className="font-display font-bold text-[40px] text-melioz-navy mb-4">
              Message envoyé !
            </h2>
            <p className="font-body text-[18px] text-melioz-navy/70 mb-10">
              Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:bg-melioz-electric/90 transition-colors duration-300"
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
    <div className="bg-melioz-offwhite text-melioz-navy">
      <SEO
        title="Contactez MELIOZ — Agence Digitale Paris | Devis Gratuit"
        description="Parlons de votre projet digital. Contactez l'équipe MELIOZ à Paris pour un devis gratuit ou une consultation. Réponse sous 24h garanti."
        canonical="/contact"
      />
      <Navbar />
      <main>
        {/* Hero — navy */}
        <section className="relative bg-melioz-navy pt-20 overflow-hidden">
          <img
            src="/images/Melioz Vector.svg"
            className="absolute right-0 top-0 w-[400px] opacity-[0.04] pointer-events-none select-none"
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <AnimatedSection>
              <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-4">Contact</p>
              <h1 className="font-display font-extrabold text-[64px] sm:text-[80px] leading-[0.9] tracking-[-0.04em] text-melioz-offwhite max-w-2xl">
                Une question ? Contactez-nous
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Formulaire — offwhite */}
        <section className="py-20 bg-melioz-offwhite">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-red-500 font-body">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={errors.email ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-500 font-body">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={errors.message ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-white border border-melioz-navy/20 rounded-xl font-body text-melioz-navy focus:outline-none focus:border-melioz-electric transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-sm text-red-500 font-body">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-600 font-body">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-melioz-electric text-melioz-offwhite font-body font-medium rounded-xl hover:bg-melioz-electric/90 transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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

              <div className="mt-12 pt-8 border-t border-melioz-navy/10 flex items-center gap-4">
                <div className="p-3 bg-melioz-mint border border-melioz-navy/10 rounded-xl">
                  <Mail className="w-5 h-5 text-melioz-teal" />
                </div>
                <div>
                  <p className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-melioz-electric mb-0.5">Email</p>
                  <a href="mailto:contact@agencemelioz.com" className="font-body text-melioz-navy hover:text-melioz-electric transition-colors">
                    contact@agencemelioz.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
