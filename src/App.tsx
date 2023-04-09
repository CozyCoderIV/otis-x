import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { NavigationBar } from "./components/navigation/NavigationBar";

// Theme Creation
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { Homepage } from "./pages/home/Homepage";
import { Aboutpage } from "./pages/about/Aboutpage";
import { Projectpage } from "./pages/projects/Projectpage";
import { Contactspage } from "./pages/contacts/Contactspage";
import { Digitalgallery } from "./pages/digital/Digitalgallery";

// Theme connstant variable
const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[900],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<Aboutpage />}></Route>
            <Route path="/projects" element={<Projectpage />}></Route>
            <Route path="/contacts" element={<Contactspage />}></Route>
            <Route path="/digitalmedia" element={<Digitalgallery />}></Route>
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
