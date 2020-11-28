import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../css/PasswordReset.css';
import NavBar from './NavBar';
import Footer from './Footer';
const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const response = await axios.get(`api/password?email=${email}`);
      if (response) {
        swal(
          'Email sent',
          'Check your email for a link to reset your password.'
        );
      }
      form.reset();
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
  };
  return (
    <div>
      <NavBar />
      <h1 className="resetPass">Reset Password</h1>
      <form className="PassResetForm" onSubmit={handleSubmit}>
        <label>Email address:</label>
        <input
          className="passemailReset"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="off"
          required
        ></input>
        <button className="resetPassButton" type="submit">
          Reset Password
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ResetPassword;
