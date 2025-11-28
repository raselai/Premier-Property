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
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 2px 24px rgba(206, 148, 67, 0.08)',
        borderBottom: '1px solid rgba(206, 148, 67, 0.15)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        transition: 'all 0.3s ease',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
        py: { xs: 1.5, md: 2 },
        minHeight: { xs: '64px', md: '80px' },
    },
    logo: {
        height: { xs: '45px', md: '55px', lg: '60px' },
        cursor: 'pointer',
        transition: 'transform 0.3s ease, filter 0.3s ease',
        filter: 'brightness(1.05) contrast(1.1)',
        '&:hover': {
            transform: 'scale(1.05)',
            filter: 'brightness(1.1) contrast(1.15)',
        },
    },
    navContainer: {
        display: { xs: 'none', lg: 'flex' },
        alignItems: 'center',
        gap: 0.5,
    },
    navButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { lg: '0.875rem', xl: '0.95rem' },
        fontWeight: 600,
        color: '#FFFFFF',
        textTransform: 'none',
        letterSpacing: '0.03em',
        borderRadius: '8px',
        px: { lg: 2, xl: 2.5 },
        py: 1.25,
        position: 'relative',
        backgroundColor: 'transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #CE9443, transparent)',
            transition: 'width 0.3s ease',
        },
        '&:hover': {
            backgroundColor: 'rgba(206, 148, 67, 0.12)',
            color: '#CE9443',
            transform: 'translateY(-1px)',
            '&::before': {
                width: '80%',
            },
        },
    },
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, md: 1.5 },
    },
    socialIcon: {
        width: { xs: 36, md: 40 },
        height: { xs: 36, md: 40 },
        border: '1.5px solid rgba(206, 148, 67, 0.4)',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        color: '#CE9443',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: { xs: 'none', sm: 'flex' },
        '&:hover': {
            backgroundColor: '#CE9443',
            color: '#1A1A1A',
            borderColor: '#CE9443',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 20px rgba(206, 148, 67, 0.35)',
        },
    },
    consultButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '0.875rem', md: '0.95rem' },
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: { xs: 2.5, md: 3.5 },
        py: { xs: 1.25, md: 1.5 },
        background: 'linear-gradient(135deg, #CE9443 0%, #E5B864 100%)',
        border: 'none',
        boxShadow: '0 4px 16px rgba(206, 148, 67, 0.4)',
        display: { xs: 'none', md: 'flex' },
        gap: 1,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transition: 'left 0.5s ease',
        },
        '&:hover': {
            background: 'linear-gradient(135deg, #E5B864 0%, #CE9443 100%)',
            transform: 'translateY(-2px) scale(1.02)',
            boxShadow: '0 8px 24px rgba(206, 148, 67, 0.5)',
            '&::before': {
                left: '100%',
            },
        },
        '&:active': {
            transform: 'translateY(0) scale(0.98)',
        },
    },
    mobileMenuButton: {
        display: { xs: 'flex', lg: 'none' },
        width: { xs: 40, md: 44 },
        height: { xs: 40, md: 44 },
        border: '1.5px solid rgba(206, 148, 67, 0.5)',
        borderRadius: '8px',
        backgroundColor: 'rgba(206, 148, 67, 0.1)',
        color: '#CE9443',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(206, 148, 67, 0.2)',
            borderColor: '#CE9443',
            transform: 'scale(1.05)',
        },
    },
    drawer: {
        '& .MuiDrawer-paper': {
            width: 320,
            backgroundColor: '#1A1A1A',
            backgroundImage: 'linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(45, 45, 45, 0.95) 100%)',
            borderLeft: '1px solid rgba(206, 148, 67, 0.2)',
            pt: 3,
            px: 2,
        },
    },
    drawerItem: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 600,
        color: '#FFFFFF',
        borderRadius: '8px',
        mb: 0.5,
        py: 1.5,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(206, 148, 67, 0.12)',
            color: '#CE9443',
            transform: 'translateX(4px)',
        },
    },
    submenuItem: {
        pl: 4,
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px',
        py: 1.25,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(206, 148, 67, 0.08)',
            color: '#CE9443',
            transform: 'translateX(6px)',
        },
    },
    menu: {
        '& .MuiPaper-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(26, 26, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(206, 148, 67, 0.25)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(206, 148, 67, 0.1)',
            mt: 1.5,
            overflow: 'hidden',
        },
    },
    menuItem: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 500,
        color: '#FFFFFF',
        py: 1.75,
        px: 3,
        transition: 'all 0.3s ease',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3px',
            height: 0,
            backgroundColor: '#CE9443',
            transition: 'height 0.3s ease',
        },
        '&:hover': {
            backgroundColor: 'rgba(206, 148, 67, 0.12)',
            color: '#CE9443',
            paddingLeft: '28px',
            '&::before': {
                height: '70%',
            },
        },
    },
    drawerConsultButton: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: 3,
        py: 1.5,
        background: 'linear-gradient(135deg, #CE9443 0%, #E5B864 100%)',
        boxShadow: '0 4px 16px rgba(206, 148, 67, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'linear-gradient(135deg, #E5B864 0%, #CE9443 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(206, 148, 67, 0.5)',
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

    return (
        <>
            <AppBar position='fixed' elevation={0} sx={appBarStyles.appBar}>
                <Toolbar sx={appBarStyles.toolbar}>
                    {/* Logo */}
                    <Box
                        component='img'
                        src='/Logo.jpg'
                        alt='Premium Property'
                        sx={appBarStyles.logo}
                        onClick={() => handleNavigate('/')}
                    />

                    {/* Desktop Navigation */}
                    <Box sx={appBarStyles.navContainer}>
                        {navigationItems.map((item) => (
                            <Box key={item.label}>
                                {item.submenu ? (
                                    <>
                                        <Button
                                            sx={appBarStyles.navButton}
                                            onClick={(e) => handleMenuOpen(e, item.label)}
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
                                    </>
                                ) : (
                                    <Button
                                        sx={appBarStyles.navButton}
                                        onClick={() => handleNavigate(item.path!)}
                                    >
                                        {item.label}
                                    </Button>
                                )}
                            </Box>
                        ))}
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
                {/* Close Button */}
                {/* @ts-ignore - MUI complex union type issue */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                    <IconButton
                        onClick={() => setMobileOpen(false)}
                        sx={{
                            color: '#CE9443',
                            marginBottom: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(206, 148, 67, 0.15)',
                                transform: 'rotate(90deg)',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List sx={{ flexGrow: 1 }}>
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
                                                <ExpandLessIcon sx={{ color: '#CE9443' }} />
                                            ) : (
                                                <ExpandMoreIcon sx={{ color: '#CE9443' }} />
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
                    </List>

                {/* Mobile Consultation Button */}
                <Box sx={{ p: 2, borderTop: '1px solid rgba(206, 148, 67, 0.3)' }}>
                    <Button
                        fullWidth
                        variant='contained'
                        sx={appBarStyles.drawerConsultButton}
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => handleNavigate('/contact')}
                    >
                        Free Consultation
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default CustomAppBar;
