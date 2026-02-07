import { GalleryImage } from '@/types/gallery';
import { Heart, Bookmark } from 'lucide-react';

interface ImageCardProps {
    image: GalleryImage;
    onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
    return (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-sm bg-card/30 backdrop-blur-sm"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {/* Image - displays in natural aspect ratio */}
            <div className="relative overflow-hidden">
                <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-lf-black via-lf-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Emotional tag - appears on hover */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-lf-black/80 text-secondary border border-secondary/30 rounded-sm backdrop-blur-sm">
                        {image.emotionalTag}
                    </span>
                </div>

                {/* Action buttons - appear on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                    <button
                        className="p-2 bg-lf-black/80 text-lf-white-muted hover:text-secondary border border-border/30 rounded-sm backdrop-blur-sm transition-colors duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Placeholder for future like functionality
                        }}
                        aria-label="Like image"
                    >
                        <Heart className="w-4 h-4" />
                    </button>
                    <button
                        className="p-2 bg-lf-black/80 text-lf-white-muted hover:text-secondary border border-border/30 rounded-sm backdrop-blur-sm transition-colors duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Placeholder for future save functionality
                        }}
                        aria-label="Save image"
                    >
                        <Bookmark className="w-4 h-4" />
                    </button>
                </div>

                {/* Title and source - appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-serif text-lg text-lf-white mb-1">
                        {image.title}
                    </h3>
                    {image.source && (
                        <p className="text-sm text-lf-white-muted/80">
                            {image.source}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
