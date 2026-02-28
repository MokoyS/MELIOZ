/**
 * Composant Image optimisé avec lazy loading automatique
 * Utilise loading="lazy" par défaut sauf si l'image est au-dessus de la ligne de flottaison (LCP)
 */
import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean; // Si true, l'image est considérée comme LCP et ne sera pas lazy loaded
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  className = '',
  loading,
  ...props
}: OptimizedImageProps) {
  // Si priority est true, on charge immédiatement (pour LCP)
  // Sinon, on utilise lazy loading
  const loadingMode = loading || (priority ? 'eager' : 'lazy');

  return (
    <img
      src={src}
      alt={alt}
      loading={loadingMode}
      decoding="async"
      className={className}
      {...props}
    />
  );
}
