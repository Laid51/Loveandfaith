import { GalleryImage } from '@/types/gallery';
import ImageCard from './ImageCard';

interface MasonryGridProps {
    images: GalleryImage[];
    onImageClick: (image: GalleryImage) => void;
}

export default function MasonryGrid({ images, onImageClick }: MasonryGridProps) {
    if (images.length === 0) {
        return (
            <div className="py-24 text-center">
                <p className="text-muted-foreground text-lg">
                    No images in this collection yet.
                </p>
            </div>
        );
    }

    return (
        <div className="py-16">
            <div className="container mx-auto px-6">
                {/* True Pinterest-style masonry grid using CSS columns */}
                <div className="masonry-grid-columns">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="masonry-item animate-fade-in"
                            style={{
                                animationDelay: `${index * 0.05}s`,
                            }}
                        >
                            <ImageCard
                                image={image}
                                onClick={() => onImageClick(image)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
