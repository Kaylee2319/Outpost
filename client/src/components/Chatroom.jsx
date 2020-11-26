import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const URL = 'ws://localhost:3030';

class Chatroom extends Component {
  static contextType = AppContext;
  state = {
    name: {},
    messages: []
  };

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL)
      });
    };
  }

  addMessage = (message) =>
    this.setState((state) => ({ messages: [message, ...state.messages] }));

  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    const { currentUser } = this.context;
    return (
      <div>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={(messageString) => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={currentUser.user_name}
          />
        ))}
      </div>
    );
  }
}

export default Chatroom;
