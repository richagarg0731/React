import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

const  rootElement = document.getElementById('root')

render(<App />, rootElement)

module.hot.accept();