# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Type checking**: `npm run type-check` (TypeScript validation without build)
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Preview production**: `npm run preview`
- **Lint**: `npm run lint`

### Environment Setup
1. Copy `.env.example` to `.env`
2. Set `VITE_API_BASE_URL` to your backend API endpoint

## Architecture Overview

### Tech Stack
- **React 18.3** + **TypeScript 5.4** (strict mode)
- **TanStack Router** (file-based routing with lazy loading)
- **TanStack Query** (data fetching with Suspense)
- **Material-UI v5** (component library)
- **Vite** (build tool with code splitting)

### Design System
- **Fonts**: Gilroy (headings, bold, 700), Montserrat (body, 400-500)
- **Colors**: Gold `#D4AF37`, Dark `#1A1A1A`, Grey `#8B8B8B`

### Directory Structure
```
src/
├── features/           # Domain features (properties, agents, bookings, auth)
│   └── {feature}/
│       ├── api/       # API service layer
│       ├── components/
│       ├── hooks/
│       ├── helpers/
│       └── types/
├── components/        # Shared UI components (used in 3+ places)
├── routes/           # TanStack Router file-based routes
├── lib/              # Shared utilities (apiClient, utils)
├── types/            # Shared TypeScript types
├── hooks/            # Shared custom hooks
└── config/           # App configuration (theme)
```

### Import Aliases
- `@/` → `src/`
- `~types` → `src/types`
- `~components` → `src/components`
- `~features` → `src/features`

## Critical Architectural Patterns

### 1. Data Fetching with Suspense

**Always use `useSuspenseQuery` for new components**, never regular `useQuery`:

```typescript
// Feature hook: features/properties/hooks/useSuspenseProperties.ts
import { useSuspenseQuery } from '@tanstack/react-query';
import { propertyApi } from '../api/propertyApi';

export function useSuspenseProperty(id: number) {
    const queryClient = useQueryClient();

    return useSuspenseQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            // Cache-first: Check list cache before API call
            const cachedList = queryClient.getQueryData(['properties']);
            if (cachedList) {
                const cached = cachedList.find(p => p.id === id);
                if (cached) return cached; // No API call!
            }
            return propertyApi.getProperty(id);
        },
        staleTime: 5 * 60 * 1000,
    });
}
```

**Key principles**:
- No `isLoading` checks - Suspense handles loading
- Data is always defined (never `Data | undefined`)
- Cache-first strategy: check grid/list cache before API calls
- Wrap components in `<SuspenseLoader>` boundaries

### 2. Component Pattern

All components use `React.FC<Props>` with lazy loading:

```typescript
import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

interface MyComponentProps {
    /** Property ID to display */
    propertyId: number;
}

export const MyComponent: React.FC<MyComponentProps> = ({ propertyId }) => {
    // No isLoading needed - Suspense handles it
    const { data } = useSuspenseProperty(propertyId);

    return <Box>{data.title}</Box>;
};

export default MyComponent;
```

**Component structure order**:
1. Imports (React, MUI, feature imports, hooks)
2. Props interface with JSDoc
3. Styles (if <100 lines inline, else separate .styles.ts)
4. Component definition with hooks:
   - Context hooks first
   - Data fetching (`useSuspenseQuery`)
   - Local state
   - Memoized values
   - Effects
   - Event handlers (with `useCallback`)
5. Render
6. Default export at bottom

### 3. Routing Pattern

File-based routing with lazy loading and Suspense:

```typescript
// routes/properties/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const PropertyList = lazy(() =>
    import('@/features/properties/components/PropertyList').then(m => ({
        default: m.PropertyList,
    }))
);

export const Route = createFileRoute('/properties/')({
    component: PropertiesPage,
});

function PropertiesPage() {
    return (
        <SuspenseLoader>
            <PropertyList />
        </SuspenseLoader>
    );
}
```

### 4. API Service Layer

Centralized API services per feature using shared `apiClient`:

```typescript
// features/properties/api/propertyApi.ts
import apiClient from '@/lib/apiClient';
import type { Property } from '@/types/property';

export const propertyApi = {
    /**
     * Fetch all properties with optional filters
     */
    getProperties: async (filters?: PropertyFilters): Promise<Property[]> => {
        const { data } = await apiClient.get('/properties', { params: filters });
        return data;
    },

    /**
     * Create property with multipart/form-data
     */
    createProperty: async (payload: CreatePropertyPayload): Promise<Property> => {
        const formData = new FormData();
        // Handle file uploads in FormData
        Object.entries(payload).forEach(([key, value]) => {
            if (key === 'images' && Array.isArray(value)) {
                value.forEach(file => formData.append('images', file));
            } else {
                formData.append(key, String(value));
            }
        });

        const { data } = await apiClient.post('/properties', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data;
    },
};
```

**API client details** (src/lib/apiClient.ts):
- Pre-configured axios instance
- Auto-adds Bearer token from localStorage
- 401 responses → auto-redirect to /login
- 30s timeout, credentials included

### 5. Query Configuration

Global defaults in App.tsx:

```typescript
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,        // 5 min
            gcTime: 1000 * 60 * 10,          // 10 min
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
        },
    },
});
```

## Feature Development Workflow

### Adding a New Feature

1. **Create directory structure**:
   ```bash
   mkdir -p src/features/my-feature/{api,components,hooks,helpers,types}
   ```

2. **Define types** (`types/index.ts`)
3. **Create API service** (`api/myFeatureApi.ts`) using `apiClient`
4. **Create Suspense hook** (`hooks/useSuspenseMyFeature.ts`)
5. **Build component** (`components/MyFeature.tsx`) with `React.FC<Props>`
6. **Create route** (`routes/my-feature/index.tsx`) with lazy loading
7. **Export public API** (`index.ts`)

### Example: Adding a Property Details View

```typescript
// 1. Type (if not in shared types)
export interface PropertyDetails extends Property {
    viewingSchedule: ViewingSlot[];
}

// 2. API service
export const propertyApi = {
    getPropertyDetails: async (id: number): Promise<PropertyDetails> => {
        const { data } = await apiClient.get(`/properties/${id}/details`);
        return data;
    },
};

// 3. Suspense hook
export function useSuspensePropertyDetails(id: number) {
    return useSuspenseQuery({
        queryKey: ['property', id, 'details'],
        queryFn: () => propertyApi.getPropertyDetails(id),
    });
}

// 4. Component
export const PropertyDetails: React.FC<{id: number}> = ({ id }) => {
    const { data } = useSuspensePropertyDetails(id);
    return <Box>{data.title}</Box>;
};

// 5. Route (routes/properties/$propertyId.details.tsx)
const PropertyDetails = lazy(() =>
    import('@/features/properties/components/PropertyDetails').then(m => ({
        default: m.PropertyDetails
    }))
);

export const Route = createFileRoute('/properties/$propertyId/details')({
    component: () => (
        <SuspenseLoader>
            <PropertyDetails id={Route.useParams().propertyId} />
        </SuspenseLoader>
    ),
});
```

## Important Conventions

### TypeScript
- Strict mode enabled (`noImplicitAny`, `strictNullChecks`)
- No `any` types - use `unknown` if necessary
- Explicit return types on all functions
- Use `import type` for type-only imports

### Styling
- Use MUI `sx` prop (type-safe)
- Inline styles if <100 lines: `const styles: Record<string, SxProps<Theme>> = {...}`
- Separate `.styles.ts` file if >100 lines
- Responsive: Use MUI Grid v2, breakpoints in theme

### Code Organization
- Features in `features/` for domain-specific code
- Components in `components/` only if reusable in 3+ places
- Never create new axios instances - use `apiClient`
- Lazy load all route components
- Always wrap lazy components in `<SuspenseLoader>`

### Mutations
```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMuiSnackbar } from '@/hooks/useMuiSnackbar';

const { showSuccess, showError } = useMuiSnackbar();
const queryClient = useQueryClient();

const mutation = useMutation({
    mutationFn: (data) => propertyApi.createProperty(data),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['properties'] });
        showSuccess('Property created');
    },
    onError: () => showError('Failed to create property'),
});
```

## Provider Stack

Root provider order in App.tsx:
1. `ThemeProvider` (MUI theme)
2. `CssBaseline` (normalize CSS)
3. `QueryClientProvider` (TanStack Query)
4. `SnackbarProvider` (notistack, top-right, max 3)
5. `RouterProvider` (TanStack Router)
6. `ReactQueryDevtools` (dev only)

## Testing & Debugging

- **React Query Devtools**: Available in dev mode (toggle with floating icon)
- **Type errors**: Run `npm run type-check` before committing
- **Build errors**: Run `npm run build` to catch production issues

## Common Patterns Reference

For detailed patterns, see `/resources` directory:
- `data-fetching.md` - useSuspenseQuery, cache-first, mutations
- `component-patterns.md` - React.FC, lazy loading, Suspense
- `routing-guide.md` - TanStack Router file-based routing
- `typescript-standards.md` - Type safety conventions
