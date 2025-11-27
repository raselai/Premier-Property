# Quick Start Guide - Premium Property

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env

# 3. Start development server
npm run dev
```

The application will open at `http://localhost:3000`

## 📁 Project Overview

### Design System
- **Titles**: Gilroy (Bold, 700)
- **Text**: Montserrat (Regular, 400-500)
- **Colors**: Gold (#D4AF37), Dark (#1A1A1A), Grey (#8B8B8B)

### Tech Stack
- React 18.3 + TypeScript 5.4
- Material-UI v5 (MUI)
- TanStack Router + TanStack Query
- Vite build tool

### Architecture
```
src/
├── components/     # Reusable UI (SuspenseLoader, AppBar, etc.)
├── features/       # Domain features (properties, agents, bookings)
├── routes/         # TanStack Router routes
├── hooks/          # Shared hooks (useMuiSnackbar, etc.)
├── lib/            # Utilities (apiClient)
├── types/          # TypeScript interfaces
└── config/         # Theme configuration
```

## 🎨 Creating Your First Component

```typescript
// src/components/MyComponent/MyComponent.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
    container: {
        p: 3,
        backgroundColor: '#1A1A1A',
    },
    title: {
        fontFamily: 'Gilroy, sans-serif',
        color: '#D4AF37',
        fontWeight: 700,
    },
    text: {
        fontFamily: 'Montserrat, sans-serif',
        color: '#FFFFFF',
    },
};

interface MyComponentProps {
    title: string;
    content: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, content }) => {
    return (
        <Box sx={styles.container}>
            <Typography variant='h3' sx={styles.title}>
                {title}
            </Typography>
            <Typography variant='body1' sx={styles.text}>
                {content}
            </Typography>
        </Box>
    );
};

export default MyComponent;
```

## 📊 Fetching Data with Suspense

```typescript
// 1. Create API service
// src/features/my-feature/api/myFeatureApi.ts
import apiClient from '@/lib/apiClient';

export const myFeatureApi = {
    getData: async () => {
        const { data } = await apiClient.get('/my-feature');
        return data;
    },
};

// 2. Create Suspense hook
// src/features/my-feature/hooks/useSuspenseMyFeature.ts
import { useSuspenseQuery } from '@tanstack/react-query';
import { myFeatureApi } from '../api/myFeatureApi';

export function useSuspenseMyFeature() {
    return useSuspenseQuery({
        queryKey: ['my-feature'],
        queryFn: () => myFeatureApi.getData(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

// 3. Use in component
// src/features/my-feature/components/MyFeature.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSuspenseMyFeature } from '../hooks/useSuspenseMyFeature';

export const MyFeature: React.FC = () => {
    const { data } = useSuspenseMyFeature(); // No isLoading needed!

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant='h2'>{data.title}</Typography>
        </Box>
    );
};

// 4. Create route with Suspense
// src/routes/my-feature/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '~components/SuspenseLoader';

const MyFeature = lazy(() =>
    import('@/features/my-feature/components/MyFeature').then(
        (module) => ({ default: module.MyFeature })
    )
);

export const Route = createFileRoute('/my-feature/')({
    component: () => (
        <SuspenseLoader>
            <MyFeature />
        </SuspenseLoader>
    ),
    loader: () => ({ crumb: 'My Feature' }),
});
```

## 🎯 Import Aliases

```typescript
// Use these aliases for cleaner imports:

import { apiClient } from '@/lib/apiClient';              // @/ = src/
import type { Property } from '~types/property';          // ~types = src/types
import { SuspenseLoader } from '~components/SuspenseLoader'; // ~components
import { propertyApi } from '~features/properties';       // ~features
```

## 🎨 Styling with MUI sx Prop

```typescript
const styles: Record<string, SxProps<Theme>> = {
    // Titles with Gilroy
    title: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        color: '#D4AF37', // Gold
    },

    // Body text with Montserrat
    text: {
        fontFamily: 'Montserrat, sans-serif',
        color: '#1A1A1A', // Dark
    },

    // Responsive design
    container: {
        p: { xs: 2, md: 4 },
        backgroundColor: '#FFFFFF',
    },

    // Hover effects
    button: {
        backgroundColor: '#D4AF37',
        color: '#1A1A1A',
        '&:hover': {
            backgroundColor: '#B8941F',
        },
    },
};
```

## 🗂️ File Organization Rules

### When to create a Feature
- Has 3+ related components
- Has own API endpoints
- Domain-specific logic
- Will grow over time

### When to create a Reusable Component
- Used in 3+ places
- Generic, no domain logic
- Pure presentation

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📚 Key Patterns

### 1. Components
- Use `React.FC<Props>` pattern
- Lazy load heavy components
- Wrap in `<SuspenseLoader>`
- No early returns for loading

### 2. Data Fetching
- Always use `useSuspenseQuery`
- Cache-first strategy
- Centralized API services
- Route format: `/properties` NOT `/api/properties`

### 3. Styling
- Use MUI `sx` prop
- Gilroy for titles, Montserrat for text
- Gold/Dark/Grey color scheme
- <100 lines inline, >100 lines separate file

### 4. TypeScript
- Strict mode enabled
- No `any` types
- Explicit return types
- Use `import type` for types

## 🎓 Learning Resources

Read these guides in order:
1. `resources/styling-guide.md` - Fonts and colors
2. `resources/component-patterns.md` - Component structure
3. `resources/data-fetching.md` - API and TanStack Query
4. `resources/routing-guide.md` - TanStack Router
5. `resources/complete-examples.md` - Full examples

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### TypeScript errors after install
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Vite not detecting changes
```bash
# Restart dev server with cache clear
npm run dev -- --force
```

## 📝 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. 📖 Read styling guide
4. 🎨 Create your first component
5. 📊 Add data fetching
6. 🚀 Build a feature!

For detailed documentation, see:
- `README.md` - Full documentation
- `PROJECT_STRUCTURE.md` - Complete file structure
- `/resources` - Development guidelines

Happy coding! 🚀
