import { useEffect } from 'react';
import { GalleryImage } from '@/types/gallery';
import { X, ChevronLeft, ChevronRight, Heart, Bookmark, ExternalLink } from 'lucide-react';

interface ImageModalProps {
    image: GalleryImage | null;
    onClose: () => void;
    onNext?: () => void;
    onPrevious?: () => void;
}

export default function ImageModal({ image, onClose, onNext, onPrevious }: ImageModalProps) {
    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (image) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [image, onClose]);

    // Arrow key navigation
    useEffect(() => {
        const handleArrowKeys = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' && onPrevious) onPrevious();
            if (e.key === 'ArrowRight' && onNext) onNext();
        };

        if (image) {
            document.addEventListener('keydown', handleArrowKeys);
        }

        return () => {
            document.removeEventListener('keydown', handleArrowKeys);
        };
    }, [image, onNext, onPrevious]);

    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-lf-black-deep/95 backdrop-blur-md" />

            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-3 text-lf-white-muted hover:text-lf-white transition-colors duration-300 bg-lf-black/50 rounded-sm border border-border/30 backdrop-blur-sm"
                aria-label="Close modal"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            {onPrevious && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrevious();
                    }}
                    className="absolute left-6 z-50 p-3 text-lf-white-muted hover:text-lf-white transition-colors duration-300 bg-lf-black/50 rounded-sm border border-border/30 backdrop-blur-sm"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {onNext && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="absolute right-6 z-50 p-3 text-lf-white-muted hover:text-lf-white transition-colors duration-300 bg-lf-black/50 rounded-sm border border-border/30 backdrop-blur-sm"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            {/* Content */}
            <div
                className="relative z-10 max-w-7xl w-full mx-6 flex flex-col lg:flex-row gap-8 items-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={image.src}
                        alt={image.title}
                        className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
                    />
                </div>

                {/* Metadata sidebar */}
                <div className="w-full lg:w-80 bg-card/50 backdrop-blur-sm border border-border/30 rounded-sm p-6 space-y-6">
                    {/* Title */}
                    <div>
                        <h2 className="font-serif text-3xl text-foreground mb-2">
                            {image.title}
                        </h2>
                        {image.source && (
                            <p className="text-muted-foreground flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                {image.source}
                            </p>
                        )}
                    </div>

                    {/* Emotional tag */}
                    <div>
                        <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">
                            Emotion
                        </p>
                        <span className="inline-block px-4 py-2 text-sm tracking-wider uppercase bg-lf-black/50 text-secondary border border-secondary/30 rounded-sm">
                            {image.emotionalTag}
                        </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border/30">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-lf-black/50 text-lf-white-muted hover:text-secondary border border-border/30 hover:border-secondary/30 rounded-sm transition-all duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Placeholder for future like functionality
                            }}
                        >
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">Like</span>
                        </button>
                        <button
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-lf-black/50 text-lf-white-muted hover:text-secondary border border-border/30 hover:border-secondary/30 rounded-sm transition-all duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Placeholder for future save functionality
                            }}
                        >
                            <Bookmark className="w-5 h-5" />
                            <span className="text-sm">Save</span>
                        </button>
                    </div>

                    {/* Subtle hint */}
                    <p className="text-xs text-muted-foreground/60 text-center pt-2">
                        Use arrow keys to navigate
                    </p>
                </div>
            </div>
        </div>
    );
}
