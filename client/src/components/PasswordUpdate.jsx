import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

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
      <h1 className="mb-4">Update Password</h1>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          onChange={handleChange}
          name="password"
          autoComplete="off"
          required
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          onChange={handleChange}
          name="confirmPassword"
          required
          autoComplete="off"
        ></input>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default PasswordUpdate;
