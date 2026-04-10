import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { certifications } from '../data';

function Certifications() {
    return (
        <Box sx={{ py: 6 }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4', mb: 4 }}
            >
                Certification Vault
            </Typography>

            {certifications.map((cert, index) => (
                <Box
                    key={index}
                    sx={{
                        mb: 3,
                        p: 3,
                        background: 'rgba(26, 35, 50, 0.8)',
                        borderLeft: '4px solid #00e5ff',
                        transition: 'all 0.3s',
                        '&:hover': {
                            background: 'rgba(26, 35, 50, 1)',
                            borderLeftColor: '#ff00e4',
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CloudQueueIcon sx={{ color: '#0078d4', mr: 1 }} />
                        <VerifiedIcon sx={{ color: '#00e5ff', mr: 1 }} />
                        <Typography variant="h6" sx={{ color: '#00e5ff', fontWeight: 'bold' }}>
                            {cert.name}
                        </Typography>
                    </Box>
                    <Typography color="secondary" sx={{ mb: 1 }}>
                        {cert.issuer}
                    </Typography>
                    <Link
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ color: '#b0bec5' }}
                    >
                        View certification details
                    </Link>
                </Box>
            ))}
        </Box>
    );
}

export default Certifications;
