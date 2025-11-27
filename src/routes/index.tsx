/**
 * Home Page Route
 * Landing page with featured properties
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const HomePage = lazy(() => import('@/features/properties/components/HomePage'));

export const Route = createFileRoute('/')({
    component: HomePageRoute,
    loader: () => ({
        crumb: 'Home',
    }),
});

function HomePageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <HomePage />
        </SuspenseLoader>
    );
}

export default HomePageRoute;
