/**
 * IntroSection Component
 * Introduction section with company title and description
 */

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const introStyles: Record<string, SxProps<Theme>> = {
    container: {
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        backgroundColor: '#FFFFFF',
    },
    contentWrapper: {
        textAlign: 'center',
        maxWidth: '900px',
        mx: 'auto',
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        color: '#0F5132',
        mb: 3,
        lineHeight: 1.2,
    },
    description: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
        color: '#1A1A1A',
        lineHeight: 1.8,
        fontWeight: 400,
    },
};

export const IntroSection: React.FC = () => {
    return (
        <Box sx={introStyles.container}>
            <Container maxWidth="lg">
                <Box sx={introStyles.contentWrapper}>
                    <Typography sx={introStyles.title}>
                        Premier Housing & Developments Ltd.
                    </Typography>
                    <Typography sx={introStyles.description}>
                        Building Homes. Creating Value. Since 1995.
                        <br />
                        For more than three decades, Premier Housing & Developments Ltd. has been shaping modern
                        living in Bangladesh through quality, reliability, and a commitment to exceptional customer
                        value.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default IntroSection;
