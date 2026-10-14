import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
    { label: 'Links', id: 'links' },
];

function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);

    const handleNavigate = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        handleCloseDrawer();
    };

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    background: 'rgba(10, 14, 23, 0.96)',
                    borderBottom: '1px solid rgba(176, 190, 197, 0.2)',
                    backdropFilter: 'blur(6px)',
                    boxShadow: 'none',
                }}
            >
                <Toolbar sx={{ minHeight: 72, px: { xs: 1, sm: 2 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            color: '#e3edf2',
                            letterSpacing: '0.5px',
                            fontWeight: 600,
                        }}
                    >
                        Joey Thompson
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 2,
                        }}
                    >
                        {navItems.map((item) => (
                            <Typography
                                key={item.id}
                                onClick={() => handleNavigate(item.id)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        handleNavigate(item.id);
                                    }
                                }}
                                sx={{
                                    color: '#d0dbe1',
                                    fontSize: '0.86rem',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    '&:hover': {
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                {item.label}
                            </Typography>
                        ))}
                    </Box>

                    <IconButton
                        onClick={handleOpenDrawer}
                        sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#00e5ff' }}
                        aria-label="open navigation menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleCloseDrawer}
                PaperProps={{
                    sx: {
                        width: 260,
                        background: '#0a0e17',
                        borderLeft: '1px solid rgba(0, 229, 255, 0.35)',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                    <IconButton onClick={handleCloseDrawer} sx={{ color: '#00e5ff' }} aria-label="close navigation menu">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', px: 3, pb: 2, gap: 1.5 }}>
                    {navItems.map((item) => (
                        <Typography
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    handleNavigate(item.id);
                                }
                            }}
                            sx={{
                                color: '#b0bec5',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                userSelect: 'none',
                                '&:hover': {
                                    color: '#ffffff',
                                },
                            }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Box>
            </Drawer>
        </>
    );
}

export default Navigation;
