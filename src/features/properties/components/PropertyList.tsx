/**
 * PropertyList Component
 * Displays a grid of property cards
 */

import React, { useState, useMemo, useCallback } from 'react';
import { Box, Grid, Typography, TextField, MenuItem } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { PropertyCard } from '@/components/PropertyCard/PropertyCard';
import type { PropertyStatus } from '@/types/property';
import { useNavigate } from '@tanstack/react-router';

const listStyles: Record<string, SxProps<Theme>> = {
    container: {
        p: { xs: 2, md: 4 },
    },
    header: {
        mb: 4,
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        color: '#D4AF37',
        mb: 1,
    },
    subtitle: {
        fontFamily: 'Montserrat, sans-serif',
        color: '#8B8B8B',
    },
    filters: {
        display: 'flex',
        gap: 2,
        mb: 4,
        flexWrap: 'wrap',
    },
    filterField: {
        minWidth: 200,
        '& .MuiOutlinedInput-root': {
            fontFamily: 'Montserrat, sans-serif',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#D4AF37',
            },
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#D4AF37',
        },
    },
    grid: {
        mb: 4,
    },
    emptyState: {
        textAlign: 'center',
        py: 8,
    },
};

interface PropertyListProps {
    title?: string;
    subtitle?: string;
}

export const PropertyList: React.FC<PropertyListProps> = ({
    title = 'Browse Properties',
    subtitle = 'Find your dream home from our exclusive collection',
}) => {
    const navigate = useNavigate();
    const [statusFilter, setStatusFilter] = useState<PropertyStatus | 'All'>('All');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');

    // Mock properties data (replace with real API later)
    const properties = [
        {
            id: 1,
            title: 'Luxury Villa in Beverly Hills',
            location: 'Beverly Hills, CA',
            price: 4500000,
            bedrooms: 5,
            bathrooms: 4,
            area: 4200,
            status: 'For Sale' as const,
            images: [{ id: 1, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 2,
            title: 'Modern Penthouse Downtown',
            location: 'Manhattan, NY',
            price: 6800000,
            bedrooms: 4,
            bathrooms: 3,
            area: 3500,
            status: 'For Sale' as const,
            images: [{ id: 2, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 3,
            title: 'Beachfront Estate Malibu',
            location: 'Malibu, CA',
            price: 12500000,
            bedrooms: 6,
            bathrooms: 5,
            area: 6000,
            status: 'For Sale' as const,
            images: [{ id: 3, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 4,
            title: 'Contemporary Condo',
            location: 'Miami Beach, FL',
            price: 2200000,
            bedrooms: 3,
            bathrooms: 2,
            area: 2100,
            status: 'For Rent' as const,
            images: [{ id: 4, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 5,
            title: 'Historic Townhouse',
            location: 'Boston, MA',
            price: 3400000,
            bedrooms: 4,
            bathrooms: 3,
            area: 3200,
            status: 'For Sale' as const,
            images: [{ id: 5, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 6,
            title: 'Mountain Retreat Lodge',
            location: 'Aspen, CO',
            price: 8900000,
            bedrooms: 7,
            bathrooms: 6,
            area: 7500,
            status: 'For Sale' as const,
            images: [{ id: 6, url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 7,
            title: 'Waterfront Mansion',
            location: 'Seattle, WA',
            price: 7200000,
            bedrooms: 5,
            bathrooms: 4,
            area: 5200,
            status: 'For Sale' as const,
            images: [{ id: 7, url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 8,
            title: 'Urban Loft',
            location: 'Brooklyn, NY',
            price: 1800000,
            bedrooms: 2,
            bathrooms: 2,
            area: 1800,
            status: 'Sold' as const,
            images: [{ id: 8, url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', caption: '', isPrimary: true, order: 1 }],
        },
        {
            id: 9,
            title: 'Spanish Colonial Estate',
            location: 'Santa Barbara, CA',
            price: 9500000,
            bedrooms: 6,
            bathrooms: 5,
            area: 6800,
            status: 'For Sale' as const,
            images: [{ id: 9, url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800', caption: '', isPrimary: true, order: 1 }],
        },
    ];

    // Filter properties based on user selections
    const filteredProperties = useMemo(() => {
        let result = properties;

        if (statusFilter !== 'All') {
            result = result.filter((prop) => prop.status === statusFilter);
        }

        if (minPrice) {
            const min = parseFloat(minPrice);
            result = result.filter((prop) => prop.price >= min);
        }

        if (maxPrice) {
            const max = parseFloat(maxPrice);
            result = result.filter((prop) => prop.price <= max);
        }

        return result;
    }, [properties, statusFilter, minPrice, maxPrice]);

    const handleViewDetails = useCallback(
        (id: number) => {
            navigate({ to: `/properties/${id}` });
        },
        [navigate]
    );

    return (
        <Box sx={listStyles.container}>
            <Box sx={listStyles.header}>
                <Typography variant='h2' sx={listStyles.title}>
                    {title}
                </Typography>
                <Typography variant='subtitle1' sx={listStyles.subtitle}>
                    {subtitle}
                </Typography>
            </Box>

            {/* Filters */}
            <Box sx={listStyles.filters}>
                <TextField
                    select
                    label='Status'
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as PropertyStatus | 'All')}
                    sx={listStyles.filterField}
                >
                    <MenuItem value='All'>All</MenuItem>
                    <MenuItem value='For Sale'>For Sale</MenuItem>
                    <MenuItem value='For Rent'>For Rent</MenuItem>
                    <MenuItem value='Sold'>Sold</MenuItem>
                </TextField>

                <TextField
                    label='Min Price'
                    type='number'
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    sx={listStyles.filterField}
                    placeholder='0'
                />

                <TextField
                    label='Max Price'
                    type='number'
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    sx={listStyles.filterField}
                    placeholder='No limit'
                />
            </Box>

            {/* Property Grid */}
            {filteredProperties.length > 0 ? (
                <Grid container spacing={3} sx={listStyles.grid}>
                    {filteredProperties.map((property) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={property.id}>
                            <PropertyCard
                                id={property.id}
                                title={property.title}
                                location={property.location}
                                price={property.price}
                                bedrooms={property.bedrooms}
                                bathrooms={property.bathrooms}
                                area={property.area}
                                image={property.images[0]?.url || '/placeholder.jpg'}
                                status={property.status}
                                onViewDetails={handleViewDetails}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box sx={listStyles.emptyState}>
                    <Typography
                        variant='h5'
                        sx={{
                            fontFamily: 'Gilroy, sans-serif',
                            color: '#8B8B8B',
                            mb: 1,
                        }}
                    >
                        No properties found
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            color: '#8B8B8B',
                        }}
                    >
                        Try adjusting your filters
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default PropertyList;
