import React, { Component } from 'react';

import fetchAsync from './query';
import Navbar from './components/Navbar';
import Characters from './components/Characters';

class App extends Component {
  componentDidMount() {
    fetchAsync();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Characters />
      </div>
    );
  }
}

export default App;
