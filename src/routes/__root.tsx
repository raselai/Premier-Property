/**
 * Root Layout Component
 * Main application layout with navigation
 */

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Box } from '@mui/material';
import { CustomAppBar } from '@/components/CustomAppBar/CustomAppBar';
import type { SxProps, Theme } from '@mui/material';

// Helper to bypass MUI type limitations
const AnyBox = Box as any;

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
        <AnyBox sx={layoutStyles.main}>
            <CustomAppBar />
            <AnyBox sx={layoutStyles.content}>
                <Outlet />
            </AnyBox>
        </AnyBox>
    );
}

export default RootLayout;
