/**
 * Project API Service
 * API service layer for projects feature
 */

import type { Project, ProjectListFilter } from '../types';
import { getProjects, getProjectById } from './projectData';

export const projectApi = {
    /**
     * Fetch all projects with optional filters
     */
    getProjects: async (filters?: ProjectListFilter): Promise<Project[]> => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 100));

        let projects = getProjects(filters?.category);

        // Apply search filter if provided
        if (filters?.search) {
            const searchLower = filters.search.toLowerCase();
            projects = projects.filter(
                (project) =>
                    project.title.toLowerCase().includes(searchLower) ||
                    project.description.toLowerCase().includes(searchLower) ||
                    project.location?.toLowerCase().includes(searchLower)
            );
        }

        return projects;
    },

    /**
     * Fetch a single project by ID
     */
    getProject: async (id: number): Promise<Project | null> => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 100));

        const project = getProjectById(id);
        return project || null;
    },
};
