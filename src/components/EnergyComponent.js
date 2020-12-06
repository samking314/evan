import { useState } from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import {
	filterAndMapEnergyCompTypes,
	validateEnergyComp,
	updateValidators,
	validateValue,
} from "./../helpers/energy-helper";
import { energyCompData } from "./../mock/energy";

export const EnergyComponent = ({ energyCompData = [] }) => {
	const [state, setState] = useState({
		type: "",
		amount: 0,
	});
	const [typeError, setTypeError] = useState({
		valid: false,
		message: "",
	});
	const [amountError, setAmountError] = useState({
		valid: false,
		message: "",
	});
	const handleChangeType = event => {
		const validator = validateEnergyComp(event.target.value);
		setTypeError({
			...validator,
		});
		setState({
			...state,
			type: event.target.value,
		});
	};
	const handleChangeAmount = event => {
		const validator = validateEnergyComp(event.target.value);
		setAmountError({
			...validator,
		});
		setState({
			...state,
			amount: event.target.value,
		});
	};
	const hasTypeError = () => {
		const { valid } = typeError;
		return !valid;
	};
	const hasAmountError = () => {
		const { valid } = amountError;
		return !valid;
	};
	return (
		<div data-testid="energy-comp">
			<FormControl error={hasTypeError()}>
				<InputLabel htmlFor="type-native-error">Type</InputLabel>
				<NativeSelect
					value={state.type}
					onChange={handleChangeType}
					inputProps={{
						name: "type",
						id: "type-native-simple",
						"data-testid": "energy-comp-select",
					}}
					required
				>
					{filterAndMapEnergyCompTypes(energyCompData)}
				</NativeSelect>
				<FormHelperText>{typeError.message}</FormHelperText>
			</FormControl>
			<FormControl error={hasAmountError()} style={{ marginLeft: 10 }}>
				<InputLabel htmlFor="amount-native-error">Amount</InputLabel>
				<Input
					id="AH-amount"
					label="Amp Hours"
					type="number"
					inputProps={{
						"data-testid": "energy-comp-amount",
						min: 0,
					}}
					variant="outlined"
					onChange={handleChangeAmount}
					value={state.amount}
					required
				/>
				<FormHelperText>{amountError.message}</FormHelperText>
			</FormControl>
		</div>
	);
};
