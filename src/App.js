import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import EnergyCalculator from "./EnergyCalculator.js";

import "./styles/App.css";

const history = createBrowserHistory();

export default class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div className="App">
					<Route path="/" component={EnergyCalculator} />
				</div>
			</Router>
		);
	}
}
