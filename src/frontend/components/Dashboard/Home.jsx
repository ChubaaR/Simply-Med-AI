import React from 'react';
import '../../../App.css';
import AppBar from '../Navigation/AppBar';
import NavBar from '../Navigation/NavBar';
import Download from './Download';

const Home = () => {
  return (
    <div className="home-screen screen">
      <AppBar />
      <div className="middle-content">
        <h1 className="home-title">Understand Your Medical Reports</h1>
        <h2 className="home-subtitle">Upload your blood test, X-ray, or CT scan report and get AI-powered explanations in simple, easy-to-understand language.</h2>
        <Download />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
