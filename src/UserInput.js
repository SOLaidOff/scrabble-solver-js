import React, { Component } from 'react';

class UserInput extends React.Component {
  render() {
    return (
        <input type="text" onBlur={() => this.props.onBlur()} />
        //(userInput) => this.setState({ userInput: userInput.target.value })
        // Why onBlur? It doesn't fire on every keystroke: https://www.peterbe.com/plog/onchange-in-reactjs
    );
  }
}

export default UserInput;
