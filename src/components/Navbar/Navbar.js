import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <h1 className="nav-header">Math Magicians</h1>
      <ul>
        <Link to="/math-magicians/" style={{ textDecoration: 'none', marginRight: 10 }}>Home</Link>
        <Link to="/math-magicians/calculator" style={{ textDecoration: 'none', marginRight: 10 }}>Calculator</Link>
        <Link to="/math-magicians/quote" style={{ textDecoration: 'none', marginRight: 10 }}>Quote</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
