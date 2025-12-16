/**
 * Milestones Route
 * Company's journey and key achievements
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const MilestonesPage = lazy(() =>
    import('@/components/MilestonesPage/MilestonesPage').then((module) => ({
        default: module.MilestonesPage,
    }))
);

export const Route = createFileRoute('/about/milestones')({
    component: MilestonesPageRoute,
    loader: () => ({
        crumb: 'Milestones',
    }),
});

function MilestonesPageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <MilestonesPage />
        </SuspenseLoader>
    );
}

export default MilestonesPageRoute;
