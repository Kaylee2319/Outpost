import React from 'react';
import '../css/VeteranPrograms.css';
import NavBar from './NavBar';
import Footer from './footer';
const VeteranPrograms = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="VaTitle">Veteran Programs</div>
        <p className="aboutVaPg">Thank you for your service.</p>
        <p className="aboutVaPg">We're here to guide.</p>
      </div>
      <div className="mission22">
        <div className="m22img"></div>
        <div className="aboutMission">
          <p className="aboutMission1">
            Recovery + Resiliency is a 12-month program available to combat
            Veterans
          </p>
          <a href="https://mission22.com/">
            <button className="missionbutton">Go</button>
          </a>
        </div>
      </div>
      <div className="talkspace">
        <div className="talkimg"></div>
        <div className="aboutTs">
          <p className="aboutTs1">
            TalkSpace: Online Counseling & Therapy for Veterans. HIPPA Compliant
            & Secure SSL
          </p>
          <a href="https://www.talkspace.com/online-therapy/veterans/">
            <button className="tsbutton">Go</button>
          </a>
        </div>
      </div>
      <div className="feedvets">
        <div className="feedimg"></div>
        <div className="aboutFeedvet">
          <p className="aboutFeedvet1">
            Since 2009, Feed Our Vets has provided free food assistance to more
            than 25,000 Veterans.
          </p>
          <a href="https://feedourvets.org/">
            <button className="feedvetbutton">Go</button>
          </a>
        </div>
      </div>
      <div className="nva">
        <div className="nvaimg"></div>
        <div className="aboutNva">
          <p className="aboutNva1">
            {' '}
            We help Veterans and their families who are enduring a crisis or who
            have a critical need for help.
          </p>
          <a href="https://nvf.org/">
            <button className="nvabutton">Go</button>
          </a>
        </div>
      </div>
      <div className="wounded">
        <div className="woundedimg"></div>
        <div className="aboutWounded">
          <p className="aboutWounded1">
            Veterans and service members who incurred a physical or mental
            injury, while serving in the military. You are our focus. You are
            our mission.
          </p>
          <a href="https://www.woundedwarriorproject.org/">
            <button className="woundedbutton">Go</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VeteranPrograms;
