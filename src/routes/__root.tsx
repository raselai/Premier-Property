/**
 * Root Layout Component
 * Main application layout with navigation
 */

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Box } from '@mui/material';
import { CustomAppBar } from '@/components/CustomAppBar/CustomAppBar';
import type { SxProps, Theme } from '@mui/material';

const layoutStyles: Record<string, SxProps<Theme>> = {
    main: {
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },
    content: {
        minHeight: '100vh',
    },
};

export const Route = createRootRoute({
    component: RootLayout,
});

function RootLayout() {
    return (
        <Box sx={layoutStyles.main}>
            <CustomAppBar />
            <Box sx={layoutStyles.content}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default RootLayout;
