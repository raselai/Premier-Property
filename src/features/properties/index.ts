/**
 * Properties Feature Public API
 */

// Export components
export { PropertyList } from './components/PropertyList';

// Export hooks
export {
    useSuspenseProperties,
    useSuspenseProperty,
    useSuspenseFeaturedProperties,
    useSuspensePropertySearch,
} from './hooks/useSuspenseProperties';

// Export API
export { propertyApi } from './api/propertyApi';
