/**
 * Our Approach Page Component
 * Showcasing company's approach to real estate development
 */

import React from 'react';
import { ContactFooterSection } from '@/components/ContactFooterSection';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    Architecture as ArchitectureIcon,
    Groups as GroupsIcon,
    Verified as VerifiedIcon,
    TrendingUp as TrendingUpIcon,
    Handshake as HandshakeIcon,
    EmojiEvents as EmojiEventsIcon,
} from '@mui/icons-material';

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
            background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
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
        width: '80px',
        height: '80px',
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
        fontSize: '2.5rem',
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
    principleBox: {
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
    principleTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.3rem', md: '1.5rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    principleText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.05rem' },
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.9,
    },
    highlightBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '20px',
        p: { xs: 4, md: 6 },
        color: '#FFFFFF',
        boxShadow: '0 12px 48px rgba(15, 81, 50, 0.25)',
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
        fontSize: { xs: '1.8rem', md: '2.2rem' },
        fontWeight: 700,
        mb: 3,
        position: 'relative',
        zIndex: 1,
    },
    highlightText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.05rem', md: '1.15rem' },
        fontWeight: 400,
        lineHeight: 1.9,
        color: 'rgba(255,255,255,0.95)',
        position: 'relative',
        zIndex: 1,
        mb: 2,
    },
};

const coreValues = [
    {
        icon: <VerifiedIcon sx={styles.icon} />,
        title: 'Quality First',
        description:
            'Every project is constructed with utmost care and attention to detail, ensuring the highest standards of construction quality and durability.',
    },
    {
        icon: <ArchitectureIcon sx={styles.icon} />,
        title: 'Careful Planning',
        description:
            'We meticulously plan every aspect of our projects, from initial design to final execution, ensuring seamless delivery and customer satisfaction.',
    },
    {
        icon: <TrendingUpIcon sx={styles.icon} />,
        title: 'Value Creation',
        description:
            'Our primary focus is creating lasting value for our customers through premium locations, thoughtful designs, and exceptional amenities.',
    },
    {
        icon: <GroupsIcon sx={styles.icon} />,
        title: 'Customer-Centric',
        description:
            'We prioritize our customers needs and aspirations, working closely with them to deliver homes that exceed expectations and create lasting memories.',
    },
    {
        icon: <HandshakeIcon sx={styles.icon} />,
        title: 'Ethical Practice',
        description:
            'As a proud REHAB member, we adhere to the highest standards of business ethics, transparency, and professional integrity in all our dealings.',
    },
    {
        icon: <EmojiEventsIcon sx={styles.icon} />,
        title: 'Continuous Excellence',
        description:
            'We constantly innovate and improve our processes, incorporating modern construction techniques and sustainable practices in our developments.',
    },
];

export const OurApproachPage: React.FC = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Our Approach
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Building excellence through careful planning, quality execution, and
                        unwavering commitment to customer satisfaction
                    </Typography>
                </Box>
            </Box>

            {/* Philosophy Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Our Philosophy</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        At Premier Housing & Developments Ltd, our approach is rooted in a
                        commitment to excellence and customer value creation
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box sx={styles.principleBox}>
                                <Typography sx={styles.principleTitle}>
                                    <ArchitectureIcon sx={{ fontSize: '2rem', color: '#0F5132' }} />
                                    Meticulous Planning
                                </Typography>
                                <Typography sx={styles.principleText}>
                                    Every project begins with comprehensive planning and analysis. We
                                    carefully study location dynamics, customer preferences, and
                                    market trends to ensure our developments meet and exceed
                                    expectations. Our experienced team dedicates significant time to
                                    architectural design, structural planning, and amenity selection.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={styles.principleBox}>
                                <Typography sx={styles.principleTitle}>
                                    <VerifiedIcon sx={{ fontSize: '2rem', color: '#0F5132' }} />
                                    Effective Execution
                                </Typography>
                                <Typography sx={styles.principleText}>
                                    Our construction process is marked by efficiency and precision. We
                                    employ skilled professionals, use quality materials, and implement
                                    rigorous quality control measures at every stage. From foundation
                                    to finishing, each phase is executed with utmost care to deliver
                                    homes that stand the test of time.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Core Values Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Our Core Values</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Six fundamental principles that guide every project we undertake
                    </Typography>

                    <Grid container spacing={4}>
                        {coreValues.map((value, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={styles.card}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={styles.iconWrapper}>{value.icon}</Box>
                                        <Typography sx={styles.cardTitle}>{value.title}</Typography>
                                        <Typography sx={styles.cardText}>
                                            {value.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* REHAB Collaboration Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Industry Collaboration</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Working with REHAB to advance real estate standards in Bangladesh
                    </Typography>

                    <Box sx={styles.highlightBox}>
                        <Typography sx={styles.highlightTitle}>
                            Proud Member of REHAB Since 2008
                        </Typography>
                        <Typography sx={styles.highlightText}>
                            As a dedicated member of the Real Estate and Housing Association of
                            Bangladesh (REHAB), we actively contribute to the advancement of the
                            real estate industry. Our participation in key committees demonstrates
                            our commitment to industry best practices and customer welfare.
                        </Typography>
                        <Typography sx={styles.highlightText}>
                            <strong>Committee Participation:</strong>
                        </Typography>
                        <Typography
                            component='ul'
                            sx={{
                                ...styles.highlightText,
                                pl: 3,
                                '& li': { mb: 1 },
                            }}
                        >
                            <li>Customer Service & Mediation Committee - Ensuring customer satisfaction and dispute resolution</li>
                            <li>Accounts & Audit Committee - Maintaining financial transparency and accountability</li>
                            <li>Member Welfare Committee - Supporting fellow industry professionals</li>
                            <li>Various other committees - Contributing to industry development and regulation</li>
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Commitment Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Our Commitment</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        A promise to deliver excellence in every aspect of our work
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box sx={styles.principleBox}>
                                <Typography sx={styles.principleTitle}>
                                    To Our Customers
                                </Typography>
                                <Typography sx={styles.principleText}>
                                    We commit to creating luxurious and comfortable homes that provide
                                    lasting value. Your dreams and aspirations guide our work, and
                                    your satisfaction is our ultimate measure of success.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={styles.principleBox}>
                                <Typography sx={styles.principleTitle}>To Quality</Typography>
                                <Typography sx={styles.principleText}>
                                    Every material, every design choice, and every construction
                                    decision is made with quality in mind. We never compromise on
                                    standards, ensuring your home is built to last generations.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={styles.principleBox}>
                                <Typography sx={styles.principleTitle}>To Innovation</Typography>
                                <Typography sx={styles.principleText}>
                                    We continuously evolve our approach, incorporating modern
                                    construction techniques, sustainable practices, and innovative
                                    designs to deliver homes that meet contemporary living standards.
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

export default OurApproachPage;
