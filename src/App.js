import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

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
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFD700',
    }
  },
  spacing: 8,
});

const App = (props) => {
  const { classes } = props;
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <MuiThemeProvider theme={theme}>
          {props.children}
        </MuiThemeProvider>
      </div>
    </Provider>
  )
}

export default (withStyles(styles)(App));
