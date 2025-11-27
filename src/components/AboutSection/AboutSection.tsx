/**
 * About Section Component
 * Two-column layout with company information and featured image
 */

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const aboutStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#FFFFFF',
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8, lg: 10 },
    },
    topSection: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6, lg: 8 },
        alignItems: 'center',
        mb: { xs: 6, md: 10 },
    },
    leftColumn: {
        flex: { md: '0 0 45%' },
        maxWidth: { md: '45%' },
    },
    rightColumn: {
        flex: { md: '0 0 55%' },
        maxWidth: { md: '55%' },
        width: '100%',
    },
    sectionLabel: {
        display: 'inline-block',
        border: '1px solid #2D2D2D',
        borderRadius: '20px',
        padding: '8px 16px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#2D2D2D',
        fontWeight: 400,
        mb: { xs: 2, md: 3 },
    },
    heading: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '36px', sm: '48px', md: '56px' },
        fontWeight: 800,
        lineHeight: 1.1,
        mb: { xs: 2, md: 3 },
    },
    headingDark: {
        color: '#2D2D2D',
    },
    headingGold: {
        color: '#CE9443',
    },
    description: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '15px', md: '16px' },
        lineHeight: 1.65,
        maxWidth: '400px',
        mb: { xs: 3, md: 4 },
    },
    descriptionEmphasis: {
        color: '#2D2D2D',
        fontWeight: 500,
    },
    descriptionNormal: {
        color: '#979797',
        fontWeight: 400,
    },
    consultationButton: {
        backgroundColor: '#2D2D2D',
        color: '#FFFFFF',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: '30px',
        padding: '12px 20px 12px 24px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        '&:hover': {
            backgroundColor: '#1A1A1A',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '18px',
            backgroundColor: '#FFFFFF',
            color: '#2D2D2D',
            borderRadius: '50%',
            padding: '4px',
            width: '24px',
            height: '24px',
        },
    },
    imageContainer: {
        position: 'relative',
        borderRadius: { xs: '20px', md: '25px' },
        overflow: 'hidden',
        width: '100%',
        paddingTop: '75%',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    logoOverlay: {
        position: 'absolute',
        top: { xs: '15px', md: '20px' },
        right: { xs: '15px', md: '20px' },
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '12px',
        color: '#FFFFFF',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: '20px',
    },
    featureTags: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    featureTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '20px',
        padding: '10px 20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#FFFFFF',
        fontWeight: 500,
    },
    statementSection: {
        mt: { xs: 6, md: 10 },
        mb: { xs: 6, md: 10 },
    },
    statementText: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '24px', sm: '32px', md: '38px' },
        lineHeight: 1.45,
        maxWidth: '1100px',
        mx: 'auto',
    },
    statementDark: {
        color: '#2D2D2D',
        fontWeight: 700,
    },
    statementGold: {
        color: '#CE9443',
        fontWeight: 700,
    },
    statementGrey: {
        color: '#979797',
        fontWeight: 400,
    },
    carouselSection: {
        mt: { xs: 4, md: 6 },
    },
    carouselHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
    },
    carouselNav: {
        display: 'flex',
        gap: '10px',
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
        },
    },
    projectCards: {
        display: 'flex',
        gap: { xs: 2, md: 3 },
        overflowX: 'auto',
        pb: 2,
        '&::-webkit-scrollbar': {
            height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#979797',
            borderRadius: '3px',
        },
    },
    projectCard: {
        position: 'relative',
        minWidth: { xs: '280px', sm: '320px', md: '360px' },
        flex: { md: '0 0 32%' },
        borderRadius: '20px',
        overflow: 'hidden',
        paddingTop: { xs: '125%', md: 0 },
        height: { xs: 'auto', md: '380px' },
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        opacity: 0,
        transform: 'translateX(-50px)',
        '&.visible': {
            opacity: 1,
            transform: 'translateX(0)',
        },
        '&:hover': {
            transform: 'translateY(-12px) scale(1.02) !important',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        },
    },
    projectImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '.projectCard:hover &': {
            transform: 'scale(1.05)',
        },
    },
    projectArrow: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
    },
    projectTitle: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '18px', md: '20px' },
        fontWeight: 700,
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        maxWidth: '70%',
    },
    projectDescription: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: 'rgba(255, 255, 255, 0.9)',
        textShadow: '0 1px 5px rgba(0,0,0,0.5)',
        maxWidth: '70%',
    },
};

interface AboutSectionProps {
    mainImage?: string;
    projectImages?: { id: number; title: string; description: string; image: string }[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({
    mainImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    projectImages = [
        {
            id: 1,
            title: 'AURORA RESIDENCE',
            description: 'A futuristic private residence where organic curves meet cutting-edge minimalism.',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        },
        {
            id: 2,
            title: 'MODERN ESTATE',
            description: 'Contemporary design meets functional luxury in this stunning property.',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        },
        {
            id: 3,
            title: 'VISTA HEIGHTS',
            description: 'Elevated living with panoramic views and sophisticated architecture.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        },
    ],
}) => {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Get all card elements
                        const cards = entry.target.querySelectorAll('.projectCard');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 150); // Stagger by 150ms
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
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

    return (
        <Box sx={aboutStyles.section}>
            <Container maxWidth='xl'>
                {/* Top Section - Two Columns */}
                <Box sx={aboutStyles.topSection}>
                    {/* Left Column - Text Content */}
                    <Box sx={aboutStyles.leftColumn}>
                        <Typography sx={aboutStyles.sectionLabel}>
                            01 - about us
                        </Typography>

                        <Typography sx={aboutStyles.heading}>
                            <Box component='span' sx={aboutStyles.headingDark}>
                                WHO{' '}
                            </Box>
                            <Box component='span' sx={aboutStyles.headingGold}>
                                WE ARE
                            </Box>
                        </Typography>

                        <Box sx={aboutStyles.description}>
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                About Premier Housing & Developments Ltd.
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Since our inception in 1995,
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Premier Housing & Developments Ltd.
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionNormal}>
                                has successfully completed numerous residential apartment projects that stand as symbols of trust, craftsmanship, and long-lasting value. We are a proud member of the
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Real Estate & Housing Association of Bangladesh (REHAB) since 2008,
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionNormal}>
                                contributing actively to committees including Customer Service & Mediation, Accounts & Audit, and Member Welfare.
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Our mission
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionNormal}>
                                is to create enduring value and deliver luxurious, comfortable homes for generations to come.
                            </Typography>
                        </Box>

                        <Button sx={aboutStyles.consultationButton}>
                            Consultation
                            <ArrowOutwardIcon />
                        </Button>
                    </Box>

                    {/* Right Column - Image */}
                    <Box sx={aboutStyles.rightColumn}>
                        <Box sx={aboutStyles.imageContainer}>
                            <Box
                                component='img'
                                src={mainImage}
                                alt='Premier Housing Architecture'
                                sx={aboutStyles.image}
                            />

                            {/* Logo Overlay */}
                            <Box sx={aboutStyles.logoOverlay}>PH</Box>

                            {/* Feature Tags */}
                            <Box sx={aboutStyles.featureTags}>
                                <Typography sx={aboutStyles.featureTag}>Security</Typography>
                                <Typography sx={aboutStyles.featureTag}>Innovation</Typography>
                                <Typography sx={aboutStyles.featureTag}>Practicality</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Middle Section - Statement */}
                <Box sx={aboutStyles.statementSection}>
                    <Typography sx={aboutStyles.statementText}>
                        <Box component='span' sx={aboutStyles.statementDark}>
                            Premier Housing combines decades of experience with innovative design{' '}
                        </Box>
                        <Box component='span' sx={aboutStyles.statementGold}>
                            to set a new standard in residential living.
                        </Box>{' '}
                        <Box component='span' sx={aboutStyles.statementDark}>
                            Our commitment to quality redefines how families{' '}
                        </Box>
                        <Box component='span' sx={aboutStyles.statementGold}>
                            experience home{' '}
                        </Box>
                        <Box component='span' sx={aboutStyles.statementDark}>
                            — elevating{' '}
                        </Box>
                        <Box component='span' sx={aboutStyles.statementGold}>
                            trust, comfort, and craftsmanship{' '}
                        </Box>
                        <Box component='span' sx={aboutStyles.statementDark}>
                            into one seamless experience.
                        </Box>
                    </Typography>
                </Box>

                {/* Bottom Section - Project Carousel */}
                <Box sx={aboutStyles.carouselSection}>
                    {/* Carousel Header */}
                    <Box sx={aboutStyles.carouselHeader}>
                        {/* Navigation Arrows */}
                        <Box sx={aboutStyles.carouselNav}>
                            <Button sx={aboutStyles.navButton}>‹</Button>
                            <Button sx={aboutStyles.navButton}>›</Button>
                        </Box>

                        {/* Consultation Button */}
                        <Button sx={aboutStyles.consultationButton}>
                            Consultation
                            <ArrowOutwardIcon />
                        </Button>
                    </Box>

                    {/* Project Cards */}
                    <Box ref={cardsRef} sx={aboutStyles.projectCards}>
                        {projectImages.map((project) => (
                            <Box key={project.id} sx={aboutStyles.projectCard} className='projectCard'>
                                <Box
                                    component='img'
                                    src={project.image}
                                    alt={project.title}
                                    sx={aboutStyles.projectImage}
                                />

                                {/* Arrow Icon */}
                                <Box sx={aboutStyles.projectArrow}>
                                    <ArrowOutwardIcon sx={{ fontSize: '18px' }} />
                                </Box>

                                {/* Project Title */}
                                <Typography sx={aboutStyles.projectTitle}>
                                    {project.title}
                                </Typography>

                                {/* Project Description */}
                                <Typography sx={aboutStyles.projectDescription}>
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

export default AboutSection;
