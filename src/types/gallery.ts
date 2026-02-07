export interface GalleryImage {
    id: string;
    src: string;
    title: string;
    source?: string; // For inspirations (e.g., "Naruto", "DC Comics")
    emotionalTag: string; // e.g., "nostalgia", "faith", "longing", "healing"
    collection: string;
    aspectRatio?: number; // For masonry layout optimization
}

export interface Collection {
    id: string;
    name: string;
    description: string;
}
