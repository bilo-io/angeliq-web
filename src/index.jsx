/* eslint-disable no-unused-vars */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import 'regenerator-runtime'
import './styles/index.scss'
import './styles/midnite.css'
import './assets/favicon.ico'

import App from './app'
import pkg from '../package.json'
import store from './store'
import { ThemeProvider } from './vendor/midnite-ui/theme/theme-context'

console.log(`${pkg.name}: v${pkg.version}`)

createRoot(document.getElementById('angelic-app-root')).render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>
)
