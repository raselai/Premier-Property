/**
 * Our Approach Route
 * Company's approach to real estate development
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const OurApproachPage = lazy(() =>
    import('@/components/OurApproachPage/OurApproachPage').then((module) => ({
        default: module.OurApproachPage,
    }))
);

export const Route = createFileRoute('/about/approach')({
    component: ApproachPage,
    loader: () => ({
        crumb: 'Our Approach',
    }),
});

function ApproachPage() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <OurApproachPage />
        </SuspenseLoader>
    );
}

export default ApproachPage;
