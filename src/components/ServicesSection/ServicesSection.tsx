/**
 * Services Section Component
 * Dark background with staggered service cards layout
 */

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const servicesStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#1A1A1A',
        pt: 0,
        pb: { xs: 6, md: 10 },
        px: { xs: 3, md: 8, lg: 10 },
    },
    topArea: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
    },
    leftContent: {
        flex: { md: '0 0 50%' },
    },
    rightContent: {
        flex: { md: '0 0 45%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        fontSize: { xs: '36px', sm: '48px', md: '58px' },
        fontWeight: 800,
        lineHeight: 1.15,
        pt: { xs: 4, md: 6 },
        mb: { xs: 3, md: 4 },
    },
    headingWhite: {
        color: '#FFFFFF',
    },
    headingGold: {
        color: '#0F5132',
    },
    carouselNav: {
        display: 'flex',
        gap: '12px',
    },
    navButton: {
        minWidth: '48px',
        width: '48px',
        height: '48px',
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
    description: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '15px', md: '17px' },
        lineHeight: 1.65,
        pt: { xs: 4, md: 6 },
        mb: { xs: 3, md: 4 },
    },
    descriptionWhite: {
        color: '#FFFFFF',
        fontWeight: 400,
    },
    descriptionGrey: {
        color: '#979797',
        fontWeight: 400,
    },
    consultationButton: {
        backgroundColor: '#0F5132',
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
        width: 'fit-content',
        transition: 'all 0.3s ease',
        border: '1px solid #0F5132',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#0F5132',
            borderColor: '#0F5132',
            '& .MuiSvgIcon-root': {
                backgroundColor: '#0F5132',
                color: '#FFFFFF',
            },
        },
        '& .MuiSvgIcon-root': {
            fontSize: '18px',
            backgroundColor: '#FFFFFF',
            color: '#0F5132',
            borderRadius: '50%',
            padding: '4px',
            width: '24px',
            height: '24px',
            transition: 'all 0.3s ease',
        },
    },
    cardsContainer: {
        display: 'flex',
        gap: { xs: 2, md: 3 },
        overflowX: { xs: 'auto', md: 'hidden' },
        pb: 2,
        mt: { xs: 4, md: 5 },
        '&::-webkit-scrollbar': {
            height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#979797',
            borderRadius: '3px',
        },
    },
    serviceCard: {
        minWidth: { xs: '280px', sm: '300px', md: '23%' },
        flex: { md: '0 0 23%' },
        cursor: 'pointer',
        transition: 'transform 0.3s ease, opacity 0.6s ease',
        opacity: 0,
        transform: 'translateY(30px)',
        '&.visible': {
            opacity: 1,
            transform: 'translateY(0)',
        },
        '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
        },
        '&.offset': {
            mt: { md: '80px' },
        },
    },
    cardImage: {
        width: '100%',
        height: { xs: '350px', md: '380px' },
        objectFit: 'cover',
        borderRadius: '18px',
        display: 'block',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: { xs: 2, md: 2.5 },
        mb: 1.5,
    },
    cardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '15px', md: '17px' },
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    cardNumber: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '14px', md: '15px' },
        color: '#0F5132',
        fontWeight: 500,
    },
    cardDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '13px', md: '14px' },
        color: '#979797',
        lineHeight: 1.6,
    },
};

interface Service {
    id: number;
    title: string;
    number: string;
    description: string;
    image: string;
    offset?: boolean;
}

interface ServicesSectionProps {
    services?: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
    services = [
        {
            id: 1,
            title: 'STRUCTURAL MATERIALS',
            number: '/01',
            description: 'High-grade concrete, certified steel, and reinforcement systems from leading brands engineered for strength, safety, and long-term structural integrity.',
            image: '/Con_premier/pic15.jpg',
            offset: false,
        },
        {
            id: 2,
            title: 'FINISHING MATERIALS',
            number: '/02',
            description: 'Premium tiles, marble, wood finishes, paints, and surface solutions sourced from renowned brands—delivering timeless beauty and flawless detailing.',
            image: '/Con_premier/pic14.jpg',
            offset: true,
        },
        {
            id: 3,
            title: 'FACADE & EXTERIOR',
            number: '/03',
            description: 'High-performance glass, aluminum systems, ACP panels, and stone cladding from top manufacturers—designed for modern appeal, weather resistance, and efficiency.',
            image: '/Con_premier/pic13.jpg',
            offset: false,
        },
        {
            id: 4,
            title: 'INTERIOR MATERIALS',
            number: '/04',
            description: 'Carefully selected gypsum, MDF, laminates, acoustic panels, and specialty finishes from trusted premium brands—combining comfort, functionality, and elegance.',
            image: '/Con_premier/pic1.jpg',
            offset: true,
        },
    ],
}) => {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.serviceCard');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 150);
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
        <Box sx={servicesStyles.section}>
            <Container maxWidth='xl'>
                {/* Top Area */}
                <Box sx={servicesStyles.topArea}>
                    {/* Left Content */}
                    <Box sx={servicesStyles.leftContent}>
                        <Typography sx={servicesStyles.heading}>
                            <Box component='span' sx={servicesStyles.headingWhite}>
                                FROM{' '}
                            </Box>
                            <Box component='span' sx={servicesStyles.headingGold}>
                                MATERIAL TO
                            </Box>
                            <br />
                            <Box component='span' sx={servicesStyles.headingWhite}>
                                MASTERPIECE
                            </Box>
                        </Typography>
                    </Box>

                    {/* Right Content */}
                    <Box sx={servicesStyles.rightContent}>
                        <Box sx={servicesStyles.description}>
                            <Typography component='span' sx={servicesStyles.descriptionWhite}>
                                We use only premium, globally trusted brands of materials—ensuring durability, refined aesthetics,{' '}
                            </Typography>
                            <Typography component='span' sx={servicesStyles.descriptionGrey}>
                                and superior performance in every project.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Service Cards */}
                <Box ref={cardsRef} sx={servicesStyles.cardsContainer}>
                    {services.map((service) => (
                        <Box
                            key={service.id}
                            sx={servicesStyles.serviceCard}
                            className={`serviceCard ${service.offset ? 'offset' : ''}`}
                        >
                            <Box
                                component='img'
                                src={service.image}
                                alt={service.title}
                                sx={servicesStyles.cardImage}
                            />

                            <Box sx={servicesStyles.cardHeader}>
                                <Typography sx={servicesStyles.cardTitle}>
                                    {service.title}
                                </Typography>
                                <Typography sx={servicesStyles.cardNumber}>
                                    {service.number}
                                </Typography>
                            </Box>

                            <Typography sx={servicesStyles.cardDescription}>
                                {service.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ServicesSection;
