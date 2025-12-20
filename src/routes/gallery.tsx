/**
 * Gallery Route
 * Displays project images in a beautiful grid layout
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const GalleryPage = lazy(() =>
    import('@/components/GalleryPage/GalleryPage').then((module) => ({
        default: module.GalleryPage,
    }))
);

export const Route = createFileRoute('/gallery')({
    component: GalleryRoute,
    loader: () => ({
        crumb: 'Gallery',
    }),
});

function GalleryRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <GalleryPage />
        </SuspenseLoader>
    );
}

export default GalleryRoute;
