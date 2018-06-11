import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './UserInput';
import UserInputDebug from './UserInputDebug';
import WordList from './WordList';
import './App.css';

class ScrabbleSolver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "PLACEHOLDER TEXT",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <strike><code>src/App.js</code></strike> <code>src/ScrabbleSolver.js</code> and save to reload.
        </p>
        <p>
          <UserInput onBlur={() => this.handleChange()} />
        </p>
        <p>
          <UserInputDebug userInput={this.state.userInput} />
        </p>
        <p>
          <h3>Word list:</h3>

          <WordList />
        </p>
      </div>
    );
  }

  handleChange() {
    this.setState({userInput: "foobar"});
  }
}

export default ScrabbleSolver;
