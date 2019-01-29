import React, { Component } from 'react';

import './navbar.css';

function NavBar(props) {
    return <div className="navbar">{props.children}</div>;
  }

export default NavBar;
