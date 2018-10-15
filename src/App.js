import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import MessagesList from './components/messagesList';
import SendMessageForm from './components/sendMessageForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <MessagesList />
        <SendMessageForm />     
      </div>
    );
  }
}

export default App;
