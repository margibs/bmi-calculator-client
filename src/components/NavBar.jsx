import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className='nav-link'>Standard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/metric" className='nav-link'>Metric</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
  )
}

export default NavBar;