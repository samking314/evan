import { useState, Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form";
import { DropdownInput, NumberInput } from "./common";
import { energyCompData } from "./../mock/energy";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class EnergyForm extends Component {
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}
	handleSave(event) {
		event.preventDefault();
		console.log("ENERGY FORM",this.props.form)
	}
	render() {
		return (
			<div className="center-component">
				<form onSubmit={this.handleSave}>
					<div data-testid="energy-comp" className="row-component">
						<DropdownInput dropdownData={energyCompData} />
						<NumberInput style={{ marginLeft: 10 }} />
					</div>
					<Button type="submit">Calculate</Button>
				</form>
			</div>
		);
	}
}

export default compose(
	withRouter,
	connect(
		({ form }, { }) => {
			let initialValues = null;
			initialValues = {};
			return {
				initialValues,
				energyForm: form
			}
		},
		dispatch => ({
			dispatch: dispatch
		})
	),
	reduxForm({
		form: "energyForm",
		destroyOnUnmount: true,
		enableReinitialize: true
	})
)(EnergyForm);
