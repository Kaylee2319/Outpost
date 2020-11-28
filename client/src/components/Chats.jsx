import React, { useState, useEffect, useContext } from 'react';
import socketIo from '../utils/socket-io';
import { AppContext } from '../context/AppContext';
import '../css/Chat.css';
import { RiSendPlaneFill } from 'react-icons/ri';
const Chat = () => {
  const [username, setUsername] = useState('');
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
  return (
    <div className="container">
      <div className="messages">
        {chats.map((chat) => {
          return (
            <div className="messageOutput">
              <img className="messagePic" src={chat.avatar}></img>
              <div className="theoutput">
                <strong>{chat.author}:</strong> {chat.message}
              </div>
            </div>
          );
        })}
      </div>
      <div className="inputBox">
        <div className="card-footer">
          <input
            className="form-control"
            type="text"
            name="messages"
            placeholder="Messages"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sendButton" onClick={sendMessage}>
            <RiSendPlaneFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
