import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Navbar from './components/Navbar';
import reducer from './store/reducers';

const rootReducer = combineReducers({
  reducer: reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const styles = () => ({
  container: {
    background: 'linear-gradient(to right, #000000, #434343)',
    height: `${window.innerHeight}px`,
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

const App = (props) => {
  const { classes } = props;
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <div className={classes.container}>
          {props.children}
        </div>
      </MuiThemeProvider>
    </Provider>
  )
}

export default (withStyles(styles)(App));
