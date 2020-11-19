import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { FiMenu } from 'react-icons/fi';
import { MdPersonPin } from 'react-icons/md';
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/menu" className="menu">
          <FiMenu size={30} style={{ color: 'black' }} />
        </Link>
        <p className="name">Outpost</p>
        <Link to="/profile" className="profile">
          <MdPersonPin size={30} style={{ color: 'black' }} />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
