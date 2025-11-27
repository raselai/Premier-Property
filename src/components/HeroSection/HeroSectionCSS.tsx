/**
 * HeroSection Component (CSS 3D Version)
 * Hero section with CSS 3D glass building animation
 */

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

interface HeroSectionCSSProps {
    /** Main title text */
    title?: string;
    /** Subtitle text */
    subtitle?: string;
    /** Button text */
    buttonText?: string;
    /** Button click handler */
    onButtonClick?: () => void;
}

const heroStyles: Record<string, SxProps<Theme>> = {
    container: {
        position: 'relative',
        minHeight: '90vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
        perspective: '1000px',
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        pb: '10vh',
        transformStyle: 'preserve-3d',
        animation: 'sceneRotate 40s linear infinite',
        '@keyframes sceneRotate': {
            '0%': {
                transform: 'rotateY(0deg)',
            },
            '100%': {
                transform: 'rotateY(360deg)',
            },
        },
    },
    buildingsContainer: {
        position: 'relative',
        width: '80%',
        maxWidth: '1200px',
        height: '60vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(5deg)',
    },
    overlay: {
        position: 'relative',
        zIndex: 2,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
    },
    content: {
        textAlign: 'center',
        pointerEvents: 'auto',
        py: 8,
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
        color: '#FFFFFF',
        mb: 3,
        textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #D4AF37 50%, #FFFFFF 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'fadeInUp 1s ease-out 0.5s both',
        '@keyframes fadeInUp': {
            '0%': {
                opacity: 0,
                transform: 'translateY(30px)',
            },
            '100%': {
                opacity: 1,
                transform: 'translateY(0)',
            },
        },
    },
    subtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.125rem', sm: '1.375rem', md: '1.75rem' },
        color: '#E0E0E0',
        mb: 5,
        maxWidth: 800,
        mx: 'auto',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        fontWeight: 300,
        letterSpacing: '0.01em',
        animation: 'fadeInUp 1s ease-out 0.8s both',
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
        animation: 'fadeInUp 1s ease-out 1.1s both, pulse 2s ease-in-out 2s infinite',
        '@keyframes pulse': {
            '0%, 100%': {
                boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
            },
            '50%': {
                boxShadow: '0 8px 40px rgba(212, 175, 55, 0.6)',
            },
        },
        '&:hover': {
            backgroundColor: '#E5C158',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 40px rgba(212, 175, 55, 0.6)',
        },
        '&:active': {
            transform: 'translateY(-1px)',
        },
    },
};

interface BuildingProps {
    height: number;
    width: number;
    delay: number;
    color: string;
    position: number;
}

const Building: React.FC<BuildingProps> = ({ height, width, delay, color, position }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const buildingStyles: SxProps<Theme> = {
        width: `${width}px`,
        height: isVisible ? `${height}%` : '0%',
        background: `linear-gradient(135deg,
            rgba(212, 175, 55, 0.15) 0%,
            rgba(212, 175, 55, 0.05) 50%,
            rgba(212, 175, 55, 0.15) 100%)`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${color}40`,
        borderBottom: 'none',
        position: 'relative',
        transition: 'height 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        transform: `translateX(${position}px) translateZ(${Math.random() * 50}px)`,
        boxShadow: `
            0 0 20px ${color}20,
            inset 0 0 20px ${color}10,
            0 -10px 30px ${color}30
        `,
        animation: 'float 3s ease-in-out infinite',
        animationDelay: `${delay}s`,
        '@keyframes float': {
            '0%, 100%': {
                transform: `translateX(${position}px) translateY(0) translateZ(${Math.random() * 50}px)`,
            },
            '50%': {
                transform: `translateX(${position}px) translateY(-10px) translateZ(${Math.random() * 50}px)`,
            },
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 30px,
                ${color}15 30px,
                ${color}15 31px
            )`,
            pointerEvents: 'none',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-1px',
            right: '-1px',
            height: '4px',
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 15px ${color}`,
            animation: 'glow 2s ease-in-out infinite',
            animationDelay: `${delay}s`,
            '@keyframes glow': {
                '0%, 100%': {
                    opacity: 0.5,
                },
                '50%': {
                    opacity: 1,
                },
            },
        },
    };

    return <Box sx={buildingStyles} />;
};

export const HeroSectionCSS: React.FC<HeroSectionCSSProps> = ({
    title = 'Luxury Living Redefined',
    subtitle = 'Discover extraordinary properties in the world\'s most prestigious locations',
    buttonText = 'Explore Properties',
    onButtonClick,
}) => {
    const buildings = [
        { height: 40, width: 60, delay: 0.1, color: '#A8C5E6', position: -400 },
        { height: 55, width: 70, delay: 0.3, color: '#D4AF37', position: -300 },
        { height: 45, width: 65, delay: 0.2, color: '#E6D5A8', position: -200 },
        { height: 70, width: 80, delay: 0.5, color: '#D4AF37', position: -100 },
        { height: 60, width: 75, delay: 0.4, color: '#A8C5E6', position: 0 },
        { height: 75, width: 85, delay: 0.6, color: '#D4AF37', position: 100 },
        { height: 50, width: 70, delay: 0.7, color: '#E6D5A8', position: 200 },
        { height: 65, width: 75, delay: 0.5, color: '#D4AF37', position: 300 },
        { height: 45, width: 65, delay: 0.8, color: '#A8C5E6', position: 400 },
    ];

    return (
        <Box sx={heroStyles.container}>
            {/* 3D Buildings Background */}
            <Box sx={heroStyles.canvas}>
                <Box sx={heroStyles.buildingsContainer}>
                    {buildings.map((building, index) => (
                        <Building
                            key={index}
                            height={building.height}
                            width={building.width}
                            delay={building.delay}
                            color={building.color}
                            position={building.position}
                        />
                    ))}
                </Box>
            </Box>

            {/* Text Overlay */}
            <Box sx={heroStyles.overlay}>
                <Container maxWidth='lg'>
                    <Box sx={heroStyles.content}>
                        <Typography sx={heroStyles.title}>
                            {title}
                        </Typography>
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
        </Box>
    );
};

export default HeroSectionCSS;
