/**
 * How to Buy Page Component
 * Step-by-step guide for purchasing property
 */

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    Description as DocumentIcon,
    Gavel as GavelIcon,
    HomeWork as HomeWorkIcon,
    CheckCircle as CheckCircleIcon,
    AccountBalance as BankIcon,
} from '@mui/icons-material';
import { ContactFooterSection } from '@/components/ContactFooterSection';

const styles: Record<string, SxProps<Theme>> = {
    heroSection: {
        position: 'relative',
        minHeight: { xs: '300px', md: '400px' },
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
            background: 'radial-gradient(circle at 40% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
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
        maxWidth: '800px',
        mx: 'auto',
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
    stepCard: {
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(15, 81, 50, 0.12)',
        border: '2px solid rgba(15, 81, 50, 0.1)',
        transition: 'all 0.3s ease',
        height: '100%',
        '&:hover': {
            borderColor: '#0F5132',
            boxShadow: '0 12px 40px rgba(15, 81, 50, 0.18)',
            transform: 'translateY(-4px)',
        },
    },
    stepNumber: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.8rem',
        fontWeight: 700,
        color: '#FFFFFF',
        mb: 3,
        boxShadow: '0 4px 16px rgba(15, 81, 50, 0.3)',
    },
    stepTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.3rem', md: '1.5rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 2,
    },
    stepText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
        mb: 2,
    },
    requirementCard: {
        background: '#FFFFFF',
        borderRadius: '16px',
        p: 3,
        mb: 2,
        border: '1px solid rgba(15, 81, 50, 0.15)',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 8px 24px rgba(15, 81, 50, 0.12)',
            borderColor: '#0F5132',
        },
    },
    requirementTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.2rem',
        fontWeight: 700,
        color: '#0F5132',
        mb: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
    },
    requirementText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
        mb: 1,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
    },
    iconWrapper: {
        color: '#0F5132',
        fontSize: '2rem',
    },
    highlightBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '20px',
        p: { xs: 4, md: 5 },
        color: '#FFFFFF',
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
    highlightTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.5rem', md: '1.8rem' },
        fontWeight: 700,
        mb: 2,
        position: 'relative',
        zIndex: 1,
    },
    highlightText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.05rem' },
        fontWeight: 400,
        lineHeight: 1.8,
        color: 'rgba(255,255,255,0.95)',
        position: 'relative',
        zIndex: 1,
        mb: 1.5,
    },
};

const buyingSteps = [
    {
        title: 'Property Selection',
        description: 'Browse our available projects and select the apartment that matches your requirements and budget. Visit our office or project site for detailed information and site visits.',
        details: [
            'Review project brochures and floor plans',
            'Schedule site visits at your convenience',
            'Consult with our sales team for recommendations',
            'Compare different units and pricing options',
        ],
    },
    {
        title: 'Initial Booking',
        description: 'Reserve your chosen apartment by paying the booking money. This secures your unit and initiates the purchase process.',
        details: [
            'Complete the booking form with required information',
            'Pay booking money (typically 5-10% of total price)',
            'Receive booking confirmation and receipt',
            'Get preliminary documentation checklist',
        ],
    },
    {
        title: 'Documentation & Verification',
        description: 'Submit required documents and complete verification process. Our team will guide you through each document requirement.',
        details: [
            'Submit National ID, passport-size photos',
            'Provide income proof and bank statements',
            'Complete KYC (Know Your Customer) forms',
            'Verification process (typically 3-5 business days)',
        ],
    },
    {
        title: 'Agreement Signing',
        description: 'Sign the Sale Agreement with Premier Housing after document verification. This is a legally binding contract.',
        details: [
            'Review Sale Agreement terms and conditions',
            'Sign agreement with witnesses present',
            'Pay stamp duty and registration fees',
            'Receive copy of signed agreement',
        ],
    },
    {
        title: 'Payment Schedule',
        description: 'Follow the agreed payment schedule with flexible installment options. We offer convenient payment plans to suit your financial situation.',
        details: [
            'Down payment (typically 20-30%)',
            'Monthly/quarterly installments',
            'Construction-linked payment stages',
            'Bank loan assistance if required',
        ],
    },
    {
        title: 'Construction Updates',
        description: 'Receive regular updates on construction progress. We keep you informed at every stage of development.',
        details: [
            'Monthly progress reports and photos',
            'Site visit permissions during construction',
            'Quality assurance updates',
            'Estimated completion timeline updates',
        ],
    },
    {
        title: 'Pre-Handover Inspection',
        description: 'Conduct thorough inspection of your apartment before final handover. We ensure everything meets quality standards.',
        details: [
            'Schedule inspection appointment',
            'Check all fixtures and fittings',
            'Report any defects for correction',
            'Approve final finishing work',
        ],
    },
    {
        title: 'Handover & Registration',
        description: 'Complete final payment and receive possession of your apartment. Legal registration and handover formalities are completed.',
        details: [
            'Clear all outstanding payments',
            'Sign handover documents',
            'Complete property registration at Sub-Registry Office',
            'Receive keys and possession certificate',
        ],
    },
];

const requirements = [
    {
        title: 'For Bangladeshi Nationals',
        icon: <DocumentIcon sx={styles.iconWrapper} />,
        items: [
            'Valid National ID Card or Passport',
            'Recent passport-size photographs (4 copies)',
            'TIN Certificate (Tax Identification Number)',
            'Bank solvency certificate or income proof',
            'Utility bill copy (as address proof)',
        ],
    },
    {
        title: 'For Non-Resident Bangladeshis (NRB)',
        icon: <HomeWorkIcon sx={styles.iconWrapper} />,
        items: [
            'Valid Passport copy',
            'Work permit or residency permit of current country',
            'NRB certificate from Bangladesh Embassy',
            'Authorization letter if represented by someone',
            'Foreign address proof and contact details',
        ],
    },
    {
        title: 'For Foreign Nationals',
        icon: <GavelIcon sx={styles.iconWrapper} />,
        items: [
            'Valid Passport with visa',
            'Work permit in Bangladesh',
            'Authorization from Bangladesh Investment Development Authority (BIDA)',
            'Foreign address and Bangladesh address proof',
            'Company registration (if corporate purchase)',
        ],
    },
];

export const HowToBuyPage: React.FC = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        How to Buy
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Your comprehensive guide to purchasing your dream apartment with Premier
                        Housing & Developments Ltd
                    </Typography>
                </Box>
            </Box>

            {/* Buying Process Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>8-Step Buying Process</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        From property selection to final handover, we guide you through every step
                        with transparency and professionalism
                    </Typography>

                    <Grid container spacing={4}>
                        {buyingSteps.map((step, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card sx={styles.stepCard}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={styles.stepNumber}>{index + 1}</Box>
                                        <Typography sx={styles.stepTitle}>{step.title}</Typography>
                                        <Typography sx={styles.stepText}>
                                            {step.description}
                                        </Typography>
                                        <Box component='ul' sx={{ pl: 2, mt: 2 }}>
                                            {step.details.map((detail, idx) => (
                                                <Typography
                                                    component='li'
                                                    key={idx}
                                                    sx={{
                                                        ...styles.stepText,
                                                        fontSize: '0.9rem',
                                                        mb: 1,
                                                    }}
                                                >
                                                    {detail}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Required Documents Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Required Documents</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Documents needed based on your buyer category
                    </Typography>

                    <Grid container spacing={4}>
                        {requirements.map((req, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box sx={styles.requirementCard}>
                                    <Typography sx={styles.requirementTitle}>
                                        {req.icon}
                                        {req.title}
                                    </Typography>
                                    {req.items.map((item, idx) => (
                                        <Typography key={idx} sx={styles.requirementText}>
                                            <CheckCircleIcon
                                                sx={{
                                                    color: '#0F5132',
                                                    fontSize: '1.2rem',
                                                    mt: 0.3,
                                                }}
                                            />
                                            {item}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Additional Information Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box sx={styles.highlightBox}>
                                <Typography sx={styles.highlightTitle}>
                                    Bank Loan Assistance
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    <BankIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                                    We assist with home loan processing
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Partnership with major banks in Bangladesh
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Competitive interest rates and flexible tenure
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Up to 80% loan-to-value ratio available
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Simplified documentation and quick approval
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={styles.highlightBox}>
                                <Typography sx={styles.highlightTitle}>
                                    Legal Protection
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    <GavelIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                                    Your investment is completely secure
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Clear land titles verified by legal experts
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ RAJUK-approved building plans
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Registered sale agreements
                                </Typography>
                                <Typography sx={styles.highlightText}>
                                    ✓ Full transparency in all transactions
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default HowToBuyPage;
