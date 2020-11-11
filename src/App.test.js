import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import { EnergyComponent } from "./EnergyComponent";
import { filterAndMapEnergyTypes } from "./helpers/energy-helper";
import EnergyCalculator from "./EnergyCalculator";

describe("Main Screen", () => {
	it("renders main page", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})

describe("Energy Calculator", () => {
	it("renders energy calculator", () => {
		const div = document.createElement("div");
		ReactDOM.render(<EnergyCalculator />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("renders energy component with all elements", () => {
		let { getByText, getByTestId } = render(<EnergyComponent />);
		const energyCompSelect = getByTestId('energy-comp-select');
		expect(energyCompSelect).toBeInTheDocument();
		const energyCompNumber = getByTestId('energy-comp-number');
		expect(energyCompNumber).toBeInTheDocument();
	});

	it("energy component equals test data", () => {
		const testEnergyData = [
			{
				name: "solar energy",
				value: "solar",
			},
		];
		expect(filterAndMapEnergyTypes(testEnergyData).length).toEqual(1);
	});

	it("energy component null name and value", () => {
		const testEnergyData = [
			{
				name: null,
				value: null,
			},
		];
		expect(filterAndMapEnergyTypes(testEnergyData).length).toEqual(0);
	});

	it("energy component null name", () => {
		const testEnergyData = [
			{
				name: null,
				value: "value",
			},
		];
		expect(filterAndMapEnergyTypes(testEnergyData).length).toEqual(0);
	});

	it("energy component null value", () => {
		const testEnergyData = [
			{
				name: "name",
				value: null,
			},
		];
		expect(filterAndMapEnergyTypes(testEnergyData).length).toEqual(0);
	});

	it("renders energy component with test data", () => {
		const div = document.createElement("div");
		const testEnergyData = [
			{
				name: "solar energy",
				value: "solar",
			},
		];
		ReactDOM.render(<EnergyComponent energyCompData={testEnergyData} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})
