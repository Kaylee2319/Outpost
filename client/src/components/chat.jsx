import React, { useState, useEffect, useContext } from 'react';
import socketIo from '../utils/socket-io';
import { AppContext } from '../context/AppContext';
import '../css/chat.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Timestamp } from 'mongodb';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);

  useEffect(() => {
    socketIo.on('receive message', (data) => {
      console.log('receive message', data);
      addMessage(data);
    });
  }, [chats]);

  const addMessage = (msg) => {
    setChats(chats.concat({ author: msg.author, message: msg.message }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socketIo.emit('send message', { author: username, message: message });
    setMessage('');
  };
  let isSentByCurrentUser = false;

  if (currentUser === currentUser) {
    isSentByCurrentUser = true;
  }
  return (
    <div className="container">
      <div className="messages">
        {chats.map((chat) => {
          return isSentByCurrentUser ? (
            <div className="messageOutput">
              <img
                className="messagePic"
                src={
                  currentUser?.avatar
                    ? currentUser?.avatar
                    : 'https://files.willkennedy.dev/wyncode/wyncode.png'
                }
                alt="profile"
              />
              <p className="theoutput">
                <strong>{currentUser?.name}Kaylee:</strong>
                {chat.message}
              </p>
            </div>
          ) : (
            <div className="messageOutput1">
              <img
                className="messagePic"
                src={
                  currentUser?.avatar
                    ? currentUser?.avatar
                    : 'https://files.willkennedy.dev/wyncode/wyncode.png'
                }
                alt="profile"
              />
              <p className="theoutput">
                <strong>{currentUser?.name}Kaylee:</strong>
                {chat.message}
              </p>
            </div>
          );
        })}
      </div>
      <div className="inputBox">
        <div className="card-footer">
          <h3>{currentUser?.name}</h3>
          <input
            className="messageInput"
            type="text"
            name="messages"
            placeholder="Messages"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sendButton" onClick={sendMessage}>
            <RiSendPlaneFill
              size={25}
              style={{ color: 'rgba(5, 95, 158, 1)' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
