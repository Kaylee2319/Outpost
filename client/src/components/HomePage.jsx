import React from 'react';
import '../css/HomePage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FaRegHandshake } from 'react-icons/fa';
import Content from '../images/Content.png';
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="Join">
        <span className="about">
          Connect with veterans & play your favorite game.
        </span>
        <button className="joinButton">LINK UP</button>
      </div>
      <div className="HowItWorks">
        <span className="HowTitle">How it Works</span>
        <span className="works">Join a community of veteran gamers</span>
      </div>
      <div className="iconbar">
        <div className="search">
          Search
          <IoIosSearch size={45} style={{ color: 'black' }} />
        </div>
        <div className="connect">
          Connect
          <BsPeople size={45} style={{ color: 'black' }} />
        </div>
        <div className="gameOn">
          Game On!
          <FaRegHandshake size={45} style={{ color: 'black' }} />
        </div>
      </div>
      <div className="explore">
        <button className="exploreButton">Explore More</button>
      </div>
      <div className="howVideo">
        <h3 className="howvideotitle">Watch how it works</h3>
        <div className="video">video goes here</div>
      </div>
      <div className="upcomingEvents">
        <span className="eventTitle">Online Game Chats</span>
        <Link to="/event" className="eventLink">
          <span className="viewAll">View All</span>
        </Link>
      </div>
      <div className="events">
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
        <h1 className="item">event</h1>
      </div>
      <div className="currentlyOnline">
        <span className="currentTitle">Currently Online</span>
        <div className="friends">
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
        </div>
      </div>
      <div className="perks">
        <span className="perksTitle">Veteran Programs</span>
        <Link to="/veteranprograms" className="eventLink">
          <span className="viewAll">View All</span>
        </Link>
      </div>
      <div className="thePerks">
        <div className="benifits1">
          <h1 className="perk">Education</h1>
          <h1 className="perk">Job Support</h1>
        </div>
        <div className="benifits1">
          <h1 className="perk">Mental Health</h1>
          <h1 className="perk">Perks</h1>
        </div>
      </div>
      <div className="instaWins">
        <span className="instaTitle">Seen on Instagram</span>
      </div>
      <div className="theWins">
        <h1 className="insta1"></h1>
        <h1 className="insta2"></h1>
        <h1 className="instaWin"></h1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
