import React, { useState } from 'react';
import '../../../App.css';
import AppBar from '../Navigation/AppBar';
import NavBar from '../Navigation/NavBar';



const Results = () => {
  return (
    <div className="results-screen screen">
      <AppBar />
      <div className= "scan-results-content">
        <h1>Results</h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Results;