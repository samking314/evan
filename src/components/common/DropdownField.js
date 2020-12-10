import { Field } from "redux-form";
import { getDropdown } from "./DropdownInput.js";

export const DropdownField = props => {
	const component = getDropdown(props.dropdownData);
	return <Field name="type" component={component} />;
};
