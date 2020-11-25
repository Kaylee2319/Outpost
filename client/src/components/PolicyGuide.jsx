import React from 'react';
import '../css/PolicyGuide.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { BsPeople } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FaRegHandshake } from 'react-icons/fa';
const PolicyGuide = ({ history }) => {
  const handleClick = () => {
    history.push('/signup');
  };
  return (
    <>
      <NavBar />
      <div>
        <h1 className="policyTitle">How It Works</h1>
        <h3 className="policyTitle1">Join a community of veteran gamers</h3>
      </div>
      <div className="iconbar2">
        <div className="howtoSearch">
          <div className="howSearch">
            Search
            <IoIosSearch size={55} style={{ color: 'black' }} />
          </div>
          <p className="howSearch1">
            Search for military veteran players and chat through 1-1 or group
            chats of your favorite games
          </p>
        </div>
        <div className="howtoconnect">
          <p className="howConnect1">
            Connect through the app, add your friends and schedule a game time.
          </p>
          <div className="howConnect">
            Connect
            <BsPeople size={55} style={{ color: 'black' }} />
          </div>
        </div>
        <div className="howtoGameon">
          <div className="howGameOn">
            Game On!
            <FaRegHandshake size={55} style={{ color: 'black' }} />
          </div>
          <p className="howGameOn1">
            Meet players at the platform of your choice & Game On!
          </p>
        </div>
      </div>
      <div className="howButton">
        <button onClick={handleClick} className="howtoButton">
          BECOME A MEMBER
        </button>
      </div>
      <Footer />
    </>
  );
};

export default PolicyGuide;
