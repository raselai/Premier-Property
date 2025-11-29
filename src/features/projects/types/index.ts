/**
 * Project Types
 * Type definitions for projects feature
 */

export type ProjectCategory = 'HANDOVER' | 'ONGOING' | 'UPCOMING';

export interface ProjectImage {
    url: string;
    alt: string;
    isPrimary?: boolean;
}

export interface ProjectDocument {
    name: string;
    url: string;
    type: 'pdf' | 'doc' | 'other';
}

export interface Project {
    id: number;
    title: string;
    description: string;
    category: ProjectCategory;
    location?: string;
    images: ProjectImage[];
    documents?: ProjectDocument[];
    features?: string[];
    specifications?: {
        label: string;
        value: string;
    }[];
    label?: string;
}

export interface ProjectListFilter {
    category?: ProjectCategory;
    search?: string;
}
