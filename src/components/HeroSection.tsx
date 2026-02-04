import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeartRain from './HeartRain';
import { ChevronDown } from 'lucide-react';

// Lazy load the 3D component for performance
const Hero3DLogo = lazy(() => import('./Hero3DLogo'));

interface HeroSectionProps {
  onEnter: () => void;
}

export default function HeroSection({ onEnter }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep black background with vignette */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-vignette pointer-events-none" />

      {/* Heart rain effect */}
      <HeartRain />

      {/* 3D Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-2xl max-h-96">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse" />
              </div>
            }
          >
            <Hero3DLogo />
          </Suspense>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-32 md:pt-48">
        {/* Subtitle */}
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          custom={0.5}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-secondary mb-6"
        >
          The Reference
        </motion.p>

        {/* Main Title */}
        <motion.h1
          variants={fadeInVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          custom={0.8}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight"
        >
          When Love meets Faith
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          custom={1.1}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Deux forces. Une direction. Une seule quête : comprendre l'amour et le vivre avec sens.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          custom={1.4}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onEnter}
            className="btn-gold min-w-[200px]"
          >
            Explorer les univers
          </button>
          <a
            href="/community"
            className="btn-outline-gold min-w-[200px]"
          >
            Contribuer
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          custom={2}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={onEnter}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors group"
          >
            <span className="text-sm tracking-wide">Cliquer pour entrer</span>
            <ChevronDown className="w-6 h-6 animate-scroll-indicator" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
