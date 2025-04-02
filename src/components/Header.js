import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

function Header() {
    return (
        <Box sx={{ py: 6, textAlign: 'center', position: 'relative' }}>
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    textShadow: '0 0 10px #00e5ff',
                    animation: 'flicker 3s infinite',
                }}
            >
                Joey Thompson
            </Typography>
            <Typography
                variant="h5"
                color="textSecondary"
                gutterBottom
                sx={{ letterSpacing: '2px' }}
            >
                Software Engineer | Tech Enthusiast | Fraud Technology
            </Typography>
            <Button
                variant="contained"
                startIcon={<GetAppIcon />}
                href="Joseph_Thompson_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Joseph_Thompson_Resume.pdf"
                sx={{ mt: 2, px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
                Download Resume
            </Button>
        </Box>
    );
}

export default Header;