import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

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
      <h1 className="mb-4">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="off"
          required
        ></input>
        <button type="submit">Reset Password</button>
      </form>
      <Link to="/login">Go back</Link>
    </div>
  );
};

export default ResetPassword;
