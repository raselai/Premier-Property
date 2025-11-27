/**
 * Real Estate Agent TypeScript Interfaces
 */

export interface Agent {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    avatar?: string;
    licenseNumber: string;
    specializations: string[];
    experience: number;
    rating: number;
    reviewCount: number;
    propertiesListed: number;
    propertiesSold: number;
    languages: string[];
    officeAddress: string;
    socialMedia: AgentSocialMedia;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AgentSocialMedia {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
}

export interface AgentStats {
    totalListings: number;
    activeListing: number;
    soldProperties: number;
    totalRevenue: number;
    averageRating: number;
    responseTime: string;
}

export interface CreateAgentPayload {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    avatar?: File;
    licenseNumber: string;
    specializations: string[];
    experience: number;
    languages: string[];
    officeAddress: string;
    socialMedia?: AgentSocialMedia;
}

export type UpdateAgentPayload = Partial<Omit<Agent, 'id' | 'createdAt' | 'updatedAt'>>;
