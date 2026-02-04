import { motion } from 'framer-motion';
import { Headphones, ExternalLink, Mic2, Play } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';

const recommendedPodcasts = [
  {
    title: 'The Love School',
    host: 'Renato & Cristiane Cardoso',
    description: 'Des conseils pratiques pour construire des relations saines.',
    platform: 'Spotify',
    url: '#',
  },
  {
    title: 'Modern Love',
    host: 'The New York Times',
    description: 'Des histoires vraies sur l\'amour dans toutes ses formes.',
    platform: 'Apple Podcasts',
    url: '#',
  },
  {
    title: 'Where Should We Begin?',
    host: 'Esther Perel',
    description: 'Sessions de thérapie de couple anonymes et révélatrices.',
    platform: 'Spotify',
    url: '#',
  },
  {
    title: 'The Heart',
    host: 'Radiotopia',
    description: 'Explorations sonores de l\'intimité et de l\'identité.',
    platform: 'Apple Podcasts',
    url: '#',
  },
];

const originalEpisodes = [
  {
    title: 'Qu\'est-ce que l\'amour ?',
    episode: 'EP 001',
    duration: '45 min',
    description: 'Notre premier épisode. Une exploration de ce mot qu\'on utilise sans vraiment comprendre.',
    status: 'coming',
  },
  {
    title: 'L\'amour de soi : égoïsme ou nécessité ?',
    episode: 'EP 002',
    duration: '38 min',
    description: 'Pourquoi s\'aimer soi-même est la base de tout.',
    status: 'coming',
  },
  {
    title: 'Quand la foi rencontre l\'amour',
    episode: 'EP 003',
    duration: '52 min',
    description: 'Comment la spiritualité transforme nos relations.',
    status: 'coming',
  },
];

export default function Podcast() {
  return (
    <Layout>
      <PageHeader
        subtitle="Podcast"
        title="Podcast"
        description="Des podcasts qu'on recommande, et nos épisodes Love & Faith — parce que ce site reste aussi notre voix."
      />

      <section className="section-dark pt-0">
        <div className="container mx-auto px-6">
          {/* Recommended Section */}
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Headphones className="w-6 h-6 text-secondary" />
              <h2 className="font-serif text-2xl md:text-3xl">Podcasts qu'on recommande</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedPodcasts.map((podcast, index) => (
                <motion.div
                  key={podcast.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card-premium group flex gap-4"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground">{podcast.platform}</span>
                    <h3 className="font-serif text-lg group-hover:text-secondary transition-colors">
                      {podcast.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{podcast.host}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {podcast.description}
                    </p>
                    <a
                      href={podcast.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <span>Écouter</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Original Podcast Section */}
          <SectionReveal>
            <div className="flex items-center gap-3 mb-8">
              <Mic2 className="w-6 h-6 text-primary" />
              <h2 className="font-serif text-2xl md:text-3xl">Love & Faith Original</h2>
            </div>

            {/* Coming Soon Banner */}
            <div className="card-premium bg-gradient-to-br from-primary/10 to-transparent mb-8 text-center py-8">
              <p className="text-secondary text-sm tracking-wider uppercase mb-2">Bientôt disponible</p>
              <h3 className="font-serif text-xl">Notre podcast arrive bientôt</h3>
            </div>

            <div className="space-y-4">
              {originalEpisodes.map((episode, index) => (
                <motion.div
                  key={episode.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-premium flex items-center gap-4 opacity-60"
                >
                  {/* Play Button Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 text-muted-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-secondary font-medium">{episode.episode}</span>
                      <span className="text-xs text-muted-foreground">{episode.duration}</span>
                    </div>
                    <h3 className="font-serif text-lg truncate">{episode.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{episode.description}</p>
                  </div>

                  {/* Status */}
                  <span className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground shrink-0">
                    Coming
                  </span>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
