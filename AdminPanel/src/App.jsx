import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/loginsignup/loginsignup';
import Home from './Pages/Home';
import Header from './Pages/Header';
//import MyProjects from './Pages/Myprojects';

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
  <Route path="/" element={<LoginSignup />} />
  <Route path="/home" element={<Home />}>
    
  </Route>
</Routes>

    </Router>
  );
}

export default App


