/**
 * Gallery Page Component
 * Displays project images in a beautiful masonry grid layout
 */

import React, { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, Dialog, IconButton, Tabs, Tab, useTheme, useMediaQuery } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    Close as CloseIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
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
        backgroundColor: '#FAFAFA',
    },
    tabsContainer: {
        mb: 6,
        borderBottom: '2px solid rgba(15, 81, 50, 0.1)',
    },
    tab: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '0.95rem', md: '1.05rem' },
        fontWeight: 600,
        textTransform: 'none',
        color: '#666666',
        px: { xs: 2, md: 4 },
        py: 2,
        transition: 'all 0.3s ease',
        '&.Mui-selected': {
            color: '#0F5132',
            fontWeight: 700,
        },
        '&:hover': {
            color: '#0F5132',
            backgroundColor: 'rgba(15, 81, 50, 0.05)',
        },
    },
    imageListItem: {
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '12px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(15, 81, 50, 0.2)',
            '& img': {
                transform: 'scale(1.1)',
            },
        },
    },
    image: {
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    dialog: {
        '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            maxWidth: '95vw',
            maxHeight: '95vh',
            margin: 0,
        },
    },
    dialogImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: '8px',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#0F5132',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            transform: 'scale(1.1)',
        },
    },
    navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#0F5132',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            transform: 'translateY(-50%) scale(1.1)',
        },
    },
    imageCounter: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#FFFFFF',
        px: 3,
        py: 1,
        borderRadius: '20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.9rem',
    },
};

// Gallery images organized by category
const galleryImages = {
    all: [
        // Hero Images
        { src: '/Hero_Emage.jpg', alt: 'Premium Housing Project' },
        { src: '/Hero_Image2.jpg', alt: 'Modern Residential Complex' },
        { src: '/Hero_Image3.jpg', alt: 'Luxury Apartments' },

        // Con_premier Images
        { src: '/Con_premier/1cityscape.jpg', alt: 'Cityscape View' },
        { src: '/Con_premier/pic1.jpg', alt: 'Project Exterior' },
        { src: '/Con_premier/pic13.jpg', alt: 'Building Facade' },
        { src: '/Con_premier/pic14.jpg', alt: 'Residential Tower' },
        { src: '/Con_premier/pic15.jpg', alt: 'Modern Architecture' },
        { src: '/Con_premier/pic16.jpg', alt: 'Premium Building' },

        // Handover Projects
        { src: '/Projects/Handover/Aroza Home, Uttara.jpg', alt: 'Aroza Home, Uttara' },
        { src: '/Projects/Handover/Premier Ishaque Garden, Niketon, Gulshan.jpg', alt: 'Premier Ishaque Garden' },
        { src: '/Projects/Handover/Prime Raiyan, Niketon, Gulshan.jpg', alt: 'Prime Raiyan, Gulshan' },
        { src: '/Projects/Handover/Prime Raj, Niketon, Gulshan.jpg', alt: 'Prime Raj, Gulshan' },

        // Fahmida Green Project
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/0000.png', alt: 'Fahmida Green Perspective' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/001 (2).jpg', alt: 'Fahmida Green View 1' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/001.jpg', alt: 'Fahmida Green View 2' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/002.jpg', alt: 'Fahmida Green View 3' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/003.jpg', alt: 'Fahmida Green View 4' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/004.png', alt: 'Fahmida Green Aerial' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/005.png', alt: 'Fahmida Green Exterior' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/05.jpg', alt: 'Fahmida Green Detail' },

        // Maya Nibash Project
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/PREMIER MAYA NIBASH 27.10.png', alt: 'Premier Maya Nibash' },
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash.jpeg', alt: 'Maya Nibash View 1' },
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash1.jpeg', alt: 'Maya Nibash View 2' },
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash2.jpeg', alt: 'Maya Nibash View 3' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/001.png', alt: 'Maya Nibash Lalmatia 1' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/002.png', alt: 'Maya Nibash Lalmatia 2' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/003.png', alt: 'Maya Nibash Lalmatia 3' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/004.png', alt: 'Maya Nibash Lalmatia 4' },
    ],
    exteriors: [
        { src: '/Hero_Emage.jpg', alt: 'Premium Housing Project' },
        { src: '/Hero_Image2.jpg', alt: 'Modern Residential Complex' },
        { src: '/Hero_Image3.jpg', alt: 'Luxury Apartments' },
        { src: '/Con_premier/1cityscape.jpg', alt: 'Cityscape View' },
        { src: '/Con_premier/pic1.jpg', alt: 'Project Exterior' },
        { src: '/Con_premier/pic13.jpg', alt: 'Building Facade' },
        { src: '/Con_premier/pic14.jpg', alt: 'Residential Tower' },
        { src: '/Con_premier/pic15.jpg', alt: 'Modern Architecture' },
        { src: '/Con_premier/pic16.jpg', alt: 'Premium Building' },
        { src: '/Projects/Handover/Aroza Home, Uttara.jpg', alt: 'Aroza Home, Uttara' },
        { src: '/Projects/Handover/Premier Ishaque Garden, Niketon, Gulshan.jpg', alt: 'Premier Ishaque Garden' },
        { src: '/Projects/Handover/Prime Raiyan, Niketon, Gulshan.jpg', alt: 'Prime Raiyan, Gulshan' },
        { src: '/Projects/Handover/Prime Raj, Niketon, Gulshan.jpg', alt: 'Prime Raj, Gulshan' },
    ],
    interiors: [
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/001 (2).jpg', alt: 'Fahmida Green Interior 1' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/001.jpg', alt: 'Fahmida Green Interior 2' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/002.jpg', alt: 'Fahmida Green Interior 3' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/003.jpg', alt: 'Fahmida Green Interior 4' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/05.jpg', alt: 'Fahmida Green Interior 5' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/001.png', alt: 'Maya Nibash Interior 1' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/002.png', alt: 'Maya Nibash Interior 2' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/003.png', alt: 'Maya Nibash Interior 3' },
    ],
    amenities: [
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/0000.png', alt: 'Fahmida Green Amenities' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/004.png', alt: 'Fahmida Green Facilities' },
        { src: '/Projects/Ongoing/Fahmida GreenFile/Perspective PHGreen/005.png', alt: 'Fahmida Green Common Area' },
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/PREMIER MAYA NIBASH 27.10.png', alt: 'Maya Nibash Amenities' },
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash.jpeg', alt: 'Maya Nibash Facilities 1' },
        { src: '/Projects/Ongoing/Maya Nibash/Premier Maya Nibash/Premier Maya Nibash1.jpeg', alt: 'Maya Nibash Facilities 2' },
        { src: '/Projects/Ongoing/Maya Nibash/lalmatiaPNG/004.png', alt: 'Maya Nibash Common Spaces' },
    ],
};

export const GalleryPage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    const [selectedTab, setSelectedTab] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const categories = ['all', 'exteriors', 'interiors', 'amenities'] as const;
    const currentCategory = categories[selectedTab];
    const currentImages = galleryImages[currentCategory];

    // Determine number of columns based on screen size
    const getColumns = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        if (isDesktop) return 3;
        return 4;
    };

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
    };

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Project Gallery
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Explore our portfolio of exceptional residential projects, showcasing quality
                        construction and elegant design
                    </Typography>
                </Box>
            </Box>

            {/* Gallery Section */}
            <Box sx={styles.section}>
                <Container maxWidth='xl'>
                    {/* Category Tabs */}
                    <Box sx={styles.tabsContainer}>
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            centered
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: '#0F5132',
                                    height: '3px',
                                },
                            }}
                        >
                            <Tab label='All Projects' sx={styles.tab} />
                            <Tab label='Exteriors' sx={styles.tab} />
                            <Tab label='Interiors' sx={styles.tab} />
                            <Tab label='Amenities' sx={styles.tab} />
                        </Tabs>
                    </Box>

                    {/* Image Grid */}
                    <ImageList
                        variant='masonry'
                        cols={getColumns()}
                        gap={16}
                    >
                        {currentImages.map((image, index) => (
                            <ImageListItem
                                key={index}
                                sx={styles.imageListItem}
                                onClick={() => handleImageClick(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading='lazy'
                                    style={styles.image as React.CSSProperties}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Container>
            </Box>

            {/* Lightbox Dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                maxWidth={false}
                sx={styles.dialog}
            >
                <Box sx={{ position: 'relative' }}>
                    {/* Close Button */}
                    <IconButton sx={styles.closeButton} onClick={handleCloseDialog}>
                        <CloseIcon />
                    </IconButton>

                    {/* Previous Button */}
                    <IconButton
                        sx={{ ...styles.navButton, left: 20 }}
                        onClick={handlePrevImage}
                    >
                        <ChevronLeftIcon fontSize='large' />
                    </IconButton>

                    {/* Image */}
                    <img
                        src={currentImages[selectedImageIndex]?.src}
                        alt={currentImages[selectedImageIndex]?.alt}
                        style={styles.dialogImage as React.CSSProperties}
                    />

                    {/* Next Button */}
                    <IconButton
                        sx={{ ...styles.navButton, right: 20 }}
                        onClick={handleNextImage}
                    >
                        <ChevronRightIcon fontSize='large' />
                    </IconButton>

                    {/* Image Counter */}
                    <Box sx={styles.imageCounter}>
                        {selectedImageIndex + 1} / {currentImages.length}
                    </Box>
                </Box>
            </Dialog>

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default GalleryPage;
