import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';

export default function About() {
  return (
    <Layout>
      <PageHeader
        subtitle="About"
        title="À propos"
        description="Love & Faith est construit par deux frères. L&F = Love & Faith. L&F = Laïd & Faïd."
      />

      <section className="section-dark pt-0">
        <div className="container mx-auto px-6">
          {/* The Brothers */}
          <SectionReveal className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-secondary" />
              <h2 className="font-serif text-2xl md:text-3xl">Les fondateurs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-premium text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-3xl text-primary">L</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Laïd</h3>
                <p className="text-muted-foreground">
                  La vision. L'écriture. La profondeur.
                </p>
              </motion.div>

              {/* Founder 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-premium text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-3xl text-secondary">F</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Faïd</h3>
                <p className="text-muted-foreground">
                  La structure. Le code. L'exécution.
                </p>
              </motion.div>
            </div>
          </SectionReveal>

          {/* The Meaning */}
          <SectionReveal className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <h2 className="font-serif text-2xl md:text-3xl">Le sens</h2>
            </div>

            <div className="card-premium">
              <p className="text-lg leading-relaxed mb-6">
                <span className="text-secondary font-medium">L&F</span> porte un double sens :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="font-serif text-xl mb-2">Love & Faith</p>
                  <p className="text-muted-foreground text-sm">
                    L'amour et la foi. Les deux forces qui guident notre mission.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                  <p className="font-serif text-xl mb-2">Laïd & Faïd</p>
                  <p className="text-muted-foreground text-sm">
                    Deux frères. Une vision commune. Un projet de cœur.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Mission & Values */}
          <SectionReveal className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">Notre mission</h2>

            <div className="space-y-6 text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Créer un espace où l'amour est traité avec <span className="text-foreground">profondeur</span>, 
                <span className="text-foreground"> respect</span>, et <span className="text-foreground">sens</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Un endroit de <span className="text-secondary">référence</span> — pas juste un site, 
                mais une définition vivante de ce que l'amour peut être quand il rencontre la foi.
              </p>
            </div>
          </SectionReveal>

          {/* Values */}
          <SectionReveal className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-premium text-center">
                <p className="text-3xl mb-3">💪</p>
                <h3 className="font-serif text-lg mb-2">Force</h3>
                <p className="text-sm text-muted-foreground">
                  L'amour n'est pas une faiblesse. C'est la plus grande des forces.
                </p>
              </div>
              <div className="card-premium text-center">
                <p className="text-3xl mb-3">🧭</p>
                <h3 className="font-serif text-lg mb-2">Direction</h3>
                <p className="text-sm text-muted-foreground">
                  La foi donne à l'amour une direction. Une intention. Un sens.
                </p>
              </div>
              <div className="card-premium text-center">
                <p className="text-3xl mb-3">🌱</p>
                <h3 className="font-serif text-lg mb-2">Évolution</h3>
                <p className="text-sm text-muted-foreground">
                  Ce projet grandit avec la communauté. Chaque jour, il s'enrichit.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Future */}
          <SectionReveal className="max-w-3xl mx-auto mt-16 text-center">
            <div className="card-premium py-12">
              <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">L'avenir</p>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Ce n'est que le début
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Love & Faith va continuer d'évoluer. Plus de contenu. Plus de profondeur. 
                Plus de communauté. Toujours guidé par l'amour et la foi.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
