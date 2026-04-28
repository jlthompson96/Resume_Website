import { Card, Container, Paper, Typography } from "@mui/material";
import WeatherDashboardPreview from "../assets/previews/WeatherDashboardPreview.png";
import NinerParkPreview from "../assets/previews/9erParkPreview.png";
import SpaceExplorationPreview from "../assets/previews/SpaceExplorationPreview.png";
import BullRunPreview from "../assets/previews/BullRunPreview.png";

const Projects = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom> Projects </Typography>
                <div style={{ padding: '20px' }}>
                    <Card elevation={3} style={{ backgroundColor: '#EDF2F7' }} sx={{ padding: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> Space Exploration </Typography>
                        <img src={SpaceExplorationPreview} style={{ height: '50%', width: '50%' }} alt="Space Exploration" />
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> A web app that pulls data from various space related APIs to display information. </Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Technologies: React, TypeScript, Material-UI, Axios, NASA API, SpaceX API, and Open Notify API.</Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom>GitHub Repository: <a href="https://github.com/jlthompson96/Space_Exploration">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} style={{ backgroundColor: '#EDF2F7' }} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> Weather Dashboard </Typography>
                        <img src={WeatherDashboardPreview} style={{ height: '50%', width: '50%' }} alt="Weather Dashboard" />
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> A Reactjs based app that displays weather data on a webpage. </Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Technologies: React, TypeScript, Axios, OpenWeatherMap API.</Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> GitHub Repository: <a href="https://github.com/jlthompson96/Weather_Dashboard">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} style={{ backgroundColor: '#EDF2F7' }} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> 9erPark </Typography>
                        <img src={NinerParkPreview} style={{ height: '20%', width: '20%' }} alt="9erPark" />
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Collaborating with a team of five, I contributed to the development of an iOS application aimed at providing users with UNC Charlotte parking deck data. Utilizing the Swift programming language and XCode IDE, I programmed the application, ensuring its functionality and usability. In the design phase, I conceptualized and created both low-fidelity and high-fidelity prototypes using Balsamiq and Figma. Throughout the development process, we maintained efficient collaboration and version control management using Git and GitHub. </Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Technologies: Swift, XCode, Balsamiq, Figma, Git, GitHub.</Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> GitHub Repository: <a href="https://github.com/jlthompson96/9erPark">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} style={{ backgroundColor: '#EDF2F7' }} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> BullRun </Typography>
                        <img src={BullRunPreview} style={{ height: '50%', width: '50%' }} alt="BullRun" />
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> A financial application that allows users to track their assets and learn about financial literacy. </Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Technologies: React, TypeScript, Material-UI, Axios, Spring Boot, TwelveData API.</Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Frontend GitHub Repository: <a href="https://github.com/jlthompson96/BullRun_Frontend">GitHub Repository</a></Typography>
                        <Typography sx={{ padding: '10px' }} variant="body1" gutterBottom> Backend GitHub Repository: <a href="https://github.com/jlthompson96/BullRun_Backend">GitHub Repository</a></Typography>
                    </Card>
                </div>
            </Paper>
        </Container>
    );
}

export default Projects;