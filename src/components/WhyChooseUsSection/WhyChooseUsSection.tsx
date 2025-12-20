/**
 * WhyChooseUsSection Component
 * Two-part section highlighting company strengths and landowner opportunities
 */

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const sectionStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#FFFFFF',
        pt: { xs: 6, md: 8 },
        pb: 0,
    },
    // Upper Part - Why Choose Us
    upperPart: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 3, md: 0 },
        mb: { xs: 6, md: 8 },
    },
    logoContainer: {
        flex: { md: '0 0 35%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 3, md: 5 },
    },
    logo: {
        width: { xs: '180px', sm: '220px', md: '280px' },
        height: 'auto',
    },
    whyChooseContent: {
        flex: { md: '0 0 65%' },
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        py: { xs: 4, md: 5 },
        px: { xs: 3, md: 5 },
        borderRadius: { xs: '12px', md: '0' },
    },
    featureItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        mb: { xs: 2, md: 2.5 },
        '&:last-child': {
            mb: 0,
        },
    },
    checkIcon: {
        fontSize: { xs: '20px', md: '24px' },
        color: '#FFFFFF',
        mt: 0.3,
    },
    featureText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '15px', md: '17px' },
        fontWeight: 500,
        lineHeight: 1.4,
        color: '#FFFFFF',
    },
    // Lower Part - Landowners
    lowerPart: {
        mt: { xs: 6, md: 8 },
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '24px', sm: '28px', md: '32px' },
        fontWeight: 700,
        color: '#0F5132',
        textAlign: 'center',
        mb: { xs: 4, md: 5 },
        px: { xs: 3, md: 0 },
    },
    landownerContent: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'stretch' },
        gap: { xs: 3, md: 0 },
        width: '100%',
    },
    landownerTextContainer: {
        flex: { md: '0 0 50%' },
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        py: { xs: 4, md: 6 },
        px: { xs: 3, sm: 5, md: 8, lg: 12 },
        borderRadius: { xs: '12px', md: '0' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    landownerImageContainer: {
        flex: { md: '0 0 50%' },
        width: '100%',
        display: 'flex',
    },
    landownerImage: {
        width: '100%',
        height: { xs: '250px', md: '100%' },
        objectFit: 'cover',
        borderRadius: { xs: '12px', md: '0' },
        display: 'block',
    },
};

export const WhyChooseUsSection: React.FC = () => {
    const whyChooseFeatures = [
        '30+ Years of Excellence',
        'Superior Construction Standards',
        'Customer-Focused Commitment',
        'Prime Locations',
        'Long-Term Value Creation',
    ];

    const landownerFeatures = [
        'Fair land-sharing agreements',
        'Fast project approval',
        'Guaranteed timely execution',
        'Maximum land value optimization',
    ];

    return (
        <Box sx={sectionStyles.section}>
            {/* Upper Part - Why Choose Us */}
            <Container maxWidth="xl">
                <Box sx={sectionStyles.upperPart}>
                    {/* Logo */}
                    <Box sx={sectionStyles.logoContainer}>
                        <Box
                            component="img"
                            src="/Con_premier/pic18.png"
                            alt="Why Choose Us"
                            sx={sectionStyles.logo}
                        />
                    </Box>

                    {/* Features */}
                    <Box sx={sectionStyles.whyChooseContent}>
                        {whyChooseFeatures.map((feature, index) => (
                            <Box key={index} sx={sectionStyles.featureItem}>
                                <CheckIcon sx={sectionStyles.checkIcon} />
                                <Typography sx={sectionStyles.featureText}>
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>

            {/* Lower Part - Landowners (Full Width) */}
            <Box sx={sectionStyles.lowerPart}>
                <Typography sx={sectionStyles.sectionTitle}>
                    For Landowners - Joint Venture Opportunity
                </Typography>

                <Box sx={sectionStyles.landownerContent}>
                    {/* Text Content */}
                    <Box sx={sectionStyles.landownerTextContainer}>
                        {landownerFeatures.map((feature, index) => (
                            <Box key={index} sx={sectionStyles.featureItem}>
                                <CheckIcon sx={sectionStyles.checkIcon} />
                                <Typography sx={sectionStyles.featureText}>
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Image */}
                    <Box sx={sectionStyles.landownerImageContainer}>
                        <Box
                            component="img"
                            src="/Con_premier/pic16.jpg"
                            alt="Joint Venture Opportunity"
                            sx={sectionStyles.landownerImage}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WhyChooseUsSection;
