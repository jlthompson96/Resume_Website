import { Container, Paper, Typography } from "@mui/material";
import WFLogo from '../assets/WF_Logo.png';

const WorkExperience = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
            <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Work Experience</Typography>
                <div style={{ padding: '20px' }}>
                    <img src={WFLogo} alt="Wells Fargo Logo" style={{ width: '100px', height: '100px', borderRadius: '10px', marginBottom: '20px' }} />
                    <Typography variant="h5">Software Engineer, Assistant Vice President</Typography>
                    <Typography variant="h5">January 2022 - Present</Typography>
                    <ul style={{ paddingLeft: '20px', marginTop: '20px', textAlign: 'left' }}>
                        <li style={{ padding: '10px' }}>Initiated the modernization of our application by working with a team of three members to develop
                            and implement a
                            Proof of Concept (POC) for deployment in lower environments on Pivotal Cloud Foundry (PCF).</li>
                        <li style={{ padding: '10px' }}>Successfully transformed a Java 8 SpringBoot application with JSP into a modernized architecture,
                            breaking it down
                            into micro frontends powered by React.js and multiple backend microservices using Java 17 and Spring
                            6.</li>
                        <li style={{ padding: '10px' }}>Collaborated closely with cross-functional teams to configure PCF environments and set up IBM Urban
                            Code Deploy
                            (UCD) properties while also establishing an efficient Jenkins pipeline for deployment and code
                            scanning.</li>
                        <li style={{ padding: '10px' }}>Collaborated with senior engineers to align code with design patterns, frameworks, and efficiency.
                        </li>
                        <li style={{ padding: '10px' }}>Utilized Enterprise Jira in the development lifecycle, including code design,
                            implementation, testing, and
                            integration, adhering to industry-standard methodologies.</li>
                        <li style={{ padding: '10px' }}>Mentored and supported interns, contractors, and new team members, fostering a sense of confidence
                            and
                            integration within their roles, ultimately enhancing the company's overall reputation. Additionally,
                            conducted
                            interviews for potential interns and analysts.</li>
                        <li style={{ padding: '10px' }}>Delivered crucial production support for the enterprise fraud and claims application by identifying
                            and rectifying
                            vulnerabilities and bugs, while proficiently troubleshooting issues through Splunk log analysis.
                            Additionally,
                            contributed support for late-night deployments in lower environment and production settings.</li>
                        <li style={{ padding: '10px' }}>Created and maintained documentation to better assist users in repositories.</li>
                    </ul>
                </div>
            </Paper>
        </Container>
    );
}

export default WorkExperience;
