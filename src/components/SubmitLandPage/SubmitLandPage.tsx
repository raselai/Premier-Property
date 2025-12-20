/**
 * Submit Land Page Component
 * Form for landowners to submit their land details
 */

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    MenuItem,
    Alert,
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    Send as SendIcon,
    LocationOn as LocationIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { ContactFooterSection } from '@/components/ContactFooterSection';

const styles: Record<string, SxProps<Theme>> = {
    heroSection: {
        position: 'relative',
        minHeight: { xs: '300px', md: '350px' },
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
            background: 'radial-gradient(circle at 60% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
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
    formCard: {
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(15, 81, 50, 0.12)',
        border: '1px solid rgba(15, 81, 50, 0.1)',
        overflow: 'visible',
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.5rem', md: '1.8rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 1,
    },
    sectionSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#666666',
        mb: 4,
        lineHeight: 1.6,
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            fontFamily: 'Montserrat, sans-serif',
            '&:hover fieldset': {
                borderColor: '#0F5132',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0F5132',
            },
        },
        '& .MuiInputLabel-root': {
            fontFamily: 'Montserrat, sans-serif',
            '&.Mui-focused': {
                color: '#0F5132',
            },
        },
    },
    submitButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '12px',
        px: 5,
        py: 2,
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        boxShadow: '0 4px 20px rgba(15, 81, 50, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'linear-gradient(135deg, #1A6B45 0%, #0F5132 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 24px rgba(15, 81, 50, 0.4)',
        },
        '&:disabled': {
            background: '#CCCCCC',
            color: '#666666',
        },
    },
    infoCard: {
        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
        borderRadius: '16px',
        p: 3,
        border: '1px solid rgba(15, 81, 50, 0.1)',
        mb: 3,
    },
    infoTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.3rem',
        fontWeight: 700,
        color: '#0F5132',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    infoText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
        mb: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
    },
};

const landTypes = ['Residential', 'Commercial', 'Mixed Use', 'Agricultural', 'Industrial'];
const landSizes = [
    'Less than 3 Katha',
    '3-5 Katha',
    '5-10 Katha',
    '10-20 Katha',
    '20+ Katha',
];

export const SubmitLandPage: React.FC = () => {
    const [formData, setFormData] = useState({
        ownerName: '',
        phone: '',
        email: '',
        location: '',
        area: '',
        landSize: '',
        landType: '',
        ownership: '',
        additionalInfo: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                ownerName: '',
                phone: '',
                email: '',
                location: '',
                area: '',
                landSize: '',
                landType: '',
                ownership: '',
                additionalInfo: '',
            });
        }, 5000);
    };

    const isFormValid =
        formData.ownerName &&
        formData.phone &&
        formData.email &&
        formData.location &&
        formData.area &&
        formData.landSize &&
        formData.landType;

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Submit Your Land
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Share your land details with us and our team will contact you within 48
                        hours to discuss partnership opportunities
                    </Typography>
                </Box>
            </Box>

            {/* Form Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Grid container spacing={6}>
                        {/* Form */}
                        <Grid item xs={12} md={8}>
                            <Card sx={styles.formCard}>
                                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                    <Typography sx={styles.sectionTitle}>
                                        Land Submission Form
                                    </Typography>
                                    <Typography sx={styles.sectionSubtitle}>
                                        Please fill out the form below with accurate information. All
                                        fields marked with * are required.
                                    </Typography>

                                    {submitted && (
                                        <Alert
                                            severity='success'
                                            icon={<CheckCircleIcon />}
                                            sx={{
                                                mb: 4,
                                                borderRadius: '12px',
                                                fontFamily: 'Montserrat, sans-serif',
                                            }}
                                        >
                                            Thank you for submitting your land details! Our team will
                                            contact you within 48 hours.
                                        </Alert>
                                    )}

                                    <Box component='form' onSubmit={handleSubmit}>
                                        {/* Owner Information */}
                                        <Typography
                                            sx={{
                                                ...styles.sectionTitle,
                                                fontSize: '1.3rem',
                                                mb: 3,
                                            }}
                                        >
                                            Owner Information
                                        </Typography>

                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label='Full Name'
                                                    name='ownerName'
                                                    value={formData.ownerName}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='Enter your full name'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <PersonIcon
                                                                sx={{
                                                                    mr: 1,
                                                                    color: '#0F5132',
                                                                }}
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label='Phone Number'
                                                    name='phone'
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='+880 XXX-XXXXXXX'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <PhoneIcon
                                                                sx={{
                                                                    mr: 1,
                                                                    color: '#0F5132',
                                                                }}
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    type='email'
                                                    label='Email Address'
                                                    name='email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='your.email@example.com'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <EmailIcon
                                                                sx={{
                                                                    mr: 1,
                                                                    color: '#0F5132',
                                                                }}
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>

                                        {/* Land Information */}
                                        <Typography
                                            sx={{
                                                ...styles.sectionTitle,
                                                fontSize: '1.3rem',
                                                mt: 5,
                                                mb: 3,
                                            }}
                                        >
                                            Land Information
                                        </Typography>

                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label='Land Location'
                                                    name='location'
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='e.g., Gulshan, Dhaka'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <LocationIcon
                                                                sx={{
                                                                    mr: 1,
                                                                    color: '#0F5132',
                                                                }}
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label='Area/Neighborhood'
                                                    name='area'
                                                    value={formData.area}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='Specific area name'
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    select
                                                    label='Land Size'
                                                    name='landSize'
                                                    value={formData.landSize}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                >
                                                    {landSizes.map((size) => (
                                                        <MenuItem key={size} value={size}>
                                                            {size}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    select
                                                    label='Land Type'
                                                    name='landType'
                                                    value={formData.landType}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                >
                                                    {landTypes.map((type) => (
                                                        <MenuItem key={type} value={type}>
                                                            {type}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label='Ownership Status'
                                                    name='ownership'
                                                    value={formData.ownership}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='e.g., Single owner, Joint ownership'
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    label='Additional Information'
                                                    name='additionalInfo'
                                                    value={formData.additionalInfo}
                                                    onChange={handleChange}
                                                    sx={styles.textField}
                                                    placeholder='Any additional details about your land (optional)'
                                                />
                                            </Grid>
                                        </Grid>

                                        {/* Submit Button */}
                                        <Box sx={{ mt: 5, textAlign: 'center' }}>
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                size='large'
                                                endIcon={<SendIcon />}
                                                sx={styles.submitButton}
                                                disabled={!isFormValid || submitted}
                                            >
                                                Submit Land Details
                                            </Button>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Info Sidebar */}
                        <Grid item xs={12} md={4}>
                            <Box sx={styles.infoCard}>
                                <Typography sx={styles.infoTitle}>
                                    <CheckCircleIcon sx={{ color: '#0F5132' }} />
                                    What Happens Next?
                                </Typography>
                                <Box component='ul' sx={{ pl: 0, listStyle: 'none' }}>
                                    <Typography component='li' sx={styles.infoText}>
                                        <Box
                                            sx={{
                                                minWidth: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#0F5132',
                                                color: '#FFFFFF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            1
                                        </Box>
                                        Our team reviews your submission within 24 hours
                                    </Typography>
                                    <Typography component='li' sx={styles.infoText}>
                                        <Box
                                            sx={{
                                                minWidth: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#0F5132',
                                                color: '#FFFFFF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            2
                                        </Box>
                                        We contact you to schedule an initial consultation
                                    </Typography>
                                    <Typography component='li' sx={styles.infoText}>
                                        <Box
                                            sx={{
                                                minWidth: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#0F5132',
                                                color: '#FFFFFF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            3
                                        </Box>
                                        Site visit and land evaluation by our experts
                                    </Typography>
                                    <Typography component='li' sx={styles.infoText}>
                                        <Box
                                            sx={{
                                                minWidth: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#0F5132',
                                                color: '#FFFFFF',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            4
                                        </Box>
                                        Detailed proposal presentation and discussion
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={styles.infoCard}>
                                <Typography sx={styles.infoTitle}>
                                    <PersonIcon sx={{ color: '#0F5132' }} />
                                    Need Help?
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <PhoneIcon sx={{ color: '#0F5132', fontSize: '1.2rem' }} />
                                    Call us: +880 XXX-XXXXXXX
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <EmailIcon sx={{ color: '#0F5132', fontSize: '1.2rem' }} />
                                    Email: info@premierhousing.com
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    ...styles.infoCard,
                                    background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
                                    color: '#FFFFFF',
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...styles.infoTitle,
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Why Choose Us?
                                </Typography>
                                <Typography
                                    sx={{
                                        ...styles.infoText,
                                        color: 'rgba(255,255,255,0.95)',
                                    }}
                                >
                                    ✓ 29+ years of experience
                                </Typography>
                                <Typography
                                    sx={{
                                        ...styles.infoText,
                                        color: 'rgba(255,255,255,0.95)',
                                    }}
                                >
                                    ✓ REHAB member since 2008
                                </Typography>
                                <Typography
                                    sx={{
                                        ...styles.infoText,
                                        color: 'rgba(255,255,255,0.95)',
                                    }}
                                >
                                    ✓ Transparent partnerships
                                </Typography>
                                <Typography
                                    sx={{
                                        ...styles.infoText,
                                        color: 'rgba(255,255,255,0.95)',
                                    }}
                                >
                                    ✓ Quality construction
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

export default SubmitLandPage;
