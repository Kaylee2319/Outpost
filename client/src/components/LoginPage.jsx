import React, { useState, useContext } from 'react';
import '../css/LoginPage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const LoginPage = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.user_name]: event.target.value });
    console.log(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="topTitle">
        <p className="gameUp">Game up with other vets</p>
      </div>
      <div className="signInTitle">
        <p className="signIn">Sign into your account</p>
      </div>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>
          <p className="email">Email:</p>
          <input className="emailBox" type="email" onChange={handleChange} />
          <p className="password">Password:</p>
          <input
            className="passwordBox"
            type="password"
            onChange={handleChange}
          />
        </label>
        <input className="loginButton" type="submit" value="Sign In" />
      </form>
      <div className="or">
        <p className="or">OR</p>
      </div>
      <div className="signinWith">
        <h1 className="signButton">XB</h1>
        <h1 className="signButton">PS</h1>
        <h1 className="signButton">NES</h1>
      </div>
      <div className="signinWith">
        <h1 className="signButton">Google</h1>
        <h1 className="signButton">FB</h1>
      </div>
      <div className="noAccountTitle">
        <p className="noAccountTitle">Don't have an account</p>
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
