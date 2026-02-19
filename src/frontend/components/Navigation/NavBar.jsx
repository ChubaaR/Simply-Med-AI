import React from 'react';
import '../../../App.css';
import { NavLink } from 'react-router-dom';
import { Home, User} from 'lucide-react';

const NavBar = () => {

    return (
        <div className="bottom-nav">
            <NavLink to="/home" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <Home size={24} />
                <span>Home</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <User size={24} />
                <span>Profile</span>
            </NavLink>
        </div>
    );
};

export default NavBar;
