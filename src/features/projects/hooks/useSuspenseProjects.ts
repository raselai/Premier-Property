/**
 * Suspense Projects Hook
 * React Query hook with Suspense for fetching projects list
 */

import { useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../api/projectApi';
import type { ProjectListFilter } from '../types';

export function useSuspenseProjects(filters?: ProjectListFilter) {
    return useSuspenseQuery({
        queryKey: ['projects', filters],
        queryFn: () => projectApi.getProjects(filters),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
