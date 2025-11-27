import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '~types': path.resolve(__dirname, './src/types'),
            '~components': path.resolve(__dirname, './src/components'),
            '~features': path.resolve(__dirname, './src/features'),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'mui-vendor': ['@mui/material', '@mui/icons-material'],
                    'tanstack-vendor': ['@tanstack/react-query', '@tanstack/react-router'],
                },
            },
        },
    },
});
