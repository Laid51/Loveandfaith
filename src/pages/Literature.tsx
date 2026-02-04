import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';

const categories = ['Tous', 'Romance', 'Fiction', 'Mindset', 'Spiritual Love'];

const books = [
  {
    title: "L'Alchimiste",
    author: 'Paulo Coelho',
    description: 'Un voyage initiatique sur l\'amour de soi et la quête de son destin.',
    category: 'Spiritual Love',
    amazonUrl: '#',
  },
  {
    title: 'Les Hauts de Hurlevent',
    author: 'Emily Brontë',
    description: 'Une passion dévorante qui défie le temps et la mort.',
    category: 'Romance',
    amazonUrl: '#',
  },
  {
    title: 'Comme un roman',
    author: 'Daniel Pennac',
    description: 'L\'amour de la lecture et la liberté de ne pas lire.',
    category: 'Fiction',
    amazonUrl: '#',
  },
  {
    title: 'Les 5 langages de l\'amour',
    author: 'Gary Chapman',
    description: 'Comprendre comment nous donnons et recevons l\'amour.',
    category: 'Mindset',
    amazonUrl: '#',
  },
  {
    title: 'Le Prophète',
    author: 'Khalil Gibran',
    description: 'Méditations poétiques sur l\'amour, la foi et la vie.',
    category: 'Spiritual Love',
    amazonUrl: '#',
  },
  {
    title: 'Anna Karénine',
    author: 'Léon Tolstoï',
    description: 'L\'amour impossible dans la société russe du XIXe siècle.',
    category: 'Romance',
    amazonUrl: '#',
  },
  {
    title: 'L\'Art d\'aimer',
    author: 'Erich Fromm',
    description: 'Une exploration philosophique de l\'amour comme art.',
    category: 'Mindset',
    amazonUrl: '#',
  },
  {
    title: 'Roméo et Juliette',
    author: 'William Shakespeare',
    description: 'La tragédie éternelle de l\'amour interdit.',
    category: 'Fiction',
    amazonUrl: '#',
  },
];

export default function Literature() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = activeCategory === 'Tous' || book.category === activeCategory;
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <PageHeader
        subtitle="Literature"
        title="Literature"
        description="Des livres qui parlent d'amour, classés par catégories pour que chacun puisse trouver une histoire, une vérité, une leçon."
      />

      <section className="section-dark pt-0">
        <div className="container mx-auto px-6">
          {/* Search & Filters */}
          <SectionReveal className="mb-12">
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un livre ou un auteur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            {/* Category Filters */}
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

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-premium group"
              >
                {/* Category badge */}
                <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full mb-4">
                  {book.category}
                </span>

                <h3 className="font-serif text-xl mb-1 group-hover:text-secondary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {book.description}
                </p>

                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  <span>Voir sur Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Aucun livre trouvé.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
