/**
 * Ongoing Projects Route
 * Displays all ongoing projects
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const ProjectList = lazy(() =>
    import('@/features/projects/components/ProjectList').then((module) => ({
        default: module.ProjectList,
    }))
);

export const Route = createFileRoute('/projects/ongoing')({
    component: OngoingProjectsPage,
});

function OngoingProjectsPage() {
    return (
        <SuspenseLoader>
            <ProjectList
                category='ONGOING'
                title='Ongoing Projects'
                subtitle='Discover our current projects under development with modern design and premium quality'
            />
        </SuspenseLoader>
    );
}

export default OngoingProjectsPage;
