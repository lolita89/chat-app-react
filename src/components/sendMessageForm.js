import React from 'react';
import PropTypes from 'prop-types';

class SendMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
        // console.log(this.state.message)
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state.message)
        this.props.sendMessage(this.state.message)
        this.setState({
          message: ''
        })
      }


    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="send-message-form">
                    <input
                        onChange={this.handleChange}
                        value={this.state.message}
                        placeholder="Type your message and hit ENTER"
                        type="text" />
                </form>
            </div>
        );
    }
}

SendMessageForm.propTypes = {};

export default SendMessageForm;
