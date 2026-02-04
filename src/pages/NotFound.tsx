import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heart, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        {/* Animated heart */}
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <Heart className="w-24 h-24 text-primary/20 absolute animate-pulse" />
          <Heart className="w-24 h-24 text-primary fill-primary/10 relative" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-secondary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Cette page n'existe pas... encore.
        </p>

        <Link
          to="/"
          className="btn-gold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
