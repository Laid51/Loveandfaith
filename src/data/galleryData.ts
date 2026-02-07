import { Collection, GalleryImage } from '@/types/gallery';

// Import images from Loveandfaith folder
import lf1 from '@/assets/Loveandfaith/ChatGPT Image 9 nov. 2025, 20_52_05.png';
import lf2 from '@/assets/Loveandfaith/For (1).png';
import lf3 from '@/assets/Loveandfaith/For (10).png';
import lf4 from '@/assets/Loveandfaith/For (12).png';
import lf5 from '@/assets/Loveandfaith/For (16).png';
import lf6 from '@/assets/Loveandfaith/For (18).png';
import lf7 from '@/assets/Loveandfaith/For (19).png';
import lf8 from '@/assets/Loveandfaith/For (2).png';
import lf9 from '@/assets/Loveandfaith/For (20).png';
import lf10 from '@/assets/Loveandfaith/For.png';
import lf11 from '@/assets/Loveandfaith/Love is BetterWhenit Hurts.png';

// Import images from Love in anime folder
import anime1 from '@/assets/Love in anime/Dragonball.jfif';
import anime2 from '@/assets/Love in anime/G O K U     A N D     C H I-CHI.jfif';
import anime3 from '@/assets/Love in anime/Me and my vegeta prince💙💭.jfif';
import anime4 from '@/assets/Love in anime/Vinsmoke Sanji.jfif';
import anime5 from '@/assets/Love in anime/télécharger (15).jfif';
import anime6 from '@/assets/Love in anime/télécharger (16).jfif';
import anime7 from '@/assets/Love in anime/télécharger (17).jfif';
import anime8 from '@/assets/Love in anime/télécharger (18).jfif';
import anime9 from '@/assets/Love in anime/télécharger (19).jfif';
import anime10 from '@/assets/Love in anime/𝑊𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟_𝐿𝑜𝑐𝑘𝑠𝑐𝑟𝑒𝑒𝑛.jfif';

// Import images from Love in comics folder
import comics1 from '@/assets/Love in comics/Harley and Joker.jfif';
import comics2 from '@/assets/Love in comics/Spiderman Wallpaper.jfif';
import comics3 from '@/assets/Love in comics/_ Spider-Man and Hello Kitty Wallpaper.jfif';
import comics4 from '@/assets/Love in comics/télécharger (10).jfif';
import comics5 from '@/assets/Love in comics/télécharger (11).jfif';
import comics6 from '@/assets/Love in comics/télécharger (12).jfif';
import comics7 from '@/assets/Love in comics/télécharger (13).jfif';
import comics8 from '@/assets/Love in comics/télécharger (14).jfif';
import comics9 from '@/assets/Love in comics/☺️.jfif';

export const collections: Collection[] = [
    {
        id: 'all',
        name: 'All',
        description: 'Toutes les créations et inspirations',
    },
    {
        id: 'originals',
        name: 'Love & Faith',
        description: 'Créations originales Love & Faith',
    },
    {
        id: 'anime',
        name: 'Love in Anime',
        description: 'L\'amour à travers l\'animation japonaise',
    },
    {
        id: 'comics',
        name: 'Love in Comics',
        description: 'L\'amour dans les comics',
    },
];

export const galleryImages: GalleryImage[] = [
    // Love & Faith Originals
    {
        id: 'lf-001',
        src: lf1,
        title: 'Love & Faith',
        emotionalTag: 'faith',
        collection: 'originals',
        aspectRatio: 1.5,
    },
    {
        id: 'lf-002',
        src: lf2,
        title: 'For You',
        emotionalTag: 'devotion',
        collection: 'originals',
        aspectRatio: 1.4,
    },
    {
        id: 'lf-003',
        src: lf3,
        title: 'For Us',
        emotionalTag: 'connection',
        collection: 'originals',
        aspectRatio: 1.6,
    },
    {
        id: 'lf-004',
        src: lf4,
        title: 'Forever',
        emotionalTag: 'eternal',
        collection: 'originals',
        aspectRatio: 1.3,
    },
    {
        id: 'lf-005',
        src: lf5,
        title: 'Divine Love',
        emotionalTag: 'spiritual',
        collection: 'originals',
        aspectRatio: 1.5,
    },
    {
        id: 'lf-006',
        src: lf6,
        title: 'Sacred Bond',
        emotionalTag: 'unity',
        collection: 'originals',
        aspectRatio: 1.4,
    },
    {
        id: 'lf-007',
        src: lf7,
        title: 'Pure Heart',
        emotionalTag: 'purity',
        collection: 'originals',
        aspectRatio: 1.6,
    },
    {
        id: 'lf-008',
        src: lf8,
        title: 'Eternal Promise',
        emotionalTag: 'commitment',
        collection: 'originals',
        aspectRatio: 1.5,
    },
    {
        id: 'lf-009',
        src: lf9,
        title: 'Infinite Love',
        emotionalTag: 'infinity',
        collection: 'originals',
        aspectRatio: 1.4,
    },
    {
        id: 'lf-010',
        src: lf10,
        title: 'For Always',
        emotionalTag: 'forever',
        collection: 'originals',
        aspectRatio: 1.5,
    },
    {
        id: 'lf-011',
        src: lf11,
        title: 'Love is Better When it Hurts',
        emotionalTag: 'bittersweet',
        collection: 'originals',
        aspectRatio: 1.6,
    },

    // Love in Anime
    {
        id: 'anime-001',
        src: anime1,
        title: 'Dragon Ball Love',
        source: 'Dragon Ball',
        emotionalTag: 'devotion',
        collection: 'anime',
        aspectRatio: 1.4,
    },
    {
        id: 'anime-002',
        src: anime2,
        title: 'Goku & Chi-Chi',
        source: 'Dragon Ball',
        emotionalTag: 'family',
        collection: 'anime',
        aspectRatio: 1.5,
    },
    {
        id: 'anime-003',
        src: anime3,
        title: 'Vegeta & Bulma',
        source: 'Dragon Ball',
        emotionalTag: 'growth',
        collection: 'anime',
        aspectRatio: 1.3,
    },
    {
        id: 'anime-004',
        src: anime4,
        title: 'Vinsmoke Sanji',
        source: 'One Piece',
        emotionalTag: 'romance',
        collection: 'anime',
        aspectRatio: 1.6,
    },
    {
        id: 'anime-005',
        src: anime5,
        title: 'Anime Love',
        emotionalTag: 'passion',
        collection: 'anime',
        aspectRatio: 1.4,
    },
    {
        id: 'anime-006',
        src: anime6,
        title: 'Tender Moments',
        emotionalTag: 'tenderness',
        collection: 'anime',
        aspectRatio: 1.5,
    },
    {
        id: 'anime-007',
        src: anime7,
        title: 'Eternal Bond',
        emotionalTag: 'connection',
        collection: 'anime',
        aspectRatio: 1.4,
    },
    {
        id: 'anime-008',
        src: anime8,
        title: 'Love Story',
        emotionalTag: 'romance',
        collection: 'anime',
        aspectRatio: 1.6,
    },
    {
        id: 'anime-009',
        src: anime9,
        title: 'Together Forever',
        emotionalTag: 'unity',
        collection: 'anime',
        aspectRatio: 1.3,
    },
    {
        id: 'anime-010',
        src: anime10,
        title: 'Anime Wallpaper',
        emotionalTag: 'aesthetic',
        collection: 'anime',
        aspectRatio: 1.5,
    },

    // Love in Comics
    {
        id: 'comics-001',
        src: comics1,
        title: 'Harley & Joker',
        source: 'DC Comics',
        emotionalTag: 'chaos',
        collection: 'comics',
        aspectRatio: 1.5,
    },
    {
        id: 'comics-002',
        src: comics2,
        title: 'Spider-Man',
        source: 'Marvel',
        emotionalTag: 'heroic',
        collection: 'comics',
        aspectRatio: 1.4,
    },
    {
        id: 'comics-003',
        src: comics3,
        title: 'Spider-Man & Hello Kitty',
        source: 'Marvel',
        emotionalTag: 'playful',
        collection: 'comics',
        aspectRatio: 1.6,
    },
    {
        id: 'comics-004',
        src: comics4,
        title: 'Comic Love',
        emotionalTag: 'passion',
        collection: 'comics',
        aspectRatio: 1.3,
    },
    {
        id: 'comics-005',
        src: comics5,
        title: 'Superhero Romance',
        emotionalTag: 'strength',
        collection: 'comics',
        aspectRatio: 1.5,
    },
    {
        id: 'comics-006',
        src: comics6,
        title: 'Epic Love',
        emotionalTag: 'epic',
        collection: 'comics',
        aspectRatio: 1.4,
    },
    {
        id: 'comics-007',
        src: comics7,
        title: 'Heroes in Love',
        emotionalTag: 'courage',
        collection: 'comics',
        aspectRatio: 1.6,
    },
    {
        id: 'comics-008',
        src: comics8,
        title: 'Comic Art',
        emotionalTag: 'artistic',
        collection: 'comics',
        aspectRatio: 1.5,
    },
    {
        id: 'comics-009',
        src: comics9,
        title: 'Love & Comics',
        emotionalTag: 'joy',
        collection: 'comics',
        aspectRatio: 1.4,
    },
];
