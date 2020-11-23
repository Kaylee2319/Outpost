import React, { useState, useContext } from 'react';
import '../css/SignUpPage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const SignUpPage = () => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api', formData);
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
        <form className="signUpForm">
          <div>
            <div htmlFor="email">Email Address:</div>
            <input className="emailSignUp" type="email" name="email" />
          </div>
          <div>
            <div htmlFor="outpostId">User ID:</div>
            <input className="firstName" type="text" name="name" />
          </div>
          <div>
            <div htmlFor="firstName">First Name:</div>
            <input className="firstName" type="text" name="name" />
          </div>
          <div>
            <div htmlFor="lastName">Last Name:</div>
            <input className="lastName" type="text" name="name" />
          </div>
          <div>
            <div htmlFor="Birthday">Birthday:</div>
            <input
              className="Birthday"
              type="type"
              placeholder="MM/DD/YYYY"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="gamerTag">Gamer-Tag:</label>
            <select name="gamerTag" id="gamerTag">
              <option value="xbox">Xbox</option>
              <option value="Playstation">Playstation</option>
              <option value="Nintendo">Nintendo</option>
              <option value="PC">PC</option>
              <option value="Other">Other</option>
            </select>
            <input
              id="gamerInput"
              value={document.getElementById('gamerTag')}
              type="type"
              placeholder="Gamer-Tag"
              name="name"
            />
          </div>
          <div>
            <div htmlFor="passwordSignUp">Password:</div>
            <input className="password" type="password" name="password" />
            <div htmlFor="password">Re-Enter Password:</div>
            <input className="passwordSignUp" type="password" name="password" />
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
