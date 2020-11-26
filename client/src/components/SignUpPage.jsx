import React, { useState, useContext } from 'react';
import '../css/SignUpPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const SignUpPage = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h1 className="signupTitle">Create Your Account</h1>
        <h2 className="signInLink">
          Already have an account?{' '}
          <Link to="/login" className="signLink">
            Sign In
          </Link>
        </h2>
        <form className="signUpForm" onSubmit={handleSignUp}>
          <div>
            <div htmlFor="email">Email Address:</div>
            <input
              className="signUpF"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <div htmlFor="outpostId">User ID:</div>
            <input
              className="signUpF"
              type="text"
              name="user_name"
              onChange={handleChange}
            />
          </div>
          <div>
            <div htmlFor="firstName">First Name:</div>
            <input
              className="signUpF"
              type="text"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div>
            <div htmlFor="signUpF">Last Name:</div>
            <input
              className="signUpF"
              type="text"
              name="last_name"
              onChange={handleChange}
            />
          </div>
          <div>
            <form className="gtForm">
              <label className="gamerTag" htmlFor="gamerTag">
                Gamer-Tags:
              </label>
              <label>XBOX: </label>
              <input
                className="gtInput"
                type="text"
                name="xbox"
                onChange={handleChange}
              />
              <label>Playstation: </label>
              <input
                className="gtInput"
                type="text"
                name="psn"
                onChange={handleChange}
              />
              <label>Nintendo: </label>
              <input
                className="gtInput"
                type="text"
                name="nes"
                onChange={handleChange}
              />
              <label>PC: </label>
              <input
                className="gtInput"
                type="text"
                name="pc"
                onChange={handleChange}
              />
              <label>Other: </label>
              <input
                className="gtInput"
                type="text"
                name="other"
                onChange={handleChange}
              />
            </form>
          </div>
          <div>
            <div htmlFor="passwordSignUp">Password:</div>
            <input
              className="signUpF"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <div htmlFor="password">Re-Enter Password:</div>
            <input
              className="signUpF"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="terms">
            <p className="conditions">
              {' '}
              By checking sign up, I accept{' '}
              <strong>OUTPOST’s TERMS OF USE</strong> and acknowledge having
              read its Privay Policy and Etiquette Policy
            </p>
          </div>
          <div className="signButton">
            <button className="signUpButton" type="submit">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
