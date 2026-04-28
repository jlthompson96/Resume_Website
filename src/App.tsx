import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import { Switch, createMuiTheme } from '@mui/material'
import { useState } from 'react'
import { blue, green } from '@mui/material/colors'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Define light and dark themes
  const lightTheme = createMuiTheme({
    palette: {
      mode: 'light',
      primary: blue,
      secondary: blue,
    },
  });

  const darkTheme = createMuiTheme({
    palette: {
      mode: 'dark',
      primary: blue,
      secondary: green,
    },
  });

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
        <LightModeIcon /><Switch checked={darkMode} onChange={toggleDarkMode} /><DarkModeIcon />
        <HeroBanner />
        <WorkExperience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
