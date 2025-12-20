/**
 * Home Page Component
 * Landing page with featured properties
 */

import React from 'react';
import { Box } from '@mui/material';
import { HeroSectionSimple } from '@/components/HeroSection/HeroSectionSimple';
import { IntroSection } from '@/components/IntroSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactFooterSection } from '@/components/ContactFooterSection';

export const HomePage: React.FC = () => {
    return (
        <Box>
            {/* Hero Section with Background Image */}
            <HeroSectionSimple />

            {/* Introduction Section */}
            <IntroSection />

            {/* About Section */}
            <AboutSection />

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Why Choose Us Section */}
            <WhyChooseUsSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default HomePage;
