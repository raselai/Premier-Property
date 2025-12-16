/**
 * About Us Page Component
 * Main about page showcasing company history, mission, and achievements
 */

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    Business as BusinessIcon,
    EmojiEvents as TrophyIcon,
    Handshake as HandshakeIcon,
    AccountBalance as AccountBalanceIcon,
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
        maxWidth: '700px',
        mx: 'auto',
    },
    section: {
        py: { xs: 8, md: 12 },
    },
    sectionWithBackground: {
        py: { xs: 8, md: 12 },
        background: '#FAFAFA',
    },
    sectionStory: {
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
    storyText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.1rem' },
        fontWeight: 400,
        color: '#444444',
        lineHeight: 1.9,
        mb: 3,
        textAlign: 'justify',
    },
    highlightBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '16px',
        p: 4,
        color: '#FFFFFF',
        boxShadow: '0 8px 32px rgba(15, 81, 50, 0.2)',
    },
    highlightTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.5rem', md: '1.8rem' },
        fontWeight: 700,
        mb: 2,
    },
    highlightText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.1rem' },
        fontWeight: 400,
        lineHeight: 1.8,
        color: 'rgba(255,255,255,0.95)',
    },
    statBox: {
        textAlign: 'center',
        p: 3,
    },
    statNumber: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '2.5rem', md: '3rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 1,
    },
    statLabel: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '0.9rem', md: '1rem' },
        fontWeight: 600,
        color: '#666666',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
};

const achievements = [
    {
        icon: <BusinessIcon sx={styles.icon} />,
        title: 'Established Excellence',
        description:
            'Since our inception in 1995, we have completed numerous residential apartment projects with great success, consistently creating value for our customers.',
    },
    {
        icon: <TrophyIcon sx={styles.icon} />,
        title: 'Quality Construction',
        description:
            'Our apartment building projects are constructed with utmost care, careful planning, and effective & efficient execution, ensuring lasting quality.',
    },
    {
        icon: <AccountBalanceIcon sx={styles.icon} />,
        title: 'REHAB Membership',
        description:
            'Proud member of the Real Estate and Housing Association of Bangladesh (REHAB) since 2008, actively participating in industry advancement.',
    },
    {
        icon: <HandshakeIcon sx={styles.icon} />,
        title: 'Industry Leadership',
        description:
            'We have worked closely with REHAB on committees including Customer Service & Mediation, Accounts & Audit, and Member Welfare.',
    },
];

export const AboutUsPage: React.FC = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        About Us
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Creating luxurious and comfortable homes since 1995
                    </Typography>
                </Box>
            </Box>

            {/* Our Story Section */}
            <Box sx={styles.sectionStory}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Our Story</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Building dreams, creating value, and delivering excellence for nearly three
                        decades
                    </Typography>

                    <Grid container spacing={4} alignItems='center'>
                        <Grid item xs={12} md={6}>
                            <Typography sx={styles.storyText}>
                                Since our inception in 1995, Premier Housing & Developments Ltd has
                                completed many residential apartment projects with great success and
                                have created values for our customers. Our apartment building
                                projects are constructed with utmost care, careful planning as well as
                                effective & efficient execution.
                            </Typography>
                            <Typography sx={styles.storyText}>
                                Premier Housing & Developments Ltd. have been a member of Real Estate
                                and Housing Association of Bangladesh (REHAB) since 2008, and we have
                                worked closely with REHAB on committees such as Customer Service &
                                Mediation Committee, Accounts & Audit Committee, Member Welfare
                                Committee and various other committees throughout the years.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={styles.highlightBox}>
                                <Typography sx={styles.highlightTitle}>Our Mission</Typography>
                                <Typography sx={styles.highlightText}>
                                    Our mission at Premier Housing & Developments Ltd is to continue
                                    to create values for our customers and provide luxurious and
                                    comfortable homes for their future.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Key Statistics */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={3}>
                            <Box sx={styles.statBox}>
                                <Typography sx={styles.statNumber}>1995</Typography>
                                <Typography sx={styles.statLabel}>Established</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box sx={styles.statBox}>
                                <Typography sx={styles.statNumber}>29+</Typography>
                                <Typography sx={styles.statLabel}>Years of Excellence</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box sx={styles.statBox}>
                                <Typography sx={styles.statNumber}>2008</Typography>
                                <Typography sx={styles.statLabel}>REHAB Member</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box sx={styles.statBox}>
                                <Typography sx={styles.statNumber}>100%</Typography>
                                <Typography sx={styles.statLabel}>Customer Focus</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Achievements Section */}
            <Box sx={styles.sectionWithBackground}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Our Achievements</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Milestones that define our commitment to excellence and customer satisfaction
                    </Typography>

                    <Grid container spacing={4}>
                        {achievements.map((achievement, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card sx={styles.card}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={styles.iconWrapper}>{achievement.icon}</Box>
                                        <Typography sx={styles.cardTitle}>
                                            {achievement.title}
                                        </Typography>
                                        <Typography sx={styles.cardText}>
                                            {achievement.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutUsPage;
