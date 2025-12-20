/**
 * Joint Venture Page Component
 * Information about land sharing and joint venture opportunities
 */

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import {
    Handshake as HandshakeIcon,
    TrendingUp as TrendingUpIcon,
    Verified as VerifiedIcon,
    AccountBalance as AccountBalanceIcon,
    Construction as ConstructionIcon,
    People as PeopleIcon,
    ArrowForward as ArrowForwardIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { ContactFooterSection } from '@/components/ContactFooterSection';

const styles: Record<string, SxProps<Theme>> = {
    heroSection: {
        position: 'relative',
        minHeight: { xs: '350px', md: '450px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
        },
    },
    heroContent: {
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        px: 3,
    },
    heroTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
        fontWeight: 700,
        color: '#FFFFFF',
        mb: 2,
        textShadow: '0 2px 20px rgba(0,0,0,0.2)',
    },
    heroSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.1rem', md: '1.3rem' },
        fontWeight: 400,
        color: 'rgba(255,255,255,0.95)',
        maxWidth: '900px',
        mx: 'auto',
        mb: 4,
    },
    heroButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '0.95rem', md: '1.05rem' },
        fontWeight: 700,
        color: '#0F5132',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: { xs: 3, md: 4 },
        py: { xs: 1.5, md: 2 },
        background: '#FFFFFF',
        boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: '#F5F5F5',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 24px rgba(255, 255, 255, 0.5)',
        },
    },
    section: {
        py: { xs: 8, md: 12 },
    },
    sectionAlt: {
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 3,
        textAlign: 'center',
    },
    sectionSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.1rem' },
        fontWeight: 400,
        color: '#666666',
        textAlign: 'center',
        maxWidth: '800px',
        mx: 'auto',
        mb: 6,
        lineHeight: 1.8,
    },
    card: {
        height: '100%',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(15, 81, 50, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid rgba(15, 81, 50, 0.1)',
        background: '#FFFFFF',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(15, 81, 50, 0.15)',
            borderColor: '#0F5132',
        },
    },
    iconWrapper: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 'auto',
        mb: 3,
        boxShadow: '0 4px 20px rgba(15, 81, 50, 0.25)',
    },
    icon: {
        fontSize: '2rem',
        color: '#FFFFFF',
    },
    cardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.3rem', md: '1.5rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 2,
        textAlign: 'center',
    },
    cardText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#666666',
        lineHeight: 1.8,
        textAlign: 'center',
    },
    processBox: {
        background: '#FFFFFF',
        borderRadius: '16px',
        p: 4,
        mb: 3,
        border: '2px solid rgba(15, 81, 50, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#0F5132',
            boxShadow: '0 8px 24px rgba(15, 81, 50, 0.12)',
        },
    },
    processNumber: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#FFFFFF',
        mb: 2,
    },
    processTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.2rem', md: '1.4rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 1.5,
    },
    processText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
    },
    ctaBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '20px',
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        },
    },
    ctaTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.8rem', md: '2.2rem' },
        fontWeight: 700,
        color: '#FFFFFF',
        mb: 2,
        position: 'relative',
        zIndex: 1,
    },
    ctaText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.05rem', md: '1.15rem' },
        fontWeight: 400,
        color: 'rgba(255,255,255,0.95)',
        lineHeight: 1.8,
        mb: 3,
        position: 'relative',
        zIndex: 1,
    },
    ctaButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#0F5132',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: 4,
        py: 2,
        background: '#FFFFFF',
        position: 'relative',
        zIndex: 1,
        '&:hover': {
            background: '#F5F5F5',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 24px rgba(255, 255, 255, 0.5)',
        },
    },
    benefitItem: {
        display: 'flex',
        alignItems: 'flex-start',
        mb: 2.5,
        gap: 2,
    },
    benefitIcon: {
        color: '#0F5132',
        fontSize: '1.8rem',
        mt: 0.5,
    },
    benefitText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.05rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
    },
};

const benefits = [
    {
        icon: <TrendingUpIcon sx={styles.icon} />,
        title: 'Maximum Value',
        description:
            'Get the highest market value for your land through our expertise in property development and strategic location analysis.',
    },
    {
        icon: <VerifiedIcon sx={styles.icon} />,
        title: 'Transparent Process',
        description:
            'Complete transparency throughout the development process with regular updates and clear documentation at every stage.',
    },
    {
        icon: <HandshakeIcon sx={styles.icon} />,
        title: 'Fair Partnership',
        description:
            'Equitable profit sharing based on mutually agreed terms that respect your investment and our development expertise.',
    },
    {
        icon: <ConstructionIcon sx={styles.icon} />,
        title: 'Quality Construction',
        description:
            'Premium quality construction with careful planning and execution, ensuring the highest standards for your property.',
    },
    {
        icon: <AccountBalanceIcon sx={styles.icon} />,
        title: 'Legal Security',
        description:
            'Complete legal protection with proper agreements, documentation, and compliance with all regulatory requirements.',
    },
    {
        icon: <PeopleIcon sx={styles.icon} />,
        title: 'Expert Team',
        description:
            'Access to our experienced team of architects, engineers, and real estate professionals with 29+ years of expertise.',
    },
];

const processSteps = [
    {
        title: 'Initial Consultation',
        description:
            'Contact us with your land details. Our team will schedule a meeting to understand your requirements and assess the property potential.',
    },
    {
        title: 'Land Evaluation',
        description:
            'We conduct a comprehensive evaluation of your land including location analysis, legal verification, and market assessment.',
    },
    {
        title: 'Proposal Development',
        description:
            'Based on the evaluation, we prepare a detailed proposal outlining the development plan, investment structure, and profit-sharing model.',
    },
    {
        title: 'Agreement & Documentation',
        description:
            'Upon mutual agreement, we proceed with legal documentation, ensuring all terms are clearly defined and legally binding.',
    },
    {
        title: 'Development & Construction',
        description:
            'We manage the entire development process including design, approvals, construction, and quality assurance with regular updates.',
    },
    {
        title: 'Handover & Returns',
        description:
            'Upon completion, properties are sold or transferred as per agreement, and profit sharing is executed as per contractual terms.',
    },
];

export const JointVenturePage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmitLand = () => {
        navigate({ to: '/landowner/submit' });
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Joint Venture & Land Sharing
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Partner with us to unlock the full potential of your land. We bring 29+
                        years of expertise, quality construction, and fair partnership to maximize
                        your returns.
                    </Typography>
                    <Button
                        sx={styles.heroButton}
                        endIcon={<ArrowForwardIcon />}
                        onClick={handleSubmitLand}
                    >
                        Submit Your Land
                    </Button>
                </Box>
            </Box>

            {/* What is Joint Venture Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>What is Joint Venture?</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        A mutually beneficial partnership where landowners and developers work
                        together to create valuable real estate projects
                    </Typography>

                    <Grid container spacing={4} alignItems='center'>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        fontWeight: 400,
                                        color: '#444444',
                                        lineHeight: 1.9,
                                        mb: 3,
                                        textAlign: 'justify',
                                    }}
                                >
                                    Joint Venture or Land Sharing is a collaborative approach where
                                    landowners contribute their land and we contribute our expertise,
                                    resources, and development capabilities. Together, we create
                                    premium residential projects that benefit both parties.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        fontWeight: 400,
                                        color: '#444444',
                                        lineHeight: 1.9,
                                        textAlign: 'justify',
                                    }}
                                >
                                    This arrangement allows landowners to maximize the value of their
                                    property without bearing the financial burden or complexity of
                                    development, while we utilize our proven track record and industry
                                    connections to deliver successful projects.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
                                    borderRadius: '16px',
                                    p: 4,
                                    color: '#FFFFFF',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Gilroy, sans-serif',
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        mb: 2,
                                    }}
                                >
                                    Key Features
                                </Typography>
                                <Box sx={styles.benefitItem}>
                                    <CheckCircleIcon sx={{ ...styles.benefitIcon, color: '#FFFFFF' }} />
                                    <Typography sx={{ ...styles.benefitText, color: 'rgba(255,255,255,0.95)' }}>
                                        No upfront investment required from landowner
                                    </Typography>
                                </Box>
                                <Box sx={styles.benefitItem}>
                                    <CheckCircleIcon sx={{ ...styles.benefitIcon, color: '#FFFFFF' }} />
                                    <Typography sx={{ ...styles.benefitText, color: 'rgba(255,255,255,0.95)' }}>
                                        Profit sharing based on agreed percentage
                                    </Typography>
                                </Box>
                                <Box sx={styles.benefitItem}>
                                    <CheckCircleIcon sx={{ ...styles.benefitIcon, color: '#FFFFFF' }} />
                                    <Typography sx={{ ...styles.benefitText, color: 'rgba(255,255,255,0.95)' }}>
                                        Complete project management by Premier Housing
                                    </Typography>
                                </Box>
                                <Box sx={styles.benefitItem}>
                                    <CheckCircleIcon sx={{ ...styles.benefitIcon, color: '#FFFFFF' }} />
                                    <Typography sx={{ ...styles.benefitText, color: 'rgba(255,255,255,0.95)' }}>
                                        Legal protection and transparent agreements
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Benefits Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Benefits of Partnership</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Why choose Premier Housing & Developments Ltd as your joint venture partner
                    </Typography>

                    <Grid container spacing={4}>
                        {benefits.map((benefit, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={styles.card}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={styles.iconWrapper}>{benefit.icon}</Box>
                                        <Typography sx={styles.cardTitle}>{benefit.title}</Typography>
                                        <Typography sx={styles.cardText}>
                                            {benefit.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Process Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>How It Works</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Our streamlined 6-step process from initial consultation to profit sharing
                    </Typography>

                    <Grid container spacing={4}>
                        {processSteps.map((step, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Box sx={styles.processBox}>
                                    <Box sx={styles.processNumber}>{index + 1}</Box>
                                    <Typography sx={styles.processTitle}>{step.title}</Typography>
                                    <Typography sx={styles.processText}>
                                        {step.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='md'>
                    <Box sx={styles.ctaBox}>
                        <Typography sx={styles.ctaTitle}>Ready to Get Started?</Typography>
                        <Typography sx={styles.ctaText}>
                            Submit your land details today and our team will contact you within 48
                            hours for an initial consultation. Let's discuss how we can work together
                            to create a successful real estate project.
                        </Typography>
                        <Button
                            sx={styles.ctaButton}
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleSubmitLand}
                        >
                            Submit Your Land Now
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default JointVenturePage;
