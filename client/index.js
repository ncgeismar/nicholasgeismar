import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import {App} from './App'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
