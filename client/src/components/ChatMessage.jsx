import React from 'react';
import '../css/Chat.css';
export default ({ name, message, avatar }) => (
  <div className="messageOutput">
    <img className="messagePic" src={avatar} alt="user" />
    <p className="theoutput">
      <strong>{name}:</strong> {message}
    </p>
  </div>
);
