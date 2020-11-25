import React, { useContext, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../css/ProfilePage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import { VscSignOut } from 'react-icons/vsc';
import { AppContext } from '../context/AppContext';

const ProfilePage = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Your image has been updated!', 'success');
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const willDelete = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this account!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: '/api/users',
            withCredentials: true
          });
          swal('Your account has been deleted!', {
            icon: 'success'
          });
          setLoading(false);
          sessionStorage.removeItem('user');
          setCurrentUser(null);
          push('/login');
        } catch (error) {
          swal(`Oops!`, 'Something went wrong.');
        }
      } else {
        swal('Your account is safe!');
      }
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      swal('You have been logged out!', {
        icon: 'success'
      });
      setLoading(false);
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      push('/login');
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="pic">
        <img
          className="proPic"
          src={
            preview
              ? preview
              : currentUser?.avatar
              ? currentUser?.avatar
              : 'https://files.willkennedy.dev/wyncode/wyncode.png'
          }
          alt="profile"
        />
      </div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="proForm">
          <div className="fileInput">
            <input
              type="file"
              className="file"
              id="file"
              accept="image/*"
              onChange={handleImageSelect}
            />
            <label htmlFor="file">
              <AiOutlineCloudUpload
                size={15}
                style={{ color: 'rgba(5, 95, 158, 1)' }}
              />{' '}
              Profile Photo{' '}
            </label>
          </div>
          <button className="saveButton" type="submit">
            <FiSave size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} /> Save
            Image
          </button>
        </div>
      </form>
      <div className="namedPlayer">
        <div className="nameEdit">
          <h2 className="usersName">{currentUser?.user_name}</h2>
          <Link to="/profileedit" className="editLink">
            <span className="editProfile">Edit Profile</span>
          </Link>
        </div>
        <h3 className="dutyStatus">{currentUser?.service_branch}</h3>

        <h4 className="userName">{currentUser?.user_name}</h4>
        <a href="/chatroom">

          <button className="messageButton">Messages</button>
        </a>
      </div>
      <div className="favGames">
        <p className="consoles">Find me on:</p>
        <p className="userGames">Favorite Games:</p>
      </div>
      <div className="trash">
        <button className="deleteAcc" onClick={handleDelete}>
          <BsTrash size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} /> Delete
          Account
        </button>
        <button className="logout" onClick={handleLogout}>
          <VscSignOut size={15} style={{ color: 'rgba(5, 95, 158, 1)' }} />{' '}
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
