import React from 'react';
import '../css/HomePage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaRegHandshake } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="Join">
        <span className="about">
          Connect with veterans & schedule your favorite game.
        </span>
        <button className="joinButton">Join</button>
      </div>
      <div className="HowItWorks">
        <span className="HowTitle">How it Works</span>
        <span className="works">Join a community of veteran gamers</span>
      </div>
      <div className="iconbar">
        <div className="search">
          <HiOutlineSearch size={45} style={{ color: 'black' }} />
          Search
        </div>
        <div className="connect">
          <BsPeople size={45} style={{ color: 'black' }} />
          Connect
        </div>
        <div className="gameOn">
          <FaRegHandshake size={45} style={{ color: 'black' }} />
          Game On
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
        <span className="eventTitle">Upcoming Events</span>
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
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
          <div className="friendName">
            <h1 className="friend">friend</h1>john doe
          </div>
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
        <span className="perksTitle">Enjoy Perks</span>
        <Link to="/event" className="eventLink">
          <span className="viewAll">View All</span>
        </Link>
      </div>
      <div className="thePerks">
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
        <h1 className="perk">perk</h1>
      </div>
      <div className="instaWins">
        <span className="instaTitle">Check our Insta-wins!</span>
      </div>
      <div className="theWins">
        <h1 className="instaWin">instaWin</h1>
        <h1 className="instaWin">instaWin</h1>
        <h1 className="instaWin">instaWin</h1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
