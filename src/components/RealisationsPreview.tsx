import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Startup Tech',
        category: 'Site vitrine',
        description: 'Refonte complète du site vitrine d\'une startup innovante dans le secteur de la tech.',
        tags: ['React', 'Design System', 'SEO'],
        image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    },
    {
        title: 'E-commerce Mode',
        category: 'E-commerce',
        description: 'Création d\'une boutique en ligne pour une marque de mode éthique française.',
        tags: ['Shopify', 'UI/UX', 'Branding'],
        image: 'bg-gradient-to-br from-accent/30 to-primary/30',
    },
    {
        title: 'Cabinet Conseil',
        category: 'Site vitrine',
        description: 'Site institutionnel pour un cabinet de conseil en stratégie basé à Paris.',
        tags: ['WordPress', 'SEO', 'Copywriting'],
        image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
    },
];

export default function RealisationsPreview() {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
                    Nos Réalisations
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                    Ce que nous avons bâti
                </h2>
                <p className="text-lg text-text/70 max-w-2xl mx-auto">
                    Un aperçu de nos derniers projets — des réalisations concrètes qui parlent d'elles-mêmes.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-10">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group bg-background rounded-2xl border border-secondary/20 shadow-soft overflow-hidden hover:shadow-md hover:border-secondary/40 transition-all duration-300"
                    >
                        <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <ExternalLink className="w-5 h-5 text-white/70" />
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-semibold text-text mt-2 mb-2">{project.title}</h3>
                            <p className="text-text/70 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="text-center">
                <a
                    href="/realisations"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-secondary/30 text-text font-semibold rounded-full hover:bg-primary/5 hover:border-secondary transition-all duration-300"
                >
                    <span>Voir toutes nos réalisations</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
}
