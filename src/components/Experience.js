import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
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
            {experiences.map((company, companyIndex) => (
                <Box
                    key={companyIndex}
                    sx={{
                        mb: 4,
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
                            color: '#b0bec5',
                        },
                        '& li': {
                            marginBottom: '8px',
                        },
                    }}
                >
                    {/* Company Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <WorkIcon sx={{ color: '#00e5ff', mr: 1 }} />
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" sx={{ color: '#00e5ff', fontWeight: 'bold' }}>
                                {company.company}
                            </Typography>
                            <Typography color="textSecondary" sx={{ fontSize: '0.9rem' }}>
                                {company.location} • {company.totalPeriod}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Positions */}
                    {company.positions.map((position, positionIndex) => (
                        <Box key={positionIndex}>
                            {positionIndex > 0 && (
                                <Divider 
                                    sx={{ 
                                        my: 2, 
                                        borderColor: 'rgba(0, 229, 255, 0.2)',
                                    }} 
                                />
                            )}
                            <Box sx={{ pl: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    {company.positions.length > 1 && (
                                        <TrendingUpIcon 
                                            sx={{ 
                                                color: '#ff00e4', 
                                                mr: 1, 
                                                fontSize: '1.2rem' 
                                            }} 
                                        />
                                    )}
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: company.positions.length > 1 ? '#ff00e4' : '#00e5ff',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {position.title}
                                    </Typography>
                                </Box>
                                <Typography 
                                    color="secondary" 
                                    sx={{ pl: company.positions.length > 1 ? 4 : 0, mb: 1 }}
                                >
                                    {position.period}
                                </Typography>
                                <Box sx={{ pl: company.positions.length > 1 ? 4 : 0 }}>
                                    {position.description}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default Experience;