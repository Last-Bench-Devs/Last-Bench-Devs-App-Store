import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppDetails from './pages/AppDetailsPage';
import { createStore } from 'redux';
import themeReducer from './reducers/themeReducer';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

