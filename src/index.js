import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/Main';
import store from './store'
import {Provider} from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
document.getElementById('root')
);