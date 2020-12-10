import { Field } from "redux-form";
import { getNumberInput } from "./NumberInput.js";

export const NumberInputField = props => {
	const component = getNumberInput({ style: props.style });
	return <Field name="amount" component={component} type="number" />;
};
