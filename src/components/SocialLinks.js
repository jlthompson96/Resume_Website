import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function SocialLinks() {
    return (
        <Box sx={{ py: 6, textAlign: 'center' }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4' }}
            >
                Neural Network
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton
                    href="https://www.linkedin.com/in/joseph-l-thompson/"
                    target="_blank"
                    sx={{
                        color: '#00e5ff',
                        '&:hover': { color: '#ff00e4', transform: 'scale(1.2)' },
                        transition: 'all 0.3s',
                    }}
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                    href="https://github.com/jlthompson96"
                    target="_blank"
                    sx={{
                        color: '#00e5ff',
                        '&:hover': { color: '#ff00e4', transform: 'scale(1.2)' },
                        transition: 'all 0.3s',
                    }}
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    );
}

export default SocialLinks;