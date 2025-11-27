/**
 * Properties Suspense Hooks
 * TanStack Query hooks with Suspense support
 */

import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { propertyApi } from '../api/propertyApi';
import type { Property, PropertyFilters } from '@/types/property';

/**
 * Fetch all properties with optional filters
 */
export function useSuspenseProperties(filters?: PropertyFilters) {
    return useSuspenseQuery<Property[], Error>({
        queryKey: ['properties', filters],
        queryFn: () => propertyApi.getProperties(filters),
        staleTime: 2 * 60 * 1000, // 2 minutes
        gcTime: 5 * 60 * 1000, // 5 minutes
    });
}

/**
 * Fetch a single property with cache-first strategy
 */
export function useSuspenseProperty(id: number) {
    const queryClient = useQueryClient();

    return useSuspenseQuery<Property, Error>({
        queryKey: ['property', id],
        queryFn: async () => {
            // Strategy 1: Check properties list cache first
            const cachedList = queryClient.getQueryData<Property[]>(['properties']);

            if (cachedList) {
                const cached = cachedList.find((property) => property.id === id);
                if (cached) {
                    return cached; // Return from cache - no API call!
                }
            }

            // Strategy 2: Not in cache, fetch from API
            return propertyApi.getProperty(id);
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: false,
    });
}

/**
 * Fetch featured properties
 */
export function useSuspenseFeaturedProperties(limit: number = 6) {
    return useSuspenseQuery<Property[], Error>({
        queryKey: ['properties', 'featured', limit],
        queryFn: () => propertyApi.getFeaturedProperties(limit),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

/**
 * Search properties by location
 * Note: useSuspenseQuery doesn't support 'enabled' option.
 * Conditionally call this hook instead based on query length.
 */
export function useSuspensePropertySearch(query: string) {
    if (query.length <= 2) {
        throw new Error('Query must be longer than 2 characters');
    }
    
    return useSuspenseQuery<Property[], Error>({
        queryKey: ['properties', 'search', query],
        queryFn: () => propertyApi.searchByLocation(query),
        staleTime: 1 * 60 * 1000, // 1 minute
    });
}
