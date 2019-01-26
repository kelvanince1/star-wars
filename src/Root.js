import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers';

const rootReducer = combineReducers({
  reducer: reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
