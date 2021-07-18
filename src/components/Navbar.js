import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          &nbsp;•&nbsp;
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          &nbsp;•&nbsp;
          <li>
            <Link to="/myprofile/Grailsidhe">User Profile</Link>
          </li>
          &nbsp;•&nbsp;
          <li>
            <Link to="/userprofile/wilder1">Salvo</Link>
          </li>
          &nbsp;•&nbsp;
          <li>
            <Link to="/userprofile/wilder2">Victor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
