
// @ts-nocheck

import React, { Component } from 'react'

import { Provider } from 'react-redux'

import dva from './dva'
import models from './models'

require('core-js/modules/es.promise.finally')

import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  enableLog: false,
  models: models,
})

const store = dvaApp.getStore()

class App extends Component {

  componentDidMount() {
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }
  
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
