# Premium Property

A modern, luxury real estate application built with React, TypeScript, and Material-UI.

## Design System

### Typography
- **Titles/Headings**: Gilroy (Bold, 700 weight)
- **Body Text**: Montserrat (Regular to Medium, 400-500 weight)

### Color Palette
- **Gold**: `#D4AF37` - Primary accent, titles, CTAs
- **Dark**: `#1A1A1A` - Primary text, backgrounds
- **Grey**: `#8B8B8B` - Secondary text, borders

## Tech Stack

- **React 18.3** - UI library
- **TypeScript 5.4** - Type safety
- **Material-UI v5** - Component library
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching with Suspense
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Notistack** - Toast notifications

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SuspenseLoader/
│   ├── CustomAppBar/
│   └── PropertyCard/
├── features/           # Domain-specific features
│   ├── properties/
│   │   ├── api/       # API service layer
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── helpers/
│   │   └── types/
│   ├── agents/
│   └── bookings/
├── routes/            # TanStack Router routes
│   ├── __root.tsx
│   ├── index.tsx
│   └── properties/
├── hooks/             # Shared custom hooks
├── lib/               # Utilities and API client
├── types/             # Shared TypeScript types
├── config/            # App configuration
│   └── theme.ts      # MUI theme with Gilroy/Montserrat
└── App.tsx
```

## Features

### Properties Feature
- Browse all properties with filtering
- View property details
- Search by location
- Featured properties showcase

### Agents Feature
- Agent profiles with stats
- Contact agents
- View agent listings

### Bookings Feature
- Schedule property viewings
- Manage appointments
- Calendar integration

## Architecture Patterns

### Component Patterns
- React.FC with TypeScript
- Lazy loading with React.lazy()
- Suspense boundaries with SuspenseLoader
- No early returns for loading states

### Data Fetching
- useSuspenseQuery for all data fetching
- Cache-first strategy
- Centralized API services
- Automatic error handling

### Styling
- MUI sx prop (type-safe)
- Inline styles <100 lines
- Separate .styles.ts files >100 lines
- Responsive design with Grid v7

### File Organization
- features/ for domain-specific code
- components/ for reusable UI
- Import aliases: @/, ~types, ~components, ~features

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd premium-property
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Import to Vercel**: Import the repository in your [Vercel dashboard](https://vercel.com)
3. **Configure Environment Variables**: Add any required environment variables (e.g., `VITE_API_BASE_URL`)
4. **Deploy**: Vercel will automatically deploy and rebuild on every push to your main branch

For detailed step-by-step instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick Deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/premium-property)

## Development Guidelines

### Creating a New Feature

1. Create feature directory structure:
```bash
mkdir -p src/features/my-feature/{api,components,hooks,helpers,types}
```

2. Create API service:
```typescript
// src/features/my-feature/api/myFeatureApi.ts
import apiClient from '@/lib/apiClient';

export const myFeatureApi = {
    getData: async () => {
        const { data } = await apiClient.get('/my-feature');
        return data;
    },
};
```

3. Create Suspense hook:
```typescript
// src/features/my-feature/hooks/useSuspenseMyFeature.ts
import { useSuspenseQuery } from '@tanstack/react-query';
import { myFeatureApi } from '../api/myFeatureApi';

export function useSuspenseMyFeature() {
    return useSuspenseQuery({
        queryKey: ['my-feature'],
        queryFn: () => myFeatureApi.getData(),
    });
}
```

4. Create component:
```typescript
// src/features/my-feature/components/MyFeature.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSuspenseMyFeature } from '../hooks/useSuspenseMyFeature';

export const MyFeature: React.FC = () => {
    const { data } = useSuspenseMyFeature();

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant='h2' sx={{ fontFamily: 'Gilroy, sans-serif' }}>
                {data.title}
            </Typography>
        </Box>
    );
};
```

5. Create route:
```typescript
// src/routes/my-feature/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '~components/SuspenseLoader';

const MyFeature = lazy(() => import('@/features/my-feature/components/MyFeature'));

export const Route = createFileRoute('/my-feature/')({
    component: () => (
        <SuspenseLoader>
            <MyFeature />
        </SuspenseLoader>
    ),
});
```

### Code Style

- 4 spaces indentation
- Single quotes for strings
- Trailing commas
- No `any` types
- Explicit return types on functions
- Type imports with `import type`

## API Integration

The application expects a REST API with the following endpoints:

### Properties
- `GET /properties` - List all properties
- `GET /properties/:id` - Get property details
- `POST /properties` - Create property
- `PUT /properties/:id` - Update property
- `DELETE /properties/:id` - Delete property

### Agents
- `GET /agents` - List all agents
- `GET /agents/:id` - Get agent details
- `GET /agents/:id/stats` - Get agent statistics

### Bookings
- `GET /bookings` - List bookings
- `POST /bookings` - Create booking
- `PUT /bookings/:id` - Update booking

## Contributing

Please follow the established patterns and guidelines in the `/resources` directory.

## License

MIT
