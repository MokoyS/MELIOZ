import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const BASE_URL = 'https://agencemelioz.com';

export default function SEO({ 
  title, 
  description, 
  canonical,
  type = 'website',
  image = `${BASE_URL}/images/logo_black_text.png`
}: SEOProps) {
  const fullTitle = title;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      {/* Balises de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="MELIOZ" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Autres balises SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="MELIOZ" />
      <meta name="geo.region" content="FR-75" />
      <meta name="geo.placename" content="Paris" />
    </Helmet>
  );
}
