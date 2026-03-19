import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
    { label: 'Connect', id: 'connect' },
];

function NavMenu() {
    const [open, setOpen] = useState(false);

    const handleScrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    background: 'rgba(10, 14, 23, 0.95)',
                    borderBottom: '1px solid #00e5ff',
                    top: 0,
                    zIndex: 1100,
                }}
            >
                <Toolbar sx={{ justifyContent: 'flex-end', minHeight: '48px !important' }}>
                    <IconButton
                        onClick={() => setOpen(true)}
                        aria-label="open navigation menu"
                        sx={{ color: '#00e5ff' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        background: '#0a0e17',
                        borderLeft: '1px solid #00e5ff',
                        width: 200,
                    },
                }}
            >
                <List sx={{ pt: 2 }}>
                    {sections.map((s) => (
                        <ListItem key={s.id} disablePadding>
                            <ListItemButton onClick={() => handleScrollTo(s.id)}>
                                <ListItemText
                                    primary={s.label}
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: '#00e5ff',
                                            fontFamily: "'Orbitron', sans-serif",
                                            fontSize: '0.9rem',
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default NavMenu;
