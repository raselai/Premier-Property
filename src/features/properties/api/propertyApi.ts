/**
 * Property API Service
 * Centralized API methods for property operations
 */

import apiClient from '@/lib/apiClient';
import type {
    Property,
    CreatePropertyPayload,
    UpdatePropertyPayload,
    PropertyFilters,
} from '@/types/property';

export const propertyApi = {
    /**
     * Fetch all properties with optional filters
     */
    getProperties: async (filters?: PropertyFilters): Promise<Property[]> => {
        const { data } = await apiClient.get('/properties', {
            params: filters,
        });
        return data;
    },

    /**
     * Fetch a single property by ID
     */
    getProperty: async (id: number): Promise<Property> => {
        const { data } = await apiClient.get(`/properties/${id}`);
        return data;
    },

    /**
     * Create a new property
     */
    createProperty: async (payload: CreatePropertyPayload): Promise<Property> => {
        const formData = new FormData();

        // Append all fields to FormData
        Object.entries(payload).forEach(([key, value]) => {
            if (key === 'images' && Array.isArray(value)) {
                value.forEach((file) => {
                    formData.append('images', file);
                });
            } else if (key === 'features' && Array.isArray(value)) {
                formData.append('features', JSON.stringify(value));
            } else {
                formData.append(key, String(value));
            }
        });

        const { data } = await apiClient.post('/properties', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data;
    },

    /**
     * Update an existing property
     */
    updateProperty: async (
        id: number,
        payload: UpdatePropertyPayload
    ): Promise<Property> => {
        const { data } = await apiClient.put(`/properties/${id}`, payload);
        return data;
    },

    /**
     * Delete a property
     */
    deleteProperty: async (id: number): Promise<void> => {
        await apiClient.delete(`/properties/${id}`);
    },

    /**
     * Get featured properties
     */
    getFeaturedProperties: async (limit: number = 6): Promise<Property[]> => {
        const { data } = await apiClient.get('/properties/featured', {
            params: { limit },
        });
        return data;
    },

    /**
     * Search properties by location
     */
    searchByLocation: async (query: string): Promise<Property[]> => {
        const { data } = await apiClient.get('/properties/search', {
            params: { q: query },
        });
        return data;
    },
};

export default propertyApi;
