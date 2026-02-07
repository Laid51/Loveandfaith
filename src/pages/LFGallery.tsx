import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import GalleryHero from '@/components/gallery/GalleryHero';
import CollectionNav from '@/components/gallery/CollectionNav';
import MasonryGrid from '@/components/gallery/MasonryGrid';
import ImageModal from '@/components/gallery/ImageModal';
import { collections, galleryImages } from '@/data/galleryData';
import { GalleryImage } from '@/types/gallery';
import './LFGallery.css';

export default function LFGallery() {
    const [activeCollection, setActiveCollection] = useState('all');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    // Filter images based on active collection
    const filteredImages = useMemo(() => {
        if (activeCollection === 'all') {
            return galleryImages;
        }
        return galleryImages.filter(img => img.collection === activeCollection);
    }, [activeCollection]);

    // Get current image index for navigation
    const currentImageIndex = selectedImage
        ? filteredImages.findIndex(img => img.id === selectedImage.id)
        : -1;

    const handleNext = () => {
        if (currentImageIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentImageIndex + 1]);
        }
    };

    const handlePrevious = () => {
        if (currentImageIndex > 0) {
            setSelectedImage(filteredImages[currentImageIndex - 1]);
        }
    };

    return (
        <Layout showNav={true} showFooter={false}>
            <div className="lf-gallery-page bg-lf-black min-h-screen">
                {/* Hero Section */}
                <GalleryHero />

                {/* Collection Navigation */}
                <CollectionNav
                    collections={collections}
                    activeCollection={activeCollection}
                    onCollectionChange={setActiveCollection}
                />

                {/* Masonry Grid */}
                <MasonryGrid
                    images={filteredImages}
                    onImageClick={setSelectedImage}
                />

                {/* Signature Quote */}
                <section className="py-16 border-t border-border/30">
                    <div className="container mx-auto px-6 text-center">
                        <blockquote className="max-w-2xl mx-auto">
                            <p className="font-serif text-2xl md:text-3xl text-foreground mb-4 italic">
                                "Love is not content. Love is meaning."
                            </p>
                            <footer className="text-secondary text-sm tracking-[0.3em] uppercase">
                                Love & Faith
                            </footer>
                        </blockquote>
                    </div>
                </section>

                {/* Image Modal */}
                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    onNext={currentImageIndex < filteredImages.length - 1 ? handleNext : undefined}
                    onPrevious={currentImageIndex > 0 ? handlePrevious : undefined}
                />
            </div>
        </Layout>
    );
}
