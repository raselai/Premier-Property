/**
 * Portfolio Section Component
 * Light background with filter tabs and horizontal project carousel
 */

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from '@tanstack/react-router';

const portfolioStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#FAFAFA',
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8, lg: 10 },
    },
    sectionLabel: {
        display: 'inline-block',
        backgroundColor: '#0F5132',
        border: '1px solid #0F5132',
        borderRadius: '20px',
        padding: '8px 16px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#FFFFFF',
        fontWeight: 400,
        mb: { xs: 2, md: 3 },
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#0F5132',
        },
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
        color: '#0F5132',
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
        border: '1px solid #0F5132',
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#0F5132',
            borderColor: '#0F5132',
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
            borderColor: '#0F5132',
            backgroundColor: 'rgba(15, 81, 50, 0.05)',
        },
        '&.active': {
            backgroundColor: '#0F5132',
            color: '#FFFFFF',
            borderColor: '#0F5132',
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
    location?: string;
}

interface PortfolioSectionProps {
    projects?: Project[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
    projects = [
        // HANDOVER PROJECTS
        {
            id: 1,
            title: 'AROZA HOME',
            description: 'Completed residential project delivering modern living spaces with quality finishes and thoughtful design.',
            image: '/Projects/Handover/Aroza Home, Uttara.jpg',
            category: 'HANDOVER',
            location: 'Uttara',
        },
        {
            id: 2,
            title: 'PREMIER ISHAQUE GARDEN',
            description: 'Exclusive residential project in the heart of Gulshan, combining luxury with comfortable living.',
            image: '/Projects/Handover/Premier Ishaque Garden, Niketon, Gulshan.jpg',
            category: 'HANDOVER',
            location: 'Niketon, Gulshan',
        },
        {
            id: 3,
            title: 'PRIME RAIYAN',
            description: 'Premium residential development showcasing contemporary architecture and modern amenities.',
            image: '/Projects/Handover/Prime Raiyan, Niketon, Gulshan.jpg',
            category: 'HANDOVER',
            location: 'Niketon, Gulshan',
        },
        {
            id: 4,
            title: 'PRIME RAJ',
            description: 'Sophisticated residential project designed for upscale living in a prime location.',
            image: '/Projects/Handover/Prime Raj, Niketon, Gulshan.jpg',
            category: 'HANDOVER',
            location: 'Niketon, Gulshan',
        },
        // ONGOING PROJECTS
        {
            id: 5,
            title: 'PREMIER FAHMIDA GREEN',
            description: 'Exclusive residential project in Bashundhara R/A with natural light, ventilation, and modern amenities near top universities.',
            image: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/0000.png',
            category: 'ONGOING',
            location: 'Bashundhara R/A',
            label: 'GREEN',
        },
        {
            id: 6,
            title: 'PREMIER MAYA NIBASH',
            description: 'Modern residential project in Lalmatia offering spacious living with full-height windows and sophisticated design.',
            image: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/PREMIER MAYA NIBASH 27.10.png',
            category: 'ONGOING',
            location: 'Lalmatia',
            label: 'MAYA',
        },
        {
            id: 7,
            title: 'PREMIER HOMES',
            description: 'Contemporary residential development featuring multiple perspectives with elegant architectural design.',
            image: '/Projects/Ongoing/Premier Homes/North.jpg',
            category: 'ONGOING',
        },
        {
            id: 8,
            title: 'PREMIER ZAYFA MANOR',
            description: 'Upcoming exclusive residential manor combining traditional elegance with modern comfort.',
            image: '/Projects/Ongoing/Premier Zayfa Manor/Premier Zayfa Manor.jpeg',
            category: 'ONGOING',
        },
    ],
}) => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('ALL');
    const cardsRef = useRef<HTMLDivElement>(null);

    const filters = ['ALL', 'HANDOVER', 'ONGOING', 'UPCOMING'];

    const handleProjectClick = (projectId: number) => {
        navigate({ to: `/projects/${projectId}` });
    };

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
                                onClick={() => handleProjectClick(project.id)}
                            >
                                <Box sx={portfolioStyles.cardImageContainer}>
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

                                <Typography sx={portfolioStyles.cardTitle}>
                                    {project.title}
                                    {project.location && (
                                        <Box
                                            component='span'
                                            sx={{
                                                display: 'block',
                                                fontSize: { xs: '12px', md: '13px' },
                                                fontWeight: 500,
                                                color: '#979797',
                                                mt: 0.5,
                                                letterSpacing: '0.3px',
                                            }}
                                        >
                                            {project.location}
                                        </Box>
                                    )}
                                </Typography>

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
