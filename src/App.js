import React, {} from 'react';
import './App.css';
import Title from './components/Title.js';
import MessagesList from './components/MessagesList';
import SendMessageForm from './components/SendMessageForm';
import Chatkit from '@pusher/chatkit';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

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
       messages: DUMMY_DATA,
       joinableRooms: [],
       joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this);
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

      this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinable rooms: ', err))

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
    .catch(err => console.log('error on connecting: ', err))

  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text: text,
      roomId: roomId
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <NewRoomForm />
        <MessagesList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />     
      </div>
    );
  }
}

export default App;
