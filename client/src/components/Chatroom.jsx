import React from 'react';

import Chat from './chat';
import NavBar from './NavBar';
import Footer from './Footer';
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
