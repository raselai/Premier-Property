/**
 * Project Detail Component
 * Displays detailed information about a single project with split-screen layout
 */

import React, { useState } from 'react';
import { Box, Typography, LinearProgress, IconButton, Breadcrumbs, Link, Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    LocationOn as LocationOnIcon,
    Download as DownloadIcon,
} from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-router';
import { useSuspenseProject } from '../hooks/useSuspenseProject';
import { useSuspenseProjects } from '../hooks/useSuspenseProjects';
import type { ProjectImage, Project } from '../types';

interface ProjectDetailProps {
    /** Project ID to display */
    projectId: number;
}

interface ProjectSpecification {
    label: string;
    value: string;
}

interface ProjectDetailData {
    fullAddress: string;
    tagline?: string;
    overview: string;
    progressPercentage: number;
    specifications: ProjectSpecification[];
    brochurePath: string;
    mapEmbedUrl: string;
}

/**
 * Get project-specific details based on project ID
 */
const getProjectDetails = (projectId: number): ProjectDetailData => {
    const projectDetailsMap: Record<number, ProjectDetailData> = {
        // HANDOVER PROJECTS
        // AROZA HOME (ID: 1)
        1: {
            fullAddress: 'Uttara, Dhaka',
            overview: `A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment. Where memories are carved as existence sees. Aroza Home is a home where your senses find peace.`,
            progressPercentage: 100,
            specifications: [
                { label: 'Orientation', value: 'To be announced' },
                { label: 'Front Road', value: 'To be announced' },
                { label: 'Land Size', value: 'To be announced' },
                { label: 'Apartment Size', value: 'To be announced' },
                { label: 'Number of Apartments', value: 'To be announced' },
                { label: 'Number of Parking', value: 'To be announced' },
                { label: 'Number of Floors', value: 'To be announced' },
                { label: 'Handover Date', value: 'Completed' },
            ],
            brochurePath: '',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5239876543!2d90.3987654!3d23.8753698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05af65!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // PREMIER ISHAQUE GARDEN (ID: 2)
        2: {
            fullAddress: 'Niketon, Gulshan, Dhaka',
            overview: `A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment. Where memories are carved as existence sees. Premier Ishaque Garden is a home where your senses find peace.`,
            progressPercentage: 100,
            specifications: [
                { label: 'Orientation', value: 'To be announced' },
                { label: 'Front Road', value: 'To be announced' },
                { label: 'Land Size', value: 'To be announced' },
                { label: 'Apartment Size', value: 'To be announced' },
                { label: 'Number of Apartments', value: 'To be announced' },
                { label: 'Number of Parking', value: 'To be announced' },
                { label: 'Number of Floors', value: 'To be announced' },
                { label: 'Handover Date', value: 'Completed' },
            ],
            brochurePath: '',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0987654321!2d90.4123456!3d23.7798765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abcd123!2sNiketon%2C%20Gulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // PRIME RAIYAN (ID: 3)
        3: {
            fullAddress: 'Niketon, Gulshan, Dhaka',
            overview: `A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment. Where memories are carved as existence sees. Prime Raiyan is a home where your senses find peace.`,
            progressPercentage: 100,
            specifications: [
                { label: 'Orientation', value: 'To be announced' },
                { label: 'Front Road', value: 'To be announced' },
                { label: 'Land Size', value: 'To be announced' },
                { label: 'Apartment Size', value: 'To be announced' },
                { label: 'Number of Apartments', value: 'To be announced' },
                { label: 'Number of Parking', value: 'To be announced' },
                { label: 'Number of Floors', value: 'To be announced' },
                { label: 'Handover Date', value: 'Completed' },
            ],
            brochurePath: '',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0987654321!2d90.4123456!3d23.7798765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abcd123!2sNiketon%2C%20Gulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // PRIME RAJ (ID: 4)
        4: {
            fullAddress: 'Niketon, Gulshan, Dhaka',
            overview: `A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment. Where memories are carved as existence sees. Prime Raj is a home where your senses find peace.`,
            progressPercentage: 100,
            specifications: [
                { label: 'Orientation', value: 'To be announced' },
                { label: 'Front Road', value: 'To be announced' },
                { label: 'Land Size', value: 'To be announced' },
                { label: 'Apartment Size', value: 'To be announced' },
                { label: 'Number of Apartments', value: 'To be announced' },
                { label: 'Number of Parking', value: 'To be announced' },
                { label: 'Number of Floors', value: 'To be announced' },
                { label: 'Handover Date', value: 'Completed' },
            ],
            brochurePath: '',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0987654321!2d90.4123456!3d23.7798765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abcd123!2sNiketon%2C%20Gulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // ONGOING PROJECTS
        // PREMIER FAHMIDA GREEN (ID: 5)
        5: {
            fullAddress: 'Plot-265, Block-C, Road-13, Bashundhara R/A, Dhaka',
            tagline: 'Where memories are carved as existence was',
            overview: `Premier Housing & Developments Limited is introducing you to a new exclusive project name "Premier Fahmida Green" at (House no-265, Road-13, Block -C) Bashundhara R/A, Dhaka. The project is located in an excellent and quiet homely environment of Bashundhara R/A Dhaka, at exclusive 10 katha plot zone, which is also nearby 100 feet Bashundhara main road and 300 feet Purbachal road. Since inception in 1995, Company has completed several apartment projects with great success and has earned value for its clients. Good communication and all modern amenities such as educational institutions, hospitals, banks shopping complexes, mosque, and daily necessities all are a few minutes' walk from the project, those are the things that made Bashundhara the most demanding location to live in.`,
            progressPercentage: 74,
            specifications: [
                { label: 'Land Area', value: '10 Katha' },
                { label: 'Height', value: '10 storied building (B+G+9)' },
                { label: 'Building Type', value: 'Residential' },
                { label: 'Number of Apartments', value: '18' },
                { label: 'Number of Car Parking', value: '29' },
                { label: 'Facing', value: 'East' },
                { label: 'Units per Floor', value: '02' },
                { label: 'Size of each Apartment', value: 'Type-A 1925 sft. (Approx), Type-B 3900 sft. (Approx)' },
            ],
            brochurePath: '/Brochures/FAHMIDA GREEN BROCHURE.pdf',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564788903728!2d90.42523631543705!3d23.823594184554667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d8142955e9%3A0xf0686b4286c7c4d8!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // PREMIER MAYA NIBASH (ID: 6)
        6: {
            fullAddress: 'Plot-2/6, Block-E, Lalmatia, Dhaka',
            overview: `Premier Housing & Developments Limited is introducing you to a new exclusive project name "Premier Maya Nibash" at (House no-2/6, block -E) Lalmatia, Dhaka. The project is located in an excellent and quiet homely environment, which is nearby Road no- 27 of Dhanmondi R/A, and Satmasjid Road. Since inception in 1995, Company has completed several apartment projects with great success and has earned value for its clients. Good communication and all modern amenities such as educational institutions, hospitals, banks, shopping complexes, park, lake, mosque, and daily necessities all are a few minutes' walk from the project, those are the things that made lalmatia the most demanding location to live in.`,
            progressPercentage: 59,
            specifications: [
                { label: 'Land Area', value: '10.89 Katha' },
                { label: 'Height', value: '10 storied building (B+G+9)' },
                { label: 'Building Type', value: 'Residential' },
                { label: 'Number of Apartments', value: '18' },
                { label: 'Number of Car Parking', value: '37' },
                { label: 'Units per Floor', value: '02' },
                { label: 'Size of each Apartment', value: 'Type-A 3045 sft. (approx), Type-B 3015 sft. (approx)' },
            ],
            brochurePath: '/Brochures/MAYA NIBASH ALL PAGE  for Sals Mkt.pdf',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0697405389147!2d90.36843631543568!3d23.751579684591913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c91d0a5b7%3A0x1b9b8e8c8f8e8e8e!2sLalmatia%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // PREMIER HOMES (ID: 7)
        7: {
            fullAddress: 'Dhaka, Bangladesh',
            overview: `A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment. Where memories are carved as existence sees. Premier Homes is a home where your senses find peace.`,
            progressPercentage: 45,
            specifications: [
                { label: 'Orientation', value: 'To be announced' },
                { label: 'Front Road', value: 'To be announced' },
                { label: 'Land Size', value: 'To be announced' },
                { label: 'Apartment Size', value: 'To be announced' },
                { label: 'Number of Apartments', value: 'To be announced' },
                { label: 'Number of Parking', value: 'To be announced' },
                { label: 'Number of Floors', value: 'To be announced' },
                { label: 'Handover Date', value: 'To be announced' },
            ],
            brochurePath: '',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.898793267473!2d90.3763479154357!3d23.75395598459043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
        // PREMIER ZAYFA MANOR (ID: 8)
        8: {
            fullAddress: 'Dhaka, Bangladesh',
            overview: `A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment. Where memories are carved as existence sees. Premier Zayfa Manor is a home where your senses find peace.`,
            progressPercentage: 35,
            specifications: [
                { label: 'Orientation', value: 'To be announced' },
                { label: 'Front Road', value: 'To be announced' },
                { label: 'Land Size', value: 'To be announced' },
                { label: 'Apartment Size', value: 'To be announced' },
                { label: 'Number of Apartments', value: 'To be announced' },
                { label: 'Number of Parking', value: 'To be announced' },
                { label: 'Number of Floors', value: 'To be announced' },
                { label: 'Handover Date', value: 'To be announced' },
            ],
            brochurePath: '',
            mapEmbedUrl:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.898793267473!2d90.3763479154357!3d23.75395598459043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd',
        },
    };

    // Return project details or fallback to generic details
    return (
        projectDetailsMap[projectId] || {
            fullAddress: '',
            overview: '',
            progressPercentage: 0,
            specifications: [],
            brochurePath: '',
            mapEmbedUrl: '',
        }
    );
};

const projectDetailStyles: Record<string, SxProps<Theme>> = {
    splitContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
    },
    leftPanel: {
        position: { xs: 'relative', lg: 'sticky' },
        top: 0,
        width: { xs: '100%', lg: '50%' },
        height: { xs: 'auto', lg: '100vh' },
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
    },
    rightPanel: {
        width: { xs: '100%', lg: '50%' },
        overflowY: { xs: 'visible', lg: 'auto' },
        backgroundColor: '#FFFFFF',
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
    },
    mainImageContainer: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: { xs: '400px', md: '500px', lg: 'auto' },
    },
    mainImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#2D2D2D',
        width: '48px',
        height: '48px',
        '&:hover': {
            backgroundColor: '#FFFFFF',
        },
        zIndex: 10,
    },
    thumbnailStrip: {
        display: 'flex',
        gap: 1.5,
        px: 3,
        py: 2.5,
        backgroundColor: '#FFFFFF',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#D0D0D0',
            borderRadius: '3px',
        },
    },
    thumbnail: {
        minWidth: '100px',
        height: '70px',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#0F5132',
        },
        '&.active': {
            borderColor: '#0F5132',
        },
    },
    thumbnailImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    breadcrumb: {
        mb: 2,
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        color: '#979797',
    },
    breadcrumbLink: {
        color: '#979797',
        textDecoration: 'none',
        '&:hover': {
            color: '#0F5132',
        },
    },
    projectTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '28px', md: '36px' },
        fontWeight: 800,
        color: '#2D2D2D',
        mb: 1,
        letterSpacing: '0.5px',
    },
    tagline: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '15px',
        color: '#979797',
        mb: 3,
        fontStyle: 'italic',
    },
    addressContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
        mb: 4,
        pb: 4,
        borderBottom: '1px solid #E0E0E0',
    },
    addressIcon: {
        color: '#0F5132',
        fontSize: '20px',
        mt: 0.3,
    },
    addressText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        color: '#5A5A5A',
        lineHeight: 1.6,
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '18px', md: '20px' },
        fontWeight: 700,
        color: '#2D2D2D',
        mb: 2,
    },
    overviewText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        color: '#5A5A5A',
        lineHeight: 1.8,
        mb: 4,
        textAlign: 'justify',
    },
    progressSection: {
        mb: 4,
        pb: 4,
        borderBottom: '1px solid #E0E0E0',
    },
    progressHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1.5,
    },
    progressLabel: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        color: '#979797',
    },
    progressPercentage: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        color: '#0F5132',
    },
    progressBar: {
        height: '12px',
        borderRadius: '6px',
        backgroundColor: '#E0E0E0',
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#0F5132',
            borderRadius: '6px',
        },
    },
    specificationSection: {
        mb: 4,
    },
    specGrid: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 2.5,
    },
    specItem: {
        pb: 1.5,
        borderBottom: '1px solid #F0F0F0',
    },
    specLabel: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        color: '#979797',
        mb: 0.5,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    specValue: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '15px',
        fontWeight: 600,
        color: '#2D2D2D',
    },
    downloadButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '15px',
        fontWeight: 600,
        textTransform: 'none',
        backgroundColor: '#0F5132',
        color: '#FFFFFF',
        borderRadius: '8px',
        padding: '14px 32px',
        mt: 4,
        width: { xs: '100%', sm: 'auto' },
        '&:hover': {
            backgroundColor: '#0D4129',
        },
    },
    mapSection: {
        mb: 4,
        pb: 4,
        borderBottom: '1px solid #E0E0E0',
    },
    mapContainer: {
        width: '100%',
        height: { xs: '300px', md: '400px' },
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #E0E0E0',
    },
    relatedProjectsSection: {
        mb: 4,
    },
    relatedProjectsGrid: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 3,
    },
    relatedProjectCard: {
        cursor: 'pointer',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            '& .relatedCardImage': {
                transform: 'scale(1.05)',
            },
        },
    },
    relatedCardImageContainer: {
        position: 'relative',
        width: '100%',
        height: '180px',
        overflow: 'hidden',
        backgroundColor: '#E0E0E0',
    },
    relatedCardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease',
    },
    relatedCardContent: {
        pt: 2,
    },
    relatedCardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '16px',
        fontWeight: 700,
        color: '#2D2D2D',
        mb: 0.5,
    },
    relatedCardLocation: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        color: '#979797',
    },
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
    const navigate = useNavigate();
    const { data: project } = useSuspenseProject(projectId);
    const { data: allProjects } = useSuspenseProjects({ category: project.category });
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Get project-specific details
    const projectDetails = getProjectDetails(projectId);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
        } else {
            setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
        }
    };

    const handleRelatedProjectClick = (relatedProjectId: number) => {
        navigate({ to: `/projects/${relatedProjectId}` });
        window.scrollTo(0, 0);
    };

    const getPrimaryImage = (images: Array<{ url: string; isPrimary?: boolean }>) => {
        const primary = images.find((img) => img.isPrimary);
        return primary?.url || images[0]?.url || '';
    };

    // Get related projects (other ongoing projects excluding current one)
    const relatedProjects = allProjects.filter((p: Project) => p.id !== projectId).slice(0, 4);

    return (
        <Box sx={projectDetailStyles.splitContainer}>
            {/* LEFT PANEL - Image Gallery */}
            <Box sx={projectDetailStyles.leftPanel}>
                {/* Main Image Container */}
                <Box sx={projectDetailStyles.mainImageContainer}>
                    <Box
                        component='img'
                        src={project.images[selectedImageIndex]?.url}
                        alt={project.images[selectedImageIndex]?.alt}
                        sx={projectDetailStyles.mainImage}
                    />

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                        <>
                            <IconButton
                                sx={{ ...projectDetailStyles.navButton, left: 20 }}
                                onClick={() => navigateImage('prev')}
                            >
                                <ChevronLeftIcon />
                            </IconButton>

                            <IconButton
                                sx={{ ...projectDetailStyles.navButton, right: 20 }}
                                onClick={() => navigateImage('next')}
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </>
                    )}
                </Box>

                {/* Thumbnail Strip */}
                {project.images.length > 1 && (
                    <Box sx={projectDetailStyles.thumbnailStrip}>
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

            {/* RIGHT PANEL - Project Details */}
            <Box sx={projectDetailStyles.rightPanel}>
                {/* Breadcrumb */}
                <Breadcrumbs sx={projectDetailStyles.breadcrumb}>
                    <Link
                        sx={projectDetailStyles.breadcrumbLink}
                        onClick={() => navigate({ to: '/' })}
                        style={{ cursor: 'pointer' }}
                    >
                        Projects
                    </Link>
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#2D2D2D' }}>
                        {project.category}
                    </Typography>
                </Breadcrumbs>

                {/* Project Title */}
                <Typography sx={projectDetailStyles.projectTitle}>{project.title}</Typography>

                {/* Tagline - Only show if available */}
                {projectDetails.tagline && (
                    <Typography sx={projectDetailStyles.tagline}>{projectDetails.tagline}</Typography>
                )}

                {/* Address */}
                {projectDetails.fullAddress && (
                    <Box sx={projectDetailStyles.addressContainer}>
                        <LocationOnIcon sx={projectDetailStyles.addressIcon} />
                        <Typography sx={projectDetailStyles.addressText}>
                            {projectDetails.fullAddress}
                        </Typography>
                    </Box>
                )}

                {/* Overview Section */}
                <Box sx={{ mb: 4 }}>
                    <Typography sx={projectDetailStyles.sectionTitle}>Overview</Typography>
                    <Typography sx={projectDetailStyles.overviewText}>
                        {projectDetails.overview || project.description}
                    </Typography>
                </Box>

                {/* Project Progress Section */}
                <Box sx={projectDetailStyles.progressSection}>
                    <Typography sx={projectDetailStyles.sectionTitle}>PROJECT PROGRESS</Typography>

                    <Box sx={projectDetailStyles.progressHeader}>
                        <Typography sx={projectDetailStyles.progressLabel}>Project Completed</Typography>
                        <Typography sx={projectDetailStyles.progressPercentage}>
                            {projectDetails.progressPercentage}%
                        </Typography>
                    </Box>

                    <LinearProgress
                        variant='determinate'
                        value={projectDetails.progressPercentage}
                        sx={projectDetailStyles.progressBar}
                    />
                </Box>

                {/* Specification Section */}
                <Box sx={projectDetailStyles.specificationSection}>
                    <Typography sx={projectDetailStyles.sectionTitle}>SPECIFICATION</Typography>

                    <Box sx={projectDetailStyles.specGrid}>
                        {projectDetails.specifications.map((spec, index) => (
                            <Box key={index} sx={projectDetailStyles.specItem}>
                                <Typography sx={projectDetailStyles.specLabel}>{spec.label}</Typography>
                                <Typography sx={projectDetailStyles.specValue}>{spec.value}</Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Download Brochure Button */}
                    {projectDetails.brochurePath && (
                        <Button
                            sx={projectDetailStyles.downloadButton}
                            startIcon={<DownloadIcon />}
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = projectDetails.brochurePath;
                                link.download = projectDetails.brochurePath.split('/').pop() || 'brochure.pdf';
                                link.click();
                            }}
                        >
                            Download Brochure
                        </Button>
                    )}
                </Box>

                {/* Map Section */}
                {projectDetails.mapEmbedUrl && (
                    <Box sx={projectDetailStyles.mapSection}>
                        <Typography sx={projectDetailStyles.sectionTitle}>LOCATION</Typography>
                        <Box sx={projectDetailStyles.mapContainer}>
                            <iframe
                                src={projectDetails.mapEmbedUrl}
                                width='100%'
                                height='100%'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                title='Project Location'
                            />
                        </Box>
                    </Box>
                )}

                {/* Related Projects Section */}
                {relatedProjects.length > 0 && (
                    <Box sx={projectDetailStyles.relatedProjectsSection}>
                        <Typography sx={projectDetailStyles.sectionTitle}>RELATED PROJECTS</Typography>
                        <Box sx={projectDetailStyles.relatedProjectsGrid}>
                            {relatedProjects.map((relatedProject: Project) => (
                                <Box
                                    key={relatedProject.id}
                                    sx={projectDetailStyles.relatedProjectCard}
                                    onClick={() => handleRelatedProjectClick(relatedProject.id)}
                                >
                                    <Box sx={projectDetailStyles.relatedCardImageContainer}>
                                        <Box
                                            component='img'
                                            src={getPrimaryImage(relatedProject.images)}
                                            alt={relatedProject.title}
                                            sx={projectDetailStyles.relatedCardImage}
                                            className='relatedCardImage'
                                        />
                                    </Box>
                                    <Box sx={projectDetailStyles.relatedCardContent}>
                                        <Typography sx={projectDetailStyles.relatedCardTitle}>
                                            {relatedProject.title}
                                        </Typography>
                                        {relatedProject.location && (
                                            <Typography sx={projectDetailStyles.relatedCardLocation}>
                                                {relatedProject.location}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProjectDetail;
