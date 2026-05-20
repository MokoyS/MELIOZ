export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  year: number;
  tags: string[];
  services: string[];
  shortDescription: string;
  longDescription: string[];
  image?: string;
  siteUrl: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'atelier-pile-attitude',
    name: 'Atelier Pile Attitude',
    category: 'Boutique créative',
    year: 2025,
    tags: ['Vitrine', 'Design', 'Développement web'],
    services: [
      'Design UI/UX',
      'Développement sur mesure',
      'Référencement SEO',
      'Mise en production',
    ],
    shortDescription:
      "Création d'une vitrine en ligne moderne et chaleureuse pour un atelier de loisirs créatifs. Un site qui reflète l'âme artisanale de la marque tout en offrant une expérience fluide.",
    longDescription: [
      "Atelier Pile Attitude est un espace dédié aux loisirs créatifs, porté par une passion authentique pour l'artisanat et le fait-main. La marque souhaitait se doter d'une présence en ligne à la hauteur de ses ambitions : un site élégant, chaleureux et performant.",
      "Nous avons conçu et développé un site vitrine sur-mesure qui traduit fidèlement l'univers de l'atelier — ses couleurs, ses textures, son énergie. L'architecture de l'information a été pensée pour guider naturellement les visiteurs vers les créations et les ateliers proposés.",
      "L'intégration SEO dès la phase de développement a permis d'assurer une visibilité optimale dès le lancement. Le site est entièrement responsive, optimisé pour les Core Web Vitals, et autonome à maintenir par le client.",
    ],
    siteUrl: 'https://www.atelier-pile-attitude.fr',
    testimonial: {
      quote:
        "MELIOZ a su transformer notre vision en réalité digitale. Le résultat dépasse nos attentes : notre site reflète vraiment ce qu'on est, et nos clients le remarquent immédiatement.",
      author: 'Atelier Pile Attitude',
      role: 'Cliente MELIOZ',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
