import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Img/planet.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo-Container">
        <img className="Logo" src={Logo} alt="" />
        <h1>Space Travelers&#180; Hub</h1>
      </div>
      <div className="Nav-List">
        <NavLink
          className="Nav-Item"
          to="space-travlers/"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'blue' } : { color: 'blue' })}
        >
          Rockets
        </NavLink>
        <NavLink
          className="Nav-Item"
          to="space-travlers/missions"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'blue' } : { color: 'blue' })}
        >
          Missions
        </NavLink>
        <h1>|</h1>
        <NavLink
          className="Nav-Item"
          to="space-travlers/profile"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'blue' } : { color: 'blue' })}
        >
          My Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
