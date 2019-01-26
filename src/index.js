import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import Root from './Root';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Character from './components/Character';
import Intro from './components/OpeningCrawl';

ReactDOM.render(
  <Root>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/character" exact render={(props) => <Character {...props} />} />
        <Route path="/intro" exact render={(props) => <Intro {...props} />} />
        <Route path="/" exact component={Characters} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
