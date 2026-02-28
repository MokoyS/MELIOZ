export const scrollToSection = (id: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  // Utiliser le scroll natif avec offset pour la navbar fixe
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const offset = -80; // Offset pour la navbar fixe
  
  const targetPosition = target.offsetTop + offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
};
