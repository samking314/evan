import { useState } from "react";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { validateEnergyComp } from "./../../helpers/energy-helper";

export const NumberInput = ({ style }) => {
	const [number, setNumber] = useState(0);
	const [numberError, setNumberError] = useState({
		valid: false,
		message: "",
	});
	const handleChangeNumber = event => {
		const validator = validateEnergyComp(event.target.value);
		setNumberError({
			...validator,
		});
		setNumber(event.target.value);
	};
	const hasNumberError = () => {
		const { valid } = numberError;
		return !valid;
	};
	return (
		<FormControl error={hasNumberError()} style={style}>
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
				onChange={handleChangeNumber}
				value={number}
				required
			/>
			<FormHelperText>{numberError.message}</FormHelperText>
		</FormControl>
	);
};
