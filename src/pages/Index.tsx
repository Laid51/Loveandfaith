import { useRef } from 'react';
import { Book, Music, Headphones, Shirt, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SectionReveal from '@/components/SectionReveal';
import ContentCard from '@/components/ContentCard';

const contentCards = [
  {
    title: 'Literature',
    description: 'Des livres qui parlent d\'amour, classés par catégories pour que chacun puisse trouver une histoire, une vérité, une leçon.',
    categories: ['Romance', 'Fiction', 'Mindset', 'Spiritual Love'],
    icon: <Book className="w-6 h-6" />,
    href: '/literature',
  },
  {
    title: 'Music',
    description: 'Des playlists mises à jour chaque mois, avec les sons qui portent l\'amour — selon ton mood, ton style, ton époque.',
    categories: ['R&B Love', 'Rap Love', 'Chill', 'Spiritual'],
    icon: <Music className="w-6 h-6" />,
    href: '/music',
  },
  {
    title: 'Podcast',
    description: 'Des podcasts qu\'on recommande, et nos épisodes Love & Faith — parce que ce site reste aussi notre voix.',
    categories: ['Recommandés', 'L&F Original'],
    icon: <Headphones className="w-6 h-6" />,
    href: '/podcast',
  },
  {
    title: 'T-shirts',
    description: 'Des pièces pensées comme des messages. La page est là. Le drop arrive plus tard.',
    categories: [],
    icon: <Shirt className="w-6 h-6" />,
    href: '/tshirts',
    badge: 'Coming Soon',
  },
  {
    title: 'Community',
    description: 'Le cœur du projet. Ici, tu proposes. Tu recommandes. Tu participes à construire la référence.',
    categories: ['Songs', 'Books', 'Podcasts', 'Themes'],
    icon: <Heart className="w-6 h-6" />,
    href: '/community',
  },
];

export default function Index() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout showNav={true} showFooter={true}>
      {/* Immersive Hero Section */}
      <HeroSection onEnter={handleEnter} />

      {/* Main Content */}
      <div ref={contentRef}>
        {/* Vision / Manifesto Section */}
        <section className="section-dark">
          <div className="container mx-auto px-6">
            <SectionReveal className="max-w-4xl mx-auto text-center">
              {/* Red accent dot */}
              <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-8" />
              
              <h2 className="font-serif text-3xl md:text-5xl mb-8">
                Love & Faith, c'est quoi ?
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Love & Faith est un espace dédié à l'amour — dans un monde où on finit parfois 
                  par le traiter comme une faiblesse.
                </p>
                <p>
                  Nous, on croit l'inverse : <span className="text-foreground">plus tu apprends à aimer 
                  — toi, et les autres — plus tu deviens fort.</span>
                </p>
                <p>
                  Et quand l'amour rencontre la foi, il gagne une direction, une profondeur, une paix.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Content Cards Section */}
        <section className="section-dark">
          <div className="container mx-auto px-6">
            <SectionReveal className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">
                Découvrir
              </p>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">
                Un site. Plusieurs portes.
              </h2>
              <p className="text-muted-foreground text-lg">
                Un seul thème : l'amour.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentCards.map((card, index) => (
                <ContentCard key={card.title} {...card} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Reference Section */}
        <section className="section-dark border-t border-border/30">
          <div className="container mx-auto px-6">
            <SectionReveal className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-5xl mb-8">
                L'objectif
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Faire de Love & Faith un endroit de <span className="text-secondary">référence</span> : 
                une définition vivante de l'amour.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center text-muted-foreground">
                <div className="card-premium flex-1">
                  <p className="text-sm">Un site qui <span className="text-foreground font-medium">évolue</span></p>
                </div>
                <div className="card-premium flex-1">
                  <p className="text-sm">Un site qui <span className="text-foreground font-medium">s'enrichit</span></p>
                </div>
                <div className="card-premium flex-1">
                  <p className="text-sm">Construit avec les <span className="text-foreground font-medium">lovers</span></p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
