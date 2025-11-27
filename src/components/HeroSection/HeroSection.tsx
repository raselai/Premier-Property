/**
 * HeroSection Component
 * Hero section with 3D glass building animation and text overlay
 */

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { HeroScene3D } from './HeroScene3D';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

// Helper to bypass MUI type limitations
const AnyBox = Box as any;

interface HeroSectionProps {
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
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    overlay: {
        position: 'relative',
        zIndex: 2,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none', // Allow interaction with 3D scene
    },
    content: {
        textAlign: 'center',
        pointerEvents: 'auto', // Re-enable for content
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
    loadingFallback: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0A0A',
    },
};

export const HeroSection: React.FC<HeroSectionProps> = ({
    title = 'Luxury Living Redefined',
    subtitle = 'Discover extraordinary properties in the world\'s most prestigious locations',
    buttonText = 'Explore Properties',
    onButtonClick,
}) => {
    return (
        <AnyBox sx={heroStyles.container}>
            {/* 3D Canvas Background */}
            <AnyBox sx={heroStyles.canvas}>
                <Suspense
                    fallback={
                        <AnyBox sx={heroStyles.loadingFallback}>
                            <SuspenseLoader minHeight='90vh'>
                                <AnyBox />
                            </SuspenseLoader>
                        </AnyBox>
                    }
                >
                    <Canvas
                        shadows
                        dpr={[1, 2]}
                        gl={{
                            antialias: true,
                            alpha: true,
                            powerPreference: 'high-performance',
                        }}
                        camera={{ position: [0, 4, 12], fov: 50 }}
                        legacy={false}
                    >
                        <HeroScene3D />
                    </Canvas>
                </Suspense>
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

export default HeroSection;
