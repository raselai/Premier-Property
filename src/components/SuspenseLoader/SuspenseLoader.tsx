/**
 * SuspenseLoader Component
 * Wrapper for React Suspense with loading animation
 * Prevents layout shift and provides consistent loading UX
 */

import React, { Suspense } from 'react';
import { Box, CircularProgress, Fade } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const loaderStyles: Record<string, SxProps<Theme>> = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        width: '100%',
    },
    progress: {
        color: '#D4AF37', // Gold
    },
};

interface SuspenseLoaderProps {
    children: React.ReactNode;
    minHeight?: string | number;
}

const Loader: React.FC<{ minHeight?: string | number }> = ({ minHeight }) => (
    <Fade in timeout={300}>
        <Box
            sx={{
                ...loaderStyles.container,
                minHeight: minHeight || '200px',
            }}
        >
            <CircularProgress sx={loaderStyles.progress} size={48} thickness={3.6} />
        </Box>
    </Fade>
);

export const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({ children, minHeight }) => {
    return (
        <Suspense fallback={<Loader minHeight={minHeight} />}>
            {children}
        </Suspense>
    );
};

export default SuspenseLoader;
