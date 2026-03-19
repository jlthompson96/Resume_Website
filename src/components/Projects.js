import React from 'react';
import { Box, Typography, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '../data';

function Projects() {
    return (
        <Box sx={{ py: { xs: 3, sm: 6 } }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4', mb: 4 }}
            >
                Project Grid
            </Typography>
            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}>
                {projects.map((project) => (
                    <Box
                        key={project.id}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            background: 'rgba(26, 35, 50, 0.8)',
                            border: '1px solid #00e5ff',
                            '&:hover': {
                                boxShadow: '0 0 15px rgba(255, 0, 228, 0.7)',
                            },
                        }}
                    >
                        <Typography variant="h6" sx={{ color: '#00e5ff' }}>
                            {project.name}
                        </Typography>
                        <Typography>{project.description}</Typography>
                        <Typography color="textSecondary" sx={{ mt: 1 }}>
                            Tech: {project.technologies.join(', ')}
                        </Typography>
                        <CardActions sx={{ mt: 2 }}>
                            <Button
                                startIcon={<GitHubIcon />}
                                href={project.github}
                                target="_blank"
                                size="small"
                            >
                                GitHub
                            </Button>
                        </CardActions>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Projects;