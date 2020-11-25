import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FiSave } from 'react-icons/fi';
import NavBar from './NavBar';
import axios from 'axios';
import swal from 'sweetalert';

const EditUser = ({ history }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleUpDate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('/api/usres/profile', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleUpDate}>
        <label>User Name: {currentUser?.user_name}</label>
        <input type="text" name="user_name" onChange={handleChange} />
        <label>Email: {currentUser?.email}</label>
        <input type="text" name="email" onChange={handleChange} />
        <label>First Name: {currentUser?.first_name}</label>
        <input type="text" name="first_name" onChange={handleChange} />
        <label>Last Name: {currentUser?.last_name}</label>
        <input type="text" name="last_name" onChange={handleChange} />
        <label>Branch: {currentUser?.service_branch}</label>
        <input type="text" name="service_branch" onChange={handleChange} />
        <div>
          <h5>Gamer Tags</h5>
          <label>XBOX: </label>
          <input type="text" name="xbox" onChange={handleChange} />
          <label>PSN: </label>
          <input type="text" name="psn" onChange={handleChange} />
          <label>NES: </label>
          <input type="text" name="nes" onChange={handleChange} />
          <label>PC: </label>
          <input type="text" name="pc" onChange={handleChange} />
          <label>other: </label>
          <input type="text" name="other" onChange={handleChange} />
        </div>
        <button type="submit">
          <FiSave size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} /> Save
          Info
        </button>
      </form>
    </div>
  );
};

export default EditUser;
