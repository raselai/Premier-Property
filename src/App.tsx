/**
 * Main Application Component
 * Sets up providers and routing
 */

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';
import { theme } from './config/theme';
import { routeTree } from './routeTree.gen';

// Create a new QueryClient instance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 10, // 10 minutes
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
        },
    },
});

// Create a new router instance
const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    autoHideDuration={4000}
                >
                    <RouterProvider router={router} />
                </SnackbarProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
