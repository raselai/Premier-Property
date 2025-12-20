/**
 * HeroSection Component (Simple with Background Image Slideshow)
 * Clean hero section with animated background image slideshow
 */

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

interface HeroSectionSimpleProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const heroImages = [
    '/Hero_Emage.jpg',
    '/Hero_Image2.jpg',
    '/Hero_Image3.jpg',
];

const heroStyles: Record<string, SxProps<Theme>> = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        pt: 0,
        mt: 0,
    },
    backgroundSlide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 1.5s ease-in-out',
        zIndex: 0,
    },
    content: {
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        textAlign: 'center',
        pb: { xs: 8, md: 12 },
        pt: 8,
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
        color: '#FFFFFF',
        mb: 3,
        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
    },
    subtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.125rem', sm: '1.375rem', md: '1.75rem' },
        color: '#FFFFFF',
        mb: 5,
        maxWidth: 800,
        mx: 'auto',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        fontWeight: 300,
        letterSpacing: '0.01em',
    },
    button: {
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        px: { xs: 4, md: 6 },
        py: { xs: 1.5, md: 2 },
        fontSize: { xs: '1.125rem', md: '1.375rem' },
        borderRadius: '50px',
        textTransform: 'none',
        border: '2px solid #0F5132',
        boxShadow: '0 8px 30px rgba(15, 81, 50, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#0F5132',
            borderColor: '#0F5132',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 40px rgba(15, 81, 50, 0.6)',
        },
        '&:active': {
            transform: 'translateY(-1px)',
        },
    },
    statsContainer: {
        position: { xs: 'relative', md: 'absolute' },
        right: { md: '40px', lg: '50px' },
        bottom: { md: 120 },
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 3,
        mx: { xs: 'auto', md: 0 },
        mb: { xs: 4, md: 0 },
        alignItems: { xs: 'center', md: 'stretch' },
    },
    statsCard: {
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        padding: { xs: '20px', md: '28px' },
        width: { xs: '200px', sm: '240px', md: '260px' },
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    statsNumber: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 800,
        fontSize: { xs: '2.5rem', md: '3rem' },
        color: '#FFFFFF',
        lineHeight: 1,
        mb: 1,
    },
    statsText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '0.875rem', md: '0.9375rem' },
        color: '#FFFFFF',
        lineHeight: 1.4,
        fontWeight: 300,
    },
};

export const HeroSectionSimple: React.FC<HeroSectionSimpleProps> = ({
    subtitle = 'House and Development Ltd',
    buttonText = "Let's Talk",
    onButtonClick,
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={heroStyles.container}>
            {/* Background Image Slideshow */}
            {heroImages.map((image, index) => (
                <Box
                    key={image}
                    sx={{
                        ...heroStyles.backgroundSlide,
                        backgroundImage: `url(${image})`,
                        opacity: currentImageIndex === index ? 1 : 0,
                    }}
                />
            ))}
            {/* Statistics Cards - Bottom Right on Desktop (Outside Container) */}
            <Box sx={{ ...heroStyles.statsContainer, display: { xs: 'none', md: 'flex' } }}>
                {/* Years of Experience Card */}
                <Box sx={heroStyles.statsCard}>
                    <Typography sx={heroStyles.statsNumber}>25+</Typography>
                    <Typography sx={heroStyles.statsText}>
                        Years of architectural
                        <br />
                        excellence and innovation
                    </Typography>
                </Box>

                {/* Projects Completed Card */}
                <Box sx={heroStyles.statsCard}>
                    <Typography sx={heroStyles.statsNumber}>549</Typography>
                    <Typography sx={heroStyles.statsText}>
                        Projects implemented
                        <br />
                        worldwide with excellence
                    </Typography>
                </Box>
            </Box>

            {/* Main Content */}
            <Container maxWidth='lg' sx={heroStyles.content}>
                <Box sx={{ width: '100%' }}>
                    {/* Statistics Cards - Mobile Only (Inside Container) */}
                    <Box sx={{ ...heroStyles.statsContainer, display: { xs: 'flex', md: 'none' } }}>
                        {/* Years of Experience Card */}
                        <Box sx={heroStyles.statsCard}>
                            <Typography sx={heroStyles.statsNumber}>25+</Typography>
                            <Typography sx={heroStyles.statsText}>
                                Years of architectural
                                <br />
                                excellence and innovation
                            </Typography>
                        </Box>

                        {/* Projects Completed Card */}
                        <Box sx={heroStyles.statsCard}>
                            <Typography sx={heroStyles.statsNumber}>549</Typography>
                            <Typography sx={heroStyles.statsText}>
                                Projects implemented
                                <br />
                                worldwide with excellence
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSectionSimple;
