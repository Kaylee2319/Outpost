import React from 'react';
import '../css/AboutPage.css';
import NavBar from './NavBar';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="title">
        <h2>About Us</h2>
      </div>
      <div className="story">
        <h2 className="ourstory">Our Story</h2>
        <p className="ourstory1">
          We are a team of veterans and students at Wyncode in Miami, FL.
        </p>

        <p className="ourstory1">
          The purpose for <strong className="colorme">Outpost</strong> is to
          address suicide among veterans which is currently at an average of{' '}
          <strong className="colorme">22 veterans per day</strong>. With this
          app, we can help provide a safe space outlet for veterans to come
          together, schedule gaming days, attend online group chats and talk
          about whatever is on their mind.
        </p>

        <p className="ourstory1">
          Additionally, we want to provide resources to other military
          communities and mental health support/therapy.
        </p>
      </div>
      <div className="ourTeam">
        <h1 className="ourTeam1">Our Team</h1>
        <div className="webDev">
          <div>
            <div className="William"></div>
            <h1>William Dillard</h1>
            <h2>Web Developer</h2>
          </div>
          <div>
            <div className="kaylee"></div>
            <h1>Kaylee Harding</h1>
            <h2>Web Developer</h2>
          </div>
        </div>
        <div className="uxui1">
          <div>
            <div className="phil"></div>
            <h1>Phillip Goncalves</h1>
            <h2>Web Developer</h2>
          </div>
          <div>
            <div className="Gyovany"></div>
            <h1>Gyovany Munoz</h1>
            <h2>UX UI Designer</h2>
          </div>
        </div>
        <div className="uxui2">
          <div>
            <div className="Jorge"></div>
            <h1>Jorge Silva</h1>
            <h2>UX UI Designer</h2>
          </div>
          <div>
            <div className="Maria"></div>
            <h1>Maria Suarez</h1>
            <h2>UX UI Designer</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
