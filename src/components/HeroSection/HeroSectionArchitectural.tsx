/**
 * HeroSection Component (Architectural Blueprint Version)
 * Hero section with realistic architectural building wireframes
 */

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

// Helper to bypass MUI type limitations
const AnyBox = Box as any;

interface HeroSectionArchitecturalProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const heroStyles: Record<string, SxProps<Theme>> = {
    container: {
        position: 'relative',
        minHeight: '90vh',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(240, 248, 255, 0.95) 0%, rgba(230, 240, 250, 0.98) 100%)',
        backdropFilter: 'blur(10px)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
                linear-gradient(rgba(100, 150, 200, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100, 150, 200, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
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
        pb: '8vh',
        perspective: '2000px',
        perspectiveOrigin: '50% 70%',
    },
    buildingsContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: '75vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        gap: { xs: '8px', sm: '12px', md: '20px', lg: '25px' },
        transformStyle: 'preserve-3d',
        transform: 'rotateX(8deg)',
        px: { xs: 1, sm: 2, md: 3 },
        flexWrap: 'nowrap',
        overflowX: 'hidden',
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
            '0%': { opacity: 0, transform: 'translateY(30px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
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
        animation: 'fadeInUp 1s ease-out 1.1s both',
        '&:hover': {
            backgroundColor: '#E5C158',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 40px rgba(212, 175, 55, 0.6)',
        },
    },
};

// Burj Khalifa style - tall spire building
const BurjKhalifaBuilding: React.FC<{ delay: number }> = ({ delay }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(1);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <AnyBox sx={{
            position: 'relative',
            width: { xs: '45px', sm: '60px', md: '75px', lg: '90px' },
            height: progress ? { xs: '300px', sm: '380px', md: '460px', lg: '520px' } : '0px',
            transition: 'height 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.3))',
        }}>
            {/* Base section */}
            <AnyBox sx={{
                position: 'absolute',
                bottom: 0,
                left: '10%',
                right: '10%',
                height: '30%',
                border: '2px solid rgba(212, 175, 55, 0.6)',
                borderBottom: 'none',
                background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08))',
                backdropFilter: 'blur(8px)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(212, 175, 55, 0.3) 12px, rgba(212, 175, 55, 0.3) 13px)`,
                },
            }} />

            {/* Middle setback section */}
            <AnyBox sx={{
                position: 'absolute',
                bottom: '30%',
                left: '15%',
                right: '15%',
                height: '35%',
                border: '2px solid rgba(212, 175, 55, 0.7)',
                borderBottom: 'none',
                background: 'rgba(212, 175, 55, 0.12)',
                backdropFilter: 'blur(8px)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `
                        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(212, 175, 55, 0.4) 10px, rgba(212, 175, 55, 0.4) 11px),
                        repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(212, 175, 55, 0.25) 8px, rgba(212, 175, 55, 0.25) 9px)
                    `,
                },
            }} />

            {/* Top spire section */}
            <AnyBox sx={{
                position: 'absolute',
                bottom: '65%',
                left: '25%',
                right: '25%',
                height: '35%',
                border: '2px solid rgba(212, 175, 55, 0.8)',
                borderBottom: 'none',
                background: 'rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(8px)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(212, 175, 55, 0.5) 8px, rgba(212, 175, 55, 0.5) 9px)`,
                },
            }} />

            {/* Spire */}
            <AnyBox sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '3px',
                height: '15%',
                background: 'linear-gradient(0deg, rgba(212, 175, 55, 0.8), rgba(255, 100, 100, 0.9))',
                boxShadow: '0 0 20px rgba(255, 100, 100, 0.8)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '10px',
                    background: 'radial-gradient(circle, #ff6666, #ff0000)',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(255, 0, 0, 1)',
                    animation: 'blink 1.5s ease-in-out infinite',
                },
                '@keyframes blink': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.2 },
                },
            }} />

            {/* Vertical edge lights */}
            {[0, 100].map((pos, i) => (
                <AnyBox key={i} sx={{
                    position: 'absolute',
                    left: pos === 0 ? 0 : 'auto',
                    right: pos === 100 ? 0 : 'auto',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(0deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.9), rgba(212, 175, 55, 0.3))',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                }} />
            ))}
        </AnyBox>
    );
};

// Twin Towers style - two identical towers
const TwinTowersBuilding: React.FC<{ delay: number }> = ({ delay }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(1);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const towerStyle: SxProps<Theme> = {
        width: { xs: '28px', sm: '35px', md: '42px', lg: '50px' },
        height: progress ? { xs: '260px', sm: '320px', md: '400px', lg: '450px' } : '0px',
        transition: 'height 2.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        border: '2px solid rgba(212, 175, 55, 0.7)',
        borderBottom: 'none',
        background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08))',
        backdropFilter: 'blur(8px)',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `
                repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(212, 175, 55, 0.4) 15px, rgba(212, 175, 55, 0.4) 16px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(212, 175, 55, 0.3) 10px, rgba(212, 175, 55, 0.3) 11px)
            `,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '-8px',
            left: '20%',
            right: '20%',
            height: '8px',
            background: 'rgba(212, 175, 55, 0.5)',
            border: '2px solid rgba(212, 175, 55, 0.8)',
            borderBottom: 'none',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
        },
    };

    return (
        <AnyBox sx={{
            display: 'flex',
            gap: { xs: '6px', sm: '8px', md: '10px', lg: '12px' },
            alignItems: 'flex-end',
            filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.3))',
        }}>
            <AnyBox sx={towerStyle} />
            <AnyBox sx={towerStyle} />
        </AnyBox>
    );
};

// Shanghai Tower style - twisted design
const ShanghaiTowerBuilding: React.FC<{ delay: number }> = ({ delay }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(1);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <AnyBox sx={{
            position: 'relative',
            width: { xs: '55px', sm: '70px', md: '85px', lg: '100px' },
            height: progress ? { xs: '320px', sm: '400px', md: '480px', lg: '540px' } : '0px',
            transition: 'height 2.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.3))',
        }}>
            {/* Multiple segments with tapering */}
            {[0, 1, 2, 3, 4].map((segment) => {
                const heightPercent = 20;
                const bottomPercent = segment * 20;
                const widthFactor = 1 - (segment * 0.12);

                return (
                    <AnyBox key={segment} sx={{
                        position: 'absolute',
                        bottom: `${bottomPercent}%`,
                        left: `${(1 - widthFactor) * 50}%`,
                        right: `${(1 - widthFactor) * 50}%`,
                        height: `${heightPercent}%`,
                        border: '2px solid rgba(212, 175, 55, 0.7)',
                        borderBottom: segment === 0 ? 'none' : '2px solid rgba(212, 175, 55, 0.4)',
                        background: `rgba(212, 175, 55, 0.${12 - segment * 2})`,
                        backdropFilter: 'blur(8px)',
                        transform: `rotateZ(${segment * 5}deg)`,
                        transformOrigin: 'center bottom',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            background: `
                                repeating-linear-gradient(0deg, transparent, transparent ${12 - segment}px, rgba(212, 175, 55, 0.${6 - segment}) ${12 - segment}px, rgba(212, 175, 55, 0.${6 - segment}) ${13 - segment}px),
                                repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(212, 175, 55, 0.3) 12px, rgba(212, 175, 55, 0.3) 13px)
                            `,
                        },
                    }} />
                );
            })}
        </AnyBox>
    );
};

// Empire State Building style - classic art deco
const EmpireStateBuilding: React.FC<{ delay: number }> = ({ delay }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(1);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <AnyBox sx={{
            position: 'relative',
            width: { xs: '58px', sm: '75px', md: '90px', lg: '105px' },
            height: progress ? { xs: '290px', sm: '360px', md: '420px', lg: '480px' } : '0px',
            transition: 'height 2.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.3))',
        }}>
            {/* Base - widest */}
            <AnyBox sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                border: '2px solid rgba(212, 175, 55, 0.7)',
                borderBottom: 'none',
                background: 'rgba(212, 175, 55, 0.15)',
                backdropFilter: 'blur(8px)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `
                        repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(212, 175, 55, 0.4) 14px, rgba(212, 175, 55, 0.4) 15px),
                        repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(212, 175, 55, 0.3) 15px, rgba(212, 175, 55, 0.3) 16px)
                    `,
                },
            }} />

            {/* Middle section */}
            <AnyBox sx={{
                position: 'absolute',
                bottom: '40%',
                left: '12%',
                right: '12%',
                height: '35%',
                border: '2px solid rgba(212, 175, 55, 0.75)',
                borderBottom: 'none',
                background: 'rgba(212, 175, 55, 0.12)',
                backdropFilter: 'blur(8px)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `
                        repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(212, 175, 55, 0.4) 12px, rgba(212, 175, 55, 0.4) 13px),
                        repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(212, 175, 55, 0.3) 12px, rgba(212, 175, 55, 0.3) 13px)
                    `,
                },
            }} />

            {/* Top spire */}
            <AnyBox sx={{
                position: 'absolute',
                bottom: '75%',
                left: '30%',
                right: '30%',
                height: '25%',
                border: '2px solid rgba(212, 175, 55, 0.8)',
                borderBottom: 'none',
                background: 'rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(8px)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(212, 175, 55, 0.5) 10px, rgba(212, 175, 55, 0.5) 11px)`,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '0',
                    borderLeft: '15px solid transparent',
                    borderRight: '15px solid transparent',
                    borderBottom: '25px solid rgba(212, 175, 55, 0.6)',
                    filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))',
                },
            }} />
        </AnyBox>
    );
};

export const HeroSectionArchitectural: React.FC<HeroSectionArchitecturalProps> = ({
    title = 'Luxury Living Redefined',
    subtitle = 'Discover extraordinary properties in the world\'s most prestigious locations',
    buttonText = 'Explore Properties',
    onButtonClick,
}) => {
    return (
        <AnyBox sx={heroStyles.container}>
            <AnyBox sx={heroStyles.scene}>
                <AnyBox sx={heroStyles.buildingsContainer}>
                    <TwinTowersBuilding delay={0.1} />
                    <EmpireStateBuilding delay={0.2} />
                    <BurjKhalifaBuilding delay={0.4} />
                    <ShanghaiTowerBuilding delay={0.5} />
                    <TwinTowersBuilding delay={0.3} />
                    <EmpireStateBuilding delay={0.6} />
                    <BurjKhalifaBuilding delay={0.7} />
                    <ShanghaiTowerBuilding delay={0.25} />
                    <EmpireStateBuilding delay={0.5} />
                    <TwinTowersBuilding delay={0.65} />
                </AnyBox>
            </AnyBox>

            <AnyBox sx={heroStyles.overlay}>
                <Container maxWidth='lg'>
                    <AnyBox sx={heroStyles.content}>
                        <Typography sx={heroStyles.title}>{title}</Typography>
                        <Typography sx={heroStyles.subtitle}>{subtitle}</Typography>
                        {onButtonClick && (
                            <Button variant='contained' size='large' sx={heroStyles.button} onClick={onButtonClick}>
                                {buttonText}
                            </Button>
                        )}
                    </AnyBox>
                </Container>
            </AnyBox>
        </AnyBox>
    );
};

export default HeroSectionArchitectural;
