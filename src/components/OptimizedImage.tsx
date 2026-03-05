/**
 * Composant Image optimisé avec lazy loading automatique
 * Utilise loading="lazy" par défaut sauf si l'image est au-dessus de la ligne de flottaison (LCP)
 * width et height sont obligatoires pour éviter le Cumulative Layout Shift (CLS)
 */

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;   // obligatoire pour éviter le CLS
  height: number;  // obligatoire pour éviter le CLS
  className?: string;
  priority?: boolean; // Si true, l'image est considérée comme LCP et ne sera pas lazy loaded
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  style,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
