import { Container, Paper, Typography } from "@mui/material";
import UNCCLogo from '../assets/uncclogo.jpg';

const Education = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Education</Typography>
                <img src={UNCCLogo} alt="UNCC Logo" style={{ width: '100px', height: '100px', borderRadius: '100px', padding: '20px' }} />
                <Typography variant="h5">University of North Carolina Charlotte</Typography>
                <Typography variant="h5">Bachelor of Science in Computer Science</Typography>
            </Paper>
        </Container>
    );
}

export default Education;