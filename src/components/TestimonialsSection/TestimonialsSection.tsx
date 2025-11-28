/**
 * Testimonials Section Component
 * Displays customer testimonials with images
 */

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonialsStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#F5F5F5',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
    },
    sectionLabel: {
        display: 'inline-block',
        border: '1px solid #2D2D2D',
        borderRadius: '20px',
        padding: '8px 16px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#2D2D2D',
        fontWeight: 400,
        mb: 3,
        textAlign: 'center',
    },
    heading: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '36px', sm: '48px', md: '56px' },
        fontWeight: 800,
        lineHeight: 1.1,
        textAlign: 'center',
        mb: { xs: 6, md: 8 },
    },
    headingDark: {
        color: '#2D2D2D',
    },
    headingGold: {
        color: '#CE9443',
    },
    testimonialCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: { xs: 4, md: 6 },
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
    },
    quoteIcon: {
        position: 'absolute',
        top: { xs: 20, md: 30 },
        left: { xs: 20, md: 30 },
        fontSize: { xs: '40px', md: '60px' },
        color: '#CE9443',
        opacity: 0.3,
    },
    testimonialText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '18px', md: '24px' },
        lineHeight: 1.6,
        color: '#2D2D2D',
        fontWeight: 500,
        textAlign: 'center',
        mb: 4,
        fontStyle: 'italic',
    },
    reviewerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        flexDirection: { xs: 'column', sm: 'row' },
    },
    reviewerImage: {
        width: { xs: '80px', md: '100px' },
        height: { xs: '80px', md: '100px' },
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #CE9443',
    },
    reviewerInfo: {
        textAlign: { xs: 'center', sm: 'left' },
    },
    reviewerName: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '18px', md: '22px' },
        fontWeight: 700,
        color: '#2D2D2D',
        mb: 0.5,
    },
    reviewerTitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '14px', md: '16px' },
        color: '#CE9443',
        fontWeight: 500,
    },
};

interface TestimonialsSectionProps {
    testimonialText?: string;
    reviewerName?: string;
    reviewerTitle?: string;
    reviewerImage?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
    testimonialText = 'Premier Housing delivered exactly what they promised.',
    reviewerName = 'Md. Taiful Islam',
    reviewerTitle = 'Director, Bangladesh Bank',
    reviewerImage = '/Reviewer.jpg',
}) => {
    return (
        <Box sx={testimonialsStyles.section}>
            <Container maxWidth='lg'>
                {/* Section Label */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={testimonialsStyles.sectionLabel}>
                        04 - testimonials
                    </Typography>
                </Box>

                {/* Section Heading */}
                <Typography sx={testimonialsStyles.heading}>
                    <Box component='span' sx={testimonialsStyles.headingDark}>
                        WHAT OUR{' '}
                    </Box>
                    <Box component='span' sx={testimonialsStyles.headingGold}>
                        CLIENTS SAY
                    </Box>
                </Typography>

                {/* Testimonial Card */}
                <Box sx={testimonialsStyles.testimonialCard}>
                    {/* Quote Icon */}
                    <FormatQuoteIcon sx={testimonialsStyles.quoteIcon} />

                    {/* Testimonial Text */}
                    <Typography sx={testimonialsStyles.testimonialText}>
                        "{testimonialText}"
                    </Typography>

                    {/* Reviewer Info */}
                    <Box sx={testimonialsStyles.reviewerContainer}>
                        <Box
                            component='img'
                            src={reviewerImage}
                            alt={reviewerName}
                            sx={testimonialsStyles.reviewerImage}
                        />
                        <Box sx={testimonialsStyles.reviewerInfo}>
                            <Typography sx={testimonialsStyles.reviewerName}>
                                {reviewerName}
                            </Typography>
                            <Typography sx={testimonialsStyles.reviewerTitle}>
                                {reviewerTitle}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
