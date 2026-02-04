import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="font-serif text-2xl">Love & Faith</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              La référence de l'amour. Un espace dédié à ceux qui croient que l'amour est une force, 
              guidée par la foi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Explorer</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/literature" className="text-muted-foreground hover:text-foreground transition-colors">
                  Literature
                </Link>
              </li>
              <li>
                <Link to="/music" className="text-muted-foreground hover:text-foreground transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="text-muted-foreground hover:text-foreground transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Légal</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-secondary hover:border-secondary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-secondary hover:border-secondary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-secondary hover:border-secondary transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-secondary hover:border-secondary transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Love & Faith. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-primary fill-primary" /> and Faith
          </p>
        </div>
      </div>
    </footer>
  );
}
