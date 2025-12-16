/**
 * How to Buy Route
 * Guide for purchasing property
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const HowToBuyPage = lazy(() =>
    import('@/components/HowToBuyPage/HowToBuyPage').then((module) => ({
        default: module.HowToBuyPage,
    }))
);

export const Route = createFileRoute('/buyers-guide/how-to-buy')({
    component: HowToBuyPageRoute,
    loader: () => ({
        crumb: 'How to Buy',
    }),
});

function HowToBuyPageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <HowToBuyPage />
        </SuspenseLoader>
    );
}

export default HowToBuyPageRoute;
