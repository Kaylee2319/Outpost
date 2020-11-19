import React from 'react';
import '../css/ProfilePage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { FaRegHandshake } from 'react-icons/fa';
const ProfilePage = () => {
  return (
    <>
      <NavBar />

      <div className="pic">
        <div className="saved">
          <FaRegHandshake size={30} style={{ color: 'black' }} />
          Saved
        </div>
        <h1 className="profilePic">profile pic</h1>
      </div>
      <div className="named">
        <p className="usersName">Kaylee Harding</p>
        <p className="userName">Kaylee2319</p>
        <p className="dutyStatus">Vetern USCG</p>
        <p className="memberSince">Menmber Since:</p>
        <Link to="/profileedit" className="editLink">
          <span className="editProfile">Edit Profile</span>
        </Link>
      </div>
      <div className="favGames">
        <p className="consoles">Find me on:</p>
        <p className="userGames">Favorite Games:</p>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
