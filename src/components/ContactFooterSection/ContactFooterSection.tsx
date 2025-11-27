/**
 * Contact & Footer Section Component
 * Combined contact form with background image and footer with newsletter
 */

import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const contactFooterStyles: Record<string, SxProps<Theme>> = {
    // Contact Section with Background
    contactSection: {
        position: 'relative',
        minHeight: { xs: 'auto', md: '600px' },
        backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 8, lg: 10 },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1,
        },
    },
    contactContent: {
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
    },
    sectionLabel: {
        position: { xs: 'static', md: 'absolute' },
        top: { md: '30px' },
        left: { md: '40px' },
        display: 'inline-block',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '8px 16px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#FFFFFF',
        fontWeight: 400,
        mb: { xs: 3, md: 0 },
    },
    contactGrid: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'flex-start' },
        gap: { xs: 4, md: 6 },
        mt: { xs: 0, md: 8 },
    },
    leftContent: {
        flex: 1,
        maxWidth: { md: '500px' },
    },
    contactHeading: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '36px', sm: '48px', md: '58px' },
        fontWeight: 800,
        lineHeight: 1.15,
        color: '#FFFFFF',
        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
        mb: { xs: 2, md: 3 },
    },
    contactDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '14px', md: '16px' },
        lineHeight: 1.6,
        color: 'rgba(255, 255, 255, 0.95)',
        textShadow: '0 1px 10px rgba(0,0,0,0.3)',
        maxWidth: '350px',
        mb: { xs: 3, md: 0 },
    },
    featureTags: {
        display: { xs: 'flex', md: 'flex' },
        gap: '10px',
        mt: { xs: 3, md: 20 },
        flexWrap: 'wrap',
    },
    featureTag: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '10px 20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        color: '#FFFFFF',
        fontWeight: 500,
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: { xs: '30px 25px', md: '40px 35px' },
        width: { xs: '100%', md: '380px' },
        border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    formField: {
        mb: 1,
        '& .MuiInputBase-root': {
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            '&::before': {
                borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
            },
            '&:hover:not(.Mui-disabled)::before': {
                borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
            },
            '&::after': {
                borderBottom: '2px solid #FFFFFF',
            },
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'rgba(255, 255, 255, 0.7)',
            opacity: 1,
        },
    },
    submitButton: {
        backgroundColor: '#FFFFFF',
        color: '#2D2D2D',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: '30px',
        padding: '12px 20px 12px 24px',
        mt: 3,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        '&:hover': {
            backgroundColor: '#F5F5F5',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '18px',
            backgroundColor: '#2D2D2D',
            color: '#FFFFFF',
            borderRadius: '50%',
            padding: '4px',
            width: '24px',
            height: '24px',
        },
    },
    // Brand Watermark Section
    brandSection: {
        backgroundColor: '#FFFFFF',
        py: { xs: 6, md: 10 },
        textAlign: 'center',
        overflow: 'hidden',
    },
    brandText: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '15vw', md: '18vw' },
        fontWeight: 800,
        color: '#F0F0F0',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        userSelect: 'none',
        opacity: 0.5,
    },
    // Footer Section
    footerSection: {
        backgroundColor: '#FFFFFF',
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 8, lg: 10 },
    },
    footerGrid: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1.5fr' },
        gap: { xs: 5, md: 6 },
        maxWidth: '1400px',
        mx: 'auto',
    },
    newsletterHeading: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '22px', md: '28px' },
        fontWeight: 700,
        lineHeight: 1.25,
        color: '#2D2D2D',
        mb: 3,
        maxWidth: '320px',
    },
    newsletterInput: {
        width: '100%',
        maxWidth: '280px',
        '& .MuiInputBase-root': {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            color: '#2D2D2D',
            '&::before': {
                borderBottom: '1px solid #979797',
            },
            '&:hover:not(.Mui-disabled)::before': {
                borderBottom: '1px solid #2D2D2D',
            },
            '&::after': {
                borderBottom: '2px solid #2D2D2D',
            },
        },
        '& .MuiInputBase-input::placeholder': {
            color: '#979797',
            opacity: 1,
        },
    },
    socialIcons: {
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        gap: { xs: 2, md: 1.5 },
        mt: { xs: 0, md: 0 },
    },
    socialIcon: {
        width: '44px',
        height: '44px',
        border: '1px solid #E0E0E0',
        color: '#2D2D2D',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#2D2D2D',
            backgroundColor: 'rgba(45, 45, 45, 0.05)',
        },
    },
    navLinks: {
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1.5, md: 2 },
    },
    navLink: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '15px',
        color: '#2D2D2D',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            color: '#CE9443',
        },
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    contactText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '15px',
        color: '#2D2D2D',
    },
    // Bottom Bar
    bottomBar: {
        borderTop: '1px solid #EEEEEE',
        py: 3,
        px: { xs: 3, md: 8, lg: 10 },
        backgroundColor: '#FFFFFF',
    },
    bottomContent: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: { xs: 2, sm: 0 },
        maxWidth: '1400px',
        mx: 'auto',
    },
    copyright: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        color: '#979797',
    },
    bottomLinks: {
        display: 'flex',
        gap: { xs: 3, sm: 5 },
    },
    bottomLink: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        color: '#979797',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#2D2D2D',
        },
    },
};

export const ContactFooterSection: React.FC = () => {
    return (
        <>
            {/* Contact Section with Background Image */}
            <Box sx={contactFooterStyles.contactSection}>
                <Box sx={contactFooterStyles.contactContent}>
                    <Typography sx={contactFooterStyles.sectionLabel}>04 - contacts</Typography>

                    <Box sx={contactFooterStyles.contactGrid}>
                        {/* Left Content */}
                        <Box sx={contactFooterStyles.leftContent}>
                            <Typography sx={contactFooterStyles.contactHeading}>
                                LET'S BUILD
                                <br />
                                TOGETHER
                            </Typography>

                            <Typography sx={contactFooterStyles.contactDescription}>
                                Contact us to discuss your idea and bring it to reality, creating a unique space designed for your future success.
                            </Typography>

                            {/* Feature Tags */}
                            <Box sx={contactFooterStyles.featureTags}>
                                <Typography sx={contactFooterStyles.featureTag}>Future</Typography>
                                <Typography sx={contactFooterStyles.featureTag}>Modern</Typography>
                                <Typography sx={contactFooterStyles.featureTag}>Elegance</Typography>
                            </Box>
                        </Box>

                        {/* Right Content - Contact Form */}
                        <Box sx={contactFooterStyles.formContainer}>
                            <TextField
                                fullWidth
                                variant='standard'
                                placeholder='Your Name'
                                sx={contactFooterStyles.formField}
                            />
                            <TextField
                                fullWidth
                                variant='standard'
                                type='email'
                                placeholder='Email'
                                sx={contactFooterStyles.formField}
                            />
                            <TextField
                                fullWidth
                                variant='standard'
                                type='tel'
                                placeholder='Phone Number'
                                sx={contactFooterStyles.formField}
                            />
                            <TextField
                                fullWidth
                                variant='standard'
                                placeholder='How can we help'
                                sx={contactFooterStyles.formField}
                            />

                            <Button sx={contactFooterStyles.submitButton}>
                                Send Message
                                <ArrowOutwardIcon />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Brand Watermark Section */}
            <Box sx={contactFooterStyles.brandSection}>
                <Typography sx={contactFooterStyles.brandText}>PREMIER</Typography>
            </Box>

            {/* Footer Section */}
            <Box sx={contactFooterStyles.footerSection}>
                <Box sx={contactFooterStyles.footerGrid}>
                    {/* Newsletter Column */}
                    <Box>
                        <Typography sx={contactFooterStyles.newsletterHeading}>
                            BE AMONG THE FIRST TO EXPLORE OUR FUTURE.
                        </Typography>
                        <TextField
                            variant='standard'
                            placeholder='Your Email'
                            sx={contactFooterStyles.newsletterInput}
                            InputProps={{
                                endAdornment: (
                                    <ArrowForwardIcon sx={{ color: '#2D2D2D', fontSize: '20px', cursor: 'pointer' }} />
                                ),
                            }}
                        />
                    </Box>

                    {/* Social Media Column */}
                    <Box sx={contactFooterStyles.socialIcons}>
                        <IconButton sx={contactFooterStyles.socialIcon}>
                            <FacebookOutlinedIcon />
                        </IconButton>
                        <IconButton sx={contactFooterStyles.socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={contactFooterStyles.socialIcon}>
                            <XIcon />
                        </IconButton>
                    </Box>

                    {/* Navigation Links Column */}
                    <Box sx={contactFooterStyles.navLinks}>
                        <Typography sx={contactFooterStyles.navLink}>Home</Typography>
                        <Typography sx={contactFooterStyles.navLink}>About us</Typography>
                        <Typography sx={contactFooterStyles.navLink}>Services</Typography>
                        <Typography sx={contactFooterStyles.navLink}>Portfolio</Typography>
                        <Typography sx={contactFooterStyles.navLink}>Contacts</Typography>
                    </Box>

                    {/* Contact Info Column */}
                    <Box sx={contactFooterStyles.contactInfo}>
                        <Typography sx={contactFooterStyles.contactText}>
                            +880 1234 567 890
                        </Typography>
                        <Typography sx={contactFooterStyles.contactText}>
                            premier@housing.com
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Bar */}
            <Box sx={contactFooterStyles.bottomBar}>
                <Box sx={contactFooterStyles.bottomContent}>
                    <Typography sx={contactFooterStyles.copyright}>
                        © 2025 PREMIER. All rights reserved.
                    </Typography>

                    <Box sx={contactFooterStyles.bottomLinks}>
                        <Typography sx={contactFooterStyles.bottomLink}>Privacy Policy</Typography>
                        <Typography sx={contactFooterStyles.bottomLink}>Terms of Use</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ContactFooterSection;
