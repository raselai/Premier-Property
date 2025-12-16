/**
 * Milestones Page Component
 * Showcasing company's journey and key achievements
 */

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    Rocket as RocketIcon,
    Business as BusinessIcon,
    EmojiEvents as TrophyIcon,
    Groups as GroupsIcon,
    TrendingUp as TrendingUpIcon,
    Star as StarIcon,
    VerifiedUser as VerifiedIcon,
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
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
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
    timelineContainer: {
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: { xs: '20px', md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(180deg, #0F5132 0%, rgba(15, 81, 50, 0.3) 100%)',
        },
    },
    timelineItem: {
        position: 'relative',
        mb: 6,
        pl: { xs: 6, md: 0 },
    },
    timelineDot: {
        position: 'absolute',
        left: { xs: '8px', md: '50%' },
        transform: { xs: 'none', md: 'translateX(-50%)' },
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        border: '4px solid #FFFFFF',
        boxShadow: '0 4px 12px rgba(15, 81, 50, 0.3)',
        zIndex: 2,
    },
    timelineContent: {
        background: '#FFFFFF',
        borderRadius: '16px',
        p: 4,
        boxShadow: '0 4px 20px rgba(15, 81, 50, 0.08)',
        border: '1px solid rgba(15, 81, 50, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 8px 32px rgba(15, 81, 50, 0.15)',
            transform: 'translateY(-4px)',
        },
    },
    timelineYear: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.8rem', md: '2.2rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 1,
    },
    timelineTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.2rem', md: '1.4rem' },
        fontWeight: 600,
        color: '#1A1A1A',
        mb: 2,
    },
    timelineText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '0.95rem', md: '1rem' },
        fontWeight: 400,
        color: '#666666',
        lineHeight: 1.8,
    },
    achievementCard: {
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
        mb: 2,
        boxShadow: '0 4px 20px rgba(15, 81, 50, 0.25)',
    },
    icon: {
        fontSize: '2rem',
        color: '#FFFFFF',
    },
    cardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.2rem', md: '1.3rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 1.5,
        textAlign: 'center',
    },
    cardText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 400,
        color: '#666666',
        lineHeight: 1.7,
        textAlign: 'center',
    },
};

const milestones = [
    {
        year: '1995',
        title: 'Foundation & Vision',
        description:
            'Premier Housing & Developments Ltd was established with a vision to provide luxurious and comfortable homes to families across Bangladesh. Our journey began with a commitment to quality, integrity, and customer satisfaction.',
    },
    {
        year: '1996-2000',
        title: 'Early Success',
        description:
            'Successfully completed our first residential projects, establishing a reputation for quality construction and timely delivery. These early projects laid the foundation for our growth and helped us understand customer needs deeply.',
    },
    {
        year: '2001-2007',
        title: 'Expansion & Growth',
        description:
            'Expanded our operations across Dhaka, completing multiple residential apartment projects. Developed expertise in modern construction techniques and customer-centric design, creating homes that blend luxury with functionality.',
    },
    {
        year: '2008',
        title: 'REHAB Membership',
        description:
            'Became a proud member of the Real Estate and Housing Association of Bangladesh (REHAB), marking our commitment to industry standards and ethical business practices. This milestone reinforced our dedication to transparency and professionalism.',
    },
    {
        year: '2009-2015',
        title: 'Industry Leadership',
        description:
            'Active participation in REHAB committees including Customer Service & Mediation, Accounts & Audit, and Member Welfare. Contributed to shaping industry best practices and advancing customer protection standards.',
    },
    {
        year: '2016-2020',
        title: 'Innovation & Excellence',
        description:
            'Introduced innovative designs and sustainable building practices. Focused on creating value-added features and premium amenities that enhance residents quality of life. Continued to deliver projects that exceed customer expectations.',
    },
    {
        year: '2021-Present',
        title: 'Continued Growth',
        description:
            'Maintaining our legacy of excellence while embracing modern construction technologies and sustainable practices. Committed to providing luxurious homes for future generations with ongoing and upcoming projects across prime locations.',
    },
];

const keyAchievements = [
    {
        icon: <BusinessIcon sx={styles.icon} />,
        title: '29+ Years of Excellence',
        description: 'Nearly three decades of delivering quality residential projects',
    },
    {
        icon: <TrophyIcon sx={styles.icon} />,
        title: 'Successful Projects',
        description: 'Completed numerous residential apartment projects with great success',
    },
    {
        icon: <VerifiedIcon sx={styles.icon} />,
        title: 'REHAB Member Since 2008',
        description: '17+ years of active membership and industry contribution',
    },
    {
        icon: <GroupsIcon sx={styles.icon} />,
        title: 'Committee Leadership',
        description: 'Active participation in multiple REHAB committees over the years',
    },
    {
        icon: <StarIcon sx={styles.icon} />,
        title: 'Customer Satisfaction',
        description: 'Created lasting value for countless families across Bangladesh',
    },
    {
        icon: <TrendingUpIcon sx={styles.icon} />,
        title: 'Continuous Innovation',
        description: 'Constantly evolving to meet modern living standards',
    },
];

export const MilestonesPage: React.FC = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Our Milestones
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        A journey of excellence spanning nearly three decades of creating value and
                        building dreams
                    </Typography>
                </Box>
            </Box>

            {/* Timeline Section */}
            <Box sx={styles.section}>
                <Container maxWidth='md'>
                    <Typography sx={styles.sectionTitle}>Our Journey</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        From our humble beginnings in 1995 to becoming a trusted name in
                        Bangladesh's real estate industry
                    </Typography>

                    <Box sx={styles.timelineContainer}>
                        {milestones.map((milestone, index) => (
                            <Box key={index} sx={styles.timelineItem}>
                                <Box sx={styles.timelineDot} />
                                <Box
                                    sx={{
                                        ...styles.timelineContent,
                                        ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                                        mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                                        width: { xs: '100%', md: 'calc(50% - 40px)' },
                                    }}
                                >
                                    <Typography sx={styles.timelineYear}>
                                        {milestone.year}
                                    </Typography>
                                    <Typography sx={styles.timelineTitle}>
                                        {milestone.title}
                                    </Typography>
                                    <Typography sx={styles.timelineText}>
                                        {milestone.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Key Achievements Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Key Achievements</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Milestones that define our commitment to excellence and customer
                        satisfaction
                    </Typography>

                    <Grid container spacing={4}>
                        {keyAchievements.map((achievement, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={styles.achievementCard}>
                                    <CardContent sx={{ p: 3 }}>
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

            {/* Looking Forward Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Box
                        sx={{
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
                                left: '-20%',
                                width: '400px',
                                height: '400px',
                                borderRadius: '50%',
                                background:
                                    'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            },
                        }}
                    >
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <RocketIcon
                                sx={{
                                    fontSize: { xs: '3rem', md: '4rem' },
                                    color: '#FFFFFF',
                                    mb: 2,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'Gilroy, sans-serif',
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    mb: 2,
                                }}
                            >
                                Looking Forward
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,0.95)',
                                    lineHeight: 1.8,
                                    maxWidth: '700px',
                                    mx: 'auto',
                                }}
                            >
                                As we continue our journey, our mission remains unchanged: to create
                                values for our customers and provide luxurious and comfortable homes
                                for their future. With ongoing projects and exciting plans ahead, we
                                look forward to serving more families and contributing to
                                Bangladesh's real estate landscape.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default MilestonesPage;
