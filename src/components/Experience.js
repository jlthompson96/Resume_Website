import React from 'react';
import { Box, Typography } from '@mui/material';
import { experiences } from '../data';

function Experience() {
    return (
        <Box sx={{ py: 6 }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4', mb: 4 }}
            >
                Experience Matrix
            </Typography>
            {experiences.map((exp, index) => (
                <Box
                    key={exp.id}
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
                        '& ul': {
                            paddingLeft: '20px',
                            color: '#b0bec5', // Matches text.secondary
                        },
                        '& li': {
                            marginBottom: '8px',
                        },
                    }}
                >
                    <Typography variant="h6" sx={{ color: '#00e5ff' }}>
                        {exp.title}
                    </Typography>
                    <Typography color="secondary">{exp.company}</Typography>
                    <Typography color="textSecondary">{exp.period}</Typography>
                    <Box sx={{ mt: 1 }}>{exp.description}</Box>
                </Box>
            ))}
        </Box>
    );
}

export default Experience;