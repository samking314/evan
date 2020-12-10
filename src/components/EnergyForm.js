import { useState, Component } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { DropdownField, NumberInputField } from "./common";
import { energyCompData } from "./../mock/energy";
import Button from "@material-ui/core/Button";

let EnergyForm = props => {
	const { handleSubmit } = props;
	return (
		<div className="center-component">
			<form onSubmit={handleSubmit}>
				<div data-testid="energy-comp" className="row-component">
					<DropdownField dropdownData={energyCompData} />
					<NumberInputField style={{ marginLeft: 10 }} />
				</div>
				<Button type="submit">Calculate</Button>
			</form>
		</div>
	);
};

EnergyForm = reduxForm({
	form: "energyForm",
})(EnergyForm);

export default EnergyForm;
