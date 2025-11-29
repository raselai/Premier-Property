/**
 * Project Detail Component
 * Displays detailed information about a single project
 */

import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, Chip, IconButton } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    ArrowBack as ArrowBackIcon,
    Download as DownloadIcon,
    Close as CloseIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-router';
import { useSuspenseProject } from '../hooks/useSuspenseProject';
import type { ProjectImage, ProjectDocument } from '../types';

interface ProjectDetailProps {
    /** Project ID to display */
    projectId: number;
}

const projectDetailStyles: Record<string, SxProps<Theme>> = {
    container: {
        py: { xs: 12, md: 14 },
        px: { xs: 2, md: 4 },
        minHeight: '100vh',
        backgroundColor: '#FAFAFA',
    },
    backButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        color: '#2D2D2D',
        textTransform: 'none',
        mb: 3,
        '&:hover': {
            backgroundColor: 'rgba(45, 45, 45, 0.05)',
        },
    },
    categoryChip: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        mb: 2,
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '32px', md: '48px', lg: '56px' },
        fontWeight: 800,
        color: '#2D2D2D',
        mb: 2,
        lineHeight: 1.2,
    },
    location: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '14px', md: '16px' },
        color: '#979797',
        mb: 4,
    },
    description: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '15px', md: '17px' },
        color: '#5A5A5A',
        lineHeight: 1.8,
        mb: 6,
        maxWidth: '900px',
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '24px', md: '32px' },
        fontWeight: 700,
        color: '#2D2D2D',
        mb: 3,
    },
    imageGallery: {
        mb: 6,
    },
    primaryImageContainer: {
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
        backgroundColor: '#E0E0E0',
        mb: 2,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.01)',
        },
    },
    primaryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    thumbnailGrid: {
        display: 'grid',
        gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
        },
        gap: 2,
    },
    thumbnail: {
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        width: '100%',
        height: { xs: '100px', md: '120px' },
        backgroundColor: '#E0E0E0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
        '&:hover': {
            transform: 'scale(1.05)',
            borderColor: '#0F5132',
        },
        '&.active': {
            borderColor: '#0F5132',
            transform: 'scale(1.05)',
        },
    },
    thumbnailImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    featuresGrid: {
        mb: 6,
    },
    featureItem: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '15px',
        color: '#5A5A5A',
        lineHeight: 1.8,
        pl: 3,
        position: 'relative',
        '&::before': {
            content: '"✓"',
            position: 'absolute',
            left: 0,
            color: '#0F5132',
            fontWeight: 700,
        },
    },
    documentsSection: {
        mb: 6,
    },
    documentButton: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: '12px',
        padding: '12px 24px',
        border: '1px solid #0F5132',
        color: '#0F5132',
        '&:hover': {
            backgroundColor: '#0F5132',
            color: '#FFFFFF',
        },
    },
    lightbox: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    lightboxImage: {
        maxWidth: '90vw',
        maxHeight: '80vh',
        objectFit: 'contain',
    },
    lightboxClose: {
        position: 'absolute',
        top: 20,
        right: 20,
        color: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
    lightboxNav: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
    label: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '16px', md: '20px' },
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        backgroundColor: 'rgba(206, 148, 67, 0.9)',
        padding: { xs: '8px 16px', md: '10px 20px' },
        borderRadius: '8px',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    },
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
    const navigate = useNavigate();
    const { data: project } = useSuspenseProject(projectId);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleBackClick = () => {
        navigate({ to: '/' });
    };

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const openLightbox = () => {
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const navigateLightbox = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
        } else {
            setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
        }
    };

    const handleDocumentDownload = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Box sx={projectDetailStyles.container}>
                <Container maxWidth='xl'>
                    {/* Back Button */}
                    <Button
                        sx={projectDetailStyles.backButton}
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBackClick}
                    >
                        Back to Home
                    </Button>

                    {/* Category Chip */}
                    <Chip label={project.category} sx={projectDetailStyles.categoryChip} />

                    {/* Title and Location */}
                    <Typography sx={projectDetailStyles.title}>{project.title}</Typography>
                    {project.location && (
                        <Typography sx={projectDetailStyles.location}>{project.location}</Typography>
                    )}

                    {/* Description */}
                    <Typography sx={projectDetailStyles.description}>{project.description}</Typography>

                    {/* Image Gallery */}
                    <Box sx={projectDetailStyles.imageGallery}>
                        <Typography sx={projectDetailStyles.sectionTitle}>Gallery</Typography>

                        {/* Primary Image */}
                        <Box sx={projectDetailStyles.primaryImageContainer} onClick={openLightbox}>
                            {project.label && (
                                <Typography sx={projectDetailStyles.label}>{project.label}</Typography>
                            )}
                            <Box
                                component='img'
                                src={project.images[selectedImageIndex]?.url}
                                alt={project.images[selectedImageIndex]?.alt}
                                sx={projectDetailStyles.primaryImage}
                            />
                        </Box>

                        {/* Thumbnails */}
                        {project.images.length > 1 && (
                            <Box sx={projectDetailStyles.thumbnailGrid}>
                                {project.images.map((image: ProjectImage, index: number) => (
                                    <Box
                                        key={index}
                                        sx={projectDetailStyles.thumbnail}
                                        className={selectedImageIndex === index ? 'active' : ''}
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <Box
                                            component='img'
                                            src={image.url}
                                            alt={image.alt}
                                            sx={projectDetailStyles.thumbnailImage}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <Box sx={projectDetailStyles.featuresGrid}>
                            <Typography sx={projectDetailStyles.sectionTitle}>Key Features</Typography>
                            <Grid container spacing={2}>
                                {project.features.map((feature: string, index: number) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Typography sx={projectDetailStyles.featureItem}>{feature}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}

                    {/* Documents */}
                    {project.documents && project.documents.length > 0 && (
                        <Box sx={projectDetailStyles.documentsSection}>
                            <Typography sx={projectDetailStyles.sectionTitle}>Documents</Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                {project.documents.map((doc: ProjectDocument, index: number) => (
                                    <Button
                                        key={index}
                                        sx={projectDetailStyles.documentButton}
                                        startIcon={<DownloadIcon />}
                                        onClick={() => handleDocumentDownload(doc.url)}
                                    >
                                        {doc.name}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    )}
                </Container>
            </Box>

            {/* Lightbox */}
            {lightboxOpen && (
                <Box sx={projectDetailStyles.lightbox} onClick={closeLightbox}>
                    <IconButton sx={projectDetailStyles.lightboxClose} onClick={closeLightbox}>
                        <CloseIcon />
                    </IconButton>

                    <IconButton
                        sx={{ ...projectDetailStyles.lightboxNav, left: 20 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateLightbox('prev');
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <Box
                        component='img'
                        src={project.images[selectedImageIndex]?.url}
                        alt={project.images[selectedImageIndex]?.alt}
                        sx={projectDetailStyles.lightboxImage}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <IconButton
                        sx={{ ...projectDetailStyles.lightboxNav, right: 20 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateLightbox('next');
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>

                    <Typography
                        sx={{
                            position: 'absolute',
                            bottom: 40,
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        {selectedImageIndex + 1} / {project.images.length}
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default ProjectDetail;
