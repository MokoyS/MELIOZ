import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { MotionProvider } from './lib/framer-motion';
import LoadingSpinner from './components/LoadingSpinner';
import './index.css';

// En développement, charger directement pour plus de rapidité
// En production, utiliser lazy loading pour optimiser le bundle
const isDev = import.meta.env.DEV;

// Import direct en dev, lazy en production
if (isDev) {
  // En dev : importer directement tous les composants (plus rapide)
  // Vite va les précharger automatiquement
  const [
    { default: App },
    { default: Admin },
    { default: Services },
    { default: Agence },
    { default: Expertise },
    { default: Realisations },
    { default: Contact },
    { default: MentionsLegales },
    { default: Privacy },
    { default: PlanSite },
    { default: ConditionsGenerales },
    { default: BookACall },
    { default: CookieBanner },
  ] = await Promise.all([
    import('./App.tsx'),
    import('./pages/Admin.tsx'),
    import('./pages/Services.tsx'),
    import('./pages/Agence.tsx'),
    import('./pages/Expertise.tsx'),
    import('./pages/Realisations.tsx'),
    import('./pages/Contact.tsx'),
    import('./pages/MentionsLegales.tsx'),
    import('./pages/Privacy.tsx'),
    import('./pages/PlanSite.tsx'),
    import('./pages/ConditionsGenerales.tsx'),
    import('./pages/BookACall.tsx'),
    import('./components/CookieBanner.tsx'),
  ]);

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';
  const currentPath = normalizePath(window.location.pathname);

  const getComponent = () => {
    switch (currentPath) {
      case '/admin':
        return <Admin />;
      case '/services':
        return <Services />;
      case '/agence':
        return <Agence />;
      case '/expertise':
        return <Expertise />;
      case '/realisations':
        return <Realisations />;
      case '/contact':
        return <Contact />;
      case '/mentions-legales':
        return <MentionsLegales />;
      case '/privacy':
        return <Privacy />;
      case '/plan-du-site':
        return <PlanSite />;
      case '/conditions-generales':
        return <ConditionsGenerales />;
      case '/book-a-call':
        return <BookACall />;
      default:
        return <App />;
    }
  };

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <MotionProvider>
          {getComponent()}
          <CookieBanner />
        </MotionProvider>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  // Production : lazy loading pour optimiser le bundle
  const App = lazy(() => import('./App.tsx'));
  const Admin = lazy(() => import('./pages/Admin.tsx'));
  const Services = lazy(() => import('./pages/Services.tsx'));
  const Agence = lazy(() => import('./pages/Agence.tsx'));
  const Expertise = lazy(() => import('./pages/Expertise.tsx'));
  const Realisations = lazy(() => import('./pages/Realisations.tsx'));
  const Contact = lazy(() => import('./pages/Contact.tsx'));
  const MentionsLegales = lazy(() => import('./pages/MentionsLegales.tsx'));
  const Privacy = lazy(() => import('./pages/Privacy.tsx'));
  const PlanSite = lazy(() => import('./pages/PlanSite.tsx'));
  const ConditionsGenerales = lazy(() => import('./pages/ConditionsGenerales.tsx'));
  const BookACall = lazy(() => import('./pages/BookACall.tsx'));
  const CookieBanner = lazy(() => import('./components/CookieBanner.tsx'));

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';
  const currentPath = normalizePath(window.location.pathname);

  const getComponent = () => {
    switch (currentPath) {
      case '/admin':
        return <Admin />;
      case '/services':
        return <Services />;
      case '/agence':
        return <Agence />;
      case '/expertise':
        return <Expertise />;
      case '/realisations':
        return <Realisations />;
      case '/contact':
        return <Contact />;
      case '/mentions-legales':
        return <MentionsLegales />;
      case '/privacy':
        return <Privacy />;
      case '/plan-du-site':
        return <PlanSite />;
      case '/conditions-generales':
        return <ConditionsGenerales />;
      case '/book-a-call':
        return <BookACall />;
      default:
        return <App />;
    }
  };

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <MotionProvider>
          <Suspense fallback={<LoadingSpinner />}>
            {getComponent()}
            <Suspense fallback={null}>
              <CookieBanner />
            </Suspense>
          </Suspense>
        </MotionProvider>
      </HelmetProvider>
    </StrictMode>
  );
}
