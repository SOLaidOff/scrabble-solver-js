import React, { Component } from 'react';

class WordList extends React.Component {
  render() {
    return (
        <ul>
        { this.renderWords() }
        </ul>
    );
  }

  renderWords() {
      //TODO: for each item in list, render a word in an <li>
      return (
        <li>Placeholder text</li>
      );
  }
}

export default WordList;
