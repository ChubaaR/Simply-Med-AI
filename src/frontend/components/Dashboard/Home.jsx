import React, { useState } from 'react';
import '../../../App.css';
import AppBar from '../Navigation/AppBar';
import NavBar from '../Navigation/NavBar';



const Home = () => {
  return (
    <div className="home-screen screen">
      <AppBar />
      <div className= "middle-content">
        <h1>Welcome to SimplyMedAI</h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;