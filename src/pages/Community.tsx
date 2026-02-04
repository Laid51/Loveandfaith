import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Book, Headphones, Lightbulb, X, Send, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';

type SuggestionType = 'song' | 'book' | 'podcast' | 'theme' | null;

const suggestionTypes = [
  { type: 'song' as const, icon: Music, label: 'Suggérer une chanson', color: 'text-blue-400' },
  { type: 'book' as const, icon: Book, label: 'Suggérer un livre', color: 'text-green-400' },
  { type: 'podcast' as const, icon: Headphones, label: 'Suggérer un podcast', color: 'text-purple-400' },
  { type: 'theme' as const, icon: Lightbulb, label: 'Suggérer un thème', color: 'text-yellow-400' },
];

export default function Community() {
  const [selectedType, setSelectedType] = useState<SuggestionType>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    reason: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In V1, we just show success
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedType(null);
      setFormData({ title: '', link: '', reason: '', name: '' });
    }, 3000);
  };

  return (
    <Layout>
      <PageHeader
        subtitle="Community"
        title="Community"
        description="Le cœur du projet. Ici, tu proposes. Tu recommandes. Tu participes à construire la référence."
      />

      <section className="section-dark pt-0">
        <div className="container mx-auto px-6">
          {/* Heart Jar Illustration */}
          <SectionReveal className="text-center mb-16">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-40 h-40 mx-auto mb-8 relative"
            >
              {/* Jar shape */}
              <div className="absolute inset-0 rounded-3xl rounded-t-none border-4 border-primary/30 bg-gradient-to-b from-primary/5 to-primary/10" />
              {/* Hearts inside */}
              <div className="absolute inset-4 flex flex-wrap items-end justify-center gap-1 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-4 h-4 text-primary fill-primary opacity-${30 + i * 5}`}
                    style={{ 
                      opacity: 0.3 + (i * 0.05),
                      transform: `rotate(${Math.random() * 30 - 15}deg)` 
                    }}
                  />
                ))}
              </div>
              {/* Lid */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rounded-full bg-secondary/50 border-2 border-secondary/80" />
            </motion.div>

            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Dépose ta suggestion dans le pot
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Chaque suggestion est une graine. La communauté fait grandir Love & Faith.
            </p>
          </SectionReveal>

          {/* Suggestion Type Buttons */}
          <SectionReveal className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {suggestionTypes.map(({ type, icon: Icon, label, color }) => (
                <motion.button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`card-premium text-center py-6 group ${
                    selectedType === type ? 'border-secondary' : ''
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${color} group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-medium">{label.replace('Suggérer ', '')}</p>
                </motion.button>
              ))}
            </div>
          </SectionReveal>

          {/* Modal Form */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                onClick={() => !isSubmitted && setSelectedType(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-md bg-card border border-border rounded-lg p-6 relative"
                >
                  {/* Close button */}
                  {!isSubmitted && (
                    <button
                      onClick={() => setSelectedType(null)}
                      className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}

                  {!isSubmitted ? (
                    <>
                      <h3 className="font-serif text-2xl mb-6">
                        {suggestionTypes.find((s) => s.type === selectedType)?.label}
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Titre / Nom *
                          </label>
                          <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                            placeholder={
                              selectedType === 'song' ? 'Ex: "Kiss Me" - Sixpence None the Richer' :
                              selectedType === 'book' ? 'Ex: L\'Alchimiste - Paulo Coelho' :
                              selectedType === 'podcast' ? 'Ex: Modern Love - NYT' :
                              'Ex: L\'amour à distance'
                            }
                          />
                        </div>

                        {selectedType !== 'theme' && (
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Lien (optionnel)
                            </label>
                            <input
                              type="url"
                              value={formData.link}
                              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                              placeholder="https://..."
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Pourquoi cette suggestion ? *
                          </label>
                          <textarea
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            required
                            rows={3}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
                            placeholder="Qu'est-ce qui rend cette suggestion spéciale ?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Ton prénom (optionnel)
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                            placeholder="Pour te créditer si on ajoute ta suggestion"
                          />
                        </div>

                        <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Envoyer ma suggestion</span>
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="font-serif text-2xl mb-2">Merci !</h3>
                      <p className="text-muted-foreground">
                        Ta suggestion a été ajoutée au pot. ❤️
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats / Community Info */}
          <SectionReveal className="mt-16 text-center">
            <div className="card-premium inline-flex items-center gap-6 px-8 py-4">
              <div className="text-center">
                <p className="font-serif text-3xl text-secondary">∞</p>
                <p className="text-xs text-muted-foreground">Suggestions</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl text-secondary">1</p>
                <p className="text-xs text-muted-foreground">Mission</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <Heart className="w-8 h-8 text-primary fill-primary mx-auto" />
                <p className="text-xs text-muted-foreground">Amour</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
