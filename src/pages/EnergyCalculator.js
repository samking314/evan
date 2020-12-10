import { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EnergyForm from "./../components/EnergyForm";

export default class EnergyCalculator extends Component {
	submit = values => {
		// handle submit
		console.log("WEVE SUBMITTED NOW", values);
		// do some calculation logic here
	};
	render() {
		return (
			<div>
				<EnergyForm onSubmit={this.submit} />
			</div>
		);
	}
}
