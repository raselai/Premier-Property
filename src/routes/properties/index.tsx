/**
 * Properties List Route
 * Displays all available properties
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const PropertyList = lazy(() =>
    import('@/features/properties/components/PropertyList').then((module) => ({
        default: module.PropertyList,
    }))
);

export const Route = createFileRoute('/properties/')({
    component: PropertiesPage,
    loader: () => ({
        crumb: 'Properties',
    }),
});

function PropertiesPage() {
    return (
        <SuspenseLoader>
            <PropertyList
                title='All Properties'
                subtitle='Explore our complete collection of premium properties'
            />
        </SuspenseLoader>
    );
}

export default PropertiesPage;
