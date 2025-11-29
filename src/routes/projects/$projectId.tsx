/**
 * Project Detail Route
 * Displays detailed information for a single project
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const ProjectDetail = lazy(() =>
    import('@/features/projects/components/ProjectDetail').then((module) => ({
        default: module.ProjectDetail,
    }))
);

export const Route = createFileRoute('/projects/$projectId')({
    component: ProjectDetailPage,
});

function ProjectDetailPage() {
    const { projectId } = Route.useParams();

    return (
        <SuspenseLoader>
            <ProjectDetail projectId={Number(projectId)} />
        </SuspenseLoader>
    );
}

export default ProjectDetailPage;
