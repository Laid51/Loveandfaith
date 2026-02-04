import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  categories?: string[];
  icon: ReactNode;
  href: string;
  badge?: string;
  index?: number;
}

export default function ContentCard({
  title,
  description,
  categories,
  icon,
  href,
  badge,
  index = 0,
}: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link to={href} className="block group">
        <div className="card-premium h-full relative">
          {/* Badge */}
          {badge && (
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
              {badge}
            </span>
          )}

          {/* Icon */}
          <div className="mb-6 text-primary">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="font-serif text-2xl mb-3 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-xs border border-border/50 rounded-full text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Link Arrow */}
          <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">Découvrir</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
