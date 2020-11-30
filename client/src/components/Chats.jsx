import React, { useState, useEffect, useContext } from 'react';
import socketIo from '../utils/socket-io';
import { AppContext } from '../context/AppContext';
import '../css/Chat.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import wyncode from '../images/wyncode.png';

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

  const sendMessage = (event) => {
    event.preventDefault();
    socketIo.emit('send message', {
      avatar: `${currentUser?.avatar ? currentUser?.avatar : `${wyncode}`}`,
      author: `${currentUser?.user_name}`,
      message: message
    });
    setMessage('');
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage(event);
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div className="messages">
        <div className="theMess">
          {chats.map((chat) => {
            let isSentByCurrentUser = chat.author === currentUser.user_name;
            return isSentByCurrentUser ? (
              <div className="messageMine justifyEnd">
                <img className="messagePic" src={chat.avatar} alt="user"></img>
                <div className="messageText">
                  <strong>{chat.author}:</strong> {chat.message}
                </div>
              </div>
            ) : (
              <div className="messageTheirs justifyStart">
                <img className="messagePic" src={chat.avatar} alt="user"></img>
                <div className="messageText">
                  <strong>{chat.author}:</strong> {chat.message}
                </div>
              </div>
            );
          })}
        </div>
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
