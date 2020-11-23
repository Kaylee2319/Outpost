import React, { useContext, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../css/ProfilePage.css';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { FaRegHandshake } from 'react-icons/fa';
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
    avatar.append('avatar', image, image.user_name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/profile/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Sweet!', 'Your image has been updated!', 'success');
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
          swal('Poof! Your account has been deleted!', {
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

  return (
    <>
      <NavBar />
      <div className="pic">
        <div className="saved">
          <FaRegHandshake size={30} style={{ color: 'black' }} />
          Saved
        </div>
        <img
          src={
            preview
              ? preview
              : currentUser?.avatar
              ? currentUser?.avatar
              : 'https://files.willkennedy.dev/wyncode/wyncode.png'
          }
          alt="profile"
          width={250}
          height={250}
          roundedCircle
        />
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageSelect} />
          <button type="submit">Save Image</button>
        </form>
      </div>
      <div className="named">
        <p className="usersName">{currentUser?.name}</p>
        <p className="userName">{currentUser?.user_name}</p>
        <p className="dutyStatus">{currentUser?.service_branch}</p>
        <p className="memberSince">Menmber Since:</p>
        <Link to="/profileedit" className="editLink">
          <span className="editProfile">Edit Profile</span>
        </Link>
      </div>
      <div className="favGames">
        <p className="consoles">Find me on:</p>
        <p className="userGames">Favorite Games:</p>
      </div>
      <button onClick={handleDelete}>Delete Account</button>

      <Footer />
    </>
  );
};

export default ProfilePage;
