import React from 'react';
import '../../../App.css';
import Logo from '../../../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import {Upload, HistoryIcon} from 'lucide-react';

const AppBar = () => {
  
    return(
      //Header (AppBar)
      <div className="app-bar">
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px'}}>
        <div
          style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#7B3AED',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
        <img
          src={Logo}
          alt="Logo"
          width={35}
          height={35}
          style={{
          borderRadius: '163px',
          objectFit: 'cover',
          }}
        />
        </div>
      </div>

      {/* Center */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'start' }}>
        <span style={{ fontSize: '20px', color: '#000000', fontWeight: 'bold' }}>SimplyMedAI</span>
        <span style={{ fontSize: '14px', color: '#343A40' }}>Medical Reports Made Simple</span>
      </div>

      {/* Right */}
      {/* Icons group in a row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
      <button
        className="upload-icon"
        onClick={() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '*';
        input.style.display = 'none';
        input.onchange = (e) => {
          // Handle file upload here
          const file = e.target.files[0];
          // You can add your upload logic
        };
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
        }}
        aria-label="Upload"
      >
        <Upload size={24} color="#ffffff" />
      </button>
      <NavLink to="/History" className="history-icon">
        <HistoryIcon size={24} color="#ffffff" />
      </NavLink>
      </div>
    </div>
    );
};

export default AppBar;
