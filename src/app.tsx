// @ts-nocheck

import { Component } from 'react'

import { Provider } from '@tarojs/redux'

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

    console.log(store)
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
    // return this.props.children

  }
}

export default App
