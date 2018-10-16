import React from 'react';
import PropTypes from 'prop-types';
import './css/messageList.css';

class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="message-list">
                <ul>
                    {this.props.messages.map (message => {
                        return (
                            <li key={message.id}>
                                <div>
                                    {message.senderId}
                                </div>
                                <div>
                                    {message.text}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

// MessagesList.propTypes = {};

export default MessagesList;
