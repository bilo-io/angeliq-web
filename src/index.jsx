/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'regenerator-runtime'
import './styles/index.scss'
import './assets/favicon.ico'

import App from './app'
import pkg from '../package.json'
import store from './store'

console.log(`${pkg.name}: v${pkg.version}`)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('angelic-app-root')
)
