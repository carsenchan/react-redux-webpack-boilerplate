import "babel-polyfill";
import img from './assets/icon.png'
import favicon from './assets/favicon.ico'
import './styles/main.css'

import React from "react";
import ReactDom from 'react-dom'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducers } from './reducers/index'


import App from './containers/App'

let store = createStore(reducers, composeWithDevTools())

ReactDom.render(
  <Provider store = {store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)