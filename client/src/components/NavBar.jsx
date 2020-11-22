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
          <FiMenu size={30} style={{ color: '055F9E' }} />
        </Link>
        <Link to="/" className="name">
          Outpost
        </Link>
        <Link to="/profile" className="profile">
          <MdPersonPin size={27} style={{ color: '055F9E' }} />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
