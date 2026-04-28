import { Container, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.scss';

const Contact = () => {

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom> Contact Me </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <a href="https://github.com/jlthompson96">
                        <GitHubIcon className="gh-icon" />
                    </a>
                    <a href="mailto:joeythompson1014@gmail.com">
                        <EmailIcon className="email-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-l-thompson/">
                        <LinkedInIcon className="linkedin-icon" />
                    </a>
                </div>
            </Paper>
        </Container >
    );
}

export default Contact;