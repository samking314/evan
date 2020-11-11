import { render, screen } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from "./App";
import expect from 'expect';

test("renders page", () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
