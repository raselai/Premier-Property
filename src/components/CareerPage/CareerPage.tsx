/**
 * Career Page Component
 * Displays career opportunities and company culture
 */

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    TextField,
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    WorkOutline as WorkIcon,
    TrendingUp as GrowthIcon,
    People as TeamIcon,
    EmojiEvents as AwardIcon,
    LocationOn as LocationIcon,
    Schedule as ScheduleIcon,
    Send as SendIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { ContactFooterSection } from '@/components/ContactFooterSection';

const styles: Record<string, SxProps<Theme>> = {
    heroSection: {
        position: 'relative',
        minHeight: { xs: '400px', md: '500px' },
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
        maxWidth: '800px',
        mx: 'auto',
        mb: 4,
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
    valueCard: {
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
    accordion: {
        borderRadius: '12px !important',
        mb: 2,
        boxShadow: '0 2px 12px rgba(15, 81, 50, 0.08)',
        border: '1px solid rgba(15, 81, 50, 0.1)',
        '&:before': {
            display: 'none',
        },
        '&.Mui-expanded': {
            margin: '0 0 16px 0',
            boxShadow: '0 4px 20px rgba(15, 81, 50, 0.15)',
            borderColor: '#0F5132',
        },
    },
    accordionSummary: {
        '&.Mui-expanded': {
            borderBottom: '1px solid rgba(15, 81, 50, 0.1)',
        },
    },
    jobTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.15rem', md: '1.3rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 1,
    },
    jobMeta: {
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    chip: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.85rem',
        fontWeight: 500,
    },
    jobDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        color: '#555555',
        lineHeight: 1.8,
        mb: 3,
    },
    requirementList: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        color: '#666666',
        lineHeight: 2,
        pl: 2,
    },
    applyButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: 4,
        py: 1.5,
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        mt: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'linear-gradient(135deg, #1A6B45 0%, #0F5132 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(15, 81, 50, 0.3)',
        },
    },
    applicationBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '20px',
        p: { xs: 4, md: 6 },
        color: '#FFFFFF',
    },
    formField: {
        mb: 3,
        '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '8px',
            fontFamily: 'Montserrat, sans-serif',
            '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF',
            },
        },
        '& .MuiInputLabel-root': {
            fontFamily: 'Montserrat, sans-serif',
            color: '#666666',
        },
    },
    submitButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#0F5132',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: 5,
        py: 2,
        background: '#FFFFFF',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: '#F5F5F5',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 24px rgba(255, 255, 255, 0.5)',
        },
    },
    benefitItem: {
        display: 'flex',
        alignItems: 'flex-start',
        mb: 2,
        gap: 2,
    },
    benefitIcon: {
        color: '#0F5132',
        fontSize: '1.5rem',
    },
    benefitText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
    },
};

const companyValues = [
    {
        icon: <GrowthIcon sx={styles.icon} />,
        title: 'Professional Growth',
        description:
            'We invest in our team members through continuous training, mentorship programs, and career development opportunities to help you reach your full potential.',
    },
    {
        icon: <TeamIcon sx={styles.icon} />,
        title: 'Collaborative Culture',
        description:
            'Work alongside talented professionals in a supportive environment that values teamwork, innovation, and mutual respect.',
    },
    {
        icon: <AwardIcon sx={styles.icon} />,
        title: 'Competitive Benefits',
        description:
            'Enjoy comprehensive benefits including health insurance, performance bonuses, annual increments, and festival allowances.',
    },
    {
        icon: <WorkIcon sx={styles.icon} />,
        title: 'Impactful Work',
        description:
            'Contribute to meaningful projects that shape the skyline of Bangladesh and create homes where families build their futures.',
    },
];

const jobOpenings = [
    {
        title: 'Senior Civil Engineer',
        department: 'Engineering',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '5-8 years',
        description:
            'We are seeking an experienced Civil Engineer to oversee construction projects, ensure quality standards, and manage site operations for our residential developments.',
        requirements: [
            'Bachelor\'s degree in Civil Engineering from a recognized university',
            'Minimum 5 years of experience in residential construction projects',
            'Strong knowledge of BNBC (Bangladesh National Building Code)',
            'Proficiency in AutoCAD, Revit, and other engineering software',
            'Excellent project management and leadership skills',
            'Valid Professional Engineer (PE) license preferred',
        ],
    },
    {
        title: 'Marketing Manager',
        department: 'Marketing',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '4-6 years',
        description:
            'Join our marketing team to develop and execute strategic marketing campaigns that promote our premium residential projects to target audiences.',
        requirements: [
            'Bachelor\'s or Master\'s degree in Marketing, Business Administration, or related field',
            'Minimum 4 years of experience in real estate marketing',
            'Proven track record in digital marketing and brand management',
            'Strong understanding of Bangladesh real estate market',
            'Excellent communication and presentation skills',
            'Creative thinking and analytical mindset',
        ],
    },
    {
        title: 'Architect',
        department: 'Design',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '3-5 years',
        description:
            'We\'re looking for a creative architect to design innovative residential spaces that blend functionality, aesthetics, and sustainability.',
        requirements: [
            'Bachelor\'s degree in Architecture from a recognized university',
            'Minimum 3 years of professional experience',
            'Proficiency in AutoCAD, SketchUp, Revit, and 3D rendering software',
            'Strong portfolio demonstrating residential project experience',
            'Knowledge of green building practices and sustainable design',
            'Registration with Institute of Architects Bangladesh (IAB) preferred',
        ],
    },
    {
        title: 'Sales Executive',
        department: 'Sales',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '2-4 years',
        description:
            'Seeking dynamic sales professionals to help clients find their dream homes and achieve sales targets through excellent customer service.',
        requirements: [
            'Bachelor\'s degree in any discipline',
            'Minimum 2 years of sales experience, preferably in real estate',
            'Excellent interpersonal and negotiation skills',
            'Strong customer relationship management abilities',
            'Self-motivated with proven ability to meet sales targets',
            'Fluency in English and Bengali',
        ],
    },
    {
        title: 'Accounts Manager',
        department: 'Finance',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '4-7 years',
        description:
            'Manage financial operations, budgeting, and reporting for our real estate development projects while ensuring compliance with accounting standards.',
        requirements: [
            'Bachelor\'s or Master\'s degree in Accounting or Finance',
            'CA/ACCA/CMA qualification preferred',
            'Minimum 4 years of experience in accounting, preferably in real estate',
            'Strong knowledge of accounting software and ERP systems',
            'Excellent analytical and problem-solving skills',
            'Understanding of VAT, tax regulations, and financial compliance',
        ],
    },
];

const benefits = [
    'Competitive salary package with annual increments',
    'Health insurance coverage for employees and family',
    'Performance-based bonuses and incentives',
    'Festival bonuses (2 times per year)',
    'Provident fund and gratuity benefits',
    'Paid annual leave and sick leave',
    'Professional training and development programs',
    'Friendly and collaborative work environment',
];

export const CareerPage: React.FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Build Your Career With Us
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Join a team of passionate professionals creating exceptional residential
                        projects and shaping the future of Bangladesh's real estate industry
                    </Typography>
                </Box>
            </Box>

            {/* Why Join Us Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Why Join Premier Housing?</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        We believe in nurturing talent, fostering innovation, and creating an
                        environment where every team member can thrive and grow
                    </Typography>

                    <Grid container spacing={4}>
                        {companyValues.map((value, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card sx={styles.valueCard}>
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

            {/* Current Openings Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Current Openings</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Explore exciting opportunities to join our growing team and contribute to
                        landmark residential projects
                    </Typography>

                    {jobOpenings.map((job, index) => {
                        const panelId = `job-${index}`;
                        return (
                            <Accordion
                                key={index}
                                expanded={expanded === panelId}
                                onChange={handleChange(panelId)}
                                sx={styles.accordion}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: '#0F5132' }} />}
                                    sx={styles.accordionSummary}
                                >
                                    <Box sx={{ width: '100%' }}>
                                        <Typography sx={styles.jobTitle}>{job.title}</Typography>
                                        <Box sx={styles.jobMeta}>
                                            <Chip
                                                icon={<WorkIcon sx={{ fontSize: '1rem' }} />}
                                                label={job.department}
                                                size='small'
                                                sx={styles.chip}
                                            />
                                            <Chip
                                                icon={<LocationIcon sx={{ fontSize: '1rem' }} />}
                                                label={job.location}
                                                size='small'
                                                sx={styles.chip}
                                            />
                                            <Chip
                                                icon={<ScheduleIcon sx={{ fontSize: '1rem' }} />}
                                                label={job.type}
                                                size='small'
                                                sx={styles.chip}
                                            />
                                            <Chip
                                                label={`Experience: ${job.experience}`}
                                                size='small'
                                                sx={{
                                                    ...styles.chip,
                                                    backgroundColor: '#0F5132',
                                                    color: '#FFFFFF',
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ p: 4 }}>
                                    <Typography sx={styles.jobDescription}>
                                        {job.description}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            ...styles.jobTitle,
                                            fontSize: '1.1rem',
                                            mb: 2,
                                        }}
                                    >
                                        Requirements:
                                    </Typography>
                                    <Box component='ul' sx={styles.requirementList}>
                                        {job.requirements.map((req, reqIndex) => (
                                            <li key={reqIndex}>
                                                <Typography
                                                    component='span'
                                                    sx={{
                                                        fontFamily: 'Montserrat, sans-serif',
                                                        fontSize: '0.95rem',
                                                    }}
                                                >
                                                    {req}
                                                </Typography>
                                            </li>
                                        ))}
                                    </Box>

                                    <Button sx={styles.applyButton} endIcon={<SendIcon />}>
                                        Apply Now
                                    </Button>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </Container>
            </Box>

            {/* Benefits Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Employee Benefits</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        We offer comprehensive benefits to support your well-being and professional
                        growth
                    </Typography>

                    <Grid container spacing={3}>
                        {benefits.map((benefit, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Box sx={styles.benefitItem}>
                                    <CheckCircleIcon sx={styles.benefitIcon} />
                                    <Typography sx={styles.benefitText}>{benefit}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Application Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='md'>
                    <Box sx={styles.applicationBox}>
                        <Typography
                            sx={{
                                fontFamily: 'Gilroy, sans-serif',
                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                fontWeight: 700,
                                mb: 2,
                                textAlign: 'center',
                            }}
                        >
                            Send Us Your CV
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                mb: 4,
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.95)',
                            }}
                        >
                            Don't see a position that fits? Send us your CV and we'll keep you in
                            mind for future opportunities
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label='Full Name'
                                    variant='outlined'
                                    sx={styles.formField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label='Email Address'
                                    type='email'
                                    variant='outlined'
                                    sx={styles.formField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label='Phone Number'
                                    type='tel'
                                    variant='outlined'
                                    sx={styles.formField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label='Position of Interest'
                                    variant='outlined'
                                    sx={styles.formField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label='Cover Letter'
                                    multiline
                                    rows={4}
                                    variant='outlined'
                                    sx={styles.formField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Button sx={styles.submitButton} endIcon={<SendIcon />}>
                                        Submit Application
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default CareerPage;
