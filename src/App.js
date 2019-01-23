import React, { Component } from 'react';
import fetchAsync from './query';

class App extends Component {
  componentDidMount() {
    fetchAsync();
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
