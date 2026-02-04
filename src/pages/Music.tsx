import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Music as MusicIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';

const categories = ['All', 'R&B Love', 'Rap Love', 'Chill / Late Night', 'Spiritual / Reflective'];

const playlists = [
  {
    title: 'Midnight Love Letters',
    description: 'R&B doux pour les nuits où le cœur parle.',
    category: 'R&B Love',
    tracks: 42,
    duration: '2h 45min',
    updated: 'Janvier 2026',
    embedUrl: '#',
  },
  {
    title: 'Love in the Game',
    description: 'Du rap qui parle d\'amour sans perdre son edge.',
    category: 'Rap Love',
    tracks: 35,
    duration: '2h 10min',
    updated: 'Janvier 2026',
    embedUrl: '#',
  },
  {
    title: 'After Hours',
    description: 'Pour les insomnies et les pensées qui dérivent.',
    category: 'Chill / Late Night',
    tracks: 50,
    duration: '3h 20min',
    updated: 'Janvier 2026',
    embedUrl: '#',
  },
  {
    title: 'Sacred Love',
    description: 'Quand l\'amour devient prière.',
    category: 'Spiritual / Reflective',
    tracks: 28,
    duration: '1h 45min',
    updated: 'Janvier 2026',
    embedUrl: '#',
  },
  {
    title: 'Summer Hearts',
    description: 'Feel-good love songs pour les beaux jours.',
    category: 'R&B Love',
    tracks: 38,
    duration: '2h 30min',
    updated: 'Décembre 2025',
    embedUrl: '#',
  },
  {
    title: 'Real Love Rap',
    description: 'Quand les rappeurs se mettent à nu.',
    category: 'Rap Love',
    tracks: 30,
    duration: '1h 55min',
    updated: 'Décembre 2025',
    embedUrl: '#',
  },
];

export default function Music() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPlaylists = playlists.filter(
    (playlist) => activeCategory === 'All' || playlist.category === activeCategory
  );

  return (
    <Layout>
      <PageHeader
        subtitle="Music"
        title="Music"
        description="Des playlists mises à jour chaque mois, avec les sons qui portent l'amour — selon ton mood, ton style, ton époque."
      />

      <section className="section-dark pt-0">
        <div className="container mx-auto px-6">
          {/* Updated badge */}
          <SectionReveal className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
              <Calendar className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary">Mis à jour chaque mois</span>
            </div>
          </SectionReveal>

          {/* Category Tabs */}
          <SectionReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaylists.map((playlist, index) => (
              <motion.div
                key={playlist.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-premium group"
              >
                {/* Playlist Icon */}
                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 transition-all">
                  <MusicIcon className="w-16 h-16 text-primary/50" />
                </div>

                {/* Category */}
                <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full mb-3">
                  {playlist.category}
                </span>

                <h3 className="font-serif text-xl mb-2 group-hover:text-secondary transition-colors">
                  {playlist.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {playlist.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span>{playlist.tracks} titres</span>
                  <span>•</span>
                  <span>{playlist.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{playlist.updated}</span>
                  <a
                    href={playlist.embedUrl}
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

          {/* Apple Music Embed Placeholder */}
          <SectionReveal className="mt-16">
            <div className="card-premium text-center py-12">
              <MusicIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Intégration Apple Music</h3>
              <p className="text-muted-foreground">
                Les playlists complètes seront bientôt disponibles directement ici.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
