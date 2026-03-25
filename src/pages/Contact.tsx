import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Mail, CheckCircle, Loader2, Clock, Zap, MessageCircle } from 'lucide-react';
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
            <h2 className="text-4xl sm:text-5xl font-bold text-text mb-6 font-display">
              Message envoyé !
            </h2>
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
        title="Contactez MELIOZ — Agence Digitale Paris | Devis Gratuit"
        description="Parlons de votre projet digital. Contactez l'équipe MELIOZ à Paris pour un devis gratuit ou une consultation. Réponse sous 24h garanti."
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
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-sans"
                    placeholder="Agence Melioz"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-accent font-sans">{errors.name.message}</p>
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
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={errors.email ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-sans"
                    placeholder="contact@agencemelioz.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-accent font-sans">{errors.email.message}</p>
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
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={errors.message ? 'true' : undefined}
                    className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none font-sans"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-sm text-accent font-sans">{errors.message.message}</p>
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

              {/* Panneau visuel — promesses */}
              <div className="relative p-8 bg-background border border-secondary/20 rounded-[24px] overflow-hidden">

                {/* Blobs ambient */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Melioz — disponible</span>
                </div>

                {/* Indicateurs */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/15">
                    <div className="p-2.5 bg-primary/15 rounded-xl flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-base font-bold font-display text-text">Réponse sous 24h</div>
                      <div className="text-text/50 text-xs font-sans">Garanti en semaine</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-2xl border border-accent/15">
                    <div className="p-2.5 bg-accent/15 rounded-xl flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-base font-bold font-display text-text">Premier RDV offert</div>
                      <div className="text-text/50 text-xs font-sans">30 min pour parler de votre projet</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-2xl border border-secondary/15">
                    <div className="p-2.5 bg-secondary/15 rounded-xl flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-base font-bold font-display text-text">Collaboration 100% en ligne</div>
                      <div className="text-text/50 text-xs font-sans">Visio, outils partagés, suivi en temps réel</div>
                    </div>
                  </div>
                </div>

                {/* Signature */}
                <div className="pt-6 border-t border-secondary/20 flex items-center justify-between">
                  <div className="text-xl font-bold font-display tracking-tight text-text">MELIOZ</div>
                  <div className="text-xs text-text/40 font-sans">Paris, France</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
