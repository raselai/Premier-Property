/**
 * Home Page Component
 * Landing page with featured properties
 */

import React from 'react';
import { Box } from '@mui/material';
import { HeroSectionSimple } from '@/components/HeroSection/HeroSectionSimple';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactFooterSection } from '@/components/ContactFooterSection';
import { useNavigate } from '@tanstack/react-router';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleBrowseProperties = () => {
        navigate({ to: '/properties' });
    };

    return (
        <Box>
            {/* Hero Section with Background Image */}
            <HeroSectionSimple
                subtitle='House and Development Ltd'
                buttonText="Let's Talk"
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
