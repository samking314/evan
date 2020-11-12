import { useState } from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { filterAndMapEnergyCompTypes } from "./helpers/energy-helper";
import { energyCompData } from "./mock/energy";

export const EnergyComponent = ({ energyCompData = [] }) => {
	const [state, setState] = useState({
		type: "n/a",
		amount: 0,
	});
	const handleChangeType = event => {
		setState({
			...state,
			type: event.target.value,
		});
	};
	const handleChangeAmount = event => {
		setState({
			...state,
			amount: event.target.value,
		});
	};
	return (
		<div data-testid="energy-comp">
			<Select
				native
				value={state.type}
				onChange={handleChangeType}
				inputProps={{
					name: "type",
					id: "type-native-simple",
					"data-testid": "energy-comp-select",
				}}
				style={{ margin: 10 }}
			>
				{filterAndMapEnergyCompTypes(energyCompData)}
			</Select>
			<Input
				id="AH-amount"
				label="Amp Hours"
				type="number"
				inputProps={{
					"data-testid": "energy-comp-amount",
				}}
				variant="outlined"
				onChange={handleChangeAmount}
				value={state.amount}
			/>
		</div>
	);
};
