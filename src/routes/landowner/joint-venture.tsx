/**
 * Joint Venture Route
 * Information about land sharing and joint venture opportunities
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const JointVenturePage = lazy(() =>
    import('@/components/JointVenturePage/JointVenturePage').then((module) => ({
        default: module.JointVenturePage,
    }))
);

export const Route = createFileRoute('/landowner/joint-venture')({
    component: JointVenturePageRoute,
    loader: () => ({
        crumb: 'Joint Venture',
    }),
});

function JointVenturePageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <JointVenturePage />
        </SuspenseLoader>
    );
}

export default JointVenturePageRoute;
