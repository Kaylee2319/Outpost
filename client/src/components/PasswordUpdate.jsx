import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import '../css/PasswordUpdate.css';
import NavBar from './NavBar';
import Footer from './Footer';
const PasswordUpdate = ({ history }) => {
  const [password, setPassword] = useState(null);

  const handleChange = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.password !== password.confirmPassword) {
      swal('Error', 'Oops, passwords must match.');
      return;
    }
    await axios.put(
      '/api/users/password',
      { password: password.password },
      { withCredentials: true }
    );
    swal('Updated!', 'Your password has been updated!');
    history.push('/login');
  };
  return (
    <div>
      <NavBar />
      <h1 className="PassUpdate">Update Password</h1>
      <form className="PassUpdateForm" onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input
          className="updatePasses"
          type="password"
          placeholder="Enter new password"
          onChange={handleChange}
          name="password"
          autoComplete="off"
          required
        ></input>
        <label>Confirm Password:</label>
        <input
          className="updatePasses"
          type="password"
          placeholder="Enter new password"
          onChange={handleChange}
          name="confirmPassword"
          required
          autoComplete="off"
        ></input>
        <button className="updatePassButton" type="submit">
          Update Password
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default PasswordUpdate;
