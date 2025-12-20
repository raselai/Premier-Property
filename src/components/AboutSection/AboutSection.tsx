/**
 * About Section Component
 * Two-column layout with company information and featured image
 */

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const aboutStyles: Record<string, SxProps<Theme>> = {
    section: {
        backgroundColor: '#FFFFFF',
        pt: { xs: 4, md: 6 },
        pb: { xs: 3, md: 5 },
        px: { xs: 3, md: 8, lg: 10 },
    },
    topSection: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6, lg: 8 },
        alignItems: 'center',
        mb: { xs: 6, md: 10 },
    },
    leftColumn: {
        flex: { md: '0 0 45%' },
        maxWidth: { md: '45%' },
    },
    rightColumn: {
        flex: { md: '0 0 55%' },
        maxWidth: { md: '55%' },
        width: '100%',
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
        fontSize: { xs: '36px', sm: '48px', md: '56px' },
        fontWeight: 800,
        lineHeight: 1.1,
        mb: { xs: 2, md: 3 },
    },
    headingDark: {
        color: '#2D2D2D',
    },
    headingGold: {
        color: '#0F5132',
    },
    description: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '15px', md: '16px' },
        lineHeight: 1.65,
        maxWidth: '400px',
        mb: { xs: 3, md: 4 },
    },
    descriptionEmphasis: {
        color: '#2D2D2D',
        fontWeight: 500,
    },
    descriptionNormal: {
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
    imageContainer: {
        position: 'relative',
        borderRadius: { xs: '20px', md: '25px' },
        overflow: 'hidden',
        width: '100%',
        paddingTop: '75%',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    logoOverlay: {
        position: 'absolute',
        top: { xs: '15px', md: '20px' },
        right: { xs: '15px', md: '20px' },
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '12px',
        color: '#FFFFFF',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: '20px',
    },
    featureTags: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    featureTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '20px',
        padding: '10px 20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#FFFFFF',
        fontWeight: 500,
    },
    statementSection: {
        mt: { xs: 6, md: 10 },
        mb: { xs: 6, md: 10 },
    },
    statementText: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '24px', sm: '32px', md: '38px' },
        lineHeight: 1.45,
        maxWidth: '1100px',
        mx: 'auto',
        textAlign: 'center',
    },
    statementDark: {
        color: '#2D2D2D',
        fontWeight: 700,
    },
    statementGold: {
        color: '#0F5132',
        fontWeight: 700,
    },
    statementGrey: {
        color: '#979797',
        fontWeight: 400,
    },
    carouselSection: {
        mt: { xs: 4, md: 6 },
    },
    carouselHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
    },
    carouselNav: {
        display: 'flex',
        gap: '10px',
    },
    navButton: {
        minWidth: '45px',
        width: '45px',
        height: '45px',
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
    projectCards: {
        display: 'flex',
        gap: { xs: 2, md: 3 },
        overflowX: 'auto',
        pb: 2,
        '&::-webkit-scrollbar': {
            height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#979797',
            borderRadius: '3px',
        },
    },
    projectCard: {
        position: 'relative',
        minWidth: { xs: '280px', sm: '320px', md: '360px' },
        flex: { md: '0 0 32%' },
        borderRadius: '20px',
        overflow: 'hidden',
        paddingTop: { xs: '140%', md: 0 },
        height: { xs: 'auto', md: '480px' },
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        opacity: 0,
        transform: 'translateX(-50px)',
        '&.visible': {
            opacity: 1,
            transform: 'translateX(0)',
        },
        '&:hover': {
            transform: 'translateY(-12px) scale(1.02) !important',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        },
    },
    projectImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '.projectCard:hover &': {
            transform: 'scale(1.05)',
        },
    },
    projectArrow: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
    },
    projectTitle: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        right: '20px',
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '20px', md: '24px' },
        fontWeight: 700,
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        lineHeight: 1.2,
    },
    projectDescription: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: 'rgba(255, 255, 255, 0.9)',
        textShadow: '0 1px 5px rgba(0,0,0,0.5)',
        maxWidth: '70%',
    },
    projectItemsList: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    projectItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '13px', md: '14px' },
        fontWeight: 500,
        color: '#FFFFFF',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        borderRadius: '8px',
        padding: '10px 12px',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(206, 148, 67, 0.2)',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '18px',
            color: '#0F5132',
            flexShrink: 0,
            mt: '2px',
        },
    },
};

interface AboutSectionProps {
    mainImage?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
    mainImage = '/Hero_Image2.jpg',
}) => {

    return (
        <Box sx={aboutStyles.section}>
            <Container maxWidth='xl'>
                {/* Top Section - Two Columns */}
                <Box sx={aboutStyles.topSection}>
                    {/* Left Column - Text Content */}
                    <Box sx={aboutStyles.leftColumn}>
                        <Typography sx={aboutStyles.heading}>
                            <Box component='span' sx={aboutStyles.headingDark}>
                                WHO{' '}
                            </Box>
                            <Box component='span' sx={aboutStyles.headingGold}>
                                WE ARE
                            </Box>
                        </Typography>

                        <Box sx={aboutStyles.description}>
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                About Premier Housing & Developments Ltd.
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Since our inception in 1995,
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Premier Housing & Developments Ltd.
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionNormal}>
                                has successfully completed numerous residential apartment projects that stand as symbols of trust, craftsmanship, and long-lasting value. We are a proud member of the
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Real Estate & Housing Association of Bangladesh (REHAB) since 2008,
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionNormal}>
                                contributing actively to committees including Customer Service & Mediation, Accounts & Audit, and Member Welfare.
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionEmphasis}>
                                Our mission
                            </Typography>{' '}
                            <Typography component='span' sx={aboutStyles.descriptionNormal}>
                                is to create enduring value and deliver luxurious, comfortable homes for generations to come.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Column - Image */}
                    <Box sx={aboutStyles.rightColumn}>
                        <Box sx={aboutStyles.imageContainer}>
                            <Box
                                component='img'
                                src={mainImage}
                                alt='Premier Housing Architecture'
                                sx={aboutStyles.image}
                            />

                            {/* Logo Overlay */}
                            <Box sx={aboutStyles.logoOverlay}>PH</Box>

                            {/* Feature Tags */}
                            <Box sx={aboutStyles.featureTags}>
                                <Typography sx={aboutStyles.featureTag}>Security</Typography>
                                <Typography sx={aboutStyles.featureTag}>Innovation</Typography>
                                <Typography sx={aboutStyles.featureTag}>Practicality</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutSection;
