import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import filterReducer from './reducers/filter';
import {
  casesReducer, deathsHistoryReducer, confirmedHistoryReducer,
} from './reducers/cases';
import Routes from './Routes';

const rootReducer = combineReducers({
  cases: casesReducer,
  filter: filterReducer,
  deathsHistory: deathsHistoryReducer,
  confirmedHistory: confirmedHistoryReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
