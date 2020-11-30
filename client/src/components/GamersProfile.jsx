import React, { useState, useContext, useEffect } from 'react';
import '../css/ProfilePage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { MdComputer, MdDevicesOther } from 'react-icons/md';
import { FaXbox, FaPlaystation } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';

const GamersProfile = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const { gamer, setGamer } = useContext(AppContext);

  useEffect(() => {
    console.log('PARAMS', match);
    axios
      .get(`/api/allusers/${match.params.id}`)
      .then((response) => {
        setGamer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        swal(`Oops!`, 'Something went wrong.');
        setLoading(false);
      });
  }, [setGamer, match]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <NavBar />
      <div key={gamer?._id}>
        <div className="pic">
          <img
            className="proPic"
            src={
              gamer?.avatar
                ? gamer?.avatar
                : 'https://files.willkennedy.dev/wyncode/wyncode.png'
            }
            alt="profile"
          />
        </div>
        <div className="namedPlayer">
          <div className="nameEdit">
            <h2 className="usersName">
              {gamer?.first_name} {gamer?.last_name}
            </h2>
          </div>

          <h3 className="userName">{gamer?.user_name}</h3>
          <h4 className="dutyStatus">{gamer?.service_branch}</h4>

          <Link to="/chats" className="messageButton">
            <span className="messageButton1">Messages</span>
          </Link>
        </div>
        <div className="favGames" style={{ marginBottom: 20 }}>
          <p className="consoles">Find me on:</p>
          <div className="mygameTags">
            <div>
              <FaXbox /> <strong>Xbox:</strong> {gamer?.xbox}
            </div>
            <div>
              <FaPlaystation /> <strong>Playstation:</strong> {gamer?.psn}
            </div>
            <div>
              <SiNintendoswitch /> <strong>Nintendo:</strong> {gamer?.nes}
            </div>
            <div>
              <MdComputer /> <strong>PC:</strong> {gamer?.pc}
            </div>
            <div>
              <MdDevicesOther /> <strong>Other:</strong> {gamer?.other}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GamersProfile;
