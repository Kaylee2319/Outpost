import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/Chat.css';
const URL = 'wss://outpostgaming.herokuapp.com/chats';

class Chatroom extends Component {
  static contextType = AppContext;
  state = {
    name: {},
    messages: [],
    avatar: {}
  };
  wss = new WebSocket(URL, ['soap', 'wamp']);
  componentDidMount() {
    this.wss.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };
    this.wss.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };
    this.wss.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        wss: new WebSocket(URL)
      });
    };
  }
  addMessage = (message) =>
    this.setState((state) => ({ messages: [message, ...state.messages] }));
  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString };
    this.wss.send(JSON.stringify(message));
    this.addMessage(message);
  };
  render() {
    const { currentUser } = this.context;
    return (
      <>
        <NavBar />
        <div className="messIn">
          <ChatInput
            wss={this.wss}
            onSubmitMessage={(messageString) =>
              this.submitMessage(messageString)
            }
          />
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <ChatMessage
                key={index}
                avatar={currentUser.avatar}
                message={message.message}
                name={currentUser.user_name}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Chatroom;
