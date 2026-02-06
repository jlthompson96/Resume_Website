import React from 'react';
import { Container, ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e5ff', // Neon cyan
    },
    secondary: {
      main: '#ff00e4', // Neon magenta
    },
    background: {
      default: '#0a0e17',
      paper: '#1a2332',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: "'Orbitron','Roboto Mono', monospace", // Default body text
    h2: {
      fontFamily: "'Orbitron', sans-serif", // Headings stay futuristic
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Roboto Mono', monospace", // Ensure body text uses Roboto Mono
      fontSize: '1rem', // Slightly larger default size for readability
    },
    body2: {
      fontFamily: "'Roboto Mono', monospace",
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #00e5ff',
          boxShadow: '0 0 10px rgba(0, 229, 255, 0.5)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          background: 'linear-gradient(45deg, #00e5ff, #ff00e4)',
          '&:hover': {
            background: 'linear-gradient(45deg, #ff00e4, #00e5ff)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(10,14,23,1) 70%)',
            zIndex: -1,
            animation: 'pulse 4s infinite',
          }}
        />
        <Header />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <SocialLinks />
      </Container>
    </ThemeProvider>
  );
}

export default App;