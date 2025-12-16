/**
 * About Us Route
 * Main about page showcasing company information
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const AboutUsPage = lazy(() =>
    import('@/components/AboutUsPage/AboutUsPage').then((module) => ({
        default: module.AboutUsPage,
    }))
);

export const Route = createFileRoute('/about/')({
    component: AboutPage,
    loader: () => ({
        crumb: 'About Us',
    }),
});

function AboutPage() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <AboutUsPage />
        </SuspenseLoader>
    );
}

export default AboutPage;
