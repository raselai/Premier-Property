# Premium Property - Project Structure

## Complete Directory Tree

```
Premium Property/
│
├── public/                          # Public assets
│   └── vite.svg
│
├── src/                             # Source code
│   │
│   ├── components/                  # Reusable UI Components
│   │   ├── SuspenseLoader/
│   │   │   └── SuspenseLoader.tsx  # Loading wrapper with fade animation
│   │   ├── CustomAppBar/
│   │   │   └── CustomAppBar.tsx    # Main navigation header
│   │   ├── PropertyCard/
│   │   │   └── PropertyCard.tsx    # Property display card
│   │   ├── ErrorBoundary/
│   │   │   └── ErrorBoundary.tsx   # Error handling component
│   │   └── LoadingOverlay/
│   │       └── LoadingOverlay.tsx  # Legacy loading component
│   │
│   ├── features/                    # Domain-Specific Features
│   │   │
│   │   ├── properties/             # Property Management Feature
│   │   │   ├── api/
│   │   │   │   └── propertyApi.ts           # Property API service
│   │   │   ├── components/
│   │   │   │   ├── PropertyList.tsx         # Properties grid/list
│   │   │   │   ├── PropertyDetails.tsx      # Single property view
│   │   │   │   ├── PropertyForm.tsx         # Create/Edit property
│   │   │   │   └── HomePage.tsx             # Landing page
│   │   │   ├── hooks/
│   │   │   │   ├── useSuspenseProperties.ts # Suspense queries
│   │   │   │   └── usePropertyMutations.ts  # Create/Update/Delete
│   │   │   ├── helpers/
│   │   │   │   └── propertyHelpers.ts       # Utility functions
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Feature-specific types
│   │   │   └── index.ts                      # Public API exports
│   │   │
│   │   ├── agents/                 # Real Estate Agents Feature
│   │   │   ├── api/
│   │   │   │   └── agentApi.ts              # Agent API service
│   │   │   ├── components/
│   │   │   │   ├── AgentList.tsx            # Agents grid
│   │   │   │   ├── AgentProfile.tsx         # Agent details
│   │   │   │   └── AgentCard.tsx            # Agent card component
│   │   │   ├── hooks/
│   │   │   │   └── useSuspenseAgents.ts     # Suspense queries
│   │   │   ├── helpers/
│   │   │   │   └── agentHelpers.ts          # Utility functions
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Feature-specific types
│   │   │   └── index.ts                      # Public API exports
│   │   │
│   │   ├── bookings/               # Property Viewing Bookings Feature
│   │   │   ├── api/
│   │   │   │   └── bookingApi.ts            # Booking API service
│   │   │   ├── components/
│   │   │   │   ├── BookingList.tsx          # Bookings list
│   │   │   │   ├── BookingForm.tsx          # Schedule viewing
│   │   │   │   └── BookingCalendar.tsx      # Calendar view
│   │   │   ├── hooks/
│   │   │   │   └── useSuspenseBookings.ts   # Suspense queries
│   │   │   ├── helpers/
│   │   │   │   └── bookingHelpers.ts        # Utility functions
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Feature-specific types
│   │   │   └── index.ts                      # Public API exports
│   │   │
│   │   └── auth/                   # Authentication Feature
│   │       ├── api/
│   │       │   └── authApi.ts               # Auth API service
│   │       ├── components/
│   │       │   ├── LoginForm.tsx            # Login page
│   │       │   └── RegisterForm.tsx         # Registration page
│   │       ├── hooks/
│   │       │   └── useAuth.ts               # Auth hook
│   │       ├── helpers/
│   │       │   └── authHelpers.ts           # Auth utilities
│   │       └── types/
│   │           └── index.ts                 # Feature-specific types
│   │
│   ├── routes/                      # TanStack Router Routes
│   │   ├── __root.tsx              # Root layout with AppBar
│   │   ├── index.tsx               # Home page route (/)
│   │   ├── properties/
│   │   │   ├── index.tsx           # Properties list (/properties)
│   │   │   ├── $propertyId.tsx     # Property details (/properties/:id)
│   │   │   └── create/
│   │   │       └── index.tsx       # Create property (/properties/create)
│   │   ├── agents/
│   │   │   ├── index.tsx           # Agents list (/agents)
│   │   │   └── $agentId.tsx        # Agent profile (/agents/:id)
│   │   ├── bookings/
│   │   │   ├── index.tsx           # Bookings list (/bookings)
│   │   │   └── create/
│   │   │       └── index.tsx       # Create booking (/bookings/create)
│   │   └── dashboard/
│   │       └── index.tsx           # Dashboard (/dashboard)
│   │
│   ├── hooks/                       # Shared Custom Hooks
│   │   ├── useMuiSnackbar.ts       # Toast notifications
│   │   ├── useDebounce.ts          # Debounce hook
│   │   └── useLocalStorage.ts      # LocalStorage hook
│   │
│   ├── lib/                         # Shared Utilities
│   │   ├── apiClient.ts            # Axios instance with interceptors
│   │   └── utils.ts                # Helper functions
│   │
│   ├── types/                       # Shared TypeScript Types
│   │   ├── property.ts             # Property interfaces
│   │   ├── agent.ts                # Agent interfaces
│   │   ├── booking.ts              # Booking interfaces
│   │   ├── user.ts                 # User interfaces
│   │   └── common.ts               # Common types
│   │
│   ├── config/                      # Application Configuration
│   │   └── theme.ts                # MUI theme (Gilroy, Montserrat, Gold/Dark/Grey)
│   │
│   ├── assets/                      # Static Assets
│   │   ├── images/
│   │   └── fonts/
│   │
│   ├── App.tsx                      # Main App component with providers
│   ├── main.tsx                     # Application entry point
│   ├── index.css                    # Global styles and font imports
│   └── vite-env.d.ts               # Vite type declarations
│
├── resources/                       # Development Guidelines
│   ├── common-patterns.md
│   ├── complete-examples.md
│   ├── component-patterns.md
│   ├── data-fetching.md
│   ├── file-organization.md
│   ├── loading-and-error-states.md
│   ├── performance.md
│   ├── routing-guide.md
│   ├── styling-guide.md
│   └── typescript-standards.md
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.node.json              # TypeScript config for Vite
├── vite.config.ts                  # Vite configuration with aliases
├── README.md                        # Project documentation
├── PROJECT_STRUCTURE.md            # This file
└── SKILL.md                         # Frontend development skill guide
```

## Import Aliases

Configure in `vite.config.ts` and `tsconfig.json`:

| Alias | Resolves To | Example |
|-------|-------------|---------|
| `@/` | `src/` | `import { apiClient } from '@/lib/apiClient'` |
| `~types` | `src/types` | `import type { Property } from '~types/property'` |
| `~components` | `src/components` | `import { SuspenseLoader } from '~components/SuspenseLoader'` |
| `~features` | `src/features` | `import { propertyApi } from '~features/properties'` |

## Key Architecture Decisions

### 1. Component Organization
- **components/**: Truly reusable UI components (used in 3+ places)
- **features/**: Domain-specific features with own API, components, hooks

### 2. Data Fetching Strategy
- **Primary**: `useSuspenseQuery` with Suspense boundaries
- **Fallback**: Regular `useQuery` for legacy code
- **Cache-first**: Check grid/list cache before API calls

### 3. Styling Approach
- **Font**: Gilroy (titles), Montserrat (text)
- **Colors**: Gold (#D4AF37), Dark (#1A1A1A), Grey (#8B8B8B)
- **Method**: MUI `sx` prop (type-safe)
- **Threshold**: <100 lines inline, >100 lines separate file

### 4. Routing Pattern
- **TanStack Router**: File-based routing
- **Lazy Loading**: All route components lazy loaded
- **Suspense**: Wrapped in `<SuspenseLoader>`

### 5. Type Safety
- **Strict mode**: Enabled
- **No any**: Use `unknown` if necessary
- **Explicit returns**: All functions have return types
- **Type imports**: Use `import type` syntax

## Development Workflow

### Adding a New Feature

1. **Create directory structure**:
   ```bash
   mkdir -p src/features/my-feature/{api,components,hooks,helpers,types}
   ```

2. **Define types** (`types/index.ts`)
3. **Create API service** (`api/myFeatureApi.ts`)
4. **Create Suspense hooks** (`hooks/useSuspenseMyFeature.ts`)
5. **Build components** (`components/MyFeature.tsx`)
6. **Create route** (`routes/my-feature/index.tsx`)
7. **Export public API** (`index.ts`)

### Creating a Component

1. Use `React.FC<Props>` pattern
2. Define props interface with JSDoc
3. Lazy load if heavy component
4. Wrap in `<SuspenseLoader>` for loading
5. Use `sx` prop for styling
6. Export both named and default

### Data Fetching

1. Create API method in feature's `api/` directory
2. Create `useSuspense*` hook in feature's `hooks/`
3. Use cache-first strategy (check list cache)
4. Wrap component in `<SuspenseLoader>`
5. No `isLoading` checks needed!

## Color Palette Reference

```css
/* Primary Colors */
--gold: #D4AF37;        /* Titles, accents, CTAs */
--dark: #1A1A1A;        /* Text, backgrounds */
--grey: #8B8B8B;        /* Secondary text, borders */

/* Gold Variants */
--gold-light: #E5C158;
--gold-dark: #B8941F;

/* Grey Variants */
--grey-light: #A8A8A8;
--grey-dark: #6E6E6E;

/* Dark Variants */
--dark-light: #2D2D2D;
--dark-dark: #000000;

/* Backgrounds */
--bg-white: #FFFFFF;
--bg-paper: #F5F5F5;
```

## Typography Scale

```css
/* Titles (Gilroy, Bold) */
h1: 3.5rem (56px)
h2: 2.75rem (44px)
h3: 2.25rem (36px)
h4: 1.875rem (30px)
h5: 1.5rem (24px)
h6: 1.25rem (20px)

/* Body (Montserrat) */
body1: 1rem (16px)
body2: 0.875rem (14px)
subtitle1: 1rem (16px)
subtitle2: 0.875rem (14px)
caption: 0.75rem (12px)
```

## Next Steps

1. **Install dependencies**: `npm install`
2. **Set up environment**: Copy `.env.example` to `.env`
3. **Start development**: `npm run dev`
4. **Build for production**: `npm run build`

For detailed development guidelines, see the `/resources` directory.
