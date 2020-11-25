import React from 'react';

import '../css/Chatroom.css';
import Chat from './chat';
import NavBar from './NavBar';
import Footer from './footer';
const Chatroom = () => {
  return (
    <>
      <NavBar />
      <div>
        <Chat />
      </div>
      <Footer />
    </>
  );
};

export default Chatroom;
