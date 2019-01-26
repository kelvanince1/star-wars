import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Character from './components/Character';
import Intro from './components/OpeningCrawl';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Characters} />
          <Route path="/character" exact render={(props) => <Character {...props} />} />
          <Route path="/intro" exact render={(props) => <Intro {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
