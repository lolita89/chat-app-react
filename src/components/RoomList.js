import React from 'react';
import PropTypes from 'prop-types';
import './css/roomList.css';

class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log(this.props.rooms)
        return (
            <div className="rooms-list">
                <ul>
                <h3>Your rooms:</h3>
                    {this.props.rooms.map(room => {
                        return (
                            <li key={room.id} className="room">
                                <a 
                                    onClick={() => this.props.subscribeToRoom(room.id)}
                                    href="#">
                                    # {room.name}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
            </div>
        );
    }
}

RoomList.propTypes = {};

export default RoomList;
