/**
 * Contact Us Page Component
 * EDITORIAL/MAGAZINE STYLE - Bold, asymmetric, unforgettable
 */

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container, IconButton } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    LocationOn as LocationOnIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Facebook as FacebookIcon,
    ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { ContactFooterSection } from '@/components/ContactFooterSection';

const contactPageStyles: Record<string, SxProps<Theme>> = {
    pageWrapper: {
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    },
    heroSection: {
        position: 'relative',
        minHeight: { xs: '90vh', md: '100vh' },
        backgroundColor: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    },
    heroBackground: {
        position: 'absolute',
        top: { xs: '10%', md: '-5%' },
        right: { xs: '-20%', md: '-10%' },
        fontSize: { xs: '180px', sm: '280px', md: '400px', lg: '520px' },
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 900,
        color: '#0F5132',
        opacity: 0.03,
        lineHeight: 0.9,
        letterSpacing: '-0.05em',
        userSelect: 'none',
        transform: 'rotate(-5deg)',
        zIndex: 0,
    },
    heroContent: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
    },
    heroLabel: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '11px', md: '12px' },
        fontWeight: 600,
        color: '#0F5132',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        mb: 3,
        animation: 'slideInLeft 0.8s ease-out',
        '@keyframes slideInLeft': {
            '0%': { opacity: 0, transform: 'translateX(-30px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
        },
    },
    heroTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '56px', sm: '80px', md: '120px', lg: '160px' },
        fontWeight: 900,
        color: '#1A1A1A',
        lineHeight: 0.9,
        letterSpacing: '-0.03em',
        mb: 4,
        animation: 'slideInUp 0.8s ease-out 0.2s both',
        '@keyframes slideInUp': {
            '0%': { opacity: 0, transform: 'translateY(40px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },
    },
    heroDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '16px', md: '20px', lg: '24px' },
        fontWeight: 400,
        color: '#5A5A5A',
        maxWidth: '600px',
        lineHeight: 1.6,
        animation: 'slideInUp 0.8s ease-out 0.4s both',
    },
    heroAccent: {
        position: 'absolute',
        bottom: { xs: '10%', md: '15%' },
        right: { xs: '5%', md: '10%' },
        width: { xs: '120px', md: '200px' },
        height: { xs: '120px', md: '200px' },
        backgroundColor: '#0F5132',
        borderRadius: '50%',
        opacity: 0.08,
        animation: 'float 6s ease-in-out infinite',
        '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-30px)' },
        },
    },
    infoSection: {
        position: 'relative',
        py: { xs: 10, md: 16 },
        backgroundColor: '#FFFFFF',
    },
    infoGrid: {
        position: 'relative',
    },
    infoCard: {
        position: 'relative',
        backgroundColor: '#FAFAFA',
        border: '1px solid #E8E8E8',
        borderRadius: '4px',
        p: { xs: 4, md: 5 },
        height: '100%',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            backgroundColor: '#0F5132',
            borderColor: '#0F5132',
            transform: 'translateY(-12px) rotate(-1deg)',
            boxShadow: '20px 20px 60px rgba(15, 81, 50, 0.15)',
            '& .info-label': {
                color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .info-content': {
                color: '#FFFFFF',
            },
            '& .info-icon': {
                color: '#FFFFFF',
                transform: 'scale(1.2) rotate(10deg)',
            },
        },
    },
    infoIcon: {
        fontSize: '48px',
        color: '#0F5132',
        mb: 3,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    infoLabel: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '11px',
        fontWeight: 600,
        color: '#979797',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        mb: 2,
        transition: 'color 0.5s ease',
    },
    infoContent: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '18px', md: '22px' },
        fontWeight: 600,
        color: '#2D2D2D',
        lineHeight: 1.5,
        transition: 'color 0.5s ease',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.3s ease',
            '&:hover': {
                borderColor: 'currentColor',
            },
        },
    },
    formSection: {
        position: 'relative',
        py: { xs: 10, md: 16 },
        backgroundColor: '#FAFAFA',
        overflow: 'hidden',
    },
    formDecorative: {
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        fontSize: { xs: '200px', md: '400px' },
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 900,
        color: '#0F5132',
        opacity: 0.02,
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
    },
    formTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '48px', md: '72px', lg: '96px' },
        fontWeight: 900,
        color: '#1A1A1A',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        mb: 2,
    },
    formSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '14px', md: '16px' },
        color: '#5A5A5A',
        mb: 6,
        maxWidth: '500px',
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#FFFFFF',
            borderRadius: '2px',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            '& fieldset': {
                borderColor: '#E0E0E0',
                borderWidth: '2px',
            },
            '&:hover fieldset': {
                borderColor: '#0F5132',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0F5132',
                borderWidth: '3px',
            },
        },
        '& .MuiInputLabel-root': {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            '&.Mui-focused': {
                color: '#0F5132',
                fontWeight: 600,
            },
        },
    },
    submitButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '18px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        borderRadius: '2px',
        padding: '20px 60px',
        mt: 4,
        width: { xs: '100%', sm: 'auto' },
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transition: 'left 0.4s ease',
        },
        '&:hover': {
            backgroundColor: '#0D4129',
            transform: 'translateX(8px)',
            boxShadow: '-8px 8px 0px rgba(15, 81, 50, 0.3)',
            '&::before': {
                left: '100%',
            },
        },
    },
    mapSection: {
        position: 'relative',
        py: { xs: 10, md: 16 },
        backgroundColor: '#FFFFFF',
    },
    mapWrapper: {
        position: 'relative',
        height: { xs: '400px', md: '600px' },
        backgroundColor: '#F0F0F0',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '40%',
            height: '140%',
            backgroundColor: '#0F5132',
            transform: 'rotate(15deg)',
            zIndex: 1,
            opacity: 0.05,
            pointerEvents: 'none',
        },
    },
    mapContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    mapOverlay: {
        position: 'absolute',
        bottom: { xs: 20, md: 40 },
        left: { xs: 20, md: 40 },
        backgroundColor: '#FFFFFF',
        p: { xs: 3, md: 4 },
        maxWidth: { xs: 'calc(100% - 40px)', md: '400px' },
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        zIndex: 2,
        borderLeft: '4px solid #0F5132',
    },
    mapOverlayTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '20px', md: '24px' },
        fontWeight: 700,
        color: '#1A1A1A',
        mb: 1,
    },
    mapOverlayText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        color: '#5A5A5A',
        lineHeight: 1.6,
    },
    socialSection: {
        py: 8,
        backgroundColor: '#1A1A1A',
        textAlign: 'center',
    },
    socialTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '28px', md: '36px' },
        fontWeight: 700,
        color: '#FFFFFF',
        mb: 4,
    },
    socialButton: {
        width: '72px',
        height: '72px',
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#0F5132',
            transform: 'scale(1.15) rotate(10deg)',
        },
    },
};

export const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    const mapEmbedUrl =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0697405389147!2d90.36843631543568!3d23.751579684591913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c91d0a5b7%3A0x1b9b8e8c8f8e8e8e!2sLalmatia%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd';

    return (
        <Box sx={contactPageStyles.pageWrapper}>
            {/* Hero Section - Editorial Style */}
            <Box sx={contactPageStyles.heroSection}>
                <Typography sx={contactPageStyles.heroBackground}>CONTACT</Typography>
                <Box sx={contactPageStyles.heroAccent} />

                <Container maxWidth='xl' sx={contactPageStyles.heroContent}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} lg={7}>
                            <Typography sx={contactPageStyles.heroLabel}>Let's Connect</Typography>
                            <Typography sx={contactPageStyles.heroTitle}>
                                Start Your
                                <br />
                                Journey
                            </Typography>
                            <Typography sx={contactPageStyles.heroDescription}>
                                Whether you're searching for your dream home or exploring investment opportunities, our
                                dedicated team is here to guide you every step of the way.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Contact Information - Asymmetric Grid */}
            <Box sx={contactPageStyles.infoSection}>
                <Container maxWidth='xl'>
                    <Grid container spacing={{ xs: 3, md: 4 }} sx={contactPageStyles.infoGrid}>
                        {/* Location */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={contactPageStyles.infoCard}>
                                <LocationOnIcon className='info-icon' sx={contactPageStyles.infoIcon} />
                                <Typography className='info-label' sx={contactPageStyles.infoLabel}>
                                    Visit Us
                                </Typography>
                                <Typography className='info-content' sx={contactPageStyles.infoContent}>
                                    House: 5/10, Block-E,
                                    <br />
                                    Lalmatia, Dhaka
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={contactPageStyles.infoCard}>
                                <EmailIcon className='info-icon' sx={contactPageStyles.infoIcon} />
                                <Typography className='info-label' sx={contactPageStyles.infoLabel}>
                                    Email
                                </Typography>
                                <Typography className='info-content' sx={contactPageStyles.infoContent}>
                                    <a href='mailto:premier.housing95@gmail.com'>premier.housing95@gmail.com</a>
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Phone */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={contactPageStyles.infoCard}>
                                <PhoneIcon className='info-icon' sx={contactPageStyles.infoIcon} />
                                <Typography className='info-label' sx={contactPageStyles.infoLabel}>
                                    Call Us
                                </Typography>
                                <Typography className='info-content' sx={contactPageStyles.infoContent}>
                                    <a href='tel:+8801730312576'>+88 01730 312576</a>
                                    <br />
                                    <a href='tel:+8801730312578'>+88 01730 312578</a>
                                    <br />
                                    <a href='tel:+8801730312579'>+88 01730 312579</a>
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Social */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Box sx={contactPageStyles.infoCard}>
                                <FacebookIcon className='info-icon' sx={contactPageStyles.infoIcon} />
                                <Typography className='info-label' sx={contactPageStyles.infoLabel}>
                                    Social
                                </Typography>
                                <Typography className='info-content' sx={contactPageStyles.infoContent}>
                                    <a
                                        href='https://www.facebook.com/premierhousingltd'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Facebook
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Contact Form - Bold Typography */}
            <Box sx={contactPageStyles.formSection}>
                <Typography sx={contactPageStyles.formDecorative}>MESSAGE</Typography>

                <Container maxWidth='xl'>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={5}>
                            <Typography sx={contactPageStyles.formTitle}>
                                Send Us
                                <br />A Message
                            </Typography>
                            <Typography sx={contactPageStyles.formSubtitle}>
                                We typically respond within 24 hours. Your vision deserves our full attention.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Box component='form' onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label='Your Name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            sx={contactPageStyles.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label='Email Address'
                                            name='email'
                                            type='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            sx={contactPageStyles.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label='Phone Number'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            sx={contactPageStyles.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label='Subject'
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            sx={contactPageStyles.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label='Your Message'
                                            name='message'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            multiline
                                            rows={6}
                                            sx={contactPageStyles.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type='submit'
                                            sx={contactPageStyles.submitButton}
                                            endIcon={<ArrowForwardIcon />}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Map Section - Overlapping Design */}
            <Box sx={contactPageStyles.mapSection}>
                <Container maxWidth='xl'>
                    <Box sx={contactPageStyles.mapWrapper}>
                        <Box sx={contactPageStyles.mapContainer}>
                            <iframe
                                src={mapEmbedUrl}
                                width='100%'
                                height='100%'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                title='Office Location'
                            />
                        </Box>

                        <Box sx={contactPageStyles.mapOverlay}>
                            <Typography sx={contactPageStyles.mapOverlayTitle}>Our Office</Typography>
                            <Typography sx={contactPageStyles.mapOverlayText}>
                                House: 5/10, Block-E, Lalmatia, Dhaka
                                <br />
                                <br />
                                Visit us Monday through Saturday, 10 AM - 6 PM. We look forward to welcoming you.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Social Section - Dark Contrast */}
            <Box sx={contactPageStyles.socialSection}>
                <Container maxWidth='xl'>
                    <Typography sx={contactPageStyles.socialTitle}>Stay Connected</Typography>
                    <IconButton
                        sx={contactPageStyles.socialButton}
                        href='https://www.facebook.com/premierhousingltd'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FacebookIcon fontSize='large' />
                    </IconButton>
                </Container>
            </Box>

            {/* Footer */}
            <ContactFooterSection />
        </Box>
    );
};

export default ContactPage;
