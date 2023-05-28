import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './component/Navbar';
import Card from './component/Card';
import DadJoke from './pages/DadJoke'
import AboutMe from './pages/AboutMe'
import Layout from "./pages/Layout";
import Projects from "./pages/Project";

import "./App.css"
import Footer from "./component/Footer";
function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
    <Navbar/>
    <Routes>
          <Route path="/" element={<DadJoke/>} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />

    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
