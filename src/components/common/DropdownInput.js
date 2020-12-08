import { useState } from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
	validateEnergyComp,
	filterAndMapEnergyCompTypes,
} from "./../../helpers/energy-helper";

export const DropdownInput = ({ dropdownData = [], style }) => {
	const [displayType, setDisplayType] = useState("");
	const [typeError, setTypeError] = useState({
		valid: false,
		message: "",
	});
	const handleChangeType = event => {
		const validator = validateEnergyComp(event.target.value);
		setTypeError({
			...validator,
		});
		setDisplayType(event.target.value);
	};
	const hasTypeError = () => {
		const { valid } = typeError;
		return !valid;
	};
	return (
		<FormControl error={hasTypeError()} style={style}>
			<InputLabel htmlFor="type-native-error">Type</InputLabel>
			<NativeSelect
				value={displayType}
				onChange={handleChangeType}
				inputProps={{
					name: "type",
					id: "type-native-simple",
					"data-testid": "energy-comp-select",
				}}
				required
			>
				{filterAndMapEnergyCompTypes(dropdownData)}
			</NativeSelect>
			<FormHelperText>{typeError.message}</FormHelperText>
		</FormControl>
	);
};
