/**
 * PropertyCard Component
 * Reusable card for displaying property information
 */

import React, { useCallback } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import type { SxProps, Theme } from '@mui/material';

// Helper to bypass MUI type limitations
const AnyBox = Box as any;

const cardStyles: Record<string, SxProps<Theme>> = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(212, 175, 55, 0.15)',
        },
    },
    media: {
        height: 240,
        position: 'relative',
    },
    statusChip: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#D4AF37',
        color: '#1A1A1A',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 600,
    },
    content: {
        flexGrow: 1,
        p: 2.5,
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        color: '#1A1A1A',
        mb: 1,
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        mb: 2,
        color: '#8B8B8B',
    },
    price: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: '1.5rem',
        color: '#D4AF37',
        mb: 2,
    },
    features: {
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        color: '#8B8B8B',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.875rem',
    },
    actions: {
        p: 2.5,
        pt: 0,
    },
};

interface PropertyCardProps {
    id: number;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    status?: 'For Sale' | 'For Rent' | 'Sold';
    onViewDetails?: (id: number) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
    id,
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    area,
    image,
    status = 'For Sale',
    onViewDetails,
}) => {
    const handleViewDetails = useCallback(() => {
        onViewDetails?.(id);
    }, [id, onViewDetails]);

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(price);

    return (
        <Card sx={cardStyles.card}>
            <AnyBox sx={cardStyles.media}>
                <CardMedia
                    {...({
                        component: 'img',
                        image,
                        alt: title,
                        sx: { height: '240px' },
                    } as any)}
                />
                <Chip label={status} sx={cardStyles.statusChip} />
            </AnyBox>

            <CardContent sx={cardStyles.content}>
                <Typography variant='h5' sx={cardStyles.title}>
                    {title}
                </Typography>

                <AnyBox sx={cardStyles.location}>
                    <LocationOnIcon fontSize='small' />
                    <Typography variant='body2' sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {location}
                    </Typography>
                </AnyBox>

                <Typography sx={cardStyles.price}>
                    {formattedPrice}
                </Typography>

                <AnyBox sx={cardStyles.features}>
                    <AnyBox sx={cardStyles.feature}>
                        <BedIcon fontSize='small' />
                        <span>{bedrooms} Beds</span>
                    </AnyBox>
                    <AnyBox sx={cardStyles.feature}>
                        <BathtubIcon fontSize='small' />
                        <span>{bathrooms} Baths</span>
                    </AnyBox>
                    <AnyBox sx={cardStyles.feature}>
                        <SquareFootIcon fontSize='small' />
                        <span>{area.toLocaleString()} sqft</span>
                    </AnyBox>
                </AnyBox>
            </CardContent>

            <CardActions sx={cardStyles.actions}>
                <Button
                    fullWidth
                    variant='contained'
                    onClick={handleViewDetails}
                    sx={{
                        backgroundColor: '#D4AF37',
                        color: '#1A1A1A',
                        fontFamily: 'Gilroy, sans-serif',
                        '&:hover': {
                            backgroundColor: '#B8941F',
                        },
                    }}
                >
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default PropertyCard;
