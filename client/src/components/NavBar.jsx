import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../css/NavBar.css';
import { FiMenu } from 'react-icons/fi';
import { MdPersonPin } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';

const NavBar = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <>
      <div className="navbar">
        <Link to="/menu" className="menu">
          <FiMenu size={30} style={{ color: '055F9E' }} />
        </Link>
        <Link to="/" className="name">
          Outpost
        </Link>
        <div>
          {!currentUser ? (
            <Link to="/login" className="signup">
              <AiOutlineUserAdd size={27} style={{ color: '055F9E' }} />
            </Link>
          ) : (
            <Link to="/profile" className="profile">
              <MdPersonPin size={27} style={{ color: '055F9E' }} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
