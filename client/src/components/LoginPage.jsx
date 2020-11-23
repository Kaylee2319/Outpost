import React from 'react';
import '../css/LoginPage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { FaXbox } from 'react-icons/fa';
import { FaPlaystation } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { SiSteam } from 'react-icons/si';
import { SiTwitch } from 'react-icons/si';
const LoginPage = () => {
  return (
    <>
      <NavBar />
      <div className="topTitle">
        <p className="gameUp">Choose your rally point</p>
      </div>
      <div className="signInTitle">
        <p className="signIn">Game up with veterans!</p>
      </div>
      <div className="signinWith">
        <h1 className="signButton">
          <FaXbox size={30} style={{ color: 'black' }} />
        </h1>
        <h1 className="signButton">
          <FaPlaystation size={30} style={{ color: 'black' }} />
        </h1>
        <h1 className="signButton">
          <SiNintendoswitch size={30} style={{ color: 'black' }} />
        </h1>
        <h1 className="signButton">
          <SiSteam size={30} style={{ color: 'black' }} />
        </h1>
        <h1 className="signButton">
          <SiTwitch size={30} style={{ color: 'black' }} />
        </h1>
      </div>
      <div className="or">
        <p className="or">OR</p>
      </div>
      <form className="loginForm">
        <label>
          <p className="email">Email:</p>
          <input className="emailBox" type="email" />
          <p className="password">Password:</p>
          <input className="passwordBox" type="password" />
        </label>
        <Link to="/forgotpassword" className="forgot">
          <span className="forgotten">Forgot Password?</span>
        </Link>
        <input className="loginButton" type="submit" value="SIGN IN" />
      </form>
      <div className="noAccountTitle">
        <p className="noAccountTitle">Don't have an account?</p>
      </div>
      <div className="signupLink">
        <Link to="/signup" className="signupLink">
          <span className="signLink">Sign up</span>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
