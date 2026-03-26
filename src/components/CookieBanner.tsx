import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from '../lib/framer-motion';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'melioz_consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem(CONSENT_KEY);
    
    if (!consent) {
      // Affiche le bandeau après 2 secondes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 z-50 max-w-md"
        >
          <div className="bg-melioz-offwhite border border-melioz-navy/15 rounded-3xl p-6 shadow-xl">
            {/* Header avec icône */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 bg-melioz-electric/10 rounded-xl flex-shrink-0">
                <Cookie className="w-5 h-5 text-melioz-electric" />
              </div>
              <div>
                <h3 className="font-semibold text-melioz-navy text-lg font-display mb-1">
                  Cookies
                </h3>
                <p className="text-sm text-melioz-navy/70 font-body leading-relaxed">
                  Nous utilisons des cookies pour optimiser votre expérience.
                  En cliquant sur "Tout accepter", vous consentez à notre{' '}
                  <a
                    href="/privacy"
                    className="text-melioz-electric hover:underline font-medium"
                  >
                    politique de confidentialité
                  </a>.
                </p>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-3">
              <button
                onClick={handleRefuse}
                className="flex-1 px-5 py-2.5 border border-melioz-navy/20 text-melioz-navy font-body font-semibold text-sm rounded-xl hover:bg-melioz-navy/5 transition-colors"
              >
                Tout refuser
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-5 py-2.5 bg-melioz-electric text-melioz-offwhite font-body font-semibold text-sm rounded-xl hover:bg-melioz-electric/90 transition-colors"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
