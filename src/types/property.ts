/**
 * Property TypeScript Interfaces
 */

export interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    lotSize?: number;
    yearBuilt: number;
    propertyType: PropertyType;
    status: PropertyStatus;
    features: PropertyFeature[];
    images: PropertyImage[];
    agentId: number;
    createdAt: string;
    updatedAt: string;
}

export type PropertyType =
    | 'Single Family'
    | 'Condo'
    | 'Townhouse'
    | 'Multi-Family'
    | 'Land'
    | 'Commercial';

export type PropertyStatus = 'For Sale' | 'For Rent' | 'Sold' | 'Rented' | 'Pending';

export interface PropertyFeature {
    id: number;
    name: string;
    category: FeatureCategory;
}

export type FeatureCategory =
    | 'Interior'
    | 'Exterior'
    | 'Appliances'
    | 'Community'
    | 'Other';

export interface PropertyImage {
    id: number;
    url: string;
    caption?: string;
    isPrimary: boolean;
    order: number;
}

export interface PropertyFilters {
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
    maxBedrooms?: number;
    minBathrooms?: number;
    maxBathrooms?: number;
    minArea?: number;
    maxArea?: number;
    propertyTypes?: PropertyType[];
    statuses?: PropertyStatus[];
    city?: string;
    state?: string;
}

export interface CreatePropertyPayload {
    title: string;
    description: string;
    price: number;
    location: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    lotSize?: number;
    yearBuilt: number;
    propertyType: PropertyType;
    status: PropertyStatus;
    features: number[];
    images: File[];
    agentId: number;
}

export type UpdatePropertyPayload = Partial<Omit<Property, 'id' | 'createdAt' | 'updatedAt'>>;
