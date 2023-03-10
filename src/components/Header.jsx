import React from 'react';
import Nav from './Nav.jsx';
import Nets from './Nets.jsx';
import '../styles/header.css';

const Header = ({ searchValue, searchSetValue }) => {
  return (
    <div id='header'>
      <Nav searchValue={searchValue} searchSetValue={searchSetValue} />
      <Nets />
    </div>
  );
};

export default Header;
