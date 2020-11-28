import React, { useContext } from 'react';
import '../css/HomePage.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FaRegHandshake } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import Footer from './Footer';
const HomePage = ({ history }) => {
  const { currentUser } = useContext(AppContext);
  const handleClick = () => {
    history.push('/policy');
  };
  return (
    <>
      <NavBar />
      <div className="Join">
        <span className="about">
          Connect with veterans & play your favorite game.
        </span>
        {!currentUser ? (
          <Link to="/signup" className="joinButton">
            LINK UP
          </Link>
        ) : (
          <Link to="/chats" className="joinButton">
            LINK UP
          </Link>
        )}
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
        <button onClick={handleClick} className="exploreButton">
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
        <div id="item" className="event1"></div>
        <div id="item" className="event2"></div>
        <div id="item" className="event3"></div>
        <div id="item" className="event4"></div>
        <div id="item" className="event5"></div>
        <div id="item" className="event6"></div>
        <div id="item" className="event7"></div>
        <div id="item" className="event8"></div>
        <div id="item" className="event9"></div>
        <div id="item" className="event10"></div>
      </div>
      <div className="currentlyOnline">
        <span className="currentTitle">Currently Online</span>
        <div className="friends">
          <div className="friendName">
            <div id="friend" className="friend1"></div>Kaylee2319
          </div>
          <div className="friendName">
            <div id="friend" className="friend2"></div>Dillardwa
          </div>
          <div className="friendName">
            <div id="friend" className="friend3"></div>Jorge123
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
