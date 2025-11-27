/**
 * HeroSection Component (Blueprint 3D Version)
 * Hero section with 3D blueprint-style building animation
 */

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

// Helper to bypass MUI type limitations
const AnyBox = Box as any;

interface HeroSectionBlueprintProps {
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
        background: 'linear-gradient(180deg, #0a1628 0%, #1a2332 100%)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
                linear-gradient(rgba(0, 200, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 200, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            zIndex: 1,
        },
    },
    scene: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        pb: '5vh',
        perspective: '1500px',
        perspectiveOrigin: '50% 60%',
    },
    buildingsContainer: {
        position: 'relative',
        width: '90%',
        maxWidth: '1400px',
        height: '70vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '20px',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(15deg) rotateY(0deg)',
        animation: 'sceneTilt 20s ease-in-out infinite',
        '@keyframes sceneTilt': {
            '0%, 100%': {
                transform: 'rotateX(15deg) rotateY(-5deg)',
            },
            '50%': {
                transform: 'rotateX(15deg) rotateY(5deg)',
            },
        },
    },
    overlay: {
        position: 'relative',
        zIndex: 3,
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
    depth: number;
    delay: number;
    floors: number;
    hasAntenna?: boolean;
}

const BlueprintBuilding: React.FC<BuildingProps> = ({
    height,
    width,
    depth,
    delay,
    floors,
    hasAntenna = false,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const buildingStyles: SxProps<Theme> = {
        position: 'relative',
        width: `${width}px`,
        height: isVisible ? `${height}px` : '0px',
        transformStyle: 'preserve-3d',
        transform: `translateZ(${depth}px)`,
        transition: 'height 2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: 'float 4s ease-in-out infinite',
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 0 10px rgba(0, 200, 255, 0.3))',
        '@keyframes float': {
            '0%, 100%': {
                transform: `translateY(0) translateZ(${depth}px)`,
            },
            '50%': {
                transform: `translateY(-15px) translateZ(${depth}px)`,
            },
        },
    };

    const faceStyles: SxProps<Theme> = {
        position: 'absolute',
        border: '2px solid rgba(0, 200, 255, 0.6)',
        background: 'rgba(0, 40, 80, 0.3)',
        backdropFilter: 'blur(5px)',
        boxShadow: `
            inset 0 0 30px rgba(0, 200, 255, 0.1),
            0 0 20px rgba(0, 200, 255, 0.2)
        `,
    };

    const frontFace: SxProps<Theme> = {
        ...faceStyles,
        width: '100%',
        height: '100%',
        transformOrigin: 'bottom',
        background: `
            linear-gradient(rgba(0, 200, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: `100% ${100 / floors}%`,
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
                repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent ${height / floors - 2}px,
                    rgba(0, 200, 255, 0.4) ${height / floors - 2}px,
                    rgba(0, 200, 255, 0.4) ${height / floors}px
                ),
                repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent ${width / 6 - 1}px,
                    rgba(0, 200, 255, 0.3) ${width / 6 - 1}px,
                    rgba(0, 200, 255, 0.3) ${width / 6}px
                )
            `,
        },
    };

    const sideFace: SxProps<Theme> = {
        ...faceStyles,
        width: `${depth}px`,
        height: '100%',
        transformOrigin: 'left bottom',
        transform: 'rotateY(90deg)',
        right: 0,
        background: `
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent ${height / floors - 2}px,
                rgba(0, 150, 255, 0.3) ${height / floors - 2}px,
                rgba(0, 150, 255, 0.3) ${height / floors}px
            )
        `,
        borderColor: 'rgba(0, 150, 255, 0.5)',
    };

    const topFace: SxProps<Theme> = {
        ...faceStyles,
        width: '100%',
        height: `${depth}px`,
        transformOrigin: 'top',
        transform: `rotateX(90deg) translateZ(${depth}px)`,
        top: 0,
        background: `
            repeating-linear-gradient(
                0deg,
                rgba(0, 200, 255, 0.1),
                rgba(0, 200, 255, 0.1) 10px,
                transparent 10px,
                transparent 20px
            ),
            repeating-linear-gradient(
                90deg,
                rgba(0, 200, 255, 0.1),
                rgba(0, 200, 255, 0.1) 10px,
                transparent 10px,
                transparent 20px
            )
        `,
        borderColor: 'rgba(0, 220, 255, 0.7)',
        boxShadow: '0 0 30px rgba(0, 200, 255, 0.4)',
    };

    const antennaStyles: SxProps<Theme> = {
        position: 'absolute',
        top: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '3px',
        height: '40px',
        background: 'linear-gradient(0deg, rgba(0, 200, 255, 0.8), rgba(255, 100, 100, 0.8))',
        boxShadow: '0 0 10px rgba(0, 200, 255, 0.8)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            background: 'radial-gradient(circle, #ff6666, #ff0000)',
            borderRadius: '50%',
            boxShadow: '0 0 15px rgba(255, 0, 0, 0.8)',
            animation: 'blink 1s ease-in-out infinite',
        },
        '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.3 },
        },
    };

    return (
        <AnyBox sx={buildingStyles}>
            {/* Front Face */}
            <AnyBox sx={frontFace} />

            {/* Side Face */}
            <AnyBox sx={sideFace} />

            {/* Top Face */}
            <AnyBox sx={topFace} />

            {/* Antenna (for tallest buildings) */}
            {hasAntenna && isVisible && <AnyBox sx={antennaStyles} />}

            {/* Vertical Edge Lights */}
            <AnyBox sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(0deg, rgba(0, 200, 255, 0.2), rgba(0, 200, 255, 0.8), rgba(0, 200, 255, 0.2))',
                boxShadow: '0 0 10px rgba(0, 200, 255, 0.6)',
            }} />
            <AnyBox sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(0deg, rgba(0, 200, 255, 0.2), rgba(0, 200, 255, 0.8), rgba(0, 200, 255, 0.2))',
                boxShadow: '0 0 10px rgba(0, 200, 255, 0.6)',
            }} />
        </AnyBox>
    );
};

export const HeroSectionBlueprint: React.FC<HeroSectionBlueprintProps> = ({
    title = 'Luxury Living Redefined',
    subtitle = 'Discover extraordinary properties in the world\'s most prestigious locations',
    buttonText = 'Explore Properties',
    onButtonClick,
}) => {
    const buildings = [
        { height: 280, width: 80, depth: 60, delay: 0.2, floors: 14, hasAntenna: false },
        { height: 350, width: 90, depth: 70, delay: 0.4, floors: 18, hasAntenna: true },
        { height: 260, width: 75, depth: 55, delay: 0.1, floors: 13, hasAntenna: false },
        { height: 420, width: 100, depth: 80, delay: 0.6, floors: 21, hasAntenna: true },
        { height: 380, width: 95, depth: 75, delay: 0.5, floors: 19, hasAntenna: true },
        { height: 300, width: 85, depth: 65, delay: 0.3, floors: 15, hasAntenna: false },
        { height: 340, width: 88, depth: 68, delay: 0.7, floors: 17, hasAntenna: false },
        { height: 290, width: 78, depth: 58, delay: 0.35, floors: 14, hasAntenna: false },
    ];

    return (
        <AnyBox sx={heroStyles.container}>
            {/* 3D Blueprint Buildings */}
            <AnyBox sx={heroStyles.scene}>
                <AnyBox sx={heroStyles.buildingsContainer}>
                    {buildings.map((building, index) => (
                        <BlueprintBuilding
                            key={index}
                            height={building.height}
                            width={building.width}
                            depth={building.depth}
                            delay={building.delay}
                            floors={building.floors}
                            hasAntenna={building.hasAntenna}
                        />
                    ))}
                </AnyBox>
            </AnyBox>

            {/* Text Overlay */}
            <AnyBox sx={heroStyles.overlay}>
                <Container maxWidth='lg'>
                    <AnyBox sx={heroStyles.content}>
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
                    </AnyBox>
                </Container>
            </AnyBox>
        </AnyBox>
    );
};

export default HeroSectionBlueprint;
