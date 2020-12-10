import { useState } from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
	validateEnergyComp,
	filterAndMapEnergyCompTypes,
} from "./../../helpers/energy-helper";

export const getDropdown = (
	dropdownData = [],
	style = {},
	inputProps = {}
) => props => {
	const [typeError, setTypeError] = useState({
		valid: true,
		message: "",
	});
	const handleChangeType = event => {
		const validator = validateEnergyComp(event.target.value);
		setTypeError({
			...validator,
		});
	};
	const hasTypeError = () => {
		const { valid } = typeError;
		return !valid;
	};
	return (
		<FormControl error={hasTypeError()} style={style}>
			<InputLabel htmlFor="type-native-error">Type</InputLabel>
			<NativeSelect
				value={props.input.value}
				onChange={event => {
					handleChangeType(event);
					props.input.onChange(event);
				}}
				inputProps={{
					name: "type",
					id: "type-native-simple",
					"data-testid": "energy-comp-select",
					...inputProps,
				}}
				required
			>
				{filterAndMapEnergyCompTypes(dropdownData)}
			</NativeSelect>
			<FormHelperText>{typeError.message}</FormHelperText>
		</FormControl>
	);
};
