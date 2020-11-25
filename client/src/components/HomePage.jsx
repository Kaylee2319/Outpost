import React from 'react';
import '../css/HomePage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FaRegHandshake } from 'react-icons/fa';
const HomePage = ({ history }) => {
  const handleClick = () => {
    history.push('/signup');
  };
  const handleClick1 = () => {
    history.push('/policy');
  };
  return (
    <>
      <NavBar />
      <div className="Join">
        <span className="about">
          Connect with veterans & play your favorite game.
        </span>
        <button onClick={handleClick} className="joinButton">
          LINK UP
        </button>
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
        <button onClick={handleClick1} className="exploreButton">
          Explore More
        </button>
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
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
        <div className="item">event</div>
      </div>
      <div className="currentlyOnline">
        <span className="currentTitle">Currently Online</span>
        <div className="friends">
          <div className="friendName">
            <div className="friend">friend</div>john doe
          </div>
          <div className="friendName">
            <div className="friend">friend</div>john doe
          </div>
          <div className="friendName">
            <div className="friend">friend</div>john doe
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
        <div className="insta1"></div>
        <div className="insta2"></div>
        <div className="instaWin"></div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
