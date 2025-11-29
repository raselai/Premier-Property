/**
 * Suspense Project Hook
 * React Query hook with Suspense for fetching single project
 */

import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { projectApi } from '../api/projectApi';

export function useSuspenseProject(id: number) {
    const queryClient = useQueryClient();

    return useSuspenseQuery({
        queryKey: ['project', id],
        queryFn: async () => {
            // Cache-first: Check list cache before API call
            const cachedList = queryClient.getQueryData(['projects']);
            if (cachedList && Array.isArray(cachedList)) {
                const cached = cachedList.find((p: any) => p.id === id);
                if (cached) return cached; // No API call!
            }

            const project = await projectApi.getProject(id);
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
