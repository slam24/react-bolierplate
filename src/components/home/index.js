//import
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import store from './../../store/configureStore'

import Home from './content'

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>, document.getElementById('root')
)