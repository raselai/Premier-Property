/**
 * CustomAppBar Component
 * Main navigation header with dropdown menus
 */

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Collapse,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    ArrowForward as ArrowForwardIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';

interface NavigationItem {
    label: string;
    path?: string;
    submenu?: { label: string; path: string }[];
}

const navigationItems: NavigationItem[] = [
    { label: 'Home', path: '/' },
    {
        label: 'About Us',
        submenu: [
            { label: 'Our Approach', path: '/about/approach' },
            { label: 'Milestones', path: '/about/milestones' },
        ],
    },
    {
        label: 'Projects',
        submenu: [
            { label: 'Ongoing Projects', path: '/projects/ongoing' },
            { label: 'Upcoming Projects', path: '/projects/upcoming' },
        ],
    },
    { label: 'Completed Projects', path: '/projects/completed' },
    {
        label: 'Landowner Solutions',
        submenu: [
            { label: 'Joint Venture / Land Sharing', path: '/landowner/joint-venture' },
            { label: 'Submit Your Land', path: '/landowner/submit' },
        ],
    },
    {
        label: "Buyer's Guide",
        submenu: [
            { label: 'How to Buy', path: '/buyers-guide/how-to-buy' },
            { label: 'Payment Plan', path: '/buyers-guide/payment-plan' },
            { label: 'FAQ', path: '/buyers-guide/faq' },
        ],
    },
    { label: 'Contact Us', path: '/contact' },
];

const appBarStyles: Record<string, SxProps<Theme>> = {
    appBar: {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        py: 1.5,
    },
    logo: {
        height: { xs: '40px', md: '50px' },
        cursor: 'pointer',
    },
    navContainer: {
        display: { xs: 'none', lg: 'flex' },
        alignItems: 'center',
        gap: 1.5,
    },
    navButton: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 500,
        color: '#FFFFFF',
        textTransform: 'none',
        borderRadius: '999px',
        px: 3,
        py: 1,
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backgroundColor: 'transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            color: '#1A1A1A',
        },
    },
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
    },
    socialIcon: {
        width: 40,
        height: 40,
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#D4AF37',
            color: '#1A1A1A',
            borderColor: '#D4AF37',
        },
    },
    consultButton: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 600,
        color: '#1A1A1A',
        textTransform: 'none',
        borderRadius: '999px',
        px: 3,
        py: 1,
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
        display: { xs: 'none', md: 'flex' },
        gap: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#FFFFFF',
            color: '#1A1A1A',
            boxShadow: '0 6px 16px rgba(255, 255, 255, 0.5)',
        },
    },
    mobileMenuButton: {
        display: { xs: 'block', lg: 'none' },
        width: 40,
        height: 40,
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        color: '#FFFFFF',
    },
    drawer: {
        '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: '#FFFFFF',
            pt: 2,
        },
    },
    drawerItem: {
        fontFamily: 'Montserrat, sans-serif',
        color: '#1A1A1A',
        '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
        },
    },
    submenuItem: {
        pl: 4,
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.9rem',
        color: '#666',
        '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            color: '#D4AF37',
        },
    },
    menu: {
        '& .MuiPaper-root': {
            borderRadius: '12px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            mt: 1,
        },
    },
    menuItem: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.9rem',
        color: '#1A1A1A',
        py: 1.5,
        px: 2.5,
        '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            color: '#D4AF37',
        },
    },
};

export const CustomAppBar: React.FC = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});
    const [mobileSubmenus, setMobileSubmenus] = useState<{ [key: string]: boolean }>({});

    const handleNavigate = (path: string) => {
        navigate({ to: path });
        setMobileOpen(false);
        setAnchorEls({});
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
        setAnchorEls({ ...anchorEls, [label]: event.currentTarget });
    };

    const handleMenuClose = (label: string) => {
        setAnchorEls({ ...anchorEls, [label]: null });
    };

    const toggleMobileSubmenu = (label: string) => {
        setMobileSubmenus({ ...mobileSubmenus, [label]: !mobileSubmenus[label] });
    };

    const handleSocialClick = (platform: string) => {
        // Add your social media URLs here
        const urls: { [key: string]: string } = {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
        };
        window.open(urls[platform], '_blank');
    };

    const renderNavItem = (item: NavigationItem) => {
        if (item.submenu) {
            return (
                <React.Fragment key={item.label}>
                    <Button
                        sx={appBarStyles.navButton}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleMenuOpen(e, item.label)}
                        endIcon={<ExpandMoreIcon />}
                    >
                        {item.label}
                    </Button>
                    <Menu
                        anchorEl={anchorEls[item.label]}
                        open={Boolean(anchorEls[item.label])}
                        onClose={() => handleMenuClose(item.label)}
                        sx={appBarStyles.menu}
                    >
                        {item.submenu.map((subItem) => (
                            <MenuItem
                                key={subItem.path}
                                onClick={() => handleNavigate(subItem.path)}
                                sx={appBarStyles.menuItem}
                            >
                                {subItem.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            ) as React.ReactElement;
        }
        return (
            <Button
                key={item.label}
                sx={appBarStyles.navButton}
                onClick={() => handleNavigate(item.path!)}
            >
                {item.label}
            </Button>
        ) as React.ReactElement;
    };

    const navItems: React.ReactNode[] = navigationItems.map((item) => renderNavItem(item));

    return (
        <>
            <AppBar position='fixed' elevation={0} sx={appBarStyles.appBar}>
                <Toolbar sx={appBarStyles.toolbar}>
                    {/* Logo */}
                    {/* @ts-expect-error - Complex union type from Box component with img */}
                    <Box
                        {...({
                            component: 'img',
                            src: '/Logo.jpg',
                            alt: 'Premium Property',
                            sx: appBarStyles.logo,
                            onClick: () => handleNavigate('/'),
                        } as any)}
                    />

                    {/* Desktop Navigation */}
                    {/* @ts-ignore */}
                    <Box sx={appBarStyles.navContainer}>
                        {navItems}
                    </Box>

                    {/* Right Icons */}
                    <Box sx={appBarStyles.rightIcons}>
                        {/* Social Icons */}
                        <IconButton
                            sx={appBarStyles.socialIcon}
                            onClick={() => handleSocialClick('facebook')}
                        >
                            <FacebookIcon fontSize='small' />
                        </IconButton>
                        <IconButton
                            sx={appBarStyles.socialIcon}
                            onClick={() => handleSocialClick('instagram')}
                        >
                            <InstagramIcon fontSize='small' />
                        </IconButton>

                        {/* Consultation Button */}
                        <Button
                            sx={appBarStyles.consultButton}
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => handleNavigate('/contact')}
                        >
                            Free Consultation
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <IconButton
                            sx={appBarStyles.mobileMenuButton}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor='right'
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={appBarStyles.drawer}
            >
                <List>
                    {navigationItems.map((item) => (
                        <Box key={item.label}>
                            {item.submenu ? (
                                <>
                                    <ListItemButton
                                        sx={appBarStyles.drawerItem}
                                        onClick={() => toggleMobileSubmenu(item.label)}
                                    >
                                        <ListItemText primary={item.label} />
                                        {mobileSubmenus[item.label] ? (
                                            <ExpandLessIcon />
                                        ) : (
                                            <ExpandMoreIcon />
                                        )}
                                    </ListItemButton>
                                    <Collapse in={mobileSubmenus[item.label]} timeout='auto'>
                                        <List disablePadding>
                                            {item.submenu.map((subItem) => (
                                                <ListItemButton
                                                    key={subItem.path}
                                                    sx={appBarStyles.submenuItem}
                                                    onClick={() => handleNavigate(subItem.path)}
                                                >
                                                    <ListItemText primary={subItem.label} />
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Collapse>
                                </>
                            ) : (
                                <ListItemButton
                                    sx={appBarStyles.drawerItem}
                                    onClick={() => handleNavigate(item.path!)}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            )}
                        </Box>
                    ))}

                    {/* Mobile Consultation Button */}
                    <ListItem sx={{ mt: 2 }}>
                        <Button
                            fullWidth
                            variant='contained'
                            sx={{
                                ...appBarStyles.consultButton,
                                display: 'flex',
                            }}
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => handleNavigate('/contact')}
                        >
                            Free Consultation
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default CustomAppBar;
