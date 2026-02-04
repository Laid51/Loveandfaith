import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Bell, Mail, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';

export default function Tshirts() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <Layout>
      <PageHeader
        subtitle="Coming Soon"
        title="T-shirts"
        description="Des pièces pensées comme des messages. La page est là. Le drop arrive plus tard."
      />

      <section className="section-dark pt-0">
        <div className="container mx-auto px-6">
          <SectionReveal className="max-w-2xl mx-auto text-center">
            {/* Large Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-8"
            >
              <Shirt className="w-16 h-16 text-primary" />
            </motion.div>

            {/* Statement */}
            <h2 className="font-serif text-2xl md:text-4xl mb-6">
              Le vêtement comme message
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Chez Love & Faith, chaque pièce porte une intention. Ce n'est pas juste du tissu — 
              c'est une manière de dire ce qu'on croit, de porter ce qu'on ressent.
            </p>

            {/* Teaser Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card-premium text-center py-8">
                <p className="text-4xl mb-2">❤️</p>
                <p className="text-sm text-muted-foreground">L'amour comme force</p>
              </div>
              <div className="card-premium text-center py-8">
                <p className="text-4xl mb-2">🙏</p>
                <p className="text-sm text-muted-foreground">La foi comme direction</p>
              </div>
              <div className="card-premium text-center py-8">
                <p className="text-4xl mb-2">✨</p>
                <p className="text-sm text-muted-foreground">La qualité comme standard</p>
              </div>
            </div>

            {/* Notification Form */}
            <div className="card-premium p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-xl">Être notifié du drop</h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Ton email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <button type="submit" className="btn-gold whitespace-nowrap">
                    Me notifier
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 text-secondary"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <p>Merci ! Tu seras notifié du drop.</p>
                </motion.div>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
