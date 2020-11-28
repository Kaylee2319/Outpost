import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FiSave } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert';
import '../css/ProfileEdit.css';
const EditUser = ({ history }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleUpDate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('/api/users/profile', formData);
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
      <form className="editForm" onSubmit={handleUpDate}>
        <label>User Name: {currentUser?.user_name}</label>
        <input
          className="editFormUn"
          type="text"
          name="user_name"
          onChange={handleChange}
        />
        <label>Email: {currentUser?.email}</label>
        <input
          className="editFormUn"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <label>First Name: {currentUser?.first_name}</label>
        <input
          className="editFormUn"
          type="text"
          name="first_name"
          onChange={handleChange}
        />
        <label>Last Name: {currentUser?.last_name}</label>
        <input
          className="editFormUn"
          type="text"
          name="last_name"
          onChange={handleChange}
        />
        <label>Branch: {currentUser?.service_branch}</label>
        <input
          className="editFormUn"
          type="text"
          name="service_branch"
          onChange={handleChange}
        />
        <div className="editForm">
          <h4>Gamer Tags:</h4>
          <label>XBOX: </label>
          <input
            className="editFormUn"
            type="text"
            name="xbox"
            onChange={handleChange}
          />
          <label>PSN: </label>
          <input
            className="editFormUn"
            type="text"
            name="psn"
            onChange={handleChange}
          />
          <label>NES: </label>
          <input
            className="editFormUn"
            type="text"
            name="nes"
            onChange={handleChange}
          />
          <label>PC: </label>
          <input
            className="editFormUn"
            type="text"
            name="pc"
            onChange={handleChange}
          />
          <label>other: </label>
          <input
            className="editFormUn"
            type="text"
            name="other"
            onChange={handleChange}
          />
        </div>
        <button className="editFormButton" type="submit">
          <FiSave size={25} style={{ color: 'rgba(5, 95, 158, 1)' }} /> Save
          Info
        </button>
      </form>
      <Link to="/passwordupdate" className="menuEvent">
        Update Password
      </Link>
      <Footer />
    </div>
  );
};

export default EditUser;
