/**
 * Submit Land Route
 * Form for landowners to submit their land details
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const SubmitLandPage = lazy(() =>
    import('@/components/SubmitLandPage/SubmitLandPage').then((module) => ({
        default: module.SubmitLandPage,
    }))
);

export const Route = createFileRoute('/landowner/submit')({
    component: SubmitLandPageRoute,
    loader: () => ({
        crumb: 'Submit Your Land',
    }),
});

function SubmitLandPageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <SubmitLandPage />
        </SuspenseLoader>
    );
}

export default SubmitLandPageRoute;
