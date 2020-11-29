import React, { useContext } from 'react';
import '../css/ProfilePage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { MdComputer, MdDevicesOther } from 'react-icons/md';
import { FaXbox, FaPlaystation } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';

const GamersProfile = ({ users }) => {
  const { gamers } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="pic">
        <img
          className="proPic"
          src={
            users?.avatar
              ? users?.avatar
              : 'https://files.willkennedy.dev/wyncode/wyncode.png'
          }
          alt="profile"
        />
      </div>
      <div className="namedPlayer">
        <div className="nameEdit">
          <h2 className="usersName">
            {users?.first_name} {users?.last_name}
          </h2>
        </div>

        <h3 className="userName">{users?.user_name}</h3>
        <h4 className="dutyStatus">{users?.service_branch}</h4>

        <Link to="/chats" className="messageButton">
          <span className="messageButton1">Messages</span>s
        </Link>
      </div>
      <div className="favGames" style={{ marginBottom: 20 }}>
        <p className="consoles">Find me on:</p>
        <div className="mygameTags">
          <div>
            <FaXbox /> <strong>Xbox:</strong> {users?.xbox}
          </div>
          <div>
            <FaPlaystation /> <strong>Playstation:</strong> {users?.psn}
          </div>
          <div>
            <SiNintendoswitch /> <strong>Nintendo:</strong> {users?.nes}
          </div>
          <div>
            <MdComputer /> <strong>PC:</strong> {users?.pc}
          </div>
          <div>
            <MdDevicesOther /> <strong>Other:</strong> {users?.other}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GamersProfile;
