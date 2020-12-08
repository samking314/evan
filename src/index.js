import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals.js";

import { Provider } from 'react-redux';
import configureStore from './store.js';

import App from "./App";
import "./styles/main.css";

const rootElement = document.getElementById("root");

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
reportWebVitals(console.log);
