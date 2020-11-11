import { useState } from "react";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { filterAndMapEnergyTypes } from "./helpers/energy-helper";
import { energyCompData } from "./mock/energy";

export const EnergyComponent = ({ energyCompData = [] }) => {
	const [state, setState] = useState({
		type: "n/a",
	});
	const handleChangeType = event => {
		const type = event.target.name;
		setState({
			...state,
			[type]: event.target.value || "n/a",
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
					'data-testid': "energy-comp-select"
				}}
				style={{ margin: 10 }}
			>
				{filterAndMapEnergyTypes(energyCompData)}
			</Select>
			<TextField
				id="AH-number"
				data-testid="energy-comp-number"
				label="Amp Hours"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="outlined"
			/>
		</div>
	);
};
