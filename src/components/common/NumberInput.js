import { useState } from "react";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { validateEnergyComp } from "./../../helpers/energy-helper";

export const getNumberInput = ({ style = {}, inputProps = {} }) => props => {
	const [numberError, setNumberError] = useState({
		valid: true,
		message: "",
	});
	const handleChangeNumber = event => {
		const validator = validateEnergyComp(event.target.value);
		setNumberError({
			...validator,
		});
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
					...inputProps,
				}}
				variant="outlined"
				onChange={event => {
					handleChangeNumber(event);
					props.input.onChange(event);
				}}
				value={props.input.value || 1}
				required
			/>
			<FormHelperText>{numberError.message}</FormHelperText>
		</FormControl>
	);
};
