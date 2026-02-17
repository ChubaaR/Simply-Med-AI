import React, { useState } from 'react';
import '../../../App.css';
import AppBar from '../Navigation/AppBar';
import NavBar from '../Navigation/NavBar';



const History = () => {
  return (
    <div className="history-screen screen">
      <AppBar />
      <div className= "past-reports-content">
        <h1>History Page</h1>
      </div>
      <NavBar />
    </div>
  );
};

export default History;