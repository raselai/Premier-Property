/**
 * Project List Component
 * Displays a list/grid of projects with filtering
 */

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useSuspenseProjects } from '../hooks/useSuspenseProjects';
import type { ProjectCategory } from '../types';

interface ProjectListProps {
    /** Category to filter projects */
    category?: ProjectCategory;
    /** Page title */
    title: string;
    /** Page subtitle */
    subtitle?: string;
}

const projectListStyles: Record<string, SxProps<Theme>> = {
    container: {
        py: { xs: 12, md: 14 },
        px: { xs: 2, md: 4 },
        minHeight: '100vh',
        backgroundColor: '#FAFAFA',
    },
    header: {
        textAlign: 'center',
        mb: { xs: 6, md: 8 },
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '36px', md: '56px', lg: '64px' },
        fontWeight: 800,
        color: '#2D2D2D',
        mb: 2,
        lineHeight: 1.2,
    },
    subtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '14px', md: '16px' },
        color: '#979797',
        maxWidth: '700px',
        mx: 'auto',
    },
    projectCard: {
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            '& .cardImage': {
                transform: 'scale(1.05)',
            },
        },
    },
    cardImageContainer: {
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        width: '100%',
        height: { xs: '240px', sm: '280px', md: '320px' },
        backgroundColor: '#E0E0E0',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease',
    },
    cardArrow: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2D2D2D',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#2D2D2D',
            color: '#FFFFFF',
            transform: 'scale(1.1)',
        },
    },
    projectLabel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '18px', md: '20px' },
        fontWeight: 600,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
    },
    cardTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '15px', md: '17px' },
        fontWeight: 700,
        color: '#2D2D2D',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        mt: { xs: 2, md: 2.5 },
        mb: 0.5,
    },
    cardLocation: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '12px', md: '13px' },
        fontWeight: 500,
        color: '#979797',
        mb: 1,
    },
    cardDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '13px', md: '14px' },
        color: '#979797',
        lineHeight: 1.6,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    emptyState: {
        textAlign: 'center',
        py: 10,
    },
    emptyText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        color: '#979797',
    },
};

export const ProjectList: React.FC<ProjectListProps> = ({ category, title, subtitle }) => {
    const navigate = useNavigate();
    const { data: projects } = useSuspenseProjects(category ? { category } : undefined);

    const handleProjectClick = (projectId: number) => {
        navigate({ to: `/projects/${projectId}` });
    };

    const getPrimaryImage = (images: Array<{ url: string; isPrimary?: boolean }>) => {
        const primary = images.find((img) => img.isPrimary);
        return primary?.url || images[0]?.url || '';
    };

    return (
        <Box sx={projectListStyles.container}>
            <Container maxWidth='xl'>
                {/* Header */}
                <Box sx={projectListStyles.header}>
                    <Typography sx={projectListStyles.title}>{title}</Typography>
                    {subtitle && <Typography sx={projectListStyles.subtitle}>{subtitle}</Typography>}
                </Box>

                {/* Projects Grid */}
                {projects.length > 0 ? (
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {projects.map((project) => (
                            <Grid item xs={12} sm={6} md={4} key={project.id}>
                                <Box
                                    sx={projectListStyles.projectCard}
                                    onClick={() => handleProjectClick(project.id)}
                                >
                                    <Box sx={projectListStyles.cardImageContainer}>
                                        <Box
                                            component='img'
                                            src={getPrimaryImage(project.images)}
                                            alt={project.title}
                                            sx={projectListStyles.cardImage}
                                            className='cardImage'
                                        />

                                        {/* Arrow Button */}
                                        <Box sx={projectListStyles.cardArrow}>
                                            <ArrowOutwardIcon sx={{ fontSize: '18px' }} />
                                        </Box>

                                        {/* Optional Project Label */}
                                        {project.label && (
                                            <Typography sx={projectListStyles.projectLabel}>
                                                {project.label}
                                            </Typography>
                                        )}
                                    </Box>

                                    <Typography sx={projectListStyles.cardTitle}>{project.title}</Typography>

                                    {project.location && (
                                        <Typography sx={projectListStyles.cardLocation}>
                                            {project.location}
                                        </Typography>
                                    )}

                                    <Typography sx={projectListStyles.cardDescription}>
                                        {project.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Box sx={projectListStyles.emptyState}>
                        <Typography sx={projectListStyles.emptyText}>
                            No projects available at this time.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default ProjectList;
