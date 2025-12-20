/**
 * Career Route
 * Displays career opportunities and company culture
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const CareerPage = lazy(() =>
    import('@/components/CareerPage/CareerPage').then((module) => ({
        default: module.CareerPage,
    }))
);

export const Route = createFileRoute('/career')({
    component: CareerRoute,
    loader: () => ({
        crumb: 'Career',
    }),
});

function CareerRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <CareerPage />
        </SuspenseLoader>
    );
}

export default CareerRoute;
