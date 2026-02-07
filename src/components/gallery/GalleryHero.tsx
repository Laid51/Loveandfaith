import logoBlack from '@/assets/Logo-lf-black.png';

interface GalleryHeroProps {
    className?: string;
}

export default function GalleryHero({ className = '' }: GalleryHeroProps) {
    return (
        <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
            {/* Deep black background */}
            <div className="absolute inset-0 bg-lf-black-deep" />

            {/* Logo watermark - subtle filigree effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <img
                    src={logoBlack}
                    alt=""
                    className="w-[800px] h-auto object-contain"
                    aria-hidden="true"
                />
            </div>

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-vignette" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-lf-white tracking-tight">
                    L&F
                </h1>
                <p className="text-xl md:text-2xl text-lf-white-muted mb-4 tracking-wide">
                    A visual archive of love
                </p>
                <p className="text-sm md:text-base text-lf-white-muted/60 tracking-[0.3em] uppercase">
                    Art. Faith. Emotion. Culture.
                </p>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lf-black to-transparent" />
        </section>
    );
}
