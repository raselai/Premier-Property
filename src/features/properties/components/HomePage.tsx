/**
 * Home Page Component
 * Landing page with featured properties
 */

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { PropertyCard } from '@/components/PropertyCard/PropertyCard';
import { HeroSectionSimple } from '@/components/HeroSection/HeroSectionSimple';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactFooterSection } from '@/components/ContactFooterSection';
import { useNavigate } from '@tanstack/react-router';

const homeStyles: Record<string, SxProps<Theme>> = {
    section: {
        py: { xs: 6, md: 10 },
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: { xs: '2rem', md: '2.75rem' },
        color: '#D4AF37',
        mb: 1,
        textAlign: 'center',
    },
    sectionSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.125rem',
        color: '#8B8B8B',
        mb: 6,
        textAlign: 'center',
    },
    viewAllButton: {
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
    },
};

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    // Mock data for featured properties (replace with real API later)
    const featuredProperties = [
        {
            id: 1,
            title: 'Luxury Villa in Beverly Hills',
            location: 'Beverly Hills, CA',
            price: 4500000,
            bedrooms: 5,
            bathrooms: 4,
            area: 4200,
            status: 'For Sale' as const,
            images: [{ id: 1, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 2,
            title: 'Modern Penthouse Downtown',
            location: 'Manhattan, NY',
            price: 6800000,
            bedrooms: 4,
            bathrooms: 3,
            area: 3500,
            status: 'For Sale' as const,
            images: [{ id: 2, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 3,
            title: 'Beachfront Estate Malibu',
            location: 'Malibu, CA',
            price: 12500000,
            bedrooms: 6,
            bathrooms: 5,
            area: 6000,
            status: 'For Sale' as const,
            images: [{ id: 3, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 4,
            title: 'Contemporary Condo',
            location: 'Miami Beach, FL',
            price: 2200000,
            bedrooms: 3,
            bathrooms: 2,
            area: 2100,
            status: 'For Rent' as const,
            images: [{ id: 4, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 5,
            title: 'Historic Townhouse',
            location: 'Boston, MA',
            price: 3400000,
            bedrooms: 4,
            bathrooms: 3,
            area: 3200,
            status: 'For Sale' as const,
            images: [{ id: 5, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 6,
            title: 'Mountain Retreat Lodge',
            location: 'Aspen, CO',
            price: 8900000,
            bedrooms: 7,
            bathrooms: 6,
            area: 7500,
            status: 'For Sale' as const,
            images: [{ id: 6, url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800', caption: '', isPrimary: true, order: 1 }],
        },
    ];

    const handleBrowseProperties = () => {
        navigate({ to: '/properties' });
    };

    const handleViewDetails = (id: number) => {
        navigate({ to: `/properties/${id}` });
    };

    return (
        <Box>
            {/* Hero Section with Background Image */}
            <HeroSectionSimple
                title='Find Your Dream Home'
                subtitle='House and Development Ltd'
                buttonText='Browse Properties'
                onButtonClick={handleBrowseProperties}
            />

            {/* About Section */}
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default HomePage;
