import React, {} from 'react';
import './App.css';
import Title from './components/title';
import MessagesList from './components/messagesList';
import SendMessageForm from './components/sendMessageForm';
import Chatkit from '@pusher/chatkit';

const DUMMY_DATA = [{
  senderId: "Luit",
  text: "I love you!"
},
{
  senderId: "Cika",
  text: "I love you too!!"
}
]

const instanceLocator = "v1:us1:f2fe07b3-2a4b-49b7-8178-0b970efc6a72"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f2fe07b3-2a4b-49b7-8178-0b970efc6a72/token"
const username = "Ciluit"
const roomId = 18653904
const userId = "Cilu"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }

        }
      })
    })

  }

  render() {
    return (
      <div className="App">
        <Title />
        <MessagesList messages={this.state.messages} />
        <SendMessageForm />     
      </div>
    );
  }
}

export default App;
