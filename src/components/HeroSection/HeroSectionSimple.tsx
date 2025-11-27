/**
 * HeroSection Component (Simple with Background Image)
 * Clean hero section with background image overlay and PREMIER watermark
 */

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

interface HeroSectionSimpleProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const heroStyles: Record<string, SxProps<Theme>> = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: 'url(/Hero_Image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pt: 0,
        mt: 0,
    },
    watermark: {
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        width: '90%',
        textAlign: 'center',
        pointerEvents: 'none',
    },
    watermarkText: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 900,
        fontSize: { xs: '14vw', sm: '16vw', md: '17vw', lg: '18vw' },
        color: '#FFFFFF',
        opacity: 0.6,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        textTransform: 'uppercase',
        userSelect: 'none',
        animation: 'slowPopUp 2s ease-out forwards',
        '@keyframes slowPopUp': {
            '0%': {
                opacity: 0,
                transform: 'scale(0.9) translateY(20px)',
            },
            '100%': {
                opacity: 0.6,
                transform: 'scale(1) translateY(0)',
            },
        },
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
        backgroundColor: '#D4AF37',
        color: '#1A1A1A',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        px: { xs: 4, md: 6 },
        py: { xs: 1.5, md: 2 },
        fontSize: { xs: '1.125rem', md: '1.375rem' },
        borderRadius: '50px',
        textTransform: 'none',
        boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#E5C158',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 40px rgba(212, 175, 55, 0.6)',
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
    title: _title = 'Find Your Dream Home',
    subtitle = 'House and Development Ltd',
    buttonText = 'Browse Properties',
    onButtonClick,
}) => {
    return (
        <Box sx={heroStyles.container}>
            {/* PREMIER Watermark - Behind Content */}
            <Box sx={heroStyles.watermark}>
                <Typography sx={heroStyles.watermarkText}>
                    PREMIER
                </Typography>
            </Box>

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

            {/* Main Content - Above Watermark */}
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

                    <Typography sx={heroStyles.subtitle}>
                        {subtitle}
                    </Typography>
                    {onButtonClick && (
                        <Button
                            variant='contained'
                            size='large'
                            sx={heroStyles.button}
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </Button>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSectionSimple;
