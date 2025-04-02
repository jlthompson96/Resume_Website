// src/components/Skills.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const skills = [
    'Java 17', 'React.js', 'Spring 6', 'Kubernetes', 'OpenShift', 'Jenkins', 'Splunk',
];

function Skills() {
    return (
        <Box sx={{ py: 6 }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4', mb: 4 }}
            >
                Skills Interface
            </Typography>
            <Box
                sx={{
                    p: 3,
                    background: '#1a2332',
                    border: '2px solid #00e5ff',
                    boxShadow: '0 0 15px rgba(0, 229, 255, 0.5)',
                    fontFamily: "'Roboto Mono', monospace",
                    color: '#00e5ff',
                }}
            >
                {skills.map((skill, index) => (
                    <Typography
                        key={index}
                        sx={{
                            display: 'inline-block',
                            mr: 2,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            animation: `typing 2.5s steps(20, end) ${index * 0.5}s forwards, blink 1s infinite`,
                        }}
                    >
                        {skill}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}

export default Skills;