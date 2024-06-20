import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoginSignup from './Components/loginsignup/loginsignup';
import Home from './Pages/Home';
import ProjectAllocations from './Pages/ProjectAllocation';
import AllProjects from './Pages/Allprojects';
import AnnualReports from './Pages/AnnualReports';
import AnimatedPage from './Components/AnimatedPage';
import MyProjects from './Pages/MyProjects';
import './App.css';
import { UserProvider } from './Components/context/UserContext';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/project-allocations" element={<ProjectAllocations />} /> 
        <Route path="/annual-reports" element={<AnnualReports />} />
        <Route path="/my-projects" element={<MyProjects />} />
        

      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App

                                                                                  