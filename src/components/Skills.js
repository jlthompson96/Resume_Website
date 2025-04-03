// src/components/Skills.js
import React from 'react';
import { Box, Typography, Chip, Tooltip } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import { FaJava, FaReact, FaDocker, FaJenkins } from 'react-icons/fa'; // Specific icons
import { SiSpring, SiKubernetes, SiSplunk } from 'react-icons/si'; // Simple Icons

const skills = [
    {
        name: 'Java 17',
        url: 'https://docs.oracle.com/en/java/javase/17/docs/api/',
        icon: <FaJava />,
        tooltip: 'Advanced Java programming with modern features',
    },
    {
        name: 'React.js',
        url: 'https://reactjs.org/docs/getting-started.html',
        icon: <FaReact />,
        tooltip: 'Building dynamic UIs with React',
    },
    {
        name: 'Spring 6',
        url: 'https://docs.spring.io/spring-framework/docs/6.0.x/reference/html/',
        icon: <SiSpring />,
        tooltip: 'Enterprise-grade backend development',
    },
    {
        name: 'Kubernetes',
        url: 'https://kubernetes.io/docs/home/',
        icon: <SiKubernetes />,
        tooltip: 'Container orchestration expertise',
    },
    {
        name: 'OpenShift',
        url: 'https://docs.openshift.com/',
        icon: <FaDocker />, // OpenShift doesn’t have a specific icon, using Docker as a related tech
        tooltip: 'Cloud-native development with OpenShift',
    },
    {
        name: 'Jenkins',
        url: 'https://www.jenkins.io/doc/',
        icon: <FaJenkins />,
        tooltip: 'CI/CD pipeline automation',
    },
    {
        name: 'Splunk',
        url: 'https://docs.splunk.com/Documentation',
        icon: <SiSplunk />,
        tooltip: 'Log analysis and monitoring',
    },
];

function Skills() {
    return (
        <Box sx={{ py: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <TerminalIcon sx={{ color: '#00e5ff', fontSize: 40, mr: 1 }} />
                <Typography
                    variant="h4"
                    sx={{ textShadow: '0 0 5px #ff00e4' }}
                >
                    Skills Interface
                </Typography>
            </Box>
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
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill, index) => (
                        <Tooltip key={index} title={skill.tooltip} arrow placement="top">
                            <Chip
                                icon={skill.icon}
                                label={skill.name}
                                clickable
                                component="a"
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    background: 'linear-gradient(45deg, #00e5ff, #ff00e4)',
                                    color: '#0a0e17',
                                    fontFamily: "'Roboto Mono', monospace",
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #ff00e4, #00e5ff)',
                                        boxShadow: '0 0 10px rgba(0, 229, 255, 0.8)',
                                    },
                                    transition: 'all 0.3s',
                                    '& .MuiChip-icon': {
                                        color: '#0a0e17', // Icon color matches label for contrast
                                    },
                                }}
                            />
                        </Tooltip>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Skills;