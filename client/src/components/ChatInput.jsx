import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Chat.css';
class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  };
  state = {
    message: ''
  };

  render() {
    return (
      <form
        action="."
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmitMessage(this.state.message);
          this.setState({ message: '' });
        }}
      >
        <div className="messForm">
          <input
            className="form-control"
            type="text"
            placeholder={'Enter message...'}
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
        </div>
        <input className="sendButton" type="submit" value={'➤'} />
      </form>
    );
  }
}

export default ChatInput;
