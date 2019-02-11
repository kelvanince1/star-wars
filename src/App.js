import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Characters from './components/Characters';
import Character from './components/Character';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const styles = () => ({
  container: {
    background: 'linear-gradient(to right, #000000, #434343)',
    minHeight: `${window.innerHeight}px`,
    paddingTop: '90px',
  },
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#FFD700',
    },
    secondary: {
      main: '#000000',
    }
  },
  spacing: 8,
});

let routes = (
  <Switch>
    <Route path="/character" exact render={(props) => <Character {...props} />} />
    <Route path="/" exact component={Characters} />
    <Redirect to="/" />
  </Switch>
);

const App = (props) => {
  const { classes } = props;
  return (
    <Route>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <div className={classes.container}>
          {routes}
        </div>
        <Footer />
      </MuiThemeProvider>
    </Route>
  )
}

export default (withStyles(styles)(App));
