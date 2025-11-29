/**
 * Completed Projects Route
 * Displays all completed/handover projects
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const ProjectList = lazy(() =>
    import('@/features/projects/components/ProjectList').then((module) => ({
        default: module.ProjectList,
    }))
);

export const Route = createFileRoute('/projects/completed')({
    component: CompletedProjectsPage,
});

function CompletedProjectsPage() {
    return (
        <SuspenseLoader>
            <ProjectList
                category='HANDOVER'
                title='Completed Projects'
                subtitle='View our successfully delivered projects showcasing quality construction and timely execution'
            />
        </SuspenseLoader>
    );
}

export default CompletedProjectsPage;
