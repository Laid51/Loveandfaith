import { Collection } from '@/types/gallery';

interface CollectionNavProps {
    collections: Collection[];
    activeCollection: string;
    onCollectionChange: (collectionId: string) => void;
}

export default function CollectionNav({
    collections,
    activeCollection,
    onCollectionChange
}: CollectionNavProps) {
    return (
        <nav className="py-12 border-b border-border/30">
            <div className="container mx-auto px-6">
                {/* Section title */}
                <div className="text-center mb-8">
                    <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-2">
                        Collections
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                        Explore by theme
                    </h2>
                </div>

                {/* Collection buttons */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
                    {collections.map((collection) => (
                        <button
                            key={collection.id}
                            onClick={() => onCollectionChange(collection.id)}
                            className={`
                group relative px-6 py-3 rounded-sm
                border transition-all duration-500 ease-out
                ${activeCollection === collection.id
                                    ? 'border-secondary bg-secondary/10 text-secondary'
                                    : 'border-border/50 text-foreground/70 hover:border-secondary/50 hover:text-foreground'
                                }
              `}
                            aria-pressed={activeCollection === collection.id}
                        >
                            {/* Hover glow effect */}
                            <div
                                className={`
                  absolute inset-0 rounded-sm opacity-0 transition-opacity duration-500
                  ${activeCollection === collection.id ? 'opacity-20' : 'group-hover:opacity-10'}
                `}
                                style={{
                                    background: 'radial-gradient(circle at center, hsl(43 74% 49% / 0.3), transparent)',
                                }}
                            />

                            <span className="relative z-10 font-sans text-sm md:text-base tracking-wide">
                                {collection.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Active collection description */}
                {activeCollection && (
                    <div className="text-center mt-6 animate-fade-in">
                        <p className="text-muted-foreground text-sm md:text-base">
                            {collections.find(c => c.id === activeCollection)?.description}
                        </p>
                    </div>
                )}
            </div>
        </nav>
    );
}
