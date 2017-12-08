import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1 className="brand">Memory Game</h1>
      <nav className="nav">
        <li><a onClick={props.makeTiles}>New Game</a></li>
      </nav>
    </div>
  );
}

export default Navbar;
