import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<App />,
	rootElement
);
reportWebVitals(console.log);
