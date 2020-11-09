import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { configureStore } from './store'
import reducers from './reducers/index'

import App from './App'

const state = window.__PRELOADED_STATE__ || undefined
delete window.__PRELOADED_STATE__
const store = configureStore(state, reducers, [])

const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)
reportWebVitals(console.log);
