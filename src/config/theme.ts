/**
 * Premium Property Theme Configuration
 * Fonts: Gilroy (titles), Montserrat (text)
 * Colors: Green (#0F5132), Dark (#1A1A1A), Grey (#8B8B8B)
 */

import { createTheme } from '@mui/material/styles';

// Declare custom theme properties
declare module '@mui/material/styles' {
    interface Palette {
        green: Palette['primary'];
        dark: Palette['primary'];
        brandGrey: Palette['primary'];
    }

    interface PaletteOptions {
        green?: PaletteOptions['primary'];
        dark?: PaletteOptions['primary'];
        brandGrey?: PaletteOptions['primary'];
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0F5132', // Green
            light: '#146B42',
            dark: '#0A3A22',
            contrastText: '#1A1A1A',
        },
        secondary: {
            main: '#1A1A1A', // Dark
            light: '#2D2D2D',
            dark: '#000000',
            contrastText: '#0F5132',
        },
        green: {
            main: '#0F5132',
            light: '#146B42',
            dark: '#0A3A22',
            contrastText: '#1A1A1A',
        },
        dark: {
            main: '#1A1A1A',
            light: '#2D2D2D',
            dark: '#000000',
            contrastText: '#0F5132',
        },
        brandGrey: {
            main: '#8B8B8B',
            light: '#A8A8A8',
            dark: '#6E6E6E',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
        },
        text: {
            primary: '#1A1A1A',
            secondary: '#8B8B8B',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif', // Default body text
        h1: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 700,
            color: '#0F5132',
            fontSize: '3.5rem',
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 700,
            color: '#0F5132',
            fontSize: '2.75rem',
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 700,
            color: '#0F5132',
            fontSize: '2.25rem',
        },
        h4: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 600,
            color: '#0F5132',
            fontSize: '1.875rem',
        },
        h5: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 600,
            color: '#1A1A1A',
            fontSize: '1.5rem',
        },
        h6: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 600,
            color: '#1A1A1A',
            fontSize: '1.25rem',
        },
        subtitle1: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
            color: '#8B8B8B',
        },
        subtitle2: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            color: '#8B8B8B',
        },
        body1: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1rem',
            color: '#1A1A1A',
        },
        body2: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.875rem',
            color: '#1A1A1A',
        },
        button: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
        },
        caption: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.75rem',
            color: '#8B8B8B',
        },
    },
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '12px 24px',
                    fontFamily: 'Gilroy, sans-serif',
                },
                contained: {
                    backgroundColor: '#0F5132',
                    color: '#1A1A1A',
                    '&:hover': {
                        backgroundColor: '#0A3A22',
                    },
                },
                outlined: {
                    borderColor: '#0F5132',
                    color: '#0F5132',
                    '&:hover': {
                        borderColor: '#0A3A22',
                        backgroundColor: 'rgba(212, 175, 55, 0.08)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;
