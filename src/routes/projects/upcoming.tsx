/**
 * Upcoming Projects Route
 * Displays all upcoming projects
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const ProjectList = lazy(() =>
    import('@/features/projects/components/ProjectList').then((module) => ({
        default: module.ProjectList,
    }))
);

export const Route = createFileRoute('/projects/upcoming')({
    component: UpcomingProjectsPage,
});

function UpcomingProjectsPage() {
    return (
        <SuspenseLoader>
            <ProjectList
                category='UPCOMING'
                title='Upcoming Projects'
                subtitle='Explore our future developments bringing innovative design and exceptional living experiences'
            />
        </SuspenseLoader>
    );
}

export default UpcomingProjectsPage;
