// src/components/Skills.js
import { Box, Typography, Chip, Tooltip } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import { FaJava } from 'react-icons/fa'; // Keep Java from Font Awesome
import { 
    SiReact, 
    SiSpring, 
    SiOracle, 
    SiMongodb, 
    SiKubernetes, 
    SiRedhatopenshift, 
    SiJenkins, 
    SiGithubactions, 
    SiSplunk,
    SiRocket,
    SiOpenai 
} from 'react-icons/si';

const skills = [
    {
        name: 'Java',
        url: 'https://docs.oracle.com/en/java/javase/17/docs/api/',
        icon: <FaJava />,
        tooltip: 'Advanced Java programming with modern features',
    },
    {
        name: 'React.js',
        url: 'https://reactjs.org/docs/getting-started.html',
        icon: <SiReact />,
        tooltip: 'Building dynamic UIs with React',
    },
    {
        name: 'Spring Framework',
        url: 'https://docs.spring.io/spring-framework/docs/6.0.x/reference/html/',
        icon: <SiSpring />,
        tooltip: 'Enterprise-grade backend development',
    },
    {
        name: 'Oracle DB',
        url: 'https://docs.oracle.com/en/database/',
        icon: <SiOracle />,
        tooltip: 'Enterprise database management expertise',
    },
    {
        name: 'MongoDB',
        url: 'https://docs.mongodb.com/',
        icon: <SiMongodb />,
        tooltip: 'NoSQL database expertise',
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
        icon: <SiRedhatopenshift />,
        tooltip: 'Cloud-native development with OpenShift',
    },
    {
        name: 'Jenkins',
        url: 'https://www.jenkins.io/doc/',
        icon: <SiJenkins />,
        tooltip: 'CI/CD pipeline automation',
    },
    {
        name: 'GitHub Actions',
        url: 'https://docs.github.com/en/actions',
        icon: <SiGithubactions />,
        tooltip: 'Automated workflows with GitHub Actions',
    },
    {
        name: 'Harness',
        url: 'https://docs.harness.io/',
        icon: <SiRocket />,
        tooltip: 'Continuous delivery with Harness',
    },
    {
        name: 'Splunk',
        url: 'https://docs.splunk.com/Documentation',
        icon: <SiSplunk />,
        tooltip: 'Log analysis and monitoring',
    },
    {
        name: 'Generative AI',
        url: 'https://openai.com/research/generative-models',
        icon: <SiOpenai />,
        tooltip: 'Exploring AI-driven development',
    }
];

function Skills() {
    return (
        <Box sx={{ py: { xs: 3, sm: 6 } }}>
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
                    p: { xs: 2, sm: 3 },
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
                                        color: '#0a0e17',
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