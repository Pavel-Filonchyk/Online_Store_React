import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from "./Components/App/App"


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root')
);