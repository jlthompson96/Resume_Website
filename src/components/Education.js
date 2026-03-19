// src/components/Education.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { education } from '../data';

function Education() {
    return (
        <Box sx={{ py: { xs: 3, sm: 6 } }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4', mb: 4 }}
            >
                Knowledge Core
            </Typography>
            {education.map((edu, index) => (
                <Box
                    key={index}
                    sx={{
                        mb: 3,
                        p: { xs: 2, sm: 3 },
                        background: 'rgba(26, 35, 50, 0.8)',
                        borderLeft: '4px solid #00e5ff',
                        transition: 'all 0.3s',
                        '&:hover': {
                            background: 'rgba(26, 35, 50, 1)',
                            borderLeftColor: '#ff00e4',
                        },
                        '& ul': {
                            paddingLeft: { xs: '16px', sm: '20px' },
                            color: '#b0bec5',
                        },
                        '& li': {
                            marginBottom: '8px',
                            fontSize: { xs: '0.8rem', sm: '1rem' },
                            lineHeight: { xs: 1.5, sm: 1.75 },
                        },
                    }}
                >
                    <SchoolIcon sx={{ color: '#00e5ff', mr: 1 }} />
                    <Typography variant="h6" sx={{ color: '#00e5ff' }}>
                        {edu.degree}
                    </Typography>
                    <Typography color="secondary">{edu.institution}</Typography>
                    <Typography color="textSecondary">{edu.period}</Typography>
                    {edu.details && <Box sx={{ mt: 1 }}>{edu.details}</Box>}
                </Box>
            ))}
        </Box>
    );
}

export default Education;