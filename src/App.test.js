import { render, screen, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import { EnergyComponent } from "./components/EnergyComponent";
import {
	filterAndMapEnergyCompTypes,
	validateEnergyComp,
} from "./helpers/energy-helper";
import EnergyCalculator from "./pages/EnergyCalculator";

describe("Main Screen", () => {
	it("renders main page", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe("Energy Calculator", () => {
	it("renders energy calculator", () => {
		const div = document.createElement("div");
		ReactDOM.render(<EnergyCalculator />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("renders energy component with all elements", () => {
		const { getByText, getByTestId } = render(<EnergyComponent />);
		const energyCompSelect = getByTestId("energy-comp-select");
		expect(energyCompSelect).toBeInTheDocument();
		const energyCompNumber = getByTestId("energy-comp-amount");
		expect(energyCompNumber).toBeInTheDocument();
	});

	it("energy component equals test data", () => {
		const testEnergyData = [
			{
				name: "solar energy",
				type: "solar",
				amount: 0,
			},
		];
		expect(filterAndMapEnergyCompTypes(testEnergyData).length).toEqual(1);
	});

	it("energy component null name and type", () => {
		const testEnergyData = [
			{
				name: null,
				type: null,
				amount: 0,
			},
		];
		expect(filterAndMapEnergyCompTypes(testEnergyData).length).toEqual(0);
	});

	it("energy component null name", () => {
		const testEnergyData = [
			{
				name: null,
				type: "type",
				amount: 0,
			},
		];
		expect(filterAndMapEnergyCompTypes(testEnergyData).length).toEqual(0);
	});

	it("energy component null type", () => {
		const testEnergyData = [
			{
				name: "name",
				type: null,
				amount: 0,
			},
		];
		expect(filterAndMapEnergyCompTypes(testEnergyData).length).toEqual(0);
	});

	it("renders energy component with test data", () => {
		const div = document.createElement("div");
		const testEnergyData = [
			{
				name: "solar energy",
				type: "solar",
				amount: 0,
			},
		];
		ReactDOM.render(
			<EnergyComponent energyCompData={testEnergyData} />,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("changes type of energy comp", () => {
		const testEnergyData = [
			{
				name: "solar energy",
				type: "solar",
				amount: 0,
			},
		];
		const { getByText, getByTestId } = render(
			<EnergyComponent energyCompData={testEnergyData} />
		);
		const energyCompSelect = getByTestId("energy-comp-select");
		fireEvent.change(energyCompSelect, { target: { value: "solar" } });
		expect(energyCompSelect).toHaveTextContent("solar energy");
	});

	it("valid energy amount", () => {
		const testEnergyData = [
			{
				name: "solar energy",
				type: "solar",
				amount: 100,
			},
		];
		const { getByText, getByTestId } = render(
			<EnergyComponent energyCompData={testEnergyData} />
		);
		const energyCompAmount = getByTestId("energy-comp-amount");
		fireEvent.change(energyCompAmount, { target: { value: 20 } });
		expect(energyCompAmount.value).toEqual("20");
	});

	it("invalid energy amount", () => {
		const testEnergyData = [
			{
				name: "solar energy",
				type: "solar",
				amount: 100,
			},
		];
		const { getByText, getByTestId } = render(
			<EnergyComponent energyCompData={testEnergyData} />
		);
		const energyCompAmount = getByTestId("energy-comp-amount");
		fireEvent.change(energyCompAmount, { target: { value: null } });
		expect(energyCompAmount.value).toEqual("");
	});

	it("error energy type or amount", () => {
		const validator = validateEnergyComp(null);
		const { valid } = validator;
		expect(valid).toEqual(false);
	});
});
