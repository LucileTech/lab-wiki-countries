import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Lab wiki countries
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
