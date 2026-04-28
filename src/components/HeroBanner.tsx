import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import profilePic from '../assets/Joey.jpeg';
import resume from '../assets/Joseph_Thompson_Resume.pdf';


const HeroBanner = () => {

    const handleDownload = () => {
        // Assuming you have a file URL here
        const fileUrl = resume;
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        // Set the download attribute to specify the file name
        anchor.download = 'Joseph_Thompson_Resume.pdf';
        // Trigger the click event on the anchor element
        document.body.appendChild(anchor);
        anchor.click();
        // Cleanup
        document.body.removeChild(anchor);
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <img src={profilePic} style={{ width: '200px', height: '200px', borderRadius: '100px' }}></img>
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Joey Thompson</Typography>
                <Typography variant="h5">Software Engineer</Typography>
                <Divider sx={{ margin: '20px' }} />
                <div style={{ textAlign: "left", paddingTop: "10px" }}>
                    <Typography variant="body1">
                        Passionate software engineer with a proven track record in modernizing applications and driving efficiencies. Currently serving as an Associate Vice President at Wells Fargo, where I lead initiatives in application modernization, leveraging technologies like React.js, Java 17, and Spring 6.
                        Over the past year, I've spearheaded the transformation of a Java 8 SpringBoot application into a micro services architecture deployed on Pivotal Cloud Foundry.
                    </Typography>
                    &nbsp;
                    <Typography variant="body1">
                        In addition to my technical contributions, I'm dedicated to mentorship, having supported interns, contractors, and new team members to foster a culture of learning and growth.
                        My background also includes part-time roles in IT systems and service management, where I've honed my skills in infrastructure maintenance, network security, and client support.
                    </Typography>
                    &nbsp;
                    <Typography variant="h5">Want a copy of my Resume?</Typography>
                    <Button sx={{ margin: '20px' }} variant="contained" onClick={handleDownload}>
                        Download
                    </Button>
                </div>
            </Paper>
        </Container>
    );
}

export default HeroBanner;