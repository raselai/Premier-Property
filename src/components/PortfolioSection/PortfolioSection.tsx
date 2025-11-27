/**
 * Portfolio Section Component
 * Light background with filter tabs and horizontal project carousel
 */

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const portfolioStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#FAFAFA',
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8, lg: 10 },
    },
    sectionLabel: {
        display: 'inline-block',
        border: '1px solid #979797',
        borderRadius: '20px',
        padding: '8px 16px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#979797',
        fontWeight: 400,
        mb: { xs: 2, md: 3 },
    },
    heading: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '32px', sm: '44px', md: '56px' },
        fontWeight: 800,
        lineHeight: 1.15,
        textAlign: 'center',
        mb: { xs: 3, md: 5 },
        maxWidth: '1100px',
        mx: 'auto',
    },
    headingDark: {
        color: '#2D2D2D',
    },
    headingGold: {
        color: '#CE9443',
    },
    filterRow: {
        display: 'flex',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        gap: { xs: 1.5, md: 1.5 },
        justifyContent: 'center',
        alignItems: 'center',
        mb: { xs: 4, md: 6 },
    },
    arrowsGroup: {
        display: 'flex',
        gap: '10px',
        mr: { md: 2 },
    },
    navButton: {
        minWidth: '45px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        border: '1px solid #979797',
        backgroundColor: 'transparent',
        color: '#2D2D2D',
        '&:hover': {
            backgroundColor: 'rgba(45, 45, 45, 0.05)',
            borderColor: '#2D2D2D',
        },
    },
    filterTab: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '13px', md: '14px' },
        fontWeight: 500,
        textTransform: 'uppercase',
        borderRadius: '25px',
        padding: { xs: '10px 20px', md: '12px 24px' },
        border: '1px solid #979797',
        backgroundColor: 'transparent',
        color: '#2D2D2D',
        whiteSpace: 'nowrap',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#2D2D2D',
            backgroundColor: 'rgba(45, 45, 45, 0.02)',
        },
        '&.active': {
            backgroundColor: '#2D2D2D',
            color: '#FFFFFF',
            borderColor: '#2D2D2D',
        },
    },
    carouselContainer: {
        position: 'relative',
        mt: { xs: 4, md: 5 },
    },
    carouselWrapper: {
        display: 'flex',
        gap: { xs: 2, md: 3 },
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        pb: 2,
        '&::-webkit-scrollbar': {
            height: '6px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#E0E0E0',
            borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#979797',
            borderRadius: '3px',
            '&:hover': {
                backgroundColor: '#2D2D2D',
            },
        },
    },
    projectCard: {
        minWidth: { xs: '300px', sm: '340px', md: '380px', lg: '420px' },
        flex: { md: '0 0 32%' },
        cursor: 'pointer',
        transition: 'transform 0.3s ease, opacity 0.6s ease',
        opacity: 0,
        transform: 'translateY(30px)',
        '&.visible': {
            opacity: 1,
            transform: 'translateY(0)',
        },
        '&:hover': {
            transform: 'translateY(-8px)',
            '& .cardImage': {
                transform: 'scale(1.05)',
            },
        },
    },
    cardImageContainer: {
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        width: '100%',
        height: { xs: '240px', sm: '280px', md: '320px' },
        backgroundColor: '#E0E0E0',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease',
    },
    cardArrow: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2D2D2D',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#2D2D2D',
            color: '#FFFFFF',
            transform: 'scale(1.1)',
        },
    },
    projectLabel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '18px', md: '20px' },
        fontWeight: 600,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
    },
    cardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '15px', md: '17px' },
        fontWeight: 700,
        color: '#2D2D2D',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        mt: { xs: 2, md: 2.5 },
        mb: 1,
    },
    cardDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '13px', md: '14px' },
        color: '#979797',
        lineHeight: 1.6,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
};

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    label?: string;
}

interface PortfolioSectionProps {
    projects?: Project[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
    projects = [
        {
            id: 1,
            title: "PRIVATE RESIDENCE 'HORIZON'",
            description: 'A futuristic villa with panoramic glazing and eco-friendly design solutions.',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            category: 'HOUSE DESIGN',
        },
        {
            id: 2,
            title: "OFFICE SPACE 'NOVA'",
            description: 'Minimalist design for a workspace that inspires productivity and innovation.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            category: 'INTERIOR DESIGN',
            label: 'NOVA',
        },
        {
            id: 3,
            title: "RESIDENTIAL COMPLEX 'SKYLINE'",
            description: 'A conceptual project combining comfort, density, and green zones.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            category: 'PUBLIC SPACES',
        },
        {
            id: 4,
            title: "RETAIL CENTER 'PRISM'",
            description: 'A contemporary shopping destination blending architecture with experience.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
            category: 'PUBLIC SPACES',
        },
        {
            id: 5,
            title: "LUXURY APARTMENT 'AZURE'",
            description: 'Premium living spaces with breathtaking views and modern amenities.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            category: 'HOUSE DESIGN',
        },
        {
            id: 6,
            title: "CORPORATE HQ 'VERTEX'",
            description: 'Headquarters design reflecting brand identity through architectural excellence.',
            image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
            category: '3D VISUALIZATION',
        },
    ],
}) => {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const cardsRef = useRef<HTMLDivElement>(null);

    const filters = ['ALL', 'HOUSE DESIGN', 'INTERIOR DESIGN', 'PUBLIC SPACES', '3D VISUALIZATION'];

    const filteredProjects =
        activeFilter === 'ALL'
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.projectCard');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px',
            }
        );

        if (cardsRef.current) {
            observer.observe(cardsRef.current);
        }

        return () => {
            if (cardsRef.current) {
                observer.unobserve(cardsRef.current);
            }
        };
    }, []);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (cardsRef.current) {
            const scrollAmount = 400;
            cardsRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box sx={portfolioStyles.section}>
            <Container maxWidth='xl'>
                {/* Section Label */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={portfolioStyles.sectionLabel}>03 - portfolio</Typography>
                </Box>

                {/* Heading */}
                <Typography sx={portfolioStyles.heading}>
                    <Box component='span' sx={portfolioStyles.headingDark}>
                        PROJECTS{' '}
                    </Box>
                    <Box component='span' sx={portfolioStyles.headingGold}>
                        WHERE MODERN
                    </Box>
                    <br />
                    <Box component='span' sx={portfolioStyles.headingGold}>
                        AESTHETICS{' '}
                    </Box>
                    <Box component='span' sx={portfolioStyles.headingDark}>
                        MEET FUNCTIONALITY
                    </Box>
                </Typography>

                {/* Filter Row */}
                <Box sx={portfolioStyles.filterRow}>
                    {/* Carousel Arrows */}
                    <Box sx={portfolioStyles.arrowsGroup}>
                        <Button sx={portfolioStyles.navButton} onClick={() => scrollCarousel('left')}>
                            ‹
                        </Button>
                        <Button sx={portfolioStyles.navButton} onClick={() => scrollCarousel('right')}>
                            ›
                        </Button>
                    </Box>

                    {/* Filter Tabs */}
                    {filters.map((filter) => (
                        <Button
                            key={filter}
                            sx={portfolioStyles.filterTab}
                            className={activeFilter === filter ? 'active' : ''}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </Button>
                    ))}
                </Box>

                {/* Project Cards Carousel */}
                <Box sx={portfolioStyles.carouselContainer}>
                    <Box ref={cardsRef} sx={portfolioStyles.carouselWrapper}>
                        {filteredProjects.map((project) => (
                            <Box
                                key={project.id}
                                sx={portfolioStyles.projectCard}
                                className='projectCard'
                            >
                                <Box sx={portfolioStyles.cardImageContainer}>
                                    {/* @ts-ignore - MUI Box with component="img" type limitation */}
                                    <Box
                                        component='img'
                                        src={project.image}
                                        alt={project.title}
                                        sx={portfolioStyles.cardImage}
                                        className='cardImage'
                                    />

                                    {/* Arrow Button */}
                                    <Box sx={portfolioStyles.cardArrow}>
                                        <ArrowOutwardIcon sx={{ fontSize: '18px' }} />
                                    </Box>

                                    {/* Optional Project Label */}
                                    {project.label && (
                                        <Typography sx={portfolioStyles.projectLabel}>
                                            {project.label}
                                        </Typography>
                                    )}
                                </Box>

                                <Typography sx={portfolioStyles.cardTitle}>{project.title}</Typography>

                                <Typography sx={portfolioStyles.cardDescription}>
                                    {project.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default PortfolioSection;
