/**
 * Project Data
 * Static project data for all Premier Housing projects
 */

import type { Project } from '../types';

export const projectsData: Project[] = [
    // HANDOVER PROJECTS
    {
        id: 1,
        title: 'AROZA HOME',
        description:
            'Completed residential project delivering modern living spaces with quality finishes and thoughtful design.',
        category: 'HANDOVER',
        location: 'Uttara',
        images: [
            {
                url: '/Projects/Handover/Aroza Home, Uttara.jpg',
                alt: 'Aroza Home - Uttara',
                isPrimary: true,
            },
        ],
        features: [
            'Modern architectural design',
            'Quality construction materials',
            'Prime location in Uttara',
            'Successfully completed and handed over',
        ],
    },
    {
        id: 2,
        title: 'PREMIER ISHAQUE GARDEN',
        description:
            'Exclusive residential project in the heart of Gulshan, combining luxury with comfortable living.',
        category: 'HANDOVER',
        location: 'Niketon, Gulshan',
        images: [
            {
                url: '/Projects/Handover/Premier Ishaque Garden, Niketon, Gulshan.jpg',
                alt: 'Premier Ishaque Garden - Niketon, Gulshan',
                isPrimary: true,
            },
        ],
        features: [
            'Premium location in Niketon',
            'Luxury residential living',
            'Modern amenities and facilities',
            'Completed with excellent finishing',
        ],
    },
    {
        id: 3,
        title: 'PRIME RAIYAN',
        description:
            'Premium residential development showcasing contemporary architecture and modern amenities.',
        category: 'HANDOVER',
        location: 'Niketon, Gulshan',
        images: [
            {
                url: '/Projects/Handover/Prime Raiyan, Niketon, Gulshan.jpg',
                alt: 'Prime Raiyan - Niketon, Gulshan',
                isPrimary: true,
            },
        ],
        features: [
            'Contemporary architectural design',
            'Prime Gulshan location',
            'Modern infrastructure',
            'Successfully delivered project',
        ],
    },
    {
        id: 4,
        title: 'PRIME RAJ',
        description: 'Sophisticated residential project designed for upscale living in a prime location.',
        category: 'HANDOVER',
        location: 'Niketon, Gulshan',
        images: [
            {
                url: '/Projects/Handover/Prime Raj, Niketon, Gulshan.jpg',
                alt: 'Prime Raj - Niketon, Gulshan',
                isPrimary: true,
            },
        ],
        features: [
            'Sophisticated design elements',
            'Upscale residential amenities',
            'Strategic Niketon location',
            'Quality assured construction',
        ],
    },

    // ONGOING PROJECTS
    {
        id: 5,
        title: 'PREMIER FAHMIDA GREEN',
        description:
            'Exclusive residential project in Bashundhara R/A with natural light, ventilation, and modern amenities near top universities.',
        category: 'ONGOING',
        location: 'House no-265, Road-13, Block-C, Bashundhara R/A',
        label: 'GREEN',
        images: [
            {
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/0000.png',
                alt: 'Premier Fahmida Green - Main Perspective',
                isPrimary: true,
            },
            {
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/001.jpg',
                alt: 'Premier Fahmida Green - View 1',
            },
            {
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/002.jpg',
                alt: 'Premier Fahmida Green - View 2',
            },
            {
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/003.jpg',
                alt: 'Premier Fahmida Green - View 3',
            },
            {
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/004.png',
                alt: 'Premier Fahmida Green - View 4',
            },
            {
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/005.png',
                alt: 'Premier Fahmida Green - View 5',
            },
        ],
        documents: [
            {
                name: 'Building Features',
                url: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/Premier Housing BUILDING FEATURE.pdf',
                type: 'pdf',
            },
        ],
        features: [
            'Located near NSU, IUB, AIUB, Aga Khan Academy',
            'Full-height windows for natural light and ventilation',
            'Double height entrance with natural sunlight',
            'Clean and spacious floor plans',
            'Privacy, comfort, and security focused design',
            'Quality amenities and inhabitable environment',
            'Excellent communication and modern amenities nearby',
        ],
    },
    {
        id: 6,
        title: 'PREMIER MAYA NIBASH',
        description:
            'Modern residential project in Lalmatia offering spacious living with full-height windows and sophisticated design.',
        category: 'ONGOING',
        location: 'House no-2/6, Block-E, Lalmatia',
        label: 'MAYA',
        images: [
            {
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/PREMIER MAYA NIBASH 27.10.png',
                alt: 'Premier Maya Nibash - Main Perspective',
                isPrimary: true,
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash.jpeg',
                alt: 'Premier Maya Nibash - View 1',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash1.jpeg',
                alt: 'Premier Maya Nibash - View 2',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash2.jpeg',
                alt: 'Premier Maya Nibash - View 3',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash3.jpeg',
                alt: 'Premier Maya Nibash - View 4',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash4.jpeg',
                alt: 'Premier Maya Nibash - View 5',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/001.png',
                alt: 'Premier Maya Nibash - Lalmatia View 1',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/002.png',
                alt: 'Premier Maya Nibash - Lalmatia View 2',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/003.png',
                alt: 'Premier Maya Nibash - Lalmatia View 3',
            },
            {
                url: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/004.png',
                alt: 'Premier Maya Nibash - Lalmatia View 4',
            },
        ],
        documents: [
            {
                name: 'Building Features',
                url: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Maya nibas BUILDING FEATURE.pdf',
                type: 'pdf',
            },
        ],
        features: [
            'Near Road no-27 of Dhanmondi R/A and Satmasjid Road',
            'Close to educational institutions, hospitals, banks, shopping complexes',
            'Park, lake, and mosque within walking distance',
            'Full-height windows for natural light and ventilation',
            'Double height entrance with natural sunlight',
            'Spacious living and dining areas',
            'Structural analysis by experienced engineering firm',
            'Privacy, comfort, and security focused design',
        ],
    },
    {
        id: 7,
        title: 'PREMIER HOMES',
        description: 'Contemporary residential development featuring multiple perspectives with elegant architectural design.',
        category: 'ONGOING',
        images: [
            {
                url: '/Projects/Ongoing/Premier Homes/North.jpg',
                alt: 'Premier Homes - North View',
                isPrimary: true,
            },
            {
                url: '/Projects/Ongoing/Premier Homes/North 1.jpg',
                alt: 'Premier Homes - North View 1',
            },
            {
                url: '/Projects/Ongoing/Premier Homes/North 2.jpg',
                alt: 'Premier Homes - North View 2',
            },
            {
                url: '/Projects/Ongoing/Premier Homes/North 3.jpg',
                alt: 'Premier Homes - North View 3',
            },
            {
                url: '/Projects/Ongoing/Premier Homes/South.jpg',
                alt: 'Premier Homes - South View',
            },
            {
                url: '/Projects/Ongoing/Premier Homes/South 2.jpg',
                alt: 'Premier Homes - South View 2',
            },
            {
                url: '/Projects/Ongoing/Premier Homes/South 3.jpg',
                alt: 'Premier Homes - South View 3',
            },
            {
                url: '/Projects/Ongoing/Premier Homes/Gate.jpg',
                alt: 'Premier Homes - Gate View',
            },
        ],
        features: [
            'Multiple architectural perspectives',
            'Contemporary design approach',
            'Elegant residential spaces',
            'Modern construction standards',
        ],
    },
    {
        id: 8,
        title: 'PREMIER ZAYFA MANOR',
        description: 'Exclusive residential manor combining traditional elegance with modern comfort.',
        category: 'ONGOING',
        images: [
            {
                url: '/Projects/Ongoing/Premier Zayfa Manor/Premier Zayfa Manor.jpeg',
                alt: 'Premier Zayfa Manor',
                isPrimary: true,
            },
        ],
        features: [
            'Exclusive manor design',
            'Traditional elegance meets modern comfort',
            'Premium residential development',
            'Quality construction standards',
        ],
    },
];

/**
 * Get all projects or filter by category
 */
export const getProjects = (category?: string): Project[] => {
    if (!category || category === 'ALL') {
        return projectsData;
    }
    return projectsData.filter((project) => project.category === category);
};

/**
 * Get a single project by ID
 */
export const getProjectById = (id: number): Project | undefined => {
    return projectsData.find((project) => project.id === id);
};

/**
 * Get primary image for a project
 */
export const getPrimaryImage = (project: Project): string => {
    const primaryImage = project.images.find((img) => img.isPrimary);
    return primaryImage?.url || project.images[0]?.url || '';
};
