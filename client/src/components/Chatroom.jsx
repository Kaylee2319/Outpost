import React from 'react';
import Chat from './Chats';
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
