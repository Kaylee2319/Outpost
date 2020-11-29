import React, { useState, useEffect, useContext } from 'react';
import socketIo from '../utils/socket-io';
import { AppContext } from '../context/AppContext';
import '../css/Chat.css';
import { RiSendPlaneFill } from 'react-icons/ri';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AppContext);

  useEffect(() => {
    socketIo.on('receive message', (data) => {
      console.log('receive message', data);
      addMessage(data);
    });
  }, [chats]);

  const addMessage = (msg) => {
    setChats(
      chats.concat({
        avatar: msg.avatar,
        author: msg.author,
        message: msg.message
      })
    );
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socketIo.emit('send message', {
      avatar: `${currentUser.avatar}`,
      author: `${currentUser?.user_name}`,
      message: message
    });
    setMessage('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div className="messages">
        {chats.map((chat) => {
          let isSentByCurrentUser = false;
          if (chat.author === currentUser.user_name) {
            isSentByCurrentUser = true;
          }
          return isSentByCurrentUser ? (
            <div className="messageOutput justifyEnd">
              <img className="messagePic" src={chat.avatar} alt="user"></img>
              <div className="theoutput">
                <strong>{chat.author}:</strong> {chat.message}
              </div>
            </div>
          ) : (
            <div className="messageOutput1 justifyStart">
              <img className="messagePic" src={chat.avatar} alt="user"></img>
              <div className="theoutput1">
                <strong>{chat.author}:</strong> {chat.message}
              </div>
            </div>
          );
        })}
      </div>
      <div className="inputBox">
        <input
          className="form-control"
          type="text"
          name="messages"
          placeholder="Message"
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendButton" type="submit" onClick={sendMessage}>
          <RiSendPlaneFill size={30} style={{ color: 'rgba(5, 95, 158, 1)' }} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
