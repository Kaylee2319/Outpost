import React, { useState, useEffect, useContext } from 'react';
import socketIo from '../utils/socket-io';
import { AppContext } from '../context/AppContext';
import '../css/chat.css';
import { RiSendPlaneFill } from 'react-icons/ri';

const Chat = () => {
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
    socketIo.emit('send message', { author: currentUser, message: message });
    setMessage('');
    console.log('message was sent');
  };

  return (
    <div className="container">
      <div className="messages">
        {chats.map((chats) => {
          return (
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
                <strong>{chats.author}:</strong> {chats.message}
              </p>
            </div>
          );
        })}
      </div>
      <div className="inputBox">
        <div className="card-footer">
          <div>{chats.author}</div>
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
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
